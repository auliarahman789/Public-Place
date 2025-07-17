import React, { useState } from "react";

interface GalleryItem {
  id: number;
  image: string;
  character: string;
  location: string;
  caption: string;
  mapLink: string;
}

interface GalleryPageProps {
  onBack: () => void;
  galleryData: GalleryItem[];
  onItemClick: (id: number) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({
  galleryData,
  onItemClick,
}) => {
  const [selectedCharacterFilter, setSelectedCharacterFilter] =
    useState<string>("All Character");
  const [selectedLocationFilter, setSelectedLocationFilter] =
    useState<string>("All Place");

  // Get unique characters and locations for filters
  const uniqueCharacters = Array.from(
    new Set(galleryData.map((item) => item.character))
  );
  const uniqueLocations = Array.from(
    new Set(galleryData.map((item) => item.location))
  );

  // Filter gallery data based on selected filters
  const filteredData = galleryData.filter((item) => {
    const characterMatch =
      selectedCharacterFilter === "All Character" ||
      item.character === selectedCharacterFilter;
    const locationMatch =
      selectedLocationFilter === "All Place" ||
      item.location === selectedLocationFilter;
    return characterMatch && locationMatch;
  });

  const handleCharacterFilter = (character: string) => {
    setSelectedCharacterFilter(character);
  };

  const handleLocationFilter = (location: string) => {
    setSelectedLocationFilter(location);
  };

  return (
    <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
      <div className="w-full max-w-lg mx-auto">
        <div className="px-6 py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-[28px] font-extrabold text-black">Gallery</h1>
          </div>

          {/* Filter Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <p className="text-[16px] text-gray-700">Filter by</p>

              {/* Character Filter */}
              <div className="relative">
                <select
                  value={selectedCharacterFilter}
                  onChange={(e) => handleCharacterFilter(e.target.value)}
                  className="appearance-none bg-white border-2 border-[#0FA44B] rounded-md px-4  pl-6 text-[8px] h-[22px] focus:outline-none focus:border-teal-500 w-[100px]"
                >
                  <option value="All Character">All Character</option>
                  {uniqueCharacters.map((character) => (
                    <option key={character} value={character}>
                      {character}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 top-1 left-0 flex items-center px-2 pointer-events-none">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 3.5H9.75M3.5 6H8.5M5 8.5H7"
                      stroke="black"
                      stroke-opacity="0.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocationFilter}
                  onChange={(e) => handleLocationFilter(e.target.value)}
                  className="appearance-none bg-white border-2 border-[#0FA44B] rounded-md px-4  pl-6 text-[8px] h-[22px] focus:outline-none focus:border-teal-500 w-[90px]"
                >
                  <option value="All Place">All Places</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 top-1 left-0 flex items-center px-2 pointer-events-none">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 3.5H9.75M3.5 6H8.5M5 8.5H7"
                      stroke="black"
                      stroke-opacity="0.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-white border-2 border-black cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onItemClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No images found with current filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
