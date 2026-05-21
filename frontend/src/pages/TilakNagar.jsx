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

const TilakNagar = () => {
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
    "Hello FunWithJuli, I am near Tilak Nagar and want to check verified premium independent companion portfolios right now.",
  );

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1A1A] font-mono antialiased selection:bg-[#1A1A1A] selection:text-[#D97706]">
      <MetaTags
        title="Escort Service in Tilak Nagar - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Tilak Nagar West Delhi. High-profile models, elite college student companions, and verified call girls near Tilak Nagar Market and Metro."
        keywords="escort service tilak nagar, call girl tilak nagar, tilak nagar call girls, independent escorts west delhi, rajouri garden call girls"
      />

      {/* --- Heavy Border Bazaar Floating Triggers (Mobile) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4.5 rounded-none border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A]"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#D97706] text-white p-4.5 rounded-none border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A]"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* --- Bold Marketplace Editorial Hero Section --- */}
      <section className="relative bg-white pt-16 pb-24 border-b-2 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bold Text Stack */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#D97706] px-4 py-1 text-xs font-black tracking-widest uppercase">
                // WEST ZONE CORE : TILAK NAGAR RADIUM
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#1A1A1A] leading-none">
                TILAK NAGAR <br />
                <span className="text-[#D97706] bg-[#FAF9F5] border-2 border-[#1A1A1A] px-3 inline-block my-2 shadow-[4px_4px_0px_#1A1A1A]">
                  ELITE ROSTER
                </span>
              </h1>

              <div className="h-1 w-24 bg-[#D97706] mx-auto lg:mx-0"></div>

              <p className="text-neutral-600 font-sans text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Streamlined outcall matching framework operating across West
                Delhi’s premier commercial and market residential sectors.
                Directly interface with identity-verified independent models,
                premium air hostesses, and high-profile companions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4.5 bg-[#1A1A1A] text-white text-xs font-black uppercase tracking-wider hover:bg-[#D97706] transition-colors border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#D97706]"
                >
                  REQUEST_IMMEDIATE_DISPATCH
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4.5 bg-white text-[#1A1A1A] text-xs font-black uppercase tracking-wider hover:bg-[#FAF9F5] transition-colors border-2 border-[#1A1A1A]"
                >
                  SECURE_LOOKBOOK_ALBUMS
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                <span>[01] NO TOKEN ADVANCES</span>
                <span>•</span>
                <span>[02] IN-PERSON HAND CASH</span>
              </div>
            </div>

            {/* Right Column: Industrial Frame Image Box */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="bg-[#FAF9F5] border-2 border-[#1A1A1A] p-4 max-w-sm w-full shadow-[8px_8px_0px_#1A1A1A]">
                <div className="relative h-[28rem] bg-white border border-[#1A1A1A] overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter saturate-[102%] contrast-[105%]"
                    alt="Tilak Nagar High-Profile Independent Companion Profile Portfolio"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-[#D97706] text-[9px] font-bold px-2 py-0.5 border border-[#1A1A1A]">
                    ID_VERIFIED_SECURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Descriptive Regional Layout Block --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#1A1A1A] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-[6px_6px_0px_rgba(26,26,26,0.05)]">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-[#D97706] tracking-widest block">
              // DISTRICT SECTOR PROFILE
            </span>
            <h2 className="text-xl font-black uppercase text-[#1A1A1A] tracking-tight">
              Suburban Confidentiality Across West Delhi Hubs
            </h2>
          </div>

          <div className="lg:col-span-8 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-4">
            <p>
              Tilak Nagar stands out as an incredibly vibrant nexus, balancing
              vast local consumer marketplaces with expansive, premium
              residential blocks. Whether you are staying in luxury local
              accommodations near the{" "}
              <strong className="text-[#1A1A1A] font-semibold">
                Tilak Nagar Metro Station
              </strong>
              , spending time around the main market square, or checked into
              West Delhi luxury rooms, private matching coordination is
              fulfilled seamlessly.
            </p>
            <p>
              Our centralized booking directory links your precise parameters
              instantly with high-class independent girls, college student
              profiles, and elite call girls. High-discretion outcall transit
              routes sweep the full neighborhood zone, expanding dispatches
              smoothly into{" "}
              <span className="text-[#1A1A1A] font-bold underline bg-amber-50 px-1">
                Janakpuri, Rajouri Garden, Subhash Nagar, Vikaspuri, and Hari
                Nagar quarters
              </span>{" "}
              within a swift 15-to-20 minute run.
            </p>
          </div>
        </div>
      </section>

      {/* --- High-Contrast Marketplace Price Index Tiers --- */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-wider text-neutral-400">
          [ LOGISTICAL VALUE MATRIX LOGS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "Student Fun", cost: "3,000", node: "TLK-STU-01" },
            { tag: "Executive Date", cost: "5,000", node: "TLK-EXE-02" },
            { tag: "B2B Special", cost: "4,000", node: "TLK-B2B-03" },
            { tag: "Night Queen", cost: "10,000", node: "TLK-VIP-04" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#1A1A1A] p-6 flex flex-col justify-between shadow-[4px_4px_0px_#1A1A1A] hover:bg-[#FAF9F5] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-bold">
                  <span>{card.node}</span>
                  <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
                </div>
                <h3 className="text-sm font-black uppercase text-[#1A1A1A]">
                  {card.tag}
                </h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  Full premium directory outcall packages extending to your
                  private residence, luxury suite, or boutique hotel room.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold">
                    BASE_FEE
                  </span>
                  <span className="text-lg font-black text-[#D97706]">
                    ₹{card.cost}
                  </span>
                </div>
                <Link
                  to="/gallery"
                  className="text-[10px] font-black text-[#1A1A1A] hover:text-[#D97706] uppercase tracking-wider flex items-center justify-between pt-3 mt-3 border-t border-neutral-100 group"
                >
                  OPEN_FILE_ALBUM{" "}
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Marketplace Verification Privacy Standards --- */}
      <section className="py-16 bg-[#1A1A1A] text-white border-t-2 border-b-2 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-800 text-[#D97706] border border-neutral-700 font-bold text-xs">
                01
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Purged Interaction Logs
                </h4>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  All active phone connectivity traces, location parameters, and
                  text history variables are completely purged from storage
                  records instantly upon session wrap.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-800 text-[#D97706] border border-neutral-700 font-bold text-xs">
                02
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Unmarked Private Transit
                </h4>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  Companions travel strictly utilizing routine, unmarked
                  transportation means to merge effortlessly with standard West
                  Delhi neighborhood traffic flows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-neutral-800 text-[#D97706] border border-neutral-700 font-bold text-xs">
                03
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Hotel Security Sync
                </h4>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  Logistics pathways are perfectly aligned to handle checking
                  protocols across major business hotels, local star guest
                  houses, and premium residences safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Traditional High-Contrast FAQ Area --- */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-black text-center uppercase tracking-[0.2em] text-[#1A1A1A] mb-10">
          // MARKETPLACE_FAQ_INDEX
        </h2>

        <div className="space-y-2">
          {[
            {
              q: "How can I verify independent call girls in Tilak Nagar?",
              a: "Establish a direct call with our centralized routing terminal. Up-to-date lookbook folders matching your exact neighborhood coordinates will be shared instantly via secure message lines.",
            },
            {
              q: "Do you ask for advance token or deposit transfers?",
              a: "Negative. We function strictly on upfront-free parameters. Full transaction clearances are handled in person directly with your companion upon absolute satisfaction.",
            },
            {
              q: "Can you arrange companion dispatches to Rajouri Garden hotels?",
              a: "Affirmative. Rajouri Garden suites, Janakpuri District Centre hotel wings, Subhash Nagar blocks, and Hari Nagar residences fall entirely within our fast 15-minute delivery radius.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border-2 border-[#1A1A1A] rounded-none overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#1A1A1A] list-none cursor-pointer hover:bg-[#FAF9F5] select-none">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-[#D97706] group-open:rotate-180 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-4 font-sans text-xs text-neutral-600 border-t border-[#1A1A1A] bg-[#FAF9F5] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- REINVENTED DESIGN: BOLD FABRIC CONSIGNMENT TAG CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white border-4 border-double border-[#1A1A1A] p-6 sm:p-10 relative shadow-[8px_8px_0px_#1A1A1A] text-[#1A1A1A]">
          {/* Decorative Corner Punchhole mimicking a garment marketplace tag */}
          <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#FAF9F5] border-2 border-[#1A1A1A] hidden md:block"></div>

          <div className="text-right text-[9px] text-neutral-400 uppercase font-bold border-b border-dashed border-neutral-200 pb-3 mb-6">
            TAG_ID: 2026-TLK-MARKET-MANIFEST // CONFIDENTIAL_TRUE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Readout */}
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#D97706] uppercase block">
                [ ACCESS MANAGEMENT PORT ]
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                INITIALIZE VERIFIED PROFILE ACCESS
              </h2>
              <p className="text-neutral-500 font-sans text-xs max-w-xl leading-relaxed">
                Our local administrative desk operates active outcall dispatch
                channels 24 hours a day across all blocks of the Tilak Nagar
                sector. Get in touch to complete confirmation loops.
              </p>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#1A1A1A] text-white py-3.5 font-bold uppercase tracking-wider hover:bg-[#D97706] transition-colors border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#D97706]"
              >
                CONNECT LINE: {phoneNumber || "ESTABLISH"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#FAF9F5] text-[#1A1A1A] border-2 border-[#1A1A1A] py-3.5 font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                WHATSAPP OVERRIDE
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-neutral-200 text-[9px] font-bold text-neutral-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• MARKET PLACE RADIUS</span>
            <span>• JANAKPURI CENTRAL WINGS</span>
            <span>• RAJOURI SECTOR HUBS</span>
            <span>• VIKASPURI NEIGHBORHOODS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TilakNagar;
