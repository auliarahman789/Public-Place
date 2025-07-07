import React, { useState } from "react";
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
import CaptureMomentPage from "./pages/Home/CaptureMomentPage";
import CharacterSelectionPage from "./pages/Home/CharacterSelectionPage";
import CameraPage from "./pages/Home/CameraPage";
import PhotoPreviewPage from "./pages/Home/PhotoPreviewPage";

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [capturedImage, setCapturedImage] = useState<string>("");

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateFromMenu = (page: string) => {
    if (page === "capture-moment") {
      navigate("/character-selection");
    } else {
      navigate(`/${page}`);
    }
  };

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
    navigate("/capture-moment");
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    navigate("/camera");
  };

  const handlePhotoCapture = (imageData: string) => {
    setCapturedImage(imageData);
    navigate("/photo-preview");
  };

  const handlePhotoSave = (caption: string, mapLink: string) => {
    // Here you would typically save the photo data to your backend
    console.log("Saving photo with:", {
      character: selectedCharacter,
      location: selectedLocation,
      image: capturedImage,
      caption,
      mapLink,
    });
    alert("Photo saved successfully!");
    navigate("/menu");
  };

  const handleBackToMenu = () => {
    navigate("/menu");
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
          <DefaultLayout headerTitle="ABOUT" onBack={handleBackToMenu}>
            <AboutPage onBack={handleBackToMenu} />
          </DefaultLayout>
        }
      />
      <Route
        path="/character-selection"
        element={
          <DefaultLayout
            headerTitle="Choose Your Character"
            onBack={handleBackToMenu}
          >
            <CharacterSelectionPage
              onBack={handleBackToMenu}
              onCharacterSelect={handleCharacterSelect}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/capture-moment"
        element={
          <DefaultLayout
            headerTitle="Capture A Moment"
            onBack={() => navigate("/character-selection")}
          >
            <CaptureMomentPage
              onBack={() => navigate("/character-selection")}
              selectedCharacter={selectedCharacter}
              onLocationSelect={handleLocationSelect}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/camera"
        element={
          <DefaultLayout
            headerTitle="Take Your Photo"
            onBack={() => navigate("/capture-moment")}
          >
            <CameraPage
              onBack={() => navigate("/capture-moment")}
              selectedCharacter={selectedCharacter}
              selectedLocation={selectedLocation}
              onPhotoCapture={handlePhotoCapture}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/photo-preview"
        element={
          <DefaultLayout
            headerTitle="Photo Preview"
            onBack={() => navigate("/camera")}
          >
            <PhotoPreviewPage
              onBack={() => navigate("/camera")}
              selectedCharacter={selectedCharacter}
              selectedLocation={selectedLocation}
              capturedImage={capturedImage}
              onSave={handlePhotoSave}
            />
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
