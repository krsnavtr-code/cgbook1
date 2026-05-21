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

const Palam = () => {
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
    "Hello FunWithJuli, I am near Palam and want to verify independent companion profile listings available for outcall delivery right now.",
  );

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1E293B] font-mono antialiased selection:bg-[#15803D] selection:text-white">
      <MetaTags
        title="Escort Service in Palam - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Palam South West Delhi. High-profile models, domestic flight companions, and elite independent call girls near Palam Colony and Dwarka border."
        keywords="escort service palam, call girl palam, palam call girls, independent escorts south west delhi, palam colony call girls"
      />

      {/* --- Terminal Rail Floating Action Triggers --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4.5 rounded-none border border-[#1E293B] shadow-[4px_4px_0px_#1E293B]"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#15803D] text-white p-4.5 rounded-none border border-[#1E293B] shadow-[4px_4px_0px_#1E293B]"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* --- Terminal Deck Split Hero Layout --- */}
      <section className="relative bg-white pt-16 pb-24 border-b-2 border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Sector: Tracking Columns */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1E293B] text-[#86EFAC] px-3 py-1 text-xs font-bold tracking-widest uppercase">
                [ SW-DISTRICT FREQUENCY // PALAM VECTOR CORE ]
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#1E293B] leading-none">
                PALAM SUBURBAN <br />
                <span className="text-white bg-[#15803D] border border-[#1E293B] px-3 inline-block my-1.5 shadow-[4px_4px_0px_#1E293B]">
                  PRIVACY PORTAL
                </span>
              </h1>

              <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Direct logistics interface managing verified outcall
                companionship models across South-West Delhi’s historic
                residential sectors. Safely match with independent college
                scholars, regional cabin hostesses, and premium local profiles.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4 bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#15803D] transition-colors border border-[#1E293B] shadow-[4px_4px_0px_#15803D]"
                >
                  ESTABLISH_DISPATCH_FREQUENCY
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4 bg-white text-[#1E293B] text-xs font-bold uppercase tracking-wider hover:bg-[#F0F2F5] transition-colors border border-[#1E293B]"
                >
                  ACCESS_IDENTITY_INDEX
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>✓ NO DEPOSIT SCHEMES</span>
                <span>•</span>
                <span>✓ CASH TRANSPARENCY ON MEETING</span>
              </div>
            </div>

            {/* Right Sector: Encased Manifest Portrait Frame */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="bg-[#F0F2F5] border border-[#1E293B] p-4 max-w-sm w-full shadow-[8px_8px_0px_#1E293B]">
                <div className="relative h-[28rem] bg-white border border-[#1E293B] overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter contrast-[104%] brightness-[96%]"
                    alt="Palam Colony Verified Private Companion Profile"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1E293B] text-[#86EFAC] text-[9px] font-bold tracking-widest text-center py-1.5">
                    RAD_ENTRY: PALAM_DOMESTIC // AREA_GRID_LOCK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Structural Sector Metric Copy Block --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#1E293B] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-[6px_6px_0px_rgba(30,41,59,0.04)]">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-[#15803D] tracking-widest block">
              // AIRBASE ADJACENT METRICS
            </span>
            <h2 className="text-xl font-black uppercase text-[#1E293B] tracking-tight">
              Domestic Sub-District Dispatch Logistics
            </h2>
          </div>

          <div className="lg:col-span-8 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              Palam acts as an incredibly deep-rooted residential grid,
              bordering heavy military aviation assets, transit crossings, and
              major modern extensions. Whether you are occupying a premium
              residential space inside{" "}
              <strong className="text-[#1E293B] font-semibold">
                Palam Colony
              </strong>
              , transiting near the railway hub lines, or checked into local
              hotels flanking the West Delhi lanes, private outcall dispatch
              runs smoothly.
            </p>
            <p>
              Our automated matching desk routes data accurately to connect your
              precise preferences with independent models, domestic flight
              crews, and executive call girls. Quick, highly secure transit
              paths blanket the entire zone, delivering dispatches efficiently
              into{" "}
              <span className="text-[#1E293B] font-mono bg-green-50 px-1 text-xs font-bold">
                Dwarka Sub-City, Palam Village, Sadnagar, Mahipalpur border
                wings, and Janakpuri sectors
              </span>{" "}
              within 15 to 20 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* --- Grid-Tracking Price Manifesto Tiers --- */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-wider text-slate-400">
          [ FLIGHT LINE ACCOUNTABILITY LOGS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { segment: "Student Fun", rate: "3,000", trackCode: "PLM-STU-01" },
            {
              segment: "Executive Date",
              rate: "5,000",
              trackCode: "PLM-EXE-02",
            },
            { segment: "B2B Special", rate: "4,000", trackCode: "PLM-B2B-03" },
            { segment: "Night Queen", rate: "10,000", trackCode: "PLM-VIP-04" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#1E293B] p-6 flex flex-col justify-between shadow-[4px_4px_0px_#1E293B] hover:bg-[#F0F2F5] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                  <span>{item.trackCode}</span>
                  <span className="text-[#15803D]">[ONLINE]</span>
                </div>
                <h3 className="text-sm font-black uppercase text-[#1E293B]">
                  {item.segment}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Direct assignment allocation extending seamlessly to your
                  private sector residence, local apartment, or star room
                  location.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">
                    FARE_VAL
                  </span>
                  <span className="text-lg font-black text-[#15803D]">
                    ₹{item.rate}
                  </span>
                </div>
                <Link
                  to="/gallery"
                  className="text-[10px] font-black text-[#1E293B] hover:text-[#15803D] uppercase tracking-wider flex items-center justify-between pt-3 mt-3 border-t border-slate-50 group"
                >
                  VALIDATE AIR LOOKBOOK{" "}
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Tactical Discretion Security Channels --- */}
      <section className="py-16 bg-[#1E293B] text-white border-t border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-l border-emerald-500 pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Scrubbed Identity Records
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                All voice matching tracks, digital interaction history, and
                address checkpoints are fully wiped from local temp nodes upon
                session wrap.
              </p>
            </div>

            <div className="space-y-2 border-l border-emerald-500 pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Unmarked Civilian Fleet
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Companions transit utilizing entirely ordinary personal
                transport nodes, integrating without detection into everyday
                local colony traffic flows.
              </p>
            </div>

            <div className="space-y-2 border-l border-emerald-500 pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Airport Boundary Clearances
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Logistics models are calibrated to bypass screening protocols
                across major regional guest towers, resident societies, and
                boutique spaces safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Terminal Telemetry FAQ System --- */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-black text-center uppercase tracking-[0.2em] text-[#1E293B] mb-10">
          // FLIGHT_DESK_FAQ_LOGS
        </h2>

        <div className="space-y-2">
          {[
            {
              q: "How to confirm independent call girls in Palam safely?",
              a: "Establish voice communication with our local area operator. Verified profile lookbook links corresponding to your specific sector limits will be immediately delivered via encrypted message paths.",
            },
            {
              q: "Are advance token payments requested before delivery?",
              a: "Negative. We operate on a strict advance-free framework. Full financial clearings are executed in person directly with your choice companion at your location.",
            },
            {
              q: "Can you deliver dispatches to modern properties around Dwarka lines?",
              a: "Affirmative. Dwarka apartment blocks, Palam Colony residences, local transport sectors, and adjacent Mahipalpur hotel properties sit completely within our active 15-minute dispatch radius.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-[#1E293B] rounded-none overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#1E293B] list-none cursor-pointer hover:bg-[#F0F2F5] select-none">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-[#15803D] group-open:rotate-180 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-4 font-sans text-xs text-slate-600 border-t border-[#1E293B] bg-[#FAF9FA] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- REINVENTED DESIGN: UNMARKED TACTICAL DISPATCH MANIFEST CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-10 relative shadow-[6px_6px_0px_#1E293B] text-[#1E293B]">
          {/* Top Operational Tracking Serial Header */}
          <div className="absolute top-4 right-6 text-[9px] text-slate-400 font-mono tracking-tighter text-right hidden md:block border border-[#15803D] px-2 py-1 text-[#15803D]">
            SECURE_MANIFEST // SERIAL_2026_PLM <br />
            FREQUENCY_CONFIRMED_TRUE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Readout */}
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#15803D] uppercase block">
                [ COM_NODE TRANSMISSION LINK ]
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight leading-none text-[#1E293B]">
                ENGAGE SECURE ALLOCATION ROUTES
              </h2>
              <p className="text-slate-500 font-sans text-xs max-w-xl leading-relaxed">
                Our area tracking desk runs live outcall delivery loops 24 hours
                a day across all blocks of the Palam sector. Contact operations
                to clear portfolio validation sequences.
              </p>
            </div>

            {/* Right Action Stack */}
            <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#1E293B] text-white py-3.5 font-bold uppercase tracking-wider hover:bg-[#15803D] transition-colors border border-[#1E293B] shadow-[4px_4px_0px_#15803D]"
              >
                CALL OPERATIONS: {phoneNumber || "ESTABLISH"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#F0F2F5] text-[#1E293B] border border-[#1E293B] py-3.5 font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                WHATSAPP INTERFACE
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-[9px] font-bold text-slate-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• PALAM COLONY RAD</span>
            <span>• DWARKA SUB-SECTORS</span>
            <span>• VILLAGE CROSSWAYS</span>
            <span>• DOMESTIC TRANSIT HUBS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Palam;
