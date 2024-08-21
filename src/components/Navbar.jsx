import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-500 ${
        isScrolled ? "bg-black bg-opacity-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-3xl font-bold no-underline">
            visitDelhi
          </Link>
        </div>
        <div className="flex gap-x-2">
          <Link
            to="/"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-home mr-2"></i> Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-info-circle mr-2"></i> About
          </Link>
          <Link
            to="/map"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Map
          </Link>
          <Link
            to="/itinerary"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-calendar-alt mr-2"></i> Itinerary
          </Link>
          <Link
            to="/profile"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-user mr-2"></i> Profile
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white mx-2 flex items-center no-underline"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
