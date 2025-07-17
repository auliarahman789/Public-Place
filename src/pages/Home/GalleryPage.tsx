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
  onBack,
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
            <p className="text-[16px] text-gray-700 mb-3">Filter by</p>
            <div className="flex gap-2 mb-4">
              {/* Character Filter */}
              <div className="relative">
                <select
                  value={selectedCharacterFilter}
                  onChange={(e) => handleCharacterFilter(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:border-gray-500"
                >
                  <option value="All Character">All Character</option>
                  {uniqueCharacters.map((character) => (
                    <option key={character} value={character}>
                      {character}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocationFilter}
                  onChange={(e) => handleLocationFilter(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:border-gray-500"
                >
                  <option value="All Place">All Place</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
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
