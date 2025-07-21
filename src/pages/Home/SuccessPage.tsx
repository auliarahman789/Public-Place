import React from "react";

interface SuccessPageProps {
  onBack: () => void;
  onViewGallery: () => void;
  capturedImage: string;
}

const SuccessPage: React.FC<SuccessPageProps> = ({
  onViewGallery,
  capturedImage,
}) => {
  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania">
      {/* Main content with background */}
      <div className="w-full max-w-lg mx-auto font-bookmania">
        <div className="px-6 py-8 bg-[#DAD5D2] min-h-screen flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-extrabold text-black mb-2">
              Success!
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

          {/* Success Message */}
          <div className="text-center mb-4">
            <p className="text-[16px] text-gray-700 mb-4">
              You have joined others for a quest to search for their public
              space.
            </p>
            <p className="text-[16px] text-gray-700 mb-4">
              You could close this web, and enjoy your current space.
            </p>
            <p className="text-[16px] text-gray-700 mb-6">or</p>
            <p className="text-[16px] text-gray-700 mb-2">
              See what others doing by clicking gallery
            </p>
          </div>

          {/* View Gallery Button */}
          <div className="flex justify-center mb-8">
            <img
              src="/viewGallery.svg"
              alt="View Gallery"
              onClick={onViewGallery}
              className="w-[150px] h-[60px] cursor-pointer transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
