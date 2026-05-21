import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Banner = () => {
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const data = await getOwnerInfo();
        // Get the primary owner or first owner in the list
        const primaryOwner =
          data.owners?.find((owner) => owner.isPrimary) || data.owners?.[0];
        if (primaryOwner) {
          setOwnerInfo(primaryOwner);
        }
      } catch (error) {
        console.error("Error fetching owner info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOwnerInfo();
  }, []);

  // Format the WhatsApp number by removing any non-digit characters except the leading +
  const formatWhatsAppNumber = (number) => {
    if (!number) return "";
    // Remove all non-digit characters except the leading +
    return number.replace(/^(\+?\d+)[\s-]*(\d+)$/, "$1$2");
  };

  const whatsappLink = ownerInfo?.whatsappNumber
    ? `https://wa.me/${formatWhatsAppNumber(ownerInfo.whatsappNumber)}`
    : "#";
  return (
    <div className="relative overflow-hidden bg-white transition-colors duration-300">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-4 sm:py-12 lg:py-14 lg:flex lg:items-center lg:justify-between">
          {/* ================= TEXT CONTENT ================= */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Escort Service in Delhi at Funwith Juli - Premium Call Girls in
              Delhi
            </h1>
            <p className="mt-6 text-sm md:text-lg text-black max-w-2xl mx-auto lg:mx-0">
              Delhi is a hub of business, travelers, people travel from all
              around the country here, people come here for different purposes
              some for business, travel, enjoy, night out and other things. If
              you’re one of them you’re at the right spot at Fun with Juli we
              offer trusted and friendly <strong>call girls in Delhi</strong>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                disabled={!ownerInfo}
                className={`px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all ${
                  !ownerInfo ? "opacity-70 cursor-not-allowed" : ""
                }`}
                title={
                  !ownerInfo
                    ? "WhatsApp number not available"
                    : "Contact on WhatsApp"
                }
              >
                {loading ? "Loading..." : "Book Now"}
              </a>
              <Link
                to="/photos"
                className="px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Browse Photos
              </Link>
            </div>

            {/* Stats / Social Proof */}
            <div className="hidden md:flex mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-black text-gray-900">150+</p>
                <p className="text-sm text-black uppercase tracking-widest font-bold">
                  Photos
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-black text-gray-900">Multiple</p>
                <p className="text-sm text-black uppercase tracking-widest font-bold">
                  Locations
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-black text-gray-900">1200+</p>
                <p className="text-sm text-black uppercase tracking-widest font-bold">
                  Fans
                </p>
              </div>
            </div>

            <div className="md:hidden mt-10 grid grid-cols-1 gap-2 border-t border-gray-100 pt-8">
              <p className="text-2xl font-black text-gray-900">
                150+{" "}
                <span className="text-sm text-black uppercase tracking-widest font-bold">
                  Photos
                </span>
              </p>
              <p className="text-2xl font-black text-gray-900">
                Multiple{" "}
                <span className="text-sm text-black uppercase tracking-widest font-bold">
                  Locations
                </span>
              </p>
              <p className="text-2xl font-black text-gray-900">
                1200+{" "}
                <span className="text-sm text-black uppercase tracking-widest font-bold">
                  Fans
                </span>
              </p>
            </div>
          </div>

          {/* ================= VISUAL CONTENT ================= */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[450px]">
              {/* Main Image Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-[2rem] rotate-3 -z-10 opacity-20 animate-pulse"></div>
              <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 group">
                {/* Replace with actual image of Juli/Content */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.41-pm--1--26042026-1110.jpeg"
                    alt="Featured Content"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay Tag */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs font-bold text-pink-600 uppercase">
                    New Release
                  </p>
                  <p className="text-sm font-black text-gray-900">
                    Summer Collection 2024
                  </p>
                </div>
              </div>

              {/* Small Floating Card */}
              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    🔥
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      Trending Now
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      Live Stream 8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto">
          We are known for offering a safe, private, and premium{" "}
          <strong>escort service in Delhi</strong> for business owners,
          travelers, and people who want quality companionship. Whether you are
          visiting Delhi for work, staying in a hotel, or living in the city,
          our service is made to give you comfort, privacy, and a good
          experience.
        </p>
        <p className="mx-auto">
          At Funwith Juli, we understand that every person has different needs.
          No Matter if you’re looking for dinner partner, party night with
          female escort in delhi or full night spend with call girl Our{" "}
          <strong>escort service in Delhi</strong> focuses on making every
          meeting smooth, respectful, and enjoyable. We believe that you should
          feel natural, stress-free, and comfortable.
        </p>
        <p className="mx-auto">
          Our platform Fun with Juli is designed for people who want trusted and
          verified companions without wasting time. With our premium{" "}
          <strong>escort service in Delhi</strong>, you can connect with
          experienced and stylish call girl in different parts of Delhi NCR.
        </p>
      </div>
    </div>
  );
};

export default Banner;
