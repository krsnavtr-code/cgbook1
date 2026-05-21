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
        const ownerResponse = await getOwnerInfo();
        const ownerData =
          ownerResponse.data?.ownerInfo || ownerResponse.data || ownerResponse;
        setOwnerInfo(ownerData);

        const profilesResponse = await getProfiles({ limit: 1000 });
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];

        const newProfiles = profilesData
          .filter((profile) => profile.isNew === true)
          .slice(0, 4)
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
        // Fallback to static records if endpoint times out or drops
        setNewCreators([
          {
            id: 1,
            name: "Kiara",
            joined: "2 hours ago",
            location: "Mumbai",
            img: "https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-01-15-at-2.29.56-pm--2--21012026-0640.jpeg",
            type: "Video",
          },
          {
            id: 2,
            name: "Mehak",
            joined: "5 hours ago",
            location: "Pune",
            img: "https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-01-15-at-2.29.58-pm--1--21012026-0640.jpeg",
            type: "Photos",
          },
          {
            id: 3,
            name: "Zoya",
            joined: "1 day ago",
            location: "Delhi",
            img: "https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-01-15-at-2.30.01-pm-21012026-0640.jpeg",
            type: "Video",
          },
          {
            id: 4,
            name: "Tanya",
            joined: "2 days ago",
            location: "Bangalore",
            img: "https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-01-15-at-2.30.03-pm-21012026-0640.jpeg",
            type: "Photos",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="max-w-5xl text-left">
            <p className="text-2xl md:text-3xl font-black text-gray-900 flex items-center gap-3">
              New Arrivals
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              Premium Escort Service in Delhi for Business Owners and Travelers
            </h2>
            <p className="text-sm md:text-base">
              Delhi is a busy city where thousands of business owners and
              travelers come every day. Long meetings, travel stress, and busy
              schedules can make people feel tired. That is why many
              professionals choose an <strong>Escort service Delhi</strong> to relax and enjoy
              their free time.
              <br />
              Funwith Juli provides classy and smooth companions who understand
              how to behave professionally. Whether you want someone for a
              dinner date, hotel meetup, event, or city outing, our service
              gives you the right companion according to your preference.
              <br />
              Business travelers often look for comfort, privacy, and good
              communication. Our companions know how to make conversations
              interesting and create a relaxed atmosphere.
            </p>
          </div>
          <button
            onClick={() => navigate("/new-arrivals")}
            className="hidden sm:block px-6 py-2.5 border-2 border-pink-500 text-pink-500 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition-all whitespace-nowrap flex-shrink-0"
          >
            See All New
          </button>
        </div>

        {/* Profiles Array Layout Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-3xl animate-pulse w-full"
                style={{ aspectRatio: "3/4" }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newCreators.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Image Wrapper */}
                  <div className="relative aspect-[3/4] rounded-2xl md:rounded-[1.75rem] overflow-hidden bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Time Counter Tag */}
                    <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 md:py-1 rounded-full shadow-sm">
                      <p className="text-[9px] md:text-[10px] font-black text-pink-600 uppercase tracking-tight">
                        {item.joined}
                      </p>
                    </div>

                    {/* Gradient Bottom Contrast Tint Layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 md:p-5">
                      <h3 className="text-base md:text-xl font-black text-white tracking-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm mb-2 flex items-center gap-1 font-medium truncate">
                        <svg
                          className="w-3 h-3 flex-shrink-0 text-pink-400"
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

                      {/* Multimedia Asset Type Checker Flag */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                        <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-wider truncate">
                          {item.type} Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secure Redirection Interaction Trigger Button */}
                <div className="pt-3 pb-1 px-1">
                  <a
                    href={whatsappLink || "#"}
                    target={whatsappLink ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-xs md:text-sm shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] flex items-center justify-center gap-1.5 no-underline hover:text-white ${
                      !whatsappLink
                        ? "opacity-60 cursor-not-allowed pointer-events-none"
                        : ""
                    }`}
                    title={
                      !whatsappLink
                        ? "Contact details unavailable"
                        : "Connect via WhatsApp"
                    }
                  >
                    <span>WhatsApp Call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Stack Target Container for Small Form-Factor Displays */}
        <div className="mt-8 sm:hidden">
          <button
            onClick={() => navigate("/new-arrivals")}
            className="w-full py-3.5 border-2 border-pink-500 text-pink-500 font-bold rounded-xl text-sm transition-all active:scale-[0.99]"
          >
            See All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
