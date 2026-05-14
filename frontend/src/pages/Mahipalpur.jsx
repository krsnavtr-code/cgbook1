import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon,
  UserGroupIcon,
  HeartIcon,
  CheckCircleIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Mahipalpur = () => {
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchOwnerInfo();
  }, []);

  const formatPhoneNumber = (number) => {
    if (!number) return "";
    return number.replace(/^(\+?\d+)[\s-]*(\d+)$/, "$1$2");
  };

  const phoneNumber = ownerInfo?.callNumber
    ? formatPhoneNumber(ownerInfo.callNumber)
    : "";
  const whatsappNumber = ownerInfo?.whatsappNumber
    ? formatPhoneNumber(ownerInfo.whatsappNumber)
    : phoneNumber;
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 font-sans">
      <MetaTags
        title="Escort Service in Mahipalpur - Premium Call Girl by FunwithJuli (2024 Updated)"
        description="Looking for the best escort service in Mahipalpur? FunwithJuli offers elite call girls, Russian escorts, and 24/7 private companionship. 100% safe, verified profiles, and luxury hotels service."
        keywords="escort service mahipalpur, call girl mahipalpur, mahipalpur escort, russian call girls mahipalpur, high profile escorts mahipalpur, independent escorts mahipalpur, Aerocity escorts, female companions Mahipalpur"

      />

      {/* Hero Section - Optimized with H1 and CTA */}
      <div className="relative bg-gradient-to-r from-pink-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Premium <span className="text-pink-300">Escort Service</span> in
            Mahipalpur
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-pink-100 max-w-3xl mx-auto">
            Experience the Epitome of Luxury & Companionship with FunwithJuli's
            Elite Call Girls.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="flex items-center justify-center px-10 py-5 bg-white text-pink-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-2" /> Call Now:{" "}
              {phoneNumber || ""}
            </a>
            <Link
              to="/photos"
              className="flex items-center justify-center px-10 py-5 bg-pink-600 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all"
            >
              Check Gallery & Book
            </Link>
          </div>
        </div>
      </div>

      {/* In-Depth SEO Content Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 border-l-8 border-pink-600 pl-4">
              #1 Choice for Independent Escorts in Mahipalpur Delhi
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Mahipalpur, being the gateway to Delhi via IGI Airport, is a
                bustling hub for travelers, business tycoons, and corporate
                professionals. At <strong>FunwithJuli</strong>, we bridge the
                gap between your stress and ultimate relaxation. Our{" "}
                <strong>escort service in Mahipalpur</strong> is designed for
                those who don't settle for anything less than perfection.
              </p>
              <p>
                Whether you are staying at a luxury 5-star hotel near Aerocity
                or a cozy guest house in Mahipalpur, our{" "}
                <strong>call girls in Mahipalpur</strong> are just one call
                away. We specialize in providing high-profile Indian models,
                college students, and international Russian escorts who are
                well-educated, well-behaved, and extremely beautiful.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10">
                Luxury Companionship for Corporate Travelers
              </h3>
              <p>
                We understand the loneliness that comes with business trips. Our
                companions aren't just for physical intimacy; they are perfect
                dates for social gatherings, business dinners, or simply a night
                of deep conversation. Each girl is verified to ensure your
                safety and provide a hassle-free experience.
              </p>
            </div>

            {/* Feature Table for SEO */}
            <div className="mt-12 overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
                <thead>
                  <tr className="bg-pink-600 text-white">
                    <th className="py-3 px-4 text-left">Service Type</th>
                    <th className="py-3 px-4 text-left">Availability</th>
                    <th className="py-3 px-4 text-left">Category</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3 px-4 italic font-medium">
                      In-call/Out-call
                    </td>
                    <td className="py-3 px-4">24 Hours / 7 Days</td>
                    <td className="py-3 px-4">Premium Indian / Russian</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 italic font-medium">
                      Airport Meet & Greet
                    </td>
                    <td className="py-3 px-4">On Demand</td>
                    <td className="py-3 px-4">Corporate Escorts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 italic font-medium">
                      Full Night Service
                    </td>
                    <td className="py-3 px-4">8 PM - 6 AM</td>
                    <td className="py-3 px-4">Models & Airhostess</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 h-fit sticky top-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SparklesIcon className="w-6 h-6 text-pink-500 mr-2" /> Quick
              Booking
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <span>Select profile from our WhatsApp Gallery</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <span>Provide your Hotel Name & Room Number</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <span>Companion reaches you within 30-45 mins</span>
              </li>
            </ul>
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="block text-center bg-purple-700 text-white py-4 rounded-xl font-bold hover:bg-purple-800 transition-colors"
            >
              Instant WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Location Specific Section for SEO Hubbing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Serving All Major Hubs in & Near Mahipalpur
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Aerocity Hotels",
              "Vasant Kunj",
              "Dwarka Sector 21",
              "Delhi Airport T3",
              "Kapshere",
              "Rangpuri",
              "NH-8 Hotels",
              "Gurgaon Border",
            ].map((loc) => (
              <div
                key={loc}
                className="p-4 border border-gray-700 rounded-lg hover:border-pink-500 transition-all cursor-default"
              >
                <MapPinIcon className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                <span className="font-semibold">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local desi beauties to exotic international models, choose
              the perfect companion for your evening.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-8 bg-pink-50 rounded-3xl hover:bg-pink-600 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                College Girl Escorts
              </h3>
              <p className="text-gray-700 group-hover:text-pink-50 mb-6 transition-colors">
                Real college students looking for financial support. Innocent,
                energetic, and highly respectful.
              </p>
              <span className="text-pink-600 font-bold group-hover:text-white">
                Starts ₹3,000/-
              </span>
            </div>
            <div className="group p-8 bg-purple-50 rounded-3xl hover:bg-purple-600 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                Russian Call Girls
              </h3>
              <p className="text-gray-700 group-hover:text-purple-50 mb-6 transition-colors">
                Blonde, fair-skinned international models for a truly global and
                premium experience.
              </p>
              <span className="text-purple-600 font-bold group-hover:text-white">
                Starts ₹8,000/-
              </span>
            </div>
            <div className="group p-8 bg-pink-50 rounded-3xl hover:bg-pink-600 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                Housewife Companions
              </h3>
              <p className="text-gray-700 group-hover:text-pink-50 mb-6 transition-colors">
                Mature and experienced companions who know exactly how to
                satisfy your needs.
              </p>
              <span className="text-pink-600 font-bold group-hover:text-white">
                Starts ₹4,000/-
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New Trust & Safety Section */}
      <section className="py-20 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="Safe Service"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Safety & Privacy: Our Top Priority
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We understand the sensitive nature of{" "}
              <strong>escort services in Mahipalpur</strong>. That's why
              FunwithJuli operates with a strict "No Questions Asked" privacy
              policy.
            </p>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                <FingerPrintIcon className="w-10 h-10 text-pink-600 mr-4" />
                <div>
                  <h4 className="font-bold">Encrypted Communication</h4>
                  <p className="text-sm text-gray-600">
                    All chats and calls are deleted after the service.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                <CurrencyRupeeIcon className="w-10 h-10 text-pink-600 mr-4" />
                <div>
                  <h4 className="font-bold">No Hidden Charges</h4>
                  <p className="text-sm text-gray-600">
                    Pay exactly what is quoted. No extra tips or hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQ for SEO (Schema.org ready) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 italic">
            Common Queries about Mahipalpur Escorts
          </h2>
          <div className="space-y-8">
            <div className="border-b-2 border-pink-100 pb-6">
              <h3 className="text-xl font-bold mb-2">
                Can I book an escort for a hotel in Aerocity?
              </h3>
              <p className="text-gray-600">
                Yes, we provide out-call services to all major 5-star and 4-star
                hotels in Aerocity and Mahipalpur. Our girls are well-dressed
                and can easily enter premium hotels without any issues.
              </p>
            </div>
            <div className="border-b-2 border-pink-100 pb-6">
              <h3 className="text-xl font-bold mb-2">
                Are the photos on the website real?
              </h3>
              <p className="text-gray-600">
                We provide 100% genuine photos on WhatsApp. Due to privacy and
                SEO reasons, some images on the site might be representative,
                but you will get exactly what you choose in the gallery.
              </p>
            </div>
            <div className="border-b-2 border-pink-100 pb-6">
              <h3 className="text-xl font-bold mb-2">
                What is the arrival time in Mahipalpur?
              </h3>
              <p className="text-gray-600">
                Since we have a local base in Mahipalpur, our companions usually
                reach your location within 30 minutes of booking confirmation.
              </p>
            </div>
            <div className="border-b-2 border-pink-100 pb-6">
              <h3 className="text-xl font-bold mb-2">
                Is there any advance payment required?
              </h3>
              <p className="text-gray-600">
                For standard bookings, we generally do not ask for advance.
                However, for Russian or Celebrity escorts, a small commitment
                fee might be applicable to ensure serious inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-pink-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Don't Spend Your Night Alone!
            </h2>
            <p className="text-xl mb-10 opacity-90">
              The best memories in Mahipalpur are just one click away. Book your
              premium companion now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : ""}
                className="px-12 py-5 bg-white text-pink-600 rounded-full font-black text-xl hover:bg-gray-100 shadow-xl"
              >
                CALL JULI NOW: {phoneNumber || ""}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            © 2024-2026 FunwithJuli. All Rights Reserved. | Escort Service
            Mahipalpur
          </p>
          <p className="mt-2">
            Disclaimer: We only provide companionship services. Users must be
            18+ to access this site.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Mahipalpur;
