import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <header
        className={`fixed w-full h-[100vh] z-0 transition-colors duration-500 ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <video
          key="video-hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-75"
          }`}
          src="https://videos.pexels.com/video-files/18882958/18882958-uhd_2560_1440_24fps.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 ${
            isScrolled ? "opacity-100" : "opacity-50"
          } transition-opacity duration-500`}
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>
      </header>

      {/* Main Content */}
      <div className="relative pt-[100vh]">
        {/* Places to Visit Section */}
        <div className="container mx-auto p-4 mt-24">
          <section className="my-8 text-center">
            <h2 className="text-4xl font-bold text-white font-heroFont mb-12">
              Places to Visit
            </h2>
            <Slider {...settings}>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/20623791/pexels-photo-20623791/free-photo-of-lotus-temple-in-new-delhi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Lotus Temple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Lotus Temple
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/13238814/pexels-photo-13238814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Humayun's Tomb"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Humayun's Tomb
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/13385089/pexels-photo-13385089.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Qutub Minar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Qutub Minar
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/13944019/pexels-photo-13944019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Jantar Mantar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Jantar Mantar
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/14864085/pexels-photo-14864085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Lodhi Garden"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Lodhi Garden
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full h-[500px] transform transition-transform duration-300">
                <a href="#">
                  <img
                    src="https://images.pexels.com/photos/6393978/pexels-photo-6393978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Agrasen ki Baoli"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Agrasen ki Baoli
                    </h3>
                  </div>
                </a>
              </div>
            </Slider>
          </section>

          {/* History Section */}
          <section className="my-8 text-center mt-36">
            <h2 className="text-4xl font-bold text-white font-heroFont mb-12">
              History of Delhi
            </h2>
            <div className="flex flex-col lg:flex-row mb-10">
              <div className="lg:w-1/2 lg:pr-8 flex items-center ">
                <p className="text-gray-300 text-xl">
                  Delhi, the capital city of India, has a history that stretches
                  back thousands of years. It is believed to have been the site
                  of Indraprastha, the legendary capital of the Pandavas from
                  the Mahabharata, dating back to around 1500 BCE. The city's
                  recorded history begins with the Tomar dynasty in the 8th
                  century, followed by the Chauhans, who were overthrown by the
                  Muslim ruler Qutb-ud-din Aibak, establishing the Delhi
                  Sultanate in 1192. This era saw the construction of iconic
                  structures like the Qutub Minar. The Sultanate period was
                  marked by the rule of various dynasties, including the
                  Tughlaqs, who built several new towns in Delhi. The Mughal era
                  began in 1526 with Babur's victory over Ibrahim Lodi at the
                  First Battle of Panipat. His grandson, Akbar, further
                  consolidated Mughal rule in India, but it was Shah Jahan who
                  left a lasting mark on Delhi by establishing Shahjahanabad in
                  1638, now known as Old Delhi, and constructing the Red Fort
                  and Jama Masjid.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                <img
                  src="https://images.pexels.com/photos/17685500/pexels-photo-17685500/free-photo-of-tricycle-rickshaws-riding-on-a-street-near-chandni-chowk-market-dehli-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <div className="lg:w-1/2 lg:pl-8 flex items-center">
                <p className="text-gray-300 text-xl">
                  In modern times, Delhi has undergone significant
                  transformation, especially after the British Raj. The city was
                  an important center during the freedom struggle, and in 1911,
                  it was declared the capital of British India.
                  Post-independence, Delhi has continued to grow and evolve,
                  becoming one of the largest metropolitan areas in the world.
                  Today, it is a vibrant mix of history and modernity, with a
                  rich cultural heritage, showcasing everything from ancient
                  monuments to contemporary architecture. Delhi remains a vital
                  political, cultural, and economic hub in India.
                </p>
              </div>
            </div>
          </section>

          {/* Places to Eat Section */}
          <section className="my-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Places to Eat
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi1.jpg"
                    alt="Eat Place 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 1
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi2.jpg"
                    alt="Eat Place 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 2
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi3.jpg"
                    alt="Eat Place 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 3
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi4.jpg"
                    alt="Eat Place 4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 4
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi5.jpg"
                    alt="Eat Place 5"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 5
                    </h3>
                  </div>
                </a>
              </div>
              <div className="relative w-full sm:w-1/3 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-[105%] transition-all ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <img
                    src="/delhi6.jpg"
                    alt="Eat Place 6"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h3 className="text-lg font-semibold text-white">
                      Eat Place 6
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
