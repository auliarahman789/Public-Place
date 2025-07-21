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
  const [page, setPage] = useState(1);
  const [limit] = useState(25);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  // Static data untuk dropdown options
  const charactersData = [
    {
      id: "content-creator",
      name: "A Content Creator",
      image: "/A Content Creator.png",
    },
    { id: "daddy", name: "A Daddy", image: "/A Daddy.png" },
    { id: "dj", name: "A DJ", image: "/A DJ.png" },
    {
      id: "sporty-person",
      name: "A Sporty Person",
      image: "/A Sporty Person.png",
    },
    { id: "artist", name: "An Artist", image: "/An Artist.png" },
    { id: "entity", name: "An Entity", image: "/An Entity.png" },
  ];

  const locationsData = [
    {
      id: "cultural-art-space",
      name: "Cultural / Art Space",
      image: "/Cultural or Art Space.png",
    },
    {
      id: "traditional-market",
      name: "Traditional Market",
      image: "/Traditional Market.png",
    },
    { id: "nature-beauty", name: "Nature Beauty", image: "/Nature Beauty.png" },
    {
      id: "public-library",
      name: "Public Library",
      image: "/Public Library.png",
    },
    { id: "public-park", name: "Public Park", image: "/Public Park.png" },
  ];

  const fetchData = async (currentPage: number, resetData: boolean = false) => {
    if (loading) return;

    setLoading(true);
    try {
      // Kirim filter ke backend
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: limit.toString(),
      });

      if (selectedCharacterFilter !== "All Character") {
        params.append("character", selectedCharacterFilter);
      }

      if (selectedLocationFilter !== "All Place") {
        params.append("place", selectedLocationFilter);
      }

      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/gallery?${params}`);
      const json = await res.json();

      if (resetData) {
        setGalleryData(json.data || []);
      } else {
        setGalleryData(prev => [...prev, ...(json.data || [])]);
      }

      setTotalPages(json.total_page || 1);

    } catch (err) {
      console.error("Failed to fetch gallery data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load dan reset saat filter berubah
  useEffect(() => {
    setPage(1);
    fetchData(1, true); // Reset data
  }, [selectedCharacterFilter, selectedLocationFilter]);

  // Load more data saat page bertambah (kecuali page 1 karena sudah dihandle di useEffect atas)
  useEffect(() => {
    if (page > 1) {
      fetchData(page, false); // Append data
    }
  }, [page]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (nearBottom && page < totalPages && !loading) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages, loading]);

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
            {charactersData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={selectedLocationFilter}
            onChange={(e) => setSelectedLocationFilter(e.target.value)}
            className="appearance-none bg-white border-2 border-[#0FA44B] rounded-md px-4 pl-6 text-[8px] h-[22px] w-[90px]"
          >
            <option>All Place</option>
            {locationsData.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {galleryData.map((item) => (
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

        {loading && (
          <div className="text-center py-4 text-gray-500">
            Loading...
          </div>
        )}

        {galleryData.length === 0 && !loading && (
          <div className="text-center py-8 text-gray-500">
            No images found with current filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;