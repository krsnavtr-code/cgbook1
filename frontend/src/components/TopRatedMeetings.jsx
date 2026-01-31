import React, { useState, useEffect } from "react";
import { getOwnerInfo } from "../api/ownerInfoApi";

const TopRatedMeetings = () => {
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const ownerResponse = await getOwnerInfo();
        const ownerData =
          ownerResponse.data?.ownerInfo || ownerResponse.data || ownerResponse;
        setOwnerInfo(ownerData);
      } catch (error) {
        console.log("Owner info not available:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOwnerInfo();
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

  const topProfiles = [
    {
      id: 1,
      name: "Juli Premium",
      rating: "5.0",
      reviews: 124,
      category: "Elite",
      price: "₹₹₹",
      img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.30.00-pm-21012026-0640.jpeg",
      verified: true,
    },
    {
      id: 2,
      name: "Riya Kapoor",
      rating: "4.9",
      reviews: 98,
      category: "Independent",
      price: "₹₹",
      img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.29.55-pm--1--21012026-0640.jpeg",
      verified: true,
    },
    {
      id: 3,
      name: "Sonia V",
      rating: "4.8",
      reviews: 156,
      category: "Superhost",
      price: "₹₹₹",
      img: "http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.29.59-pm-21012026-0640.jpeg",
      verified: true,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with "Elite" Styling */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em] mb-3">
            The Gold Standard
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Top Rated{" "}
            <span className="underline decoration-amber-500 decoration-4 underline-offset-8">
              Companions
            </span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Hand-picked profiles with 100% verified reviews and exceptional
            service standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topProfiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`group relative rounded-[2rem] p-1 transition-all duration-500 hover:scale-[1.02] ${
                index === 1
                  ? "bg-gradient-to-b from-amber-400 to-yellow-600 shadow-2xl shadow-amber-500/20"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-[1.8rem] overflow-hidden">
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={profile.img}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    alt={profile.name}
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-bold text-sm">
                      {profile.rating}
                    </span>
                  </div>

                  {/* Ribbon for the #1 pick */}
                  {index === 1 && (
                    <div className="absolute top-0 left-0 bg-amber-500 text-white text-[10px] font-black px-4 py-1 rounded-br-xl uppercase tracking-tighter">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-8 text-center">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                      {profile.name}
                    </h4>
                    {profile.verified && (
                      <div className="text-blue-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.607.27 1.184.637 1.663a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.637 1.663 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.061 3.061 0 01-2.812-2.812 3.067 3.067 0 00-.637-1.663 3.066 3.066 0 010-3.976 3.066 3.066 0 00.637-1.663 3.066 3.066 0 012.812-2.812zM9 11l3-3m-3 3l-3-3m3 3v2"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">
                    {profile.category} • {profile.price}
                  </p>

                  <div className="flex justify-center gap-1 mb-6">
                    <p className="text-xs text-gray-400 font-medium">
                      Based on {profile.reviews} verified reviews
                    </p>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={!ownerInfo || loading}
                    className={`w-full py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all transform active:scale-95 text-center block ${
                      !ownerInfo || loading
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                    title={
                      !ownerInfo || loading
                        ? "Contact number not available"
                        : "Book on WhatsApp"
                    }
                  >
                    {loading
                      ? "Loading..."
                      : ownerInfo
                        ? "Book Appointment"
                        : "Unavailable"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMeetings;
