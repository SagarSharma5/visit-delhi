import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        isScrolled ? "bg-black bg-opacity-100" : "bg-black bg-opacity-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-bold">
            VisitDelhi
          </Link>
        </div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white mx-2">
            About
          </Link>
          <Link to="/map" className="text-gray-300 hover:text-white mx-2">
            Map
          </Link>
          <Link to="/itinerary" className="text-gray-300 hover:text-white mx-2">
            Itinerary
          </Link>
          <Link to="/profile" className="text-gray-300 hover:text-white mx-2">
            Profile
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white mx-2">
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
