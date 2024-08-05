import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url(/path/to/india-gate.jpg)" }}
      >
        <div className="flex justify-center items-center h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-5xl text-white font-bold">DELHI</h1>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">About Delhi</h2>
          <p className="text-gray-700 mb-4">Brief description about Delhi...</p>
          <Link to="/about" className="text-blue-500 hover:underline">
            Learn more
          </Link>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Interactive Map</h2>
          <p className="text-gray-700 mb-4">
            Explore Delhi through our interactive map...
          </p>
          <Link to="/map" className="text-blue-500 hover:underline">
            Explore the map
          </Link>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Travel Itineraries</h2>
          <p className="text-gray-700 mb-4">
            Create and manage your travel itineraries...
          </p>
          <Link to="/itinerary" className="text-blue-500 hover:underline">
            Create an itinerary
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
