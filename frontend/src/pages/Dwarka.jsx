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

const Dwarka = () => {
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
    "Hello FunWithJuli, I am located in Dwarka and would like to review verified sub-urban portfolios.",
  );

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-slate-800 font-mono selection:bg-cyan-500 selection:text-white">
      <MetaTags
        title="Escort Service in Dwarka - Call Girl FunwithJuli 24/7"
        description="Experience the highest-rated escort service in Dwarka. Verified independent call girls, premium models, and upscale companionship across all sectors of Dwarka."
        keywords="escort service dwarka, call girl dwarka, dwarka call girls, independent escorts dwarka, russian escort dwarka sector 10"
      />

      {/* --- Cyber-Floating Action Deck (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 p-4 rounded-none border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-white transform active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-cyan-500 p-4 rounded-none border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-white"
        >
          <PhoneIcon className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* --- Matrix-Grid Hero Section --- */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white border-b-4 border-slate-900">
        {/* Subtle Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Technical Data Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-cyan-400 border border-slate-900 px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                <BoltIcon className="w-3.5 h-3.5 text-cyan-400" />
                SYSTEM STATUS: ACTIVE IN DWARKA
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight leading-none">
                VERIFIED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                  ESCORT INTERFACE
                </span>{" "}
                <br />
                DWARKA HUBS
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Access structured verification parameters. Connect with direct
                independent models, premium college rosters, and elite hostesses
                operating systematically across Dwarka sectors and neighboring
                commercial developments.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-6 py-4 bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all"
                >
                  INITIALIZE CALL
                </a>
                <Link
                  to="/photos"
                  className="px-6 py-4 bg-slate-100 text-slate-900 font-bold uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:bg-slate-200 transition-all"
                >
                  DATA GALLERY
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5 border border-slate-200 px-2 py-1 bg-slate-50">
                  <CheckBadgeIcon className="w-4 h-4 text-emerald-600" /> SECURE
                  ESCROW / ZERO ADVANCE
                </span>
                <span className="flex items-center gap-1.5 border border-slate-200 px-2 py-1 bg-slate-50">
                  <CheckBadgeIcon className="w-4 h-4 text-emerald-600" /> FULL
                  ENCRYPTED PROTOCOLS
                </span>
              </div>
            </div>

            {/* Right Picture Column - Wireframe Isometric Mock Design */}
            <div className="lg:col-span-5 w-full">
              <div className="relative mx-auto max-w-sm lg:max-w-none border-4 border-slate-900 p-2 bg-slate-100 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                <div className="relative h-96 w-full bg-slate-200 overflow-hidden border-2 border-slate-900">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter contrast-[102%] saturate-[95%]"
                    alt="Dwarka Verified Companion Interface Data"
                  />

                  {/* Digital Layout Badge */}
                  <div className="absolute top-3 right-3 bg-slate-950/90 border border-cyan-400 text-cyan-400 text-[10px] px-2 py-0.5">
                    IMG_REF // 2026
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-slate-950 border-t-2 border-slate-900 p-3 text-white flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                        SUB-URBAN RADIUS
                      </p>
                      <p className="text-xs font-bold text-cyan-400">
                        DWARKA SECTORS 1 - 23
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                        DISPATCH STATUS
                      </p>
                      <p className="text-xs font-bold text-emerald-400">
                        READY & TIMED
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sector-Based Technical Grid Content --- */}
      <section className="py-20 bg-[#EFF3F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-slate-900 bg-white p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <div className="space-y-6">
              <div className="border-b-2 border-dashed border-slate-200 pb-4">
                <span className="text-xs font-bold text-indigo-600">
                  LOCATIONAL MAPPING
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1 uppercase">
                  Sub-Urban Logistics & Deployment Parameters
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                <p>
                  As Delhi's primary structured mega-suburb, Dwarka requires a
                  precise approach to logistical management. Whether accessing
                  upscale hospitality configurations near the{" "}
                  <strong className="text-slate-900 font-bold">
                    Dwarka Sector 10 & 11 Commercial Complexes
                  </strong>
                  , lodging across premier high-rise residencies, or transiting
                  from the{" "}
                  <strong className="text-slate-900 font-bold">
                    IGI Airport Aerocity Corridor
                  </strong>
                  , we align premium match configurations instantly.
                </p>
                <p>
                  Our system maintains immediate updates on independent
                  profiles, high-profile corporate hostesses, and international
                  companions. Fulfillment operations execute delivery arrays
                  seamlessly across all prominent local sectors, including{" "}
                  <span className="text-cyan-600 font-mono font-bold">
                    Sector 6, Sector 12, Sector 22, Palam, and Janakpuri belts
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-dashed border-slate-200 text-xs text-slate-900 font-bold">
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  HIGH-PROFILE SHOOT MODELS
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  INDEPENDENT CALL UNITS
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  DISCRETE CORPORATE ACCOMMODATION
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  SECTOR SAFE OUT-CALL ARRAYS
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  PREMIUM IN-CALL DATA CENTERS
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-cyan-600 shrink-0" />{" "}
                  ELITE GFE LOGISTICAL MODES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Schematic Pricing Matrix --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:text-left">
          <span className="text-xs font-bold text-slate-500">
            TIER SPECIFICATIONS
          </span>
          <h2 className="text-2xl font-black text-slate-950 uppercase mt-0.5">
            Roster Matrix Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "SYS-A",
              name: "Student Fun",
              price: "3,000",
              status: "HIGH REQ",
              icon: <UserIcon className="w-4 h-4" />,
            },
            {
              id: "SYS-B",
              name: "Executive Date",
              price: "5,000",
              status: "PREMIUM",
              icon: <ShieldCheckIcon className="w-4 h-4" />,
            },
            {
              id: "SYS-C",
              name: "B2B Special",
              price: "4,000",
              status: "RELAXATION",
              icon: <BoltIcon className="w-4 h-4" />,
            },
            {
              id: "SYS-D",
              name: "Night Queen",
              price: "10,000",
              status: "VIP ONLY",
              icon: <SparklesIcon className="w-4 h-4" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border-2 border-slate-900 rounded-none p-5 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all"
            >
              <div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-3">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">
                    {item.id}
                  </span>
                  <span className="text-[9px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 uppercase tracking-wide">
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 mb-2">
                  {item.icon}
                  <h3 className="text-base font-black uppercase tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 font-sans mt-3">
                  BASE TRANSFER RATES
                  <span className="block text-slate-950 font-mono text-lg font-black mt-0.5">
                    ₹{item.price}
                  </span>
                </p>
              </div>
              <Link
                to="/gallery"
                className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center justify-between pt-4 border-t border-slate-100 mt-6"
              >
                ACCESS PROTOCOL <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Security Framework Modules --- */}
      <section className="py-20 border-t-2 border-b-2 border-dashed border-slate-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-2">
            <h2 className="text-2xl font-black text-slate-950 uppercase">
              Security Blueprint Framework
            </h2>
            <p className="text-slate-500 text-xs font-sans leading-relaxed">
              Operational parameters utilize a redundant 3-layer safety system
              guaranteeing full data scrubbing across all sector interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-5 bg-slate-50 relative">
              <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-300 font-mono">
                01 // LAYER
              </div>
              <div className="w-8 h-8 bg-slate-950 text-cyan-400 flex items-center justify-center mb-4 border border-slate-900">
                <FingerPrintIcon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black uppercase text-slate-950 mb-1">
                Volatile Logging Arrays
              </h4>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                All digital endpoints, phone records, and coordinate pointers
                are securely purged from hardware controllers immediately post
                transaction.
              </p>
            </div>

            <div className="border border-slate-200 p-5 bg-slate-50 relative">
              <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-300 font-mono">
                02 // LAYER
              </div>
              <div className="w-8 h-8 bg-slate-950 text-cyan-400 flex items-center justify-center mb-4 border border-slate-900">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black uppercase text-slate-950 mb-1">
                Unmarked Dispatch Logistics
              </h4>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                Companions route through civilian personal transport networks
                without any external marking parameters to align safely with
                sector regulations.
              </p>
            </div>

            <div className="border border-slate-200 p-5 bg-slate-50 relative">
              <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-300 font-mono">
                03 // LAYER
              </div>
              <div className="w-8 h-8 bg-slate-950 text-cyan-400 flex items-center justify-center mb-4 border border-slate-900">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-black uppercase text-slate-950 mb-1">
                Commercial Property Safeties
              </h4>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                Our logistics platform matches reliably with administrative
                safety standards at premium regional hotel and residential
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Terminal-Style FAQ Area --- */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-slate-400">
            // RESOLUTION CONSOLE
          </span>
          <h2 className="text-2xl font-black text-slate-950 uppercase">
            Frequently Queried Parameters
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How to book an independent escort in Dwarka?",
              a: "Initialize direct telephone connectivity or request channel streaming. Verified profiles mapped to your current sector coordinates will be transmitted instantly via secure platform loops.",
            },
            {
              q: "Is advance payment required for booking?",
              a: "Negative. The platform relies strictly on verified physical-introduction trust metrics. Full clearance balances are settled direct at physical rendezvous point. Zero advance logging fees requested.",
            },
            {
              q: "Can I book a call girl for a hotel in Sector 10?",
              a: "Affirmative. Dwarka Sector 10, Sector 12, Janakpuri, and adjacent sub-urban core hospitality frameworks reside inside our 15-minute high-priority dispatch limits.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border-2 border-slate-900 rounded-none overflow-hidden transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
            >
              <summary className="flex items-center justify-between gap-4 p-4 font-bold text-xs sm:text-sm text-slate-950 list-none cursor-pointer hover:bg-slate-50">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-cyan-600 group-open:rotate-180 text-[10px] transition-transform duration-150">
                  [+]
                </span>
              </summary>
              <div className="p-4 text-xs text-slate-600 border-t-2 border-slate-900 bg-slate-50/50 leading-relaxed font-sans">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- Technical Interface CTA Grid Section --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative border-4 border-slate-900 bg-white p-8 sm:p-12 lg:p-16 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="text-xs font-bold text-slate-400">
              // TERMINAL ENDPOINT
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              INITIALIZE LOGISTICS SECURELY
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
              Our dynamic routing systems run 24/7 across all primary sub-urban
              corridors. Connect with dispatch to complete database lookups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-slate-900 text-cyan-400 border-2 border-slate-900 px-6 py-4 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#22d3ee] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#22d3ee] transition-all"
              >
                CALL OVERRIDE: {phoneNumber || "CONNECT"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-current inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 border-2 border-slate-900 px-6 py-4 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all"
              >
                SECURE WHATSAPP STREAM
              </a>
            </div>

            <p className="pt-4 text-[9px] font-bold text-slate-400 tracking-widest uppercase">
              DWARKA RESIDENCY HUBS • SECTOR 10 • SECTOR 22 • PALAM • JANAKPURI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dwarka;
