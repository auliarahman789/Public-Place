import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0.5 h-[53px] flex w-full justify-center items-center text-center bg-[#DAD5D2]">
      <p
        className="text-[10px]"
        style={{
          textShadow:
            "0.2px 0.2px 0 #888, -0.2px -0.2px 0 #888, 0.2px -0.2px 0 #888, -0.2px 0.2px 0 #888",
        }}
      >
        Let This Book Be Your Public Space - 2025
      </p>
    </footer>
  );
};

export default Footer;
