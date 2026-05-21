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

const NehruPlace = () => {
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
    "Hello FunWithJuli, I am in Nehru Place and want to check verified premium available companion rosters instantly.",
  );

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1E293B] font-mono antialiased selection:bg-[#1E293B] selection:text-[#10B981]">
      <MetaTags
        title="Escort Service in Nehru Place - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Nehru Place. Beautiful high-profile models, elite air hostess companions, and verified call girls near Nehru Place IT Hub & Business Towers."
        keywords="escort service nehru place, call girl nehru place, nehru place call girls, independent escorts south delhi"
      />

      {/* --- High-Vis Corporate Float Triggers (Mobile) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-none border border-slate-300 shadow-md"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#10B981] text-white p-4 rounded-none border border-slate-300 shadow-md"
        >
          <PhoneIcon className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* --- Cyber-Corporate Terminal Hero Deck --- */}
      <section className="relative bg-white pt-16 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Data Readout Deck */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#F0F2F5] border border-slate-300 px-3 py-1 text-xs font-bold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                SYS_STATUS: LOCAL_DISPATCH_ACTIVE
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-slate-900 leading-none">
                NEHRU PLACE <br />
                <span className="text-[#10B981]">PREMIUM</span> DATALINK
              </h1>

              <div className="h-1 w-24 bg-slate-900 mx-auto lg:mx-0"></div>

              <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Streamlining high-profile personal matchmaking across the
                capital's premier commercial tech center. Review live
                identity-verified independent models, corporate flight
                hostesses, and elite companions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4 bg-slate-900 text-[#10B981] text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors border border-slate-700"
                >
                  CALL_COMMUNICATION_DESK
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors border border-slate-300"
                >
                  SECURE_LOOKBOOK_FILE
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>[01] NO ADVANCE TOKENS</span>
                <span>[02] DIRECT HAND SETTLEMENT</span>
              </div>
            </div>

            {/* Right Terminal Data Inset Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F0F2F5] border border-slate-300 p-3 mx-auto max-w-sm">
                <div className="relative h-[28rem] bg-white border border-slate-300 overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter saturate-[95%] contrast-[102%]"
                    alt="Nehru Place Executive System Companion Presentation Portfolio"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-[#10B981] text-[9px] font-bold px-2 py-0.5 border border-slate-700">
                    ID_VERIFIED_SECURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Density Node Descriptive Block --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-300 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-[#10B981] tracking-widest block">
              // REGIONAL NODE
            </span>
            <h2 className="text-xl font-bold uppercase text-slate-900 tracking-tight">
              Corporate Accompaniment Channels Across IT Sectors
            </h2>
          </div>

          <div className="lg:col-span-8 font-sans text-xs sm:text-sm text-slate-500 leading-relaxed space-y-4">
            <p>
              Nehru Place stands uniquely as an intense nexus of corporate
              commerce and vast technology exchanges. Whether you are concluding
              business negotiations near the corporate towers of{" "}
              <strong className="text-slate-900 font-semibold">
                Eros Corporate Tower
              </strong>
              , checking into local high-end hospitality blocks, or resting
              post-transit, accessing exclusive independent companionship is
              processed immediately.
            </p>
            <p>
              Our automated directory system interfaces you directly with
              premium independent girls, college scholars, and high-profile call
              girls. Secure local transit channels wrap the entire neighborhood,
              extending dispatches fluidly into{" "}
              <span className="text-slate-900 font-bold underline bg-slate-100 px-1">
                Kalkaji, Greater Kailash, Chittaranjan Park (CR Park), and Okhla
                Phase areas
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* --- Clean Database Structured Price Logs --- */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-wider text-slate-400">
          [ ROSTER DATA INDEX TIERS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "Student Fun", cost: "3,000", node: "SYS-NODE-01" },
            { tag: "Executive Date", cost: "5,000", node: "SYS-NODE-02" },
            { tag: "B2B Special", cost: "4,000", node: "SYS-NODE-03" },
            { tag: "Night Queen", cost: "10,000", node: "SYS-NODE-04" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-300 p-6 flex flex-col justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>{card.node}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                </div>
                <h3 className="text-sm font-bold uppercase text-slate-900">
                  {card.tag}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Full premium directory parameters including customized hotel
                  outcalls and safe date setups.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">
                    BASE_VAL
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    ₹{card.cost}
                  </span>
                </div>
                <Link
                  to="/gallery"
                  className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider flex items-center justify-between pt-3 mt-3 border-t border-slate-100"
                >
                  ACCESS_ALBUM <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- System Security Protocol Blocks --- */}
      <section className="py-16 bg-white border-t border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F0F2F5] border border-slate-300 text-slate-700">
                <FingerPrintIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Encrypted Log Erasure
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  All active communication links, phone metadata records, and
                  text variables are completely purged from storage upon session
                  clearance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F0F2F5] border border-slate-300 text-slate-700">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Civilian Fleet Dispatches
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Companions travel strictly utilizing routine, unmarked
                  transportation means to merge completely with standard
                  business flows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F0F2F5] border border-slate-300 text-slate-700">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Corporate Hotel Clearance
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Logistics routes align smoothly with standard safety
                  guidelines across central commercial high-rises and business
                  hotel wings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Technical Data FAQ Area --- */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-bold text-center uppercase tracking-[0.2em] text-slate-400 mb-10">
          [ CORE_FAQ_RESOLUTIONS_LOG ]
        </h2>

        <div className="space-y-2">
          {[
            {
              q: "How can I confirm independent call girl access in Nehru Place?",
              a: "Establish a direct call with our centralized routing terminal. Freshly verified portfolios matching your exact corporate tower radius will be shared instantly via message chains.",
            },
            {
              q: "Are token cash advance transfers required?",
              a: "Negative. We operate on strict advance-free parameters. Full transaction clearances are completed directly with your chosen companion upon absolute physical satisfaction.",
            },
            {
              q: "Can you execute companion dispatches to Kalkaji hotels?",
              a: "Affirmative. Kalkaji residential arcs, Eros Corporate Tower, Okhla offices, and CR Park blocks drop perfectly inside our accelerated 15-to-20 minute dispatch circle.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-slate-300 rounded-none overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-slate-900 list-none cursor-pointer hover:bg-[#F0F2F5]">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-slate-400 group-open:rotate-180 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-4 font-sans text-xs text-slate-500 border-t border-slate-200 bg-[#F0F2F5]/50 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- REINVENTED DESIGN: SYSTEM LOG DATA RECEIPT CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white border-4 border-double border-slate-400 p-6 sm:p-10 relative text-slate-900">
          {/* Decorative Terminal Dots */}
          <div className="absolute top-3 left-4 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>

          <div className="text-right text-[9px] text-slate-400 uppercase font-bold border-b border-dashed border-slate-300 pb-3 mb-6">
            RECEIPT_ID: 2026-NP-CONCIERGE-LOG // SECURE_TRUE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Readout */}
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold text-[#10B981] tracking-widest uppercase block">
                [ ACCESS ROUTING GATEWAY ]
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none text-slate-900">
                INITIALIZE VERIFIED COMPANION CODES
              </h2>
              <p className="text-slate-400 font-sans text-xs max-w-xl leading-relaxed">
                Our administrative operators manage direct outcall dispatches 24
                hours a day across the whole South Delhi tech corridor.
                Establish contact to filter active matches.
              </p>
            </div>

            {/* Right Terminal Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-slate-900 text-[#10B981] py-3 font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors border border-slate-700"
              >
                EXECUTE_CALL: {phoneNumber || "CONNECT"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#F0F2F5] text-slate-700 border border-slate-300 py-3 font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                SECURE_WHATSAPP_LINK
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-slate-300 text-[9px] font-bold text-slate-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• NEHRU TOWER MAIN</span>
            <span>• KALKAJI NODE HUBS</span>
            <span>• CR PARK SECTORS</span>
            <span>• OKHLA REGIONAL STRIPS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NehruPlace;
