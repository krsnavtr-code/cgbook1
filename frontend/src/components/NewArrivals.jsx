import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOwnerInfo } from "../api/ownerInfoApi";
import { getProfiles } from "../api/profileApi";

const NewArrivals = () => {
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [newCreators, setNewCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch owner info for contact details
        const ownerResponse = await getOwnerInfo();
        const ownerData =
          ownerResponse.data?.ownerInfo || ownerResponse.data || ownerResponse;
        setOwnerInfo(ownerData);

        // Fetch profiles and filter for new arrivals
        const profilesResponse = await getProfiles();
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];

        // Filter only profiles where isNew is true
        const newProfiles = profilesData
          .filter((profile) => profile.isNew === true)
          .slice(0, 4) // Limit to 4 new arrivals
          .map((profile, index) => ({
            id: profile._id || profile.id,
            name: profile.name,
            joined:
              index === 0
                ? "2 hours ago"
                : index === 1
                  ? "5 hours ago"
                  : index === 2
                    ? "1 day ago"
                    : "2 days ago",
            location: profile.location,
            img: profile.img,
            type: index % 2 === 0 ? "Video" : "Photos",
          }));

        setNewCreators(newProfiles);
      } catch (error) {
        console.log("Error fetching data:", error);
        // Fallback to hardcoded data if API fails
        setNewCreators([
          {
            id: 1,
            name: "Kiara",
            joined: "2 hours ago",
            location: "Mumbai",
            img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.29.56-pm--2--21012026-0640.jpeg",
            type: "Video",
          },
          {
            id: 2,
            name: "Mehak",
            joined: "5 hours ago",
            location: "Pune",
            img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.29.58-pm--1--21012026-0640.jpeg",
            type: "Photos",
          },
          {
            id: 3,
            name: "Zoya",
            joined: "1 day ago",
            location: "Delhi",
            img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.30.01-pm-21012026-0640.jpeg",
            type: "Video",
          },
          {
            id: 4,
            name: "Tanya",
            joined: "2 days ago",
            location: "Bangalore",
            img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.30.03-pm-21012026-0640.jpeg",
            type: "Photos",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
              New Arrivals
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-6 w-12 rounded-full bg-pink-400 opacity-20"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
              Our call <strong>girls and escort service in NCR</strong> focuses on transparency
              and professionalism. Profiles include clear details so users can
              make informed choices without confusion or miscommunication. This
              approach helps reduce risks and builds long-term trust with our
              audience.
            </p>
          </div>
          <button
            onClick={() => navigate("/new-arrivals")}
            className="hidden sm:block px-6 py-2 border-2 border-pink-500 text-pink-500 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition-all"
          >
            See All New
          </button>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newCreators.map((item) => (
            <div key={item.id} className="group relative">
              {/* Card Container */}
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-transparent group-hover:border-pink-500/50 transition-all duration-300 shadow-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Time Tag */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full shadow-md">
                  <p className="text-[10px] font-black text-pink-600 uppercase tracking-tighter">
                    {item.joined}
                  </p>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-black text-white">{item.name}</h3>
                  <p className="text-gray-300 text-sm mb-3 flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
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
                    </svg>
                    {item.location}
                  </p>

                  {/* Content Type Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      {item.type} Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Hover Button */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 w-full px-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={!ownerInfo || loading}
                  className={`w-full py-3 bg-pink-600 text-white rounded-xl font-bold shadow-xl shadow-pink-500/40 text-sm text-center block transition-all ${
                    !ownerInfo || loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  title={
                    !ownerInfo || loading
                      ? "Contact number not available"
                      : "Call on WhatsApp"
                  }
                >
                  {loading ? "Loading..." : "WhatsApp Call"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only See All */}
        <div className="mt-10 sm:hidden">
          <button
            onClick={() => navigate("/new-arrivals")}
            className="w-full py-4 border-2 border-pink-500 text-pink-500 font-bold rounded-2xl"
          >
            See All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
