import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <header
        className="h-[910px] relative z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%), url(/indiagate2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-full flex-col">
          <h1 className="text-9xl tracking-wider font-heroFont text-white mt-[500px] ml-[170px] font-bold">
            DELHI
          </h1>

          <Link
            to="/about"
            className="relative h-16 w-36 text-2xl font-heroFont rounded-md flex items-center justify-center group ml-44"
          >
            <span className="relative text-white flex items-center group-hover:scale-105 transition-transform duration-300 font-extralight tracking-widest">
              Explore
              <FaLongArrowAltRight className="ml-2 mt-2 text-white text-2xl" />
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-4 bg-black mt-64">
        <section className="my-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Delhi</h1>
          <p className="text-gray-300 mb-10">
            Delhi, the capital city of India, is a vibrant metropolis that
            beautifully blends history and modernity. Known for its rich
            heritage, Delhi is home to iconic landmarks such as the Red Fort,
            India Gate,
            <br /> and the Qutub Minar, each telling a story of its glorious
            past. The city's diverse culture is reflected in its culinary
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
          <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
            <Link
              to="/about"
              className="relative w-full lg:w-1/3 h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
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
              className="relative w-full lg:w-1/3 h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
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
              className="relative w-full lg:w-1/3 h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
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

        <section className="my-8 mt-64 flex flex-col lg:flex-row items-center justify-center">
          <h2 className="text-6xl font-bold mb-4 text-white text-center lg:text-left lg:mr-10">
            Interactive <br />
            Map
          </h2>
          <Link
            to="/map"
            className="relative w-full lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src="/delhimap.png"
              alt="Explore Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <h3 className="text-2xl font-semibold text-white">
                Explore the map
              </h3>
            </div>
          </Link>
        </section>

        <section className="relative w-full h-[90vh] bg-black mt-64 flex items-end justify-end pb-2">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            src="https://videos.pexels.com/video-files/5966355/5966355-uhd_2732_1440_25fps.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="relative z-10 w-full max-w-[400px] h-36">
            <Link
              to="/itinerary"
              className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-transparent border border-white rounded-sm hover:bg-gray-100 hover:text-black hover:shadow-lg transition duration-300"
            >
              Create an Itinerary
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
