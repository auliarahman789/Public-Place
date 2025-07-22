import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onBack?: () => void;
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, showBackButton = true }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/menu");
  };

  return (
    <div
      className=" relative w-full"
      style={{
        backgroundImage: "url('/image 3.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        minHeight: "56px", // Ensure minimum height
      }}
    >
      {showBackButton && (
        <div className="absolute top-4 left-4">
          <button onClick={onBack}>
            <img
              src="/text depan.png"
              alt="Let This Book Be Your Public Space"
              className="w-6 h-6 mx-auto"
            />
          </button>
        </div>
      )}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleTitleClick}
          className="font-semibold text-[10px] font-bookmania text-[#F9A574] hover:text-[#E8945F] transition-colors duration-200 cursor-pointer"
          style={{
            textShadow:
              "0.5px 0.5px 0 #666, -0.5px -0.5px 0 #666, 0.5px -0.5px 0 #666, -0.5px 0.5px 0 #666",
          }}
        >
          MENU
        </button>
      </div>
    </div>
  );
};

export default Header;
