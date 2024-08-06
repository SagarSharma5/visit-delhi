import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="bg-black min-h-screen w-full">
      {/* Hero Section */}
      <header className="relative w-full h-[100vh] bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          src="https://videos.pexels.com/video-files/5966355/5966355-uhd_2732_1440_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="flex justify-center items-center h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-5xl text-white font-bold">About Delhi</h1>
        </div>
      </header>

      {/* Places to Visit Section */}
      <div className="container mx-auto p-4">
        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Places to Visit
          </h2>
          <Slider {...settings}>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative w-full h-[500px] transform transition-transform duration-300"
              >
                <img
                  src={`/delhi${(index % 3) + 1}.jpg`}
                  alt={`Place ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <h3 className="text-lg font-semibold text-white">
                    Place {index + 1}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Parallax Section */}
        <section
          className="relative w-full h-[400px] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url(/delhi2.jpg)" }}
        ></section>

        {/* History Section */}
        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            History of Delhi
          </h2>
          <div className="flex flex-col lg:flex-row mb-10">
            <div className="lg:w-1/2 lg:pr-8">
              <p className="text-gray-300">Detailed history about Delhi...</p>
            </div>
            <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
              <img
                src="/indiagate.jpg"
                alt="History"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8 mt-4 lg:mt-0">
              <img
                src="/indiagate.jpg"
                alt="History"
                className="w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <p className="text-gray-300">
                More detailed history about Delhi...
              </p>
            </div>
          </div>
        </section>

        {/* Places to Eat Section */}
        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Places to Eat</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Link
                key={index}
                to="/map"
                className="relative w-full sm:w-1/2 md:w-1/4 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={`/delhi${index + 1}.jpg`}
                  alt={`Eat Place ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <h3 className="text-lg font-semibold text-white">
                    Eat Place {index + 1}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
