import React, { useState, useEffect } from "react";
import { getProfiles, getLocations } from "../api/profileApi";

const Meetings = () => {
  // State for selected city filter
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [profiles, setProfiles] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([
    "All Cities",
    "Delhi",
    "Noida",
    "Ghaziabad",
    "Gurugram",
  ]);
  const [loading, setLoading] = useState(true);

  // Fetch profiles and locations on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch profiles
        const profilesResponse = await getProfiles();
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];
        setProfiles(profilesData);

        // Fetch available locations
        try {
          const locationsResponse = await getLocations();
          const locationsData = locationsResponse.data?.locations || [
            "All Cities",
            "Delhi",
            "Noida",
            "Ghaziabad",
            "Gurugram",
          ];
          setAvailableLocations(locationsData);
        } catch (error) {
          console.log("Using default locations:", error);
          // Keep default locations if API fails
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
        // Set empty profiles on error
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter profiles based on selected city
  const filteredProfiles =
    selectedCity === "All Cities"
      ? profiles
      : profiles.filter((profile) => profile.location === selectedCity);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-widest text-sm">
                Live & Local
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              Hot meetings in{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                your city
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              Find your favourite companion in Skokka. Verified profiles with
              direct contact options.
            </p>
          </div>

          {/* City Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {availableLocations.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2 rounded-full border text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? "bg-pink-500 text-white border-pink-500"
                    : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-500 hover:text-white"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PROFILE GRID ================= */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"
                style={{ aspectRatio: "3/4" }}
              />
            ))}
          </div>
        ) : filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <div
                key={profile._id || profile.id}
                className="group relative bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter backdrop-blur-md shadow-sm border ${
                      profile.status === "Online"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                    }`}
                  >
                    {profile.status}
                  </div>

                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {profile.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/90 dark:bg-gray-900/90 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">
                      {profile.name}, {profile.age}
                    </h3>
                    <div className="flex items-center gap-1 text-pink-500">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold">
                        {profile.rating || 4.9}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {profile.location}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all active:scale-95">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">
              No profiles found in {selectedCity}
            </div>
            <button
              onClick={() => setSelectedCity("All Cities")}
              className="px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-all"
            >
              View All Cities
            </button>
          </div>
        )}

        {/* ================= FOOTNOTE ================= */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs italic">
            * All profiles are manually verified. User discretion is advised.
            18+ Only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Meetings;
