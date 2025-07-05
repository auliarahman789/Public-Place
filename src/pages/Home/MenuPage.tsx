import React from "react";

interface MenuPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onBack, onNavigate }) => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Main content with bgdot.jpg background */}
        <div
          className="flex-1 min-h-[calc(100vh-56px)]"
          style={{
            backgroundImage: "url('/bgdot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full max-w-sm mx-auto px-6 py-8 font-bookmania">
            <div className="space-y-4">
              <button
                onClick={() => onNavigate("about")}
                className="w-full bg-white border-3 border-green-600 font-semibold py-4 px-6 text-[24px] hover:bg-green-50 transition-colors"
              >
                <span
                  className="text-[#F9A574]"
                  style={{
                    textShadow:
                      "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
                  }}
                >
                  ABOUT
                </span>
              </button>

              <button
                onClick={() => onNavigate("gallery")}
                className="w-full bg-white border-3 border-green-600 font-semibold py-4 px-6 text-[24px] hover:bg-green-50 transition-colors"
              >
                <span
                  className="text-[#F9A574]"
                  style={{
                    textShadow:
                      "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
                  }}
                >
                  GALLERY
                </span>
              </button>

              <button
                onClick={() => onNavigate("book")}
                className="w-full bg-white border-3 border-green-600 font-semibold py-4 px-6 text-[24px] hover:bg-green-50 transition-colors"
              >
                <span
                  className="text-[#F9A574]"
                  style={{
                    textShadow:
                      "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
                  }}
                >
                  SEE THE BOOK
                </span>
              </button>
            </div>

            {/* Capture Moment section */}
            <div className="mt-12 text-center max-w-sm">
              <div className="relative inline-block">
                <img
                  src="/moment1.png"
                  alt="Let This Book Be Your Public Space"
                  className="w-80 h-[209px] mx-auto"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 text-center text-xs text-gray-500">
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
      </div>
    </>
  );
};

export default MenuPage;
