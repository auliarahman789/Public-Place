import React, { ReactNode } from "react";
import Header from "../pages/Home/Header";
import Footer from "../pages/Home/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  onBack?: () => void;
  showHeader?: boolean;
  showFooter?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  headerTitle = "MENU",
  onBack,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div
      className="flex justify-center min-h-screen"
      style={{
        backgroundImage: "url('/bgdot.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#60a5fa", // Fallback blue color
      }}
    >
      {/* Mobile container - fixed width for all screen sizes */}
      <div className="w-full max-w-[375px] min-h-screen flex flex-col">
        {showHeader && (
          <Header
            onBack={onBack}
            title={headerTitle}
            showBackButton={!!onBack}
          />
        )}

        <main className="flex-1">
          <div className="">{children}</div>
        </main>

        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default DefaultLayout;
