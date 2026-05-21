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

const NewAshokNagar = () => {
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
    return number.replace(/^(\+?\0+)[\s-]*(\d+)$/, "$1$2");
  };

  const phoneNumber = ownerInfo?.callNumber
    ? formatPhoneNumber(ownerInfo.callNumber)
    : "";
  const whatsappNumber = ownerInfo?.whatsappNumber
    ? formatPhoneNumber(ownerInfo.whatsappNumber)
    : phoneNumber;

  const whatsappMessage = encodeURIComponent(
    "Hello FunWithJuli, I am at New Ashok Nagar and would like to access verified independent companion profiles right now.",
  );

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-[#1E293B] font-mono selection:bg-[#FF5A1F] selection:text-white">
      <MetaTags
        title="Escort Service in New Ashok Nagar - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in New Ashok Nagar. High-profile models, independent corporate call girls, and top companions near New Ashok Nagar Metro Station and Noida Border."
        keywords="escort service new ashok nagar, call girl new ashok nagar, new ashok nagar call girls, independent escorts east delhi, noida border call girls"
      />

      {/* --- High-Vis Wayfinding Floating Triggers --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-none border border-[#334155] shadow-[4px_4px_0px_#1E293B]"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#FF5A1F] text-white p-4 rounded-none border border-[#334155] shadow-[4px_4px_0px_#1E293B]"
        >
          <PhoneIcon className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* --- Wayfinding Split Metro Hero Deck --- */}
      <section className="relative pt-12 pb-20 bg-white border-b-2 border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Data Readout Deck */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 py-4 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center gap-2 bg-[#1E293B] text-[#FF5A1F] px-3 py-1 text-xs font-bold tracking-widest">
                [ BORDER SECTOR DISPATCH // ROUTE INTERCHANGE LIVE ]
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#1E293B] uppercase leading-none">
                NEW ASHOK NAGAR <br />
                <span className="bg-[#FF5A1F] text-white px-3 py-1 inline-block mt-2">
                  DISPATCH INTERFACE
                </span>
              </h1>

              <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hyper-efficient outcall connectivity mapping the border line
                between East Delhi and Noida. Unlock verified profiles of
                independent local models, corporate flight hostesses, and
                premium companions operating along the Blue Line corridor.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-6 py-4 bg-[#1E293B] text-white font-bold uppercase text-xs tracking-wider border border-[#1E293B] shadow-[4px_4px_0px_#FF5A1F] hover:bg-[#FF5A1F] transition-colors"
                >
                  INITIALIZE COMM_DESK DISPATCH
                </a>
                <Link
                  to="/photos"
                  className="px-6 py-4 bg-white text-[#1E293B] font-bold uppercase text-xs tracking-wider border border-[#334155] shadow-[4px_4px_0px_#1E293B] hover:bg-slate-50"
                >
                  LOAD PHOTO DIRECTORY
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span className="bg-[#F4F4F6] px-2 py-1 text-slate-700 border border-slate-300">
                  ✓ ZERO UPFRONT DEPOSITS
                </span>
                <span className="bg-[#F4F4F6] px-2 py-1 text-slate-700 border border-slate-300">
                  ✓ HAND SETTLEMENT ON ARRIVAL
                </span>
              </div>
            </div>

            {/* Right Terminal Frame Box */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="bg-[#1E293B] p-4 w-full max-w-sm border-2 border-[#334155] shadow-[8px_8px_0px_#1E293B]">
                <div className="relative h-[28rem] w-full bg-slate-200 overflow-hidden border border-[#334155]">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                    alt="New Ashok Nagar Corridor Companion Profile Visual"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-[#FF5A1F] text-white text-[10px] uppercase font-bold tracking-widest text-center py-1.5">
                    GRID_NODE: METRO_STATION_RADIUS_CORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- High-Density Interchange Logistics Overview --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#334155] p-6 sm:p-10 shadow-[6px_6px_0px_rgba(30,41,59,0.1)]">
          <div className="border-b border-[#334155] pb-4 mb-6">
            <span className="text-[10px] uppercase font-bold text-[#FF5A1F] tracking-widest block">
              // REGIONAL TRANSIT LOGISTICS
            </span>
            <h2 className="text-2xl font-black text-[#1E293B] uppercase mt-1">
              Trans-Yam Yamuna Border Alignment
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
            <p>
              New Ashok Nagar operates as a key commuter axis, matching rapid
              residential enclaves with the immediate commercial borders of{" "}
              <strong className="text-[#1E293B] font-bold">
                Noida Sectors 15, 1, and 2
              </strong>
              . Whether you are checking into private corporate apartments near
              the{" "}
              <strong className="text-[#1E293B] font-bold">
                New Ashok Nagar Metro Station
              </strong>
              , utilizing localized business hotels, or transiting between Delhi
              and Uttar Pradesh, access coordinates align immediately here.
            </p>
            <p>
              Our automated matching desk routes your custom demands directly to
              high-profile independent girls, visiting corporate hostesses, and
              premium local call girls. Fast, confidential outcall transit lines
              serve the whole grid, reaching smoothly into{" "}
              <span className="text-[#1E293B] font-mono bg-[#FF5A1F]/10 px-1 font-bold">
                Mayur Vihar Phase 1 & 3, Vasundhara Enclave, Noida Sector 62,
                and Akshardham vectors
              </span>{" "}
              within a 15-to-20 minute run.
            </p>
          </div>
        </div>
      </section>

      {/* --- Grid-Wayfinding Price Matrix Logs --- */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-widest text-slate-400">
          [ DEPARTURE ENTRY PARAMETERS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "Student Fun", rate: "3,000", line: "BLUE-LINE-ST" },
            { tag: "Executive Date", rate: "5,000", line: "BORDER-EXE-MD" },
            { tag: "B2B Special", rate: "4,000", line: "INTERCHANGE-B2B" },
            { tag: "Night Queen", rate: "10,000", line: "TERMINAL-VIP" },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#334155] p-5 flex flex-col justify-between shadow-[4px_4px_0px_#1E293B]"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-100 pb-2 mb-3">
                  <span>{card.line}</span>
                  <span className="text-[#FF5A1F] font-bold">[ROUTE_LIVE]</span>
                </div>
                <h3 className="text-base font-black uppercase text-[#1E293B]">
                  {card.tag}
                </h3>
                <p className="text-[11px] text-slate-500 font-sans mt-2">
                  Includes priority outcall dispatch to your specific apartment
                  checkpoint or metro hotel suite.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  Base Fare
                </span>
                <span className="text-xl font-black text-[#1E293B]">
                  ₹{card.rate}
                </span>
              </div>
              <Link
                to="/gallery"
                className="text-[10px] font-bold uppercase text-slate-400 hover:text-[#FF5A1F] flex items-center justify-between pt-3 border-t border-slate-50 mt-4"
              >
                VERIFY ROSTER DATA <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Border Protocol Security Strips --- */}
      <section className="py-16 bg-white border-t border-b border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-l-2 border-[#FF5A1F] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                Wiped Local Registries
              </h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                All voice connectivity traces, structural communication tracks,
                and address locations are entirely purged from database systems
                post assignment wrap.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-[#FF5A1F] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                Unmarked Transit Logistics
              </h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                Companions utilize standard private transportation links,
                crossing regional toll boundaries invisibly to match standard
                residential passenger streams.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-[#FF5A1F] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#1E293B]">
                Inter-State Clearances
              </h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                Dispatch logistics are fine-tuned to blend flawlessly into
                checking procedures at high-end apartments and business hotels
                along the Noida border line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Wayfinding Metric FAQ Blocks --- */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-black text-center uppercase tracking-wider text-[#1E293B] mb-8">
          [ TECHNICAL TERMINAL FAQ ]
        </h2>

        <div className="space-y-2">
          {[
            {
              q: "How can I verify active independent escorts in New Ashok Nagar?",
              a: "Initialize a call flow to our localized dispatch router. Freshly verified lookbook portfolios mapping to your exact station quadrant will be routed immediately via messaging tracks.",
            },
            {
              q: "Do you require advance token or transit money payments?",
              a: "Negative. We maintain a zero-advance protocol. Full system packages are handled strictly in person with your matching companion at your destination.",
            },
            {
              q: "Can you execute dispatches directly into Noida Sector hotel zones?",
              a: "Affirmative. New Ashok Nagar Metro station lines, Vasundhara corporate blocks, and Noida Sectors 15, 18, and 62 drop entirely within our active 15-to-20 minute deployment bubble.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-[#334155] rounded-none overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#1E293B] list-none cursor-pointer hover:bg-slate-50">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-slate-400 group-open:rotate-180 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-4 font-sans text-xs text-slate-600 border-t border-[#334155] bg-[#FAF9FA] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- REINVENTED DESIGN: METROPOLITAN TRANSIT TOKEN CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-[#1E293B] text-white p-6 sm:p-10 relative border-t-4 border-[#FF5A1F] shadow-[6px_6px_0_rgba(0,0,0,0.15)]">
          {/* Decorative Corner Cutouts mimicking a Transit Gate Card */}
          <div className="absolute top-4 right-6 text-[10px] text-slate-400 font-mono tracking-tighter text-right hidden md:block">
            STATION_ENTRY_REF: 2026_ASHOK_NAGAR <br />
            VALID_FOR_IMMEDIATE_DISPATCH_TRUE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#FF5A1F] uppercase block">
                // CONCIERGE NETWORK INTERCHANGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none">
                INITIALIZE SECURE DISPATCH CHANNELS
              </h2>
              <p className="text-slate-400 font-sans text-xs max-w-xl leading-relaxed">
                Our local dispatch infrastructure runs constantly across all
                border corridors of the trans-Yamuna sector. Establish voice
                communication to resolve portfolio clearance protocols.
              </p>
            </div>

            {/* Right Action Area */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#FF5A1F] text-white py-3.5 font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#FF5A1F] border border-[#FF5A1F] transition-colors"
              >
                CALL OPERATIONS: {phoneNumber || "CONNECT"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent text-white border border-white py-3.5 font-bold uppercase tracking-wider hover:bg-white hover:text-[#1E293B] transition-colors"
              >
                WHATSAPP CONSOLE
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-700 text-[9px] font-bold text-slate-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• METRO STATION BLOCKS</span>
            <span>• NOIDA BORDER CROSSWAYS</span>
            <span>• MAYUR VIHAR ARRIVALS</span>
            <span>• VASUNDHARA HUB NODES</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewAshokNagar;
