import React, { useState, useRef } from "react";

interface CameraPageProps {
  onBack: () => void;
  selectedCharacter: string;
  selectedLocation: string;
  onPhotoCapture: (imageData: string) => void;
}

const CameraPage: React.FC<CameraPageProps> = ({
  selectedCharacter,
  selectedLocation,
  onPhotoCapture,
}) => {
  const [isVideoActive, setIsVideoActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const characterLabels: { [key: string]: string } = {
    "content-creator": "A Content Creator",
    daddy: "A Daddy",
    dj: "A DJ",
    "sporty-person": "A Sporty Person",
    artist: "An Artist",
    entity: "An Entity",
  };

  const characterLabel =
    characterLabels[selectedCharacter] || "Unknown Character";

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use back camera on mobile
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsVideoActive(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      if (context) {
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg");

        // Stop the video stream
        const stream = video.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        setIsVideoActive(false);

        // Navigate to preview page
        onPhotoCapture(imageData);
      }
    }
  };

  const selectFromGallery = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageData = e.target?.result as string;
          onPhotoCapture(imageData);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania">
      {/* Main content with bgdot.jpg background */}
      <div
        className="flex-1 min-h-[calc(100vh-56px)]"
        style={{
          backgroundImage: "url('/bgdot.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-sm mx-auto px-6 py-8 font-bookmania">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-black mb-2">
              {characterLabel}
            </h1>
            <p className="text-[24px] text-black">in a {selectedLocation}</p>
          </div>

          {/* Camera/Photo Section */}
          <div className="mb-8">
            <div className="relative">
              {isVideoActive ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-300"
                  />
                  <button
                    onClick={capturePhoto}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-600 rounded-full p-4 hover:bg-green-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                  </button>
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Camera preview will appear here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={selectFromGallery}
              className="w-full bg-white border-3 border-green-600 font-semibold py-4 px-6 text-[24px] hover:bg-green-50 transition-colors"
            >
              <span
                className="text-[#F9A574]"
                style={{
                  textShadow:
                    "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
                }}
              >
                CHOOSE FROM GALLERY
              </span>
            </button>

            <button
              onClick={startCamera}
              className="w-full bg-white border-3 border-green-600 font-semibold py-4 px-6 text-[24px] hover:bg-green-50 transition-colors"
            >
              <span
                className="text-[#F9A574]"
                style={{
                  textShadow:
                    "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
                }}
              >
                OPEN CAMERA
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hidden canvas for photo capture */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CameraPage;
