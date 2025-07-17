import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface GalleryItem {
  id: number;
  image: string;
  character: string;
  location: string;
  caption: string;
  mapLink: string;
}

interface DetailGalleryPageProps {
  onBack: () => void;
  galleryData: GalleryItem[];
  onNavigateToCharacterSelection: () => void;
}

const DetailGalleryPage: React.FC<DetailGalleryPageProps> = ({
  onBack,
  galleryData,
  onNavigateToCharacterSelection,
}) => {
  const { id } = useParams<{ id: string }>();

  // Find the item by ID
  const item = galleryData.find((item) => item.id === parseInt(id || "0"));

  if (!item) {
    return (
      <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
        <div className="w-full max-w-lg mx-auto">
          <div className="px-6 py-8 text-center">
            <p className="text-gray-500">Image not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
      <div className="w-full max-w-lg mx-auto">
        <div className="px-6 py-8">
          {/* Main Image */}
          <div className="mb-6">
            <div className="bg-white border-4 border-black p-2">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Image Caption */}
          <div className="text-center mb-6">
            <h2 className="text-[18px] font-bold text-black underline mb-2">
              {item.caption}
            </h2>
          </div>

          {/* Character and Location Info */}
          <div className="mb-6">
            <div className="bg-white border-2 border-green-500 p-3 mb-3">
              <p className="text-[14px] text-gray-700">{item.character}</p>
            </div>
            <div
              className="bg-white border-2 border-green-500 p-3 mb-3 cursor-pointer hover:bg-gray-50"
              onClick={() => window.open(item.mapLink, "_blank")}
            >
              <div className="flex items-center text-[14px] text-gray-700">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>(-6.2501638, 106.7913501)</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>

            <button
              onClick={onNavigateToCharacterSelection}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Upload your Moment
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGalleryPage;
