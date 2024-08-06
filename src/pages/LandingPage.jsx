import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <header
        className="h-[900px] relative z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%), url(/indiagate2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-full flex-col">
          <h1 className="text-9xl tracking-wider font-heroFont text-white mt-[500px] ml-[170px] font-bold">
            DELHI
          </h1>
          <div className="flex justify-center items-center rounded-lg border-blue-600 border-2 h-22 w-60 ml-[170px] mt-10">
            <button className="relative h-16 w-full text-2xl font-heroFont rounded-md overflow-hidden group">
              <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 text-white  flex justify-center items-center h-full w-full">
                Explore
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 bg-black mt-10">
        <section className="my-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Delhi</h1>
          <p className="text-gray-300 mb-10">
            Delhi, the capital city of India, is a vibrant metropolis that
            beautifully blends history and modernity. Known for its rich
            heritage, Delhi is home to iconic landmarks such as the Red Fort,
            India Gate,
            <br /> and the Qutub Minar, each telling a story of its glorious
            past. The city’s diverse culture is reflected in its culinary
            delights, bustling markets, and colorful festivals. As one of the
            largest cities in India, Delhi serves as a political, economic, and
            cultural hub. Its neighborhoods range from the historic lanes of Old
            Delhi, famous for their street food and traditional bazaars, to the
            modern architecture of New Delhi, which showcases the city’s growth
            and development. Delhi's extensive public transport system,
            including the Delhi Metro, makes it easy to explore its many
            attractions. Whether you're visiting historical sites, enjoying the
            local cuisine, or experiencing the vibrant arts scene, Delhi offers
            something for everyone, making it a must-visit destination in India.
          </p>
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
