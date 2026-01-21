import React, { useState } from "react";
import { Link } from "react-router-dom";

const MeetingsByLocation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    {
      id: 2,
      name: "Delhi",
      profiles: "180+",
      img: "http://api.funwithjuli.in/upload/file/delhi-21012026-0714.jpg",
      trending: true,
    },
    {
      id: 3,
      name: "Gurugram",
      profiles: "150+",
      img: "http://api.funwithjuli.in/upload/file/gurugram-21012026-0714.jpg",
      trending: false,
    },
    {
      id: 4,
      name: "Noida",
      profiles: "90+",
      img: "http://api.funwithjuli.in/upload/file/noida-21012026-0714.jpg",
      trending: false,
    },
    {
      id: 5,
      name: "Greater Noida",
      profiles: "110+",
      img: "http://api.funwithjuli.in/upload/file/grater-noida-21012026-0714.jpg",
      trending: false,
    },
    {
      id: 6,
      name: "Ghaziabad",
      profiles: "70+",
      img: "http://api.funwithjuli.in/upload/file/ghaziabad-21012026-0713.jpg",
      trending: true,
    },
  ];

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER & SEARCH ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Explore Meetings by{" "}
              <span className="text-pink-600">Location</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select your city to find verified independent companions near you.
              Real profiles, real meetings.
            </p>
          </div>

          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search your city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white"
            />
            <svg
              className="absolute right-5 top-4 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* ================= CITIES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredCities.map((city) => (
            <Link
              to={`/meetings/${city.name.toLowerCase()}`}
              key={city.id}
              className="group relative h-64 rounded-[2.5rem] overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              {/* City Image */}
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    {city.trending && (
                      <span className="bg-pink-600 text-[10px] font-black text-white px-2 py-1 rounded-md uppercase tracking-tighter mb-2 inline-block">
                        Trending 🔥
                      </span>
                    )}
                    <h3 className="text-2xl font-black text-white">
                      {city.name}
                    </h3>
                    <p className="text-pink-200 text-sm font-bold">
                      {city.profiles} Profiles Available
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-bold">
              No cities found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetingsByLocation;
