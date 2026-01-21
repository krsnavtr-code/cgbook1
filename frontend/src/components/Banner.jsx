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
        const primaryOwner = data.owners?.find(owner => owner.isPrimary) || data.owners?.[0];
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
    if (!number) return '';
    // Remove all non-digit characters except the leading +
    return number.replace(/^(\+?\d+)[\s-]*(\d+)$/, '$1$2');
  };

  const whatsappLink = ownerInfo?.whatsappNumber 
    ? `https://wa.me/${formatWhatsAppNumber(ownerInfo.whatsappNumber)}`
    : '#';
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-14 sm:py-20 lg:py-24 lg:flex lg:items-center lg:justify-between">
          {/* ================= TEXT CONTENT ================= */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              <span className="block">Explore the best</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-rose-500 to-indigo-600">
                FullFun Creativity
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Join the exclusive community of **funwithjuli.in**. Discover
              premium videos, high-quality photos, and behind-the-scenes content
              you won't find anywhere else.
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
                to="/videos"
                className="px-8 py-4 text-lg font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
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
                Browse Videos
              </Link>
            </div>

            {/* Stats / Social Proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  500+
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Photos
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  100+
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Videos
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  10k
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Fans
                </p>
              </div>
            </div>
          </div>

          {/* ================= VISUAL CONTENT ================= */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[450px]">
              {/* Main Image Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-[2rem] rotate-3 -z-10 opacity-20 animate-pulse"></div>
              <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800 transform -rotate-3 hover:rotate-0 transition-transform duration-500 group">
                {/* Replace with actual image of Juli/Content */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="http://api.funwithjuli.in/upload/file/whatsapp-image-2026-01-15-at-2.30.01-pm--1--21012026-0640.jpeg"
                    alt="Featured Content"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay Tag */}
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs font-bold text-pink-600 uppercase">
                    New Release
                  </p>
                  <p className="text-sm font-black dark:text-white">
                    Summer Collection 2024
                  </p>
                </div>
              </div>

              {/* Small Floating Card */}
              <div className="absolute -right-8 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    🔥
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      Trending Now
                    </p>
                    <p className="text-sm font-black dark:text-white">
                      Live Stream 8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
