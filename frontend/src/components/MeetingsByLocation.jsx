import React, { useState } from "react";
import { Link } from "react-router-dom";

const MeetingsByLocation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    {
      id: 2,
      name: "Delhi",
      profiles: "180+",
      img: "https://funwithjuli.in/api/upload/file/juli-delhi-26042026-1233.webp",
      trending: true,
    },
    {
      id: 3,
      name: "Gurugram",
      profiles: "150+",
      img: "https://funwithjuli.in/api/upload/file/juli-gurugram-26042026-1233.webp",
      trending: false,
    },
    {
      id: 4,
      name: "Noida",
      profiles: "90+",
      img: "https://funwithjuli.in/api/upload/file/juli-noida-26042026-1233.webp",
      trending: false,
    },
    {
      id: 5,
      name: "Greater Noida",
      profiles: "110+",
      img: "https://funwithjuli.in/api/upload/file/juli-greater-noida-26042026-1233.webp",
      trending: false,
    },
    {
      id: 6,
      name: "Ghaziabad",
      profiles: "70+",
      img: "https://funwithjuli.in/api/upload/file/juli-ghaziabad-26042026-1233.webp",
      trending: true,
    },
  ];

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER & SEARCH */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Extensive Presence Across Delhi NCR, Noida, and Gurgaon
            </h2>
            <p className="text-lg text-black">
              One of the main reasons we’re regarded as a leading escort service
              in Delhi NCR is our wide and reliable network across the region.
              We understand how vast the NCR is, so accessibility and prompt
              service are essential. In Delhi, a city that blends heritage with
              modern luxury, our companions are available whether you’re at a
              five-star hotel in South Delhi or attending meetings in Central
              Delhi, and they are well-acquainted with the city’s social
              etiquette. Similarly, in the corporate hubs of Noida and Gurgaon,
              we cater to professionals who value sophistication and engaging
              company. Whether you’re visiting for a tech conference in Noida or
              closing a business deal in Gurgaon, funwithjuli ensures a refined
              and seamless companionship experience tailored to your needs.
            </p>
          </div>
        </div>

        {/* CITIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredCities.map((city) => (
            <Link
              to={`/meetings/${city.name.toLowerCase()}`}
              key={city.id}
              className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-lg block"
            >
              {/* City Image - Removed transition and hover scale */}
              <img
                src={city.img}
                alt={city.name}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
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

                  {/* Icon - Made always visible and removed transform/opacity animations */}
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
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

        {/* EMPTY STATE */}
        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black text-xl font-bold">
              No cities found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetingsByLocation;
