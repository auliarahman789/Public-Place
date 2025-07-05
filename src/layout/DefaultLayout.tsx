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
    <div className="dark:bg-boxdark-2 dark:text-bodydark min-h-screen relative">
      {showHeader && (
        <Header onBack={onBack} title={headerTitle} showBackButton={!!onBack} />
      )}

      <main>
        <div className="">{children}</div>
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
