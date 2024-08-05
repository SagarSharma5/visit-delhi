import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <header
        className="bg-cover bg-center h-64 relative"
        style={{ backgroundImage: "url(/path/to/your-image.jpg)" }}
      >
        <div className="flex justify-center items-center h-full bg-gray-900 bg-opacity-50">
          <h1 className="text-5xl text-white font-bold">About Delhi</h1>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">History</h2>
          <p className="text-gray-700 mb-4">Detailed history about Delhi...</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
