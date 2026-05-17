import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfiles, getProfile } from "../api/profileApi";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  MapPinIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import MetaTags from "../components/MetaTags";

const ProfileDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // First try to get profile by name (in case backend supports it)
        let profileData = null;
        try {
          const profileResponse = await getProfile(name);
          profileData = profileResponse.data?.profile || profileResponse.data;
        } catch (nameError) {
          console.log(
            "Backend does not support name lookup, trying fallback method",
          );

          // Fallback: Fetch all profiles and find by name
          const allProfilesResponse = await getProfiles({ limit: 1000 });
          const allProfiles =
            allProfilesResponse.data?.profiles ||
            allProfilesResponse.data ||
            [];

          // Format the name from URL (replace hyphens with spaces and capitalize)
          const formattedName = name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          // Find profile by name (case-insensitive)
          profileData = allProfiles.find(
            (p) => p.name.toLowerCase() === formattedName.toLowerCase(),
          );
        }

        if (!profileData) {
          throw new Error("Profile not found");
        }

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

    if (name) {
      fetchData();
    }
  }, [name]);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi ${profile.name}! I'm interested in your profile`
    : null;

  const phoneLink = whatsappNumber
    ? `tel:${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
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
    <>
      <MetaTags
        title={`${profile?.name || "Profile"} - Premium Escort Companion | FunwithJuli`}
        description={`Meet ${profile?.name || "our premium companion"}, a verified escort offering exclusive services in ${profile?.location || "Delhi NCR"}. Professional, discreet, and high-quality companion services.`}
        keywords={`${profile?.name} escort, ${profile?.location} companion, premium escort service, verified companion, Delhi NCR escorts, professional escort ${profile?.name}`}
        ogImage={profile?.images?.[0] || ""}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Profile Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <img
                        src={profile.img}
                        alt={profile.name}
                        className="h-32 w-32 rounded-2xl object-cover ring-4 ring-white"
                      />
                      {profile.status === "Online" && (
                        <span className="absolute -bottom-2 -right-2 block h-6 w-6 rounded-full bg-green-500 border-4 border-white animate-pulse"></span>
                      )}
                    </div>
                  </div>

                  {/* Tags - Top Right */}
                  <div className="absolute top-4 right-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {profile.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-medium rounded-md shadow-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Profile Actions */}
                  <div className="absolute top-16 right-4 flex gap-2">
                    <a
                      href={phoneLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!ownerInfo}
                      className={`p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all no-underline hover:no-underline ${
                        !ownerInfo ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      title={
                        !ownerInfo ? "Contact number not available" : "Call now"
                      }
                    >
                      <PhoneIcon className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!ownerInfo}
                      className={`p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all no-underline hover:no-underline ${
                        !ownerInfo ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      title={
                        !ownerInfo
                          ? "WhatsApp number not available"
                          : "Chat on WhatsApp"
                      }
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="px-8 pt-44 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        {profile.name}
                        {profile.rating >= 4.8 && (
                          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
                        )}
                      </h1>
                      <div className="flex items-center gap-4 mt-2 text-black">
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
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {profile.status}
                    </span>
                  </div>

                  {/* Description */}
                  {profile.shortContent && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        About
                      </h3>
                      <p className="text-black leading-relaxed">
                        {profile.shortContent}
                      </p>
                    </div>
                  )}

                  {/* Long Content */}
                  {profile.longContent && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Detailed Description
                      </h3>
                      <p className="text-black leading-relaxed whitespace-pre-wrap">
                        {profile.longContent}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={phoneLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={!ownerInfo}
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 active:scale-95 transition-all no-underline hover:no-underline hover:text-white focus:text-white visited:text-white ${
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
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-95 transition-all no-underline hover:no-underline hover:text-white focus:text-white visited:text-white ${
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
                  <p className="text-sm text-black mt-3 text-center">
                    Contact information is currently unavailable
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-black">Age</span>
                    <span className="font-medium text-gray-900">
                      {profile.age} years
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Location</span>
                    <span className="font-medium text-gray-900">
                      {profile.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Status</span>
                    <span className="font-medium text-gray-900">
                      {profile.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Rating</span>
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 text-amber-400" />
                      <span className="font-medium text-gray-900">
                        {profile.rating || 4.9}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Info (if available) */}
              {(profile.title || profile.metaTitle) && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Profile Title
                  </h3>
                  <p className="text-black">
                    {profile.title || profile.metaTitle}
                  </p>
                </div>
              )}

              {/* Safety Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Safety Notice
                </h3>
                <p className="text-yellow-700 text-sm">
                  Please verify the authenticity of profiles and practice
                  caution when sharing personal information. All profiles are
                  manually verified, but user discretion is advised. 18+ Only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
