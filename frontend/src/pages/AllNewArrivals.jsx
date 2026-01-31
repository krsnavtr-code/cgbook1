import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfiles } from "../api/profileApi";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  MapPinIcon,
  StarIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  SparklesIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const AllNewArrivals = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const profilesResponse = await getProfiles();
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];

        const newArrivals = profilesData
          .filter((profile) => profile.isNew === true)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((profile, index) => ({
            ...profile,
            joinedTime: index === 0 ? "Just now" : `${index + 2}h ago`,
          }));

        setProfiles(newArrivals);
        const ownerResponse = await getOwnerInfo();
        setOwnerInfo(ownerResponse.data || ownerResponse);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const whatsappNumber = ownerInfo?.whatsappNumber || "";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin" />
          <span className="text-sm font-medium text-zinc-400 animate-pulse uppercase tracking-widest">
            Loading Collection
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* --- Adaptive Navigation --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold hover:text-pink-500 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-tight text-zinc-500 dark:text-zinc-400">
                Live Feed
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section with Mesh Gradient --- */}
      <header className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-pink-500/10 dark:bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 mb-6">
            <SparklesIcon className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Just Added
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
            New{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Arrivals
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 text-lg">
            Experience the latest additions to our curated gallery. Fresh
            profiles, updated daily for premium quality.
          </p>
        </div>
      </header>

      {/* --- Profiles Grid --- */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile._id}
              className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500"
            >
              {/* Image with Dynamic Badges */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="backdrop-blur-md bg-black/30 border border-white/20 text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <ClockIcon className="h-3 w-3" />
                    <span className="text-[10px] font-bold uppercase">
                      {profile.joinedTime}
                    </span>
                  </div>
                </div>

                {/* Floating Action Button on Hover */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={whatsappLink}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-xl shadow-pink-500/40 hover:bg-pink-600"
                  >
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {profile.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <StarIcon className="h-4 w-4 fill-current" />
                    <span className="text-sm font-bold">
                      {profile.rating || "5.0"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                  <MapPinIcon className="h-4 w-4" />
                  {profile.location}
                </div>

                <button
                  onClick={() => navigate(`/profile/${profile._id}`)}
                  className="w-full py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white dark:hover:bg-pink-600 transition-colors"
                >
                  View Full Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bento-Style Contact Section --- */}
        {ownerInfo && (
          <div className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Need a recommendation?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Our support team can help you find exactly what you're looking
                for.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={whatsappLink}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                WhatsApp Agent
              </a>
              <button
                onClick={() => navigate("/meetings")}
                className="px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
              >
                All Profiles
              </button>
            </div>
          </div>
        )}
      </main>

      {/* --- Minimal Footer --- */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-400 dark:text-zinc-600 text-xs font-medium uppercase tracking-[0.3em]">
        Handcrafted for Excellence • 2026
      </footer>
    </div>
  );
};

export default AllNewArrivals;
