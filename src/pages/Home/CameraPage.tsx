import React from "react";

interface CameraPageProps {
  onBack: () => void;
  selectedCharacter: string;
  selectedLocation: string;
  onPhotoCapture: (imageData: string) => void;
}

const CameraPage: React.FC<CameraPageProps> = ({ onPhotoCapture }) => {
  const openCamera = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment"; // This hints to use camera on mobile
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

  const openGallery = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    // Remove capture attribute to allow gallery selection
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
        className="flex flex-col min-h-[calc(100vh-56px)] pt-20 pb-32 justify-between"
        style={{
          backgroundImage: "url('/bgdot.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-sm mx-auto px-6 font-bookmania">
          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={openGallery}
              className="w-full bg-white border-3 border-green-600 font-semibold py-6 px-6 text-[20px] hover:bg-green-50 transition-colors shadow-lg"
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
              onClick={openCamera}
              className="w-full bg-white border-3 border-green-600 font-semibold py-6 px-6 text-[20px] hover:bg-green-50 transition-colors shadow-lg"
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

        {/* Footer */}
        <div className="flex text-center justify-center flex-col text-xs text-gray-500">
          <p
            className="text-[16px] text-black"
            style={{
              textShadow:
                "0.3px 0.3px 0 #999, -0.3px -0.3px 0 #999, 0.3px -0.3px 0 #999, -0.3px 0.3px 0 #999",
            }}
          >
            This project is supported by
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="font-semibold">
              <img
                src="/loco.png"
                alt="Let This Book Be Your Public Space"
                className="w-[82px] h-[22px] mx-auto"
              />
            </span>
            <span className="font-bold">
              <img
                src="/basecamp.png"
                alt="Let This Book Be Your Public Space"
                className="w-[118px] h-[22px] mx-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
