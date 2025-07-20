import React, { useState, useEffect, useRef } from "react";

interface PhotoPreviewPageProps {
  onBack: () => void;
  selectedCharacter: string;
  selectedLocation: string;
  capturedImage: string;
  onSave: (caption: string, mapLink: string) => void;
  onNavigateToCharacterSelection: () => void;
}

const PhotoPreviewPage: React.FC<PhotoPreviewPageProps> = ({
  capturedImage,
  selectedCharacter,
  selectedLocation,
  onSave,
  onNavigateToCharacterSelection,
}) => {
  const [caption, setCaption] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Use ref to track if we've already shown the alert
  const hasShownAlert = useRef(false);

  // Check if required data is present on component mount
  useEffect(() => {
    if (!selectedCharacter || !selectedLocation || !capturedImage) {
      if (!hasShownAlert.current) {
        hasShownAlert.current = true;
        alert(
          "Missing Character, Location, or Image. Please start from character selection."
        );
        onNavigateToCharacterSelection();
      }
    }
  }, [
    selectedCharacter,
    selectedLocation,
    capturedImage,
    onNavigateToCharacterSelection,
  ]);

  // Check if form is complete
  const isFormComplete =
    caption.trim() !== "" && mapLink.trim() !== "" && agreedToTerms;

  const handleSave = async () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    if (!caption.trim() || !mapLink.trim()) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Upload the image to /api/images
      const blob = await fetch(capturedImage).then((res) => res.blob());
      const formData = new FormData();
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
      formData.append("file", file); // harus 'file' sesuai backend

      const uploadRes = await fetch(`${import.meta.env.VITE_API_BASE}/api/images`, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload image");
      }

      // safely parse JSON only if there's a body
      const uploadJson = await uploadRes.json();
      const uploadedFilename = uploadJson.filename;

      // Save to /api/gallery
      const saveRes = await fetch(`${import.meta.env.VITE_API_BASE}/api/gallery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          character: selectedCharacter,
          place: selectedLocation,
          image_url: uploadedFilename,
          caption,
          maps_url: mapLink,
        }),
      });

      if (!saveRes.ok) {
        throw new Error("Failed to save gallery");
      }

      alert("Upload success!");
      onSave(caption, mapLink);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload or save photo. Please try again.");
    }
  };



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noreferrer");
  };

  // Don't render if required data is missing
  if (!selectedCharacter || !selectedLocation || !capturedImage) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania">
      {/* Main content with bgdot.jpg background */}
      <div className="w-full max-w-lg mx-auto font-bookmania">
        <div className="px-6 py-8 bg-[#DAD5D2] min-h-screen flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-extrabold text-black mb-2">
              Looking Good!
            </h1>
          </div>

          {/* Photo Preview - matching the image layout */}
          <div className="mb-8">
            <div className="bg-white border-4 border-black p-2">
              <img
                src={capturedImage}
                alt="Captured moment"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Caption Input */}
          <div className="mb-6">
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add a caption..."
              className={`w-full p-3 border-4 text-[16px] font-bookmania resize-none h-20 ${isFormComplete ? "border-green-500" : "border-black"
                }`}
              maxLength={200}
            />
          </div>

          {/* Location Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={mapLink}
                onChange={(e) => setMapLink(e.target.value)}
                placeholder="Paste your pin point from maps here"
                className={`w-full p-3 border-4 text-[16px] font-bookmania pl-10 ${isFormComplete ? "border-green-500" : "border-black"
                  }`}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <label className="flex items-start space-x-3 text-[14px] text-gray-600">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-2 border-black"
              />
              <span>
                By checking this button, you are agree for our{" "}
                <button
                  onClick={() => openInNewTab("/terms-and-conditions")}
                  className="text-blue-600 italic underline hover:text-blue-800 focus:outline-none"
                >
                  terms and agreement
                </button>
              </span>
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mb-8">
            <img
              src={isFormComplete ? "/shareon.png" : "/shareoff.png"}
              alt="Share button"
              onClick={isFormComplete ? handleSave : undefined}
              className={`w-[150px] h-[60px] cursor-pointer transition-opacity ${isFormComplete
                ? "cursor-pointer hover:opacity-80"
                : "cursor-not-allowed opacity-60"
                }`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPreviewPage;
