import React, { useState } from "react";

interface PhotoPreviewPageProps {
  onBack: () => void;
  selectedCharacter: string;
  selectedLocation: string;
  capturedImage: string;
  onSave: (caption: string, mapLink: string) => void;
}

const PhotoPreviewPage: React.FC<PhotoPreviewPageProps> = ({
  capturedImage,
  onSave,
}) => {
  const [caption, setCaption] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Check if form is complete
  const isFormComplete =
    caption.trim() !== "" && mapLink.trim() !== "" && agreedToTerms;

  const handleSave = () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    if (!caption.trim() || !mapLink.trim()) {
      alert("Please fill in all fields");
      return;
    }
    onSave(caption, mapLink);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania">
      {/* Main content with bgdot.jpg background */}
      <div className="w-full max-w-lg mx-auto font-bookmania">
        <div className="px-[4%] py-[8%] bg-[#DAD5D2] min-h-screen flex flex-col ">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-[32px] font-bold text-black mb-2">
              Looking Good!
            </h1>
          </div>

          {/* Photo Preview */}
          <div className="mb-6">
            <div className="bg-white border-4 border-black">
              <img
                src={capturedImage}
                alt="Captured moment"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>

          {/* Caption Input */}
          <div className="mb-4">
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add a caption..."
              className={`w-full p-3 border-4 text-[16px] font-bookmania resize-none h-20 ${
                isFormComplete ? "border-green-500" : "border-black"
              }`}
              maxLength={200}
            />
          </div>

          {/* Location Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={mapLink}
                onChange={(e) => setMapLink(e.target.value)}
                placeholder="Paste your pin point from maps here"
                className={`w-full p-3 border-4 text-[16px] font-bookmania pl-10 ${
                  isFormComplete ? "border-green-500" : "border-black"
                }`}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
          <div className="mb-6">
            <label className="flex items-start space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 rounded"
              />
              <span>
                By checking this button, you are agree for our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Agreement
                </a>
              </span>
            </label>
          </div>

          {/* Save Button */}
          <div className="mb-4 flex justify-center mt-10">
            <img
              src={isFormComplete ? "/shareon.png" : "/shareoff.png"}
              alt="Share button"
              onClick={isFormComplete ? handleSave : undefined}
              className={`w-[150px] h-[60px] cursor-pointer transition-opacity ${
                isFormComplete
                  ? "cursor-pointer hover:opacity-80"
                  : "cursor-not-allowed opacity-60"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPreviewPage;
