import React from "react";

interface CaptureMomentPageProps {
  onBack: () => void;
  selectedCharacter: string;
  onLocationSelect: (location: string) => void;
}

const CaptureMomentPage: React.FC<CaptureMomentPageProps> = ({
  selectedCharacter,
  onLocationSelect,
}) => {
  const characterLabels: { [key: string]: string } = {
    "content-creator": "A Content Creator",
    daddy: "A Daddy",
    dj: "A DJ",
    "sporty-person": "A Sporty Person",
    artist: "An Artist",
    entity: "An Entity",
  };

  const locations = [
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

  const characterLabel =
    characterLabels[selectedCharacter] || "Unknown Character";

  const handleLocationClick = (locationName: string) => {
    onLocationSelect(locationName);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania bg-[#DAD5D2]">
      {/* Main content with bgdot.jpg background */}
      <div className="flex-1 min-h-[calc(100vh-56px)] bg-[#DAD5D2] mb-20">
        <div className="w-full max-w-sm mx-auto px-6 py-8 font-bookmania">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[42px] font-bold text-black mb-2 underline">
              {characterLabel}
            </h1>
            <p className="text-[42px] text-black">in a:</p>
          </div>

          {/* Location Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationClick(location.name)}
                className="bg-[#DAD5D2] hover:border-green-600 transition-colors"
              >
                <div className="aspect-square mb-2 bg-gray-100 flex items-center justify-center">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-[156px] h-[208px] object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-black text-center">
                  {location.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptureMomentPage;
