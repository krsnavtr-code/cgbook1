import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfiles, getLocations } from "../api/profileApi";
import { LOCATIONS_WITH_ALL } from "../constants/locations";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Meetings = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [profiles, setProfiles] = useState([]);
  const [availableLocations, setAvailableLocations] =
    useState(LOCATIONS_WITH_ALL);
  const [loading, setLoading] = useState(true);

  const [ownerInfo, setOwnerInfo] = useState(null);
  const [ownerLoading, setOwnerLoading] = useState(true);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const data = await getOwnerInfo();
        const primaryOwner =
          data.owners?.find((owner) => owner.isPrimary) || data.owners?.[0];
        if (primaryOwner) {
          setOwnerInfo(primaryOwner);
        }
      } catch (error) {
        console.error("Error fetching owner info:", error);
      } finally {
        setOwnerLoading(false);
      }
    };

    fetchOwnerInfo();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const profilesResponse = await getProfiles({ limit: 1000 });
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];

        const filteredProfiles = profilesData.filter(
          (profile) => profile.isNew !== true,
        );
        setProfiles(filteredProfiles);

        try {
          const locationsResponse = await getLocations();
          const locationsData =
            locationsResponse.data?.locations || LOCATIONS_WITH_ALL;
          setAvailableLocations(locationsData);
        } catch (error) {
          console.log("Using default locations:", error);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatWhatsAppNumber = (number) => {
    if (!number) return "";
    return number.replace(/^(\+?\d+)[\s-]*(\d+)$/, "$1$2");
  };

  const filteredProfiles =
    selectedCity === "All Cities"
      ? profiles
      : profiles.filter((profile) => profile.location === selectedCity);

  return (
    <section className="py-6 md:py-14 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span className="text-pink-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                Live & Local
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Trusted Escort Services in Delhi for{" "}
              <span className="text-indigo-600">Private Night</span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-6xl leading-relaxed">
              Funwith Juli offers premium <strong>escort services in Delhi</strong> for different
              types of occasions. Some clients book call girls in delhi for
              social events, while others want someone for travel companionship
              or nightlife experiences in delhi ncr, you can book any type of
              call girl directly from the given whatsapp or calling number, we
              also provide vip call girl in delhi directly home delivery to your
              hotel or room.
              <br />
              Our service is designed to fit your comfort level and schedule. We
              always try to provide a smooth experience from booking to meeting.
            </p>
          </div>
        </div>
        {/* Touch-Friendly Drag-Scroll City Filter */}
        <div className="w-full lg:w-auto overflow-x-auto pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 scrollbar-none snap-x snap-mandatory">
          {availableLocations.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full border text-xs md:text-sm font-bold whitespace-nowrap transition-all snap-start ${
                selectedCity === city
                  ? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-500/20"
                  : "border-gray-200 text-gray-700 hover:bg-pink-500 hover:text-white"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Counter Info Strip */}
        {/* <div className="mb-6 md:mb-8 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2 text-gray-800">
            <span className="text-base md:text-lg font-bold text-pink-600">
              {filteredProfiles.length}
            </span>
            <span className="text-xs md:text-sm font-medium">
              {selectedCity === "All Cities"
                ? "profiles available"
                : `profiles available in ${selectedCity}`}
            </span>
          </div>
        </div> */}

        {/* ================= PROFILE GRID & SKELETON LOADING ================= */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl md:rounded-3xl animate-pulse"
                style={{ aspectRatio: "3/4" }}
              />
            ))}
          </div>
        ) : filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProfiles.map((profile) => {
              const whatsappLink = ownerInfo?.whatsappNumber
                ? `https://wa.me/${formatWhatsAppNumber(ownerInfo.whatsappNumber)}?text=Hi! I'm interested in ${profile.name}`
                : "#";
              return (
                <div
                  key={profile._id || profile.id}
                  className="group relative bg-white border border-gray-100/80 rounded-2xl md:rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:shadow-pink-500/5 lg:hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Media Image Container */}
                    <div className="aspect-[3/4] overflow-hidden relative bg-gray-50">
                      <img
                        src={profile.img}
                        alt={profile.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Status Overlay Badge */}
                      <div
                        className={`absolute top-2.5 left-2.5 md:top-4 md:left-4 px-2.5 py-0.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-tight backdrop-blur-md shadow-sm border ${
                          profile.status === "Online"
                            ? "bg-green-500/20 text-green-500 border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {profile.status}
                      </div>

                      {/* Identity Tags Stack */}
                      <div className="absolute top-2.5 right-2.5 md:top-4 md:right-4 flex flex-col gap-1.5">
                        {profile.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/95 text-[9px] md:text-[10px] font-black px-2 py-0.5 md:py-1 rounded-md shadow-sm text-gray-800 tracking-tight"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Context Area */}
                    <div className="p-3.5 md:p-5 pb-2">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h3 className="text-base md:text-xl font-black text-gray-900 tracking-tight truncate">
                          {profile.name},{" "}
                          <span className="font-extrabold text-gray-600">
                            {profile.age}
                          </span>
                        </h3>
                        <div className="flex items-center gap-0.5 text-pink-500 flex-shrink-0">
                          <svg
                            className="w-3.5 h-3.5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs font-black">
                            {profile.rating || 4.9}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm font-medium">
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 text-gray-400"
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
                        <span className="truncate">{profile.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Operational Action Buttons */}
                  <div className="p-3.5 md:p-5 pt-0">
                    <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
                      <button
                        onClick={() =>
                          navigate(
                            `/profile/${profile.name.toLowerCase().replace(/\s+/g, "-")}`,
                          )
                        }
                        className="w-full sm:flex-1 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold text-xs md:text-sm shadow-md shadow-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20 transition-all active:scale-[0.98]"
                      >
                        View Profile
                      </button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full sm:flex-1 py-2.5 md:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-xs md:text-sm shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] flex items-center justify-center gap-1.5 no-underline hover:text-white ${
                          !ownerInfo
                            ? "opacity-60 cursor-not-allowed pointer-events-none"
                            : ""
                        }`}
                        title={
                          !ownerInfo
                            ? "WhatsApp number not available"
                            : "Contact on WhatsApp"
                        }
                      >
                        <ChatBubbleLeftRightIcon className="h-4 w-4 flex-shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Fallback Wrapper */
          <div className="text-center py-12 md:py-20 border border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
            <div className="text-gray-400 font-medium text-sm md:text-base mb-4">
              No profiles found in {selectedCity}
            </div>
            <button
              onClick={() => setSelectedCity("All Cities")}
              className="px-5 py-2.5 bg-pink-500 text-white rounded-xl text-sm font-bold shadow-md shadow-pink-500/20 hover:bg-pink-600 transition-all"
            >
              View All Cities
            </button>
          </div>
        )}

        {/* ================= FOOTNOTE ================= */}
        <div className="mt-8">
          <p className="text-gray-400 text-[10px] md:text-xs tracking-wide">
            * All profiles are manually verified. User discretion is advised.
            18+ Only.
          </p>

          <h4 className="text-lg font-bold">You Can Book Our Service For:</h4>
          <ul className="mt-0 list-disc list-inside">
            <li>Business trips</li>
            <li>Hotel companionship</li>
            <li>Dinner dates</li>
            <li>Private parties</li>
            <li>Travel companionship</li>
            <li>Nightlife outings</li>
            <li>Weekend relaxation</li>
          </ul>
          <p>
            No matter the reason, our team focuses on making your experience
            safe and enjoyable.
          </p>
        </div>
      </div>

      {/* Embedded Styles for Hide Scrollbar */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Meetings;
