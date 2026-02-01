import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile } from "../api/profileApi";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  MapPinIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch profile data
        const profileResponse = await getProfile(id);
        const profileData =
          profileResponse.data?.profile || profileResponse.data;
        setProfile(profileData);

        // Fetch owner info for contact details
        try {
          const ownerResponse = await getOwnerInfo();
          const ownerData =
            ownerResponse.data?.ownerInfo ||
            ownerResponse.data ||
            ownerResponse;
          setOwnerInfo(ownerData);
        } catch (ownerError) {
          console.log("Owner info not available:", ownerError);
          // Continue without owner info
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Profile not found or has been removed");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;


  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi! I'm interested in your profile`
    : null;

  const phoneLink = whatsappNumber
    ? `tel:${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error || "Profile Not Found"}
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-widest text-sm">
                Live & Local
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                {/* Cover Image */}
                <div className="h-64 bg-gradient-to-r from-pink-500 to-rose-600"></div>

                {/* Profile Image */}
                <div className="absolute -bottom-16 left-8">
                  <div className="relative">
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className="h-32 w-32 rounded-2xl object-cover ring-4 ring-white dark:ring-gray-800"
                    />
                    {profile.status === "Online" && (
                      <span className="absolute -bottom-2 -right-2 block h-6 w-6 rounded-full bg-green-500 border-4 border-white dark:border-gray-800 animate-pulse"></span>
                    )}
                  </div>
                </div>

                {/* Profile Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                    <svg
                      className="h-5 w-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all">
                    <svg
                      className="h-5 w-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="px-8 pt-20 pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {profile.name}
                      {profile.rating >= 4.8 && (
                        <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
                      )}
                    </h1>
                    <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{profile.location}</span>
                      </div>
                      <span>•</span>
                      <span>{profile.age} years</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-amber-400" />
                        <span className="font-semibold">
                          {profile.rating || 4.9}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      profile.status === "Online"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {profile.status}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {profile.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-sm font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                {profile.shortContent && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      About
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {profile.shortContent}
                    </p>
                  </div>
                )}

                {/* Long Content */}
                {profile.longContent && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Detailed Description
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">
                      {profile.longContent}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={!ownerInfo}
                  className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all active:scale-95 ${
                    !ownerInfo ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  title={
                    !ownerInfo ? "Contact number not available" : "Call now"
                  }
                >
                  <PhoneIcon className="h-5 w-5" />
                  {loading ? "Loading..." : "Call Now"}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={!ownerInfo}
                  className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all active:scale-95 ${
                    !ownerInfo ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  title={
                    !ownerInfo
                      ? "WhatsApp number not available"
                      : "Chat on WhatsApp"
                  }
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  {loading ? "Loading..." : "Chat"}
                </a>
              </div>
              {!ownerInfo && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
                  Contact information is currently unavailable
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Age</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {profile.age} years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Location
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {profile.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Status
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {profile.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Rating
                  </span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-amber-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {profile.rating || 4.9}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Info (if available) */}
            {(profile.title || profile.metaTitle) && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Profile Title
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {profile.title || profile.metaTitle}
                </p>
              </div>
            )}

            {/* Safety Notice */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Safety Notice
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Please verify the authenticity of profiles and practice caution
                when sharing personal information. All profiles are manually
                verified, but user discretion is advised. 18+ Only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
