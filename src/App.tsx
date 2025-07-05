import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "../src/pages/Home/HomePage";
import MenuPage from "../src/pages/Home/MenuPage";
import AboutPage from "../src/pages/Home/AboutPage";
import DefaultLayout from "../src/layout/DefaultLayout";

const AppContent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateFromMenu = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout showHeader={false} showFooter={false}>
            <HomePage />
          </DefaultLayout>
        }
      />
      <Route
        path="/menu"
        element={
          <DefaultLayout headerTitle="MENU" onBack={handleNavigateToHome}>
            <MenuPage
              onBack={handleNavigateToHome}
              onNavigate={handleNavigateFromMenu}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout headerTitle="ABOUT" onBack={handleNavigateToHome}>
            <AboutPage onBack={handleNavigateToHome} />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
