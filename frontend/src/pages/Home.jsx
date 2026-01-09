import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Watch Photo & Videos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Apne pasandida photos aur videos dekhein, upload karein aur share
          karein. Shuruaat karne ke liye niche scroll karein.
        </p>

        <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition">
          Start Watching
        </button>
      </div>
    </div>
  );
};

export default Home;
