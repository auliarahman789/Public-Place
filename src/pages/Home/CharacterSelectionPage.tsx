import React from "react";

interface CharacterSelectionPageProps {
  onBack: () => void;
  onCharacterSelect: (character: string) => void;
}

const CharacterSelectionPage: React.FC<CharacterSelectionPageProps> = ({
  onCharacterSelect,
}) => {
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

  return (
    <div className="min-h-screen relative overflow-hidden font-bookmania bg-[#DAD5D2]">
      {/* Main content with bgdot.jpg background */}
      <div className="flex-1 min-h-[calc(100vh-56px)] bg-[#DAD5D2]  mb-20">
        <div className="w-full max-w-sm mx-auto px-6 py-8 font-bookmania">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[42px] font-bold text-black mb-2">
              Choose your character first:
            </h1>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-2 gap-4">
            {characters.map((character) => (
              <button
                key={character.id}
                onClick={() => onCharacterSelect(character.id)}
                className="bg-[#DAD5D2]  hover:border-green-600 transition-colors"
              >
                <div className="aspect-square mb-2   bg-gray-100 flex items-center justify-center">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-[156px] h-[208px] object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-black text-center">
                  {character.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
