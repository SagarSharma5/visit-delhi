import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-bold">
            Delhi Tourism
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
