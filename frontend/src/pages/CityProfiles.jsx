import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProfiles } from "../api/profileApi";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  MapPinIcon,
  StarIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import MetaTags from "../components/MetaTags";

const CityProfiles = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all profiles
        const profilesResponse = await getProfiles({ limit: 1000 });
        const profilesData =
          profilesResponse.data?.profiles || profilesResponse.data || [];

        // Filter profiles by city (case-insensitive) and only show non-new arrivals
        const cityProfiles = profilesData.filter(
          (profile) =>
            profile.location?.toLowerCase() === city?.toLowerCase() &&
            profile.isNew !== true,
        );

        setProfiles(cityProfiles);

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
        }
      } catch (err) {
        console.error("Error fetching profiles:", err);
        setError("Failed to load profiles for this city");
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi! I'm interested in your city profile`
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

  if (error || profiles.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 ">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-black hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900mb-4 capitalize">
              {city}
            </h1>
            <div className="text-gray-400 text-lg mb-8">
              {error || `No profiles found in ${city}`}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-all"
              >
                Back to Home
              </button>
              <button
                onClick={() => navigate("/meetings")}
                className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-xl font-bold hover:bg-pink-50 transition-all"
              >
                All Cities
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <MetaTags
        title={`${city.charAt(0).toUpperCase() + city.slice(1)} Escorts - Premium Companions | FunwithJuli`}
        description={`Find premium escorts and companions in ${city.charAt(0).toUpperCase() + city.slice(1)}. Verified profiles, safe meetings, and professional escort services in ${city}.`}
        keywords={`${city} escorts, ${city} call girls, premium escorts ${city}, ${city} escort service, verified companions ${city}, safe escort meetings`}
        canonicalUrl={`https://funwithjuli.in/meetings/${city.toLowerCase()}`}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-black text-white capitalize">
              Best Escorts in {city}
            </h1>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {profiles.map((profile) => (
              <div key={profile._id || profile.id} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Profile Image */}
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Status Badge */}
                  {profile.status === "Online" && (
                    <div className="absolute top-4 right-4">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {profile.name}
                      </h3>
                      <div className="flex items-center gap-3 text-white/90 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-4 w-4 text-amber-400" />
                          <span>{profile.rating || 4.9}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {profile.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {profile.tags?.length > 2 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
                            +{profile.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            navigate(
                              `/profile/${profile.name.toLowerCase().replace(/\s+/g, "-")}`,
                            )
                          }
                          className="flex-1 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium text-sm hover:bg-white/30 transition-all"
                        >
                          View Profile
                        </button>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          disabled={!ownerInfo}
                          className={`flex-1 py-2 bg-pink-600 text-white rounded-lg font-medium text-sm hover:bg-pink-700 transition-all text-center ${
                            !ownerInfo ? "opacity-70 cursor-not-allowed" : ""
                          }`}
                          title={
                            !ownerInfo
                              ? "Contact number not available"
                              : "Chat on WhatsApp"
                          }
                        >
                          {ownerInfo ? "Chat" : "Unavailable"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          {ownerInfo && (
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Interested in Multiple Profiles?
              </h3>
              <p className="text-black text-center mb-8">
                Contact us directly for personalized recommendations and special
                arrangements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
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
                  {loading ? "Loading..." : "WhatsApp"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CityProfiles;
