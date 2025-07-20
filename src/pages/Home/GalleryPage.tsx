import React, { useEffect, useState } from "react";

interface GalleryItem {
  id: number;
  image_url: string;
  character: string;
  place: string;
  caption: string;
  maps_url: string;
}

interface GalleryPageProps {
  onBack: () => void;
  onItemClick: (id: number) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onItemClick }) => {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [selectedCharacterFilter, setSelectedCharacterFilter] = useState("All Character");
  const [selectedLocationFilter, setSelectedLocationFilter] = useState("All Place");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/gallery`);
        const json = await res.json();
        setGalleryData(json.data || []);
      } catch (err) {
        console.error("Failed to fetch gallery data:", err);
      }
    };

    fetchData();
  }, []);

  const uniqueCharacters = Array.from(new Set(galleryData.map(item => item.character)));
  const uniquePlaces = Array.from(new Set(galleryData.map(item => item.place)));

  const filteredData = galleryData.filter((item) => {
    const characterMatch =
      selectedCharacterFilter === "All Character" || item.character === selectedCharacterFilter;
    const placeMatch =
      selectedLocationFilter === "All Place" || item.place === selectedLocationFilter;
    return characterMatch && placeMatch;
  });

  return (
    <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
      <div className="w-full max-w-lg mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h1 className="text-[28px] font-extrabold text-black">Gallery</h1>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <p className="text-[16px] text-gray-700">Filter by</p>

          <select
            value={selectedCharacterFilter}
            onChange={(e) => setSelectedCharacterFilter(e.target.value)}
            className="appearance-none bg-white border-2 border-[#0FA44B] rounded-md px-4 pl-6 text-[8px] h-[22px] w-[100px]"
          >
            <option>All Character</option>
            {uniqueCharacters.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={selectedLocationFilter}
            onChange={(e) => setSelectedLocationFilter(e.target.value)}
            className="appearance-none bg-white border-2 border-[#0FA44B] rounded-md px-4 pl-6 text-[8px] h-[22px] w-[90px]"
          >
            <option>All Place</option>
            {uniquePlaces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="aspect-square bg-white border-2 border-black cursor-pointer hover:opacity-80"
            >
              <img
                src={`${import.meta.env.VITE_API_BASE}/images/${item.image_url}`}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No images found with current filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
