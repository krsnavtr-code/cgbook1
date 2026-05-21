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

const Munirka = () => {
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

  const whatsappMessage = encodeURIComponent(
    "Hello FunWithJuli, I am visiting Munirka and would like to look at premium profiles. Please share availability.",
  );

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans selection:bg-pink-500 selection:text-white">
      <MetaTags
        title="Escort Service in Munirka - Call Girl FunwithJuli 24/7"
        description="Get the best escort service in Munirka. Top-rated call girls in Munirka, South Delhi. Independent models, college girls, and 100% verified profiles. Call now!"
        keywords="escort service munirka, call girl munirka, south delhi escorts, independent call girl munirka, russian escort munirka"
      />

      {/* --- Floating Action Action Deck (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-2xl text-white transform active:scale-95 transition-transform"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-full shadow-2xl text-white animate-pulse"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>

      {/* --- Premium Asymmetric Hero Banner --- */}
      <section className="relative pt-16 pb-24 lg:pt-28 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-[#111827] via-[#0b0f19] to-[#0b0f19]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 px-4 py-1.5 rounded-full">
              <BoltIcon className="w-4 h-4 text-pink-500 animate-bounce" />
              <span className="text-pink-400 text-xs font-black uppercase tracking-widest">
                Elite Companionship • South Delhi Live
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
              Premium <br className="hidden md:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400">
                Escort Service
              </span>{" "}
              in Munirka
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Bypass generic directories and unverified aggregate boards.
              Explore curated, verified profiles featuring premium independent
              models and high-end companions serving Munirka and close proximity
              luxury hubs.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-pink-900/30 active:scale-[0.99]"
              >
                <PhoneIcon className="w-5 h-5" /> Instant Booking
              </a>
              <Link
                to="/photos"
                className="px-8 py-4 bg-slate-900/80 border border-slate-800 text-gray-200 rounded-xl font-bold hover:bg-slate-800 transition-all hover:border-slate-700"
              >
                Explore Portfolios
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckBadgeIcon className="w-4 h-4 text-pink-500" /> 100% ZERO
                ADVANCE
              </span>
              <span className="flex items-center gap-1.5">
                <CheckBadgeIcon className="w-4 h-4 text-pink-500" /> DISCRETION
                SECURED
              </span>
            </div>
          </div>

          {/* Right Side: High-End Single Crop Card */}
          <div className="w-full lg:w-2/3 relative mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl bg-slate-950">
                <img
                  src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  alt="Premium Luxury Escort Portfolio"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                {/* Floating Micro metrics */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                  <div>
                    <p className="text-xs text-pink-400 font-bold uppercase tracking-wider">
                      Arrival Response
                    </p>
                    <p className="text-sm font-black text-white">
                      Under 20 Mins
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-purple-400 font-bold uppercase tracking-wider">
                      Active Agency Roster
                    </p>
                    <p className="text-sm font-black text-white">
                      50+ Verified Portfolios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Grid-Optimized Localized Text Section --- */}
      <section className="py-20 bg-[#0e1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 space-y-6 bg-[#0b0f19]/60 border border-slate-800/80 p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Experience Executive Companionship <br />
                Around{" "}
                <span className="text-pink-500">Munirka Urban Corridors</span>
              </h2>

              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Munirka balances rapid transit dynamics with high-profile
                  residency belts. Whether unwinding after long business hours
                  near the{" "}
                  <strong className="text-gray-200 font-semibold">
                    Munirka Metro Loop
                  </strong>
                  , hosting private operations, or visiting key zones down the
                  path from{" "}
                  <strong className="text-gray-200 font-semibold">AIIMS</strong>
                  , we orchestrate flawless accompaniment designed around
                  relaxation metrics.
                </p>
                <p>
                  Our network profiles high-caliber individuals ranging from
                  discrete premium college companions to elite international
                  shoot models visiting the region. We offer extensive local
                  delivery fulfillment across all connected coordinates
                  including{" "}
                  <span className="text-purple-400 italic">
                    Vasant Vihar, R.K. Puram, Moti Bagh, and Shanti Niketan
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/60 text-xs sm:text-sm text-gray-300">
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    Low Profile College Profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    High-End Media Models
                  </li>
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    Discrete Corporate Hosts
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    Secure In-Call / Out-Call Modules
                  </li>
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    Premium Hotel Safe Frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-pink-500 shrink-0" />{" "}
                    Dedicated Elite GFE Services
                  </li>
                </ul>
              </div>
            </div>

            {/* Shifted Director Statement Card */}
            <div className="bg-gradient-to-br from-[#111827] to-[#1e1b4b] border border-purple-900/30 rounded-[2.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                <MagnifyingGlassIcon className="w-44 h-44 text-white" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase bg-pink-500/10 border border-pink-500/20 text-pink-400 px-3 py-1 rounded-full">
                  Director Statement
                </span>
                <h4 className="text-xl font-bold tracking-tight mt-6 mb-3 text-purple-200">
                  "Strict Verification Standards"
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  "Unlike typical directories using outdated or stolen images,
                  our agency handles real-time video validations. In
                  high-density hubs like Munirka, total operational privacy
                  forms our core baseline commitment."
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-6 mt-8">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-black text-sm text-white shadow-md">
                  J
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide">Juli Sharma</p>
                  <p className="text-[10px] uppercase text-pink-400 font-mono tracking-wider">
                    Agency Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Glassmorphic Tier Layout --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-pink-500 font-bold font-mono">
            Pricing Tiers
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Service Categorization
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Student Fun",
              icon: <UserIcon className="w-5 h-5" />,
              price: "3,000",
              tag: "Most Requested",
            },
            {
              name: "Executive Date",
              icon: <ShieldCheckIcon className="w-5 h-5" />,
              price: "5,000",
              tag: "Premium Class",
            },
            {
              name: "B2B Special",
              icon: <BoltIcon className="w-5 h-5" />,
              price: "4,000",
              tag: "Relaxation Unit",
            },
            {
              name: "Night Queen",
              icon: <SparklesIcon className="w-5 h-5" />,
              price: "10,000",
              tag: "VIP Roster",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111827]/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-pink-500/30 hover:bg-[#111827]/80 transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-pink-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[9px] font-mono font-bold text-pink-400 bg-pink-500/5 border border-pink-500/10 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Starting Price Framework{" "}
                  <span className="text-gray-200 block text-base font-bold mt-1">
                    ₹{item.price}
                  </span>
                </p>
              </div>
              <Link
                to="/gallery"
                className="text-[11px] font-black text-gray-400 hover:text-white flex items-center gap-1.5 pt-6 border-t border-slate-900 mt-6 group-hover:gap-2.5 transition-all"
              >
                REQUEST PROFILE{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 text-pink-500" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Security & Verification Protocols --- */}
      <section className="py-20 border-y border-slate-900 bg-gradient-to-b from-[#0b0f19] to-[#0e1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Privacy Protocols
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Operational handling incorporates secure 3-tier safety barriers
              protecting both corporate data and client identifiers across South
              Delhi zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900/30 transition-colors">
              <div className="shrink-0 w-11 h-11 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 border border-pink-500/20">
                <FingerPrintIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Volatile Data Cycles
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Call records and coordinate allocations are completely
                  scrubbed immediately following assignment fulfillments.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900/30 transition-colors">
              <div className="shrink-0 w-11 h-11 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Low-Profile Dispatch
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Companions leverage standard personal transport logistics. No
                  conspicuous markers are presented within premium local loops.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900/30 transition-colors">
              <div className="shrink-0 w-11 h-11 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Vetted Venue Match
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Our operational dispatch syncs seamlessly with major upscale
                  hospitality groups maintaining strict administrative
                  integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Architectural Accordion System --- */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-pink-500 font-bold">
            Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How to book an independent escort in Munirka?",
              a: "Connect directly via telephone interface or secure chat. Portfolios aligning with current neighborhood availability are shared seamlessly. Arrival configurations average under thirty minutes.",
            },
            {
              q: "Is advance payment required for booking?",
              a: "No advance payment matrices exist within our system. Complete transaction balance is finalized directly upon localized physical introduction. Avoid any third-party gateway requesting upfront platform charges.",
            },
            {
              q: "Can I book a call girl for a hotel in Vasant Vihar?",
              a: "Yes. Our extended delivery framework encompasses Vasant Vihar, R.K. Puram, and immediate adjacent elite hospitality structures with direct priority handling status.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-[#111827]/30 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <summary className="flex items-center justify-between gap-4 p-5 font-bold text-sm sm:text-base text-gray-200 list-none cursor-pointer hover:bg-slate-900/40">
                <span>{faq.q}</span>
                <span className="text-pink-500 group-open:rotate-180 text-xs transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-gray-400 border-t border-slate-900 bg-slate-950/40 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- High-Impact Editorial CTA with Single Image Backdrop --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div
          className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden border border-slate-800"
          style={{
            backgroundImage: `url('https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        >
          {/* Multiply Filter Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-[#0e1424]/90 to-[#1e1b4b]/95 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/50 via-transparent to-[#0b0f19]/90"></div>

          {/* Interactive Glow Fields */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-md">
              Secure Elite Companion Slots
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 opacity-90 max-w-xl mx-auto leading-relaxed">
              Our lines run 24/7 across South Delhi. Finalize your immediate
              luxury portfolio matching arrangements smoothly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl transform hover:opacity-95 transition-all active:scale-[0.99]"
              >
                Call Verification: {phoneNumber || "Contact"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl transform hover:bg-[#20ba56] transition-all active:scale-[0.99]"
              >
                <span className="w-5 h-5 fill-current flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48 2.245 2.244 3.481 5.229 3.481 8.408 0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.51-5.703-1.477l-6.281 1.648zm6.26-4.223l.348.207c1.479.878 3.189 1.341 4.931 1.341 5.176 0 9.387-4.212 9.387-9.388 0-2.507-.977-4.863-2.75-6.637-1.774-1.774-4.131-2.75-6.637-2.75-5.176 0-9.388 4.212-9.388 9.388 0 1.761.493 3.48 1.425 4.986l.228.368-1.01 3.692 3.785-.993z" />
                  </svg>
                </span>
                WhatsApp Dispatch
              </a>
            </div>

            <p className="pt-4 text-xs font-mono tracking-widest text-gray-500 uppercase">
              Munirka Belt • Vasant Vihar • R.K. Puram • Moti Bagh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Munirka;
