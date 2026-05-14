import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  UserIcon,
  SparklesIcon,
  MapPinIcon,
  CheckBadgeIcon,
  FingerPrintIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const LaxmiNagar = () => {
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
    <div className="min-h-screen bg-[#fcfcfd]">
      <MetaTags
        title="Escort Service in Laxmi Nagar - Call Girl FunwithJuli 24/7"
        description="Get the best escort service in Laxmi Nagar. Top-rated call girls in Laxmi Nagar, East Delhi. Independent models, college girls, and 100% verified profiles. Call now!"
        keywords="escort service laxmi nagar, call girl laxmi nagar, east delhi escorts, independent call girl laxmi nagar, russian escort laxmi nagar"

      />

      {/* --- Floating Action Button (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
              : ""
          }
          className="bg-green-500 p-4 rounded-full shadow-lg text-white"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : ""}
          className="bg-pink-600 p-4 rounded-full shadow-lg text-white animate-bounce"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>

      {/* --- Modern Hero Section --- */}
      <section className="relative pt-10 pb-20 lg:pt-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 px-3 py-1 rounded-md mb-6">
              <BoltIcon className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 text-xs font-bold uppercase tracking-widest">
                Active in East Delhi Now
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Genuine{" "}
              <span className="text-pink-600 underline decoration-indigo-500/30">
                Escort Service
              </span>{" "}
              in Laxmi Nagar
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Skip the fake profiles. Connect with real, verified, and
              independent call girls in Laxmi Nagar. Whether you're a student,
              professional, or visitor, we have the perfect companion for your
              evening.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : ""}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-pink-600 transition-all flex items-center gap-2 shadow-xl shadow-slate-200"
              >
                <PhoneIcon className="w-5 h-5" /> Call Agency
              </a>
              <Link
                to="/photos"
                className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-pink-200 transition-all shadow-sm"
              >
                View Real Photos
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <CheckBadgeIcon className="w-5 h-5 text-green-500" /> No Advance
              </span>
              <span className="flex items-center gap-1">
                <CheckBadgeIcon className="w-5 h-5 text-green-500" /> Privacy
                Guaranteed
              </span>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl h-64 bg-slate-200 animate-pulse overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-full h-full object-cover"
                    alt="Laxmi Nagar Companion"
                  />
                </div>
                <div className="bg-pink-600 p-6 rounded-3xl text-white">
                  <p className="text-2xl font-black">50+</p>
                  <p className="text-xs uppercase opacity-80">
                    Verified Models
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-600 p-6 rounded-3xl text-white">
                  <p className="text-2xl font-black">20m</p>
                  <p className="text-xs uppercase opacity-80">
                    Average Arrival
                  </p>
                </div>
                <div className="rounded-3xl h-64 bg-slate-200 animate-pulse overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-full h-full object-cover"
                    alt="East Delhi Escort"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Hyper-Local SEO Content --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 leading-snug">
                  Experience Premium Companionship at the Heart of{" "}
                  <span className="text-pink-600">Laxmi Nagar Metro Hub</span>
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p>
                    Laxmi Nagar is not just a commercial center; it's a place
                    where life moves fast. After a long day of work or studies
                    near <strong>Vikas Marg</strong> or{" "}
                    <strong>Nirman Vihar</strong>, everyone deserves a moment of
                    relaxation. Our{" "}
                    <strong>escort service in Laxmi Nagar</strong> is designed
                    to provide exactly that—pure, unadulterated joy without any
                    legal or privacy hassles.
                  </p>
                  <p>
                    From <strong>independent call girls</strong> who are
                    pursuing their studies to professional models who visit{" "}
                    <strong>East Delhi</strong> for shoots, our gallery is
                    diverse. We cover all major spots including{" "}
                    <em>
                      Guru Angad Nagar, Shakarpur, Ganesh Nagar, and
                      Priyadarshini Vihar
                    </em>
                    .
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> Low
                        Profile College Girls
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> High
                        Profile Shoot Models
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" />{" "}
                        Discrete Housewife Escorts
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> 100%
                        In-call/Out-call
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> Hotel
                        Safe Guaranteed
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" />{" "}
                        Professional GFE
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MagnifyingGlassIcon className="w-32 h-32 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 italic">
                  "Why Laxmi Nagar prefers FunwithJuli?"
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  "Most agencies use fake photos. We verify every girl via video
                  call before listing. In a crowded place like Laxmi Nagar,
                  discretion is our priority."
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-bold">Juli Sharma</p>
                    <p className="text-[10px] uppercase text-pink-500">
                      Agency Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing/Service Grid --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
          Service Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Student Fun",
              icon: <UserIcon className="w-6 h-6" />,
              price: "3k",
              tag: "Most Popular",
            },
            {
              name: "Executive Date",
              icon: <ShieldCheckIcon className="w-6 h-6" />,
              price: "5k",
              tag: "Classy",
            },
            {
              name: "B2B Special",
              icon: <BoltIcon className="w-6 h-6" />,
              price: "4k",
              tag: "Relaxing",
            },
            {
              name: "Night Queen",
              icon: <SparklesIcon className="w-6 h-6" />,
              price: "10k",
              tag: "VIP",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 p-8 rounded-3xl hover:border-pink-200 hover:shadow-xl hover:shadow-pink-50/50 transition-all"
            >
              <div className="w-12 h-12 text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-tighter">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-4">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">
                Starting from{" "}
                <span className="text-slate-900 font-bold">₹{item.price}</span>
              </p>
              <Link
                to="/gallery"
                className="text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                BOOK NOW <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Privacy & Security --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Privacy is our{" "}
              <span className="text-pink-500">Religion</span>
            </h2>
            <p className="text-slate-400">
              In Laxmi Nagar, we understand the importance of keeping things
              low-key. We follow 3-tier security for every booking.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <FingerPrintIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Encrypted Data</h4>
                <p className="text-sm text-slate-400">
                  Your number and details are deleted immediately after the
                  service is completed.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Discrete Arrival</h4>
                <p className="text-sm text-slate-400">
                  Companions arrive in private cars. No flashy clothes or loud
                  behavior in residential areas.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Hotel Support</h4>
                <p className="text-sm text-slate-400">
                  We suggest 100% safe hotels in East Delhi where you won't face
                  any identity issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center underline decoration-indigo-500">
          Common Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How to book an independent escort in Laxmi Nagar?",
              a: "Simply call our agency number. We will send you the latest available profiles on WhatsApp. Once you select, she will reach your location within 30 minutes.",
            },
            {
              q: "Is advance payment required for booking?",
              a: "No. We believe in trust. You pay the companion directly when she meets you. Avoid any agency that asks for booking fees beforehand.",
            },
            {
              q: "Can I book a call girl for a hotel in Nirman Vihar?",
              a: "Yes, Nirman Vihar and Preet Vihar are within our 15-minute delivery zone. Our girls are familiar with all major premium hotels in that belt.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-slate-900 list-none">
                {faq.q}
                <span className="text-pink-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="bg-pink-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Ready for some real action?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="bg-white text-pink-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all"
            >
              CALL NOW: {phoneNumber || ""}
            </a>
            <a
              href={
                phoneNumber
                  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
                  : ""
              }
              className="bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all"
            >
              WHATSAPP CHAT
            </a>
          </div>
          <p className="mt-8 text-pink-100 text-sm font-medium">
            Laxmi Nagar | Nirman Vihar | Preet Vihar | Shakarpur
          </p>
        </div>
      </section>
    </div>
  );
};

export default LaxmiNagar;
