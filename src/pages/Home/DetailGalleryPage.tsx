import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface GalleryItem {
  id: number;
  image_url: string;
  character: string;
  place: string;
  caption: string;
  maps_url: string;
}

interface DetailGalleryPageProps {
  onBack: () => void;
  onNavigateToCharacterSelection: () => void;
}

const DetailGalleryPage: React.FC<DetailGalleryPageProps> = ({
  onBack,
  onNavigateToCharacterSelection,
}) => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchGalleryItem = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/gallery/${id}`);
        const json = await res.json();
        setItem(json.data);
        console.log(json.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch gallery item.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchGalleryItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#DAD5D2] font-bookmania flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!item || error) {
    return (
      <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
        <div className="w-full max-w-lg mx-auto px-6 py-8 text-center">
          <p className="text-gray-500">{error || "Image not found"}</p>
          <button onClick={onBack} className="mt-4 text-blue-600 underline">
            Back
          </button>
        </div>
      </div>
    );
  }

  const characters = [
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
  const characterName = characters.find(i => i.id == item.character)

  return (
    <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
      <div className="w-full max-w-lg mx-auto px-6 py-10">
        {/* Main Image */}
        <div className="mb-4">
          <div className="bg-white border-4 border-black">
            <img
              src={`${import.meta.env.VITE_API_BASE}/images/${item.image_url}`}
              alt={item.caption}
              className="w-full h-[383px] object-cover"
            />
          </div>
        </div>

        {/* Character in Place */}
        <div className="text-center mb-4">
          <h2 className="text-[20px] font-bold text-black mb-2">
            <span className="underline">{characterName?.name}</span> in{" "}
            <span className="underline">{item.place}</span>
          </h2>
        </div>

        {/* Caption and Location */}
        <div className="mb-6 px-5">
          <div className="bg-white border-2 border-green-500 p-3 mb-3">
            <p className="text-[14px] text-gray-700">{item.caption}</p>
          </div>
          <div
            className="bg-white border-2 border-green-500 p-3 mb-3 cursor-pointer hover:bg-gray-50"
            onClick={() => window.open(item.maps_url, "_blank")}
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
              <span className="break-all">{item.maps_url}</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8 px-[20%]">
          <button
            onClick={onBack}
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/BackButton.png" alt="Back" />
          </button>

          <button
            onClick={onNavigateToCharacterSelection}
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/UploadMomentButton.png" alt="Upload your Moment" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailGalleryPage;
