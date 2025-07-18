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
import BookPage from "../src/pages/Home/BookPage"; // Add this import
import DefaultLayout from "../src/layout/DefaultLayout";
import CaptureMomentPage from "./pages/Home/CaptureMomentPage";
import CharacterSelectionPage from "./pages/Home/CharacterSelectionPage";
import CameraPage from "./pages/Home/CameraPage";
import PhotoPreviewPage from "./pages/Home/PhotoPreviewPage";
import SuccessPage from "./pages/Home/SuccessPage";
import TermsAndConditions from "./components/TermsAndConditions";
import GalleryPage from "./pages/Home/GalleryPage";
import DetailGalleryPage from "./pages/Home/DetailGalleryPage";

// Gallery item interface
interface GalleryItem {
  id: number;
  image: string;
  character: string;
  location: string;
  caption: string;
  mapLink: string;
}

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [capturedImage, setCapturedImage] = useState<string>("");

  // Gallery data - replace this with API call later
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([
    {
      id: 1,
      image: "/image1.png",
      character: "A Daddy",
      location: "Cultural / Art Space",
      caption: "An Artist in Nature Beauty",
      mapLink: "https://maps.google.com/museum-location",
    },
    {
      id: 2,
      image: "/image2.png",
      character: "A DJ",
      location: "Public Park",
      caption: "Mountain Adventure",
      mapLink: "https://maps.google.com/mountain-location",
    },
    {
      id: 3,
      image: "/image3.png",
      character: "A Sporty Person",
      location: "Beach",
      caption: "Public Library",
      mapLink: "https://maps.google.com/beach-location",
    },
    {
      id: 4,
      image: "/image4.png",
      character: "An Entity",
      location: "Traditional Market",
      caption: "Nature's Canvas",
      mapLink: "https://maps.google.com/park-location",
    },
    {
      id: 5,
      image: "/image5.png",
      character: "An Artist",
      location: "Cultural / Art Space",
      caption: "Urban Exploration",
      mapLink: "https://maps.google.com/city-location",
    },
    {
      id: 6,
      image: "/image6.png",
      character: "An Artist",
      location: "Cultural / Art Space",
      caption: "Deep in the Woods",
      mapLink: "https://maps.google.com/forest-location",
    },
  ]);

  // Function to fetch gallery data from API (implement later)
  // const fetchGalleryData = async () => {
  //   try {
  //     // Replace with actual API call
  //     // const response = await fetch('/api/gallery');
  //     // const data = await response.json();
  //     // setGalleryData(data);
  //   } catch (error) {
  //     console.error("Error fetching gallery data:", error);
  //   }
  // };

  // Function to add new photo to gallery (implement later)
  const addToGallery = (newPhoto: Omit<GalleryItem, "id">) => {
    const newId = Math.max(...galleryData.map((item) => item.id), 0) + 1;
    const newItem: GalleryItem = {
      id: newId,
      ...newPhoto,
    };
    setGalleryData((prev) => [...prev, newItem]);
  };

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
    // Add photo to gallery data
    addToGallery({
      image: capturedImage,
      character: selectedCharacter,
      location: selectedLocation,
      caption,
      mapLink,
    });

    // Here you would typically save the photo data to your backend
    console.log("Saving photo with:", {
      character: selectedCharacter,
      location: selectedLocation,
      image: capturedImage,
      caption,
      mapLink,
    });

    // Navigate to success page after successful save
    navigate("/success");
  };

  const handleBackToMenu = () => {
    navigate("/menu");
  };

  const handleNavigateToCharacterSelection = () => {
    // Reset state when going back to character selection
    setSelectedCharacter("");
    setSelectedLocation("");
    setCapturedImage("");
    navigate("/character-selection");
  };

  const handleViewGallery = () => {
    navigate("/gallery");
  };

  const handleGalleryItemClick = (id: number) => {
    navigate(`/detail-gallery/${id}`);
  };

  const handleBackToGallery = () => {
    navigate("/gallery");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout
            showHeader={false}
            showFooter={false}
            usePageBackground={true}
          >
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
        path="/book"
        element={
          <DefaultLayout headerTitle="SEE THE BOOK" onBack={handleBackToMenu}>
            <BookPage onBack={handleBackToMenu} />
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
              onNavigateToCharacterSelection={
                handleNavigateToCharacterSelection
              }
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/success"
        element={
          <DefaultLayout headerTitle="Success" onBack={() => navigate("/menu")}>
            <SuccessPage
              onBack={() => navigate("/menu")}
              onViewGallery={handleViewGallery}
              capturedImage={capturedImage}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <DefaultLayout headerTitle="Gallery" onBack={() => navigate("/menu")}>
            <GalleryPage
              onBack={() => navigate("/menu")}
              galleryData={galleryData}
              onItemClick={handleGalleryItemClick}
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/detail-gallery/:id"
        element={
          <DefaultLayout headerTitle="Detail" onBack={handleBackToGallery}>
            <DetailGalleryPage
              onBack={handleBackToGallery}
              galleryData={galleryData}
              onNavigateToCharacterSelection={
                handleNavigateToCharacterSelection
              }
            />
          </DefaultLayout>
        }
      />
      <Route
        path="/termsandcondition"
        element={
          <DefaultLayout headerTitle="Terms and Conditions">
            <TermsAndConditions onBack={() => navigate("/camera")} />
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
