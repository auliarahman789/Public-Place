import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartExploring = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    navigate("/menu");
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileKeywords =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileKeywords.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/image 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#60a5fa", // Fallback blue color
      }}
    >
      {/* Main content container - responsive sizing */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 relative z-10">
        {/* Main text content */}
        <div className="text-center mb-8 md:mb-12">
          <div className="mb-6 md:mb-8">
            <img
              src="/text depan.png"
              alt="Let This Book Be Your Public Space"
              className="w-full mx-auto max-w-sm md:max-w-xs lg:max-w-sm"
            />
          </div>

          {/* Call to action button */}
          <button
            onClick={handleStartExploring}
            className="text-black font-semibold text-lg md:text-xl underline hover:no-underline transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start Exploring
          </button>
        </div>

        <div
          className={`${isMobile ? "hidden" : "text-center"} font-bookmania`}
        >
          <p className="text-[14px] mt-[62px]">
            “For a better experience, access this website from your phone.”
          </p>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default HomePage;
