import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <header
        className="h-[900px] relative z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%), url(/indiagate.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-9xl tracking-[.3em] text-white font-bold">
            DELHI
          </h1>
        </div>
      </header>

      <div className="container mx-auto p-4 bg-black mt-10">
        <section className="my-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About Delhi</h1>
          <p className="text-gray-300 mb-4">Brief description about Delhi...</p>
        </section>

        {/* Card Section */}
        <section className="my-8 flex flex-col items-center">
          <div className="w-[1200px] h-[500px] flex justify-between gap-x-10 ">
            <Link
              to="/about"
              className="relative w-1/3 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src="/delhi1.jpg"
                alt="Description 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h3 className="text-lg font-semibold text-white">
                  History of Delhi
                </h3>
              </div>
            </Link>

            <Link
              to="/about"
              className="relative w-1/3 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src="/delhi2.jpg"
                alt="Description 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h3 className="text-lg font-semibold text-white">Streetfood</h3>
              </div>
            </Link>

            <Link
              to="/about"
              className="relative w-1/3 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src="/delhi3.jpg"
                alt="Description 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h3 className="text-lg font-semibold text-white">
                  Life in the Streets
                </h3>
              </div>
            </Link>
          </div>
        </section>

        <section className="my-8 text-center mt-36">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Interactive Map
          </h2>
          <p className="text-gray-300 mb-4">
            Explore Delhi through our interactive map...
          </p>
          <Link to="/map" className="text-blue-500 hover:underline">
            Explore the map
          </Link>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Travel Itineraries
          </h2>
          <p className="text-gray-300 mb-4">
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
