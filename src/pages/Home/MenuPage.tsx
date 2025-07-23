import React from "react";

interface MenuPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 min-h-[calc(100vh-56px)]">
      <div className="w-full max-w-sm mx-auto px-6 py-16 font-bookmania justify-center flex flex-col items-center">
        <div className="space-y-[20px] flex flex-col items-center w-full">
          <button
            onClick={() => onNavigate("about")}
            className="w-full max-w-[280px] block"
          >
            <img
              src="/ButtonAbout.svg"
              alt="ABOUT"
              className="w-full h-auto object-contain"
            />
          </button>

          <button
            onClick={() => onNavigate("gallery")}
            className="w-full max-w-[280px] block"
          >
            <img
              src="/ButtonGallery.svg"
              alt="GALLERY"
              className="w-full h-auto object-contain"
            />
          </button>

          <button
            onClick={() => onNavigate("book")}
            className="w-full max-w-[280px] block"
          >
            <img
              src="/ButtonSeebook.svg"
              alt="SEE THE BOOK"
              className="w-full h-auto object-contain"
            />
          </button>
        </div>

        {/* Capture Moment section */}
        <div className="mt-[20px] text-center ">
          <div className="relative inline-block w-full">
            <button
              onClick={() => onNavigate("capture-moment")}
              className="block  mx-auto "
            >
              <img
                src="/Capture Moment.png"
                alt="Let This Book Be Your Public Space"
                className="w-[270px] h-[209px]  mx-auto"
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-[23px] text-center text-xs text-gray-500">
          <p
            className="text-[16px] text-black"
            style={{
              textShadow:
                "0.3px 0.3px 0 #999, -0.3px -0.3px 0 #999, 0.3px -0.3px 0 #999, -0.3px 0.3px 0 #999",
            }}
          >
            This project is supported by
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
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

export default MenuPage;
