import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import MapPage from "./pages/MapPage";
import ItineraryPage from "./pages/ItineraryPage";
import ProfilePage from "./pages/ProfilePage";
import LoginSignupPage from "./pages/LoginSignupPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow min-h-[calc(100vh-8rem)]">
          {" "}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginSignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
