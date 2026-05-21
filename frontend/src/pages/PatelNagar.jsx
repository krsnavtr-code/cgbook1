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

const PatelNagar = () => {
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
    "Hello FunWithJuli, I am around Patel Nagar and want to check verified independent companion availability for an outcall booking right now."
  );

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] font-mono selection:bg-[#1E3A8A] selection:text-white">
      <MetaTags
        title="Escort Service in Patel Nagar - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Patel Nagar Central Delhi. Beautiful college student models, independent call girls, and top companions near Patel Nagar Metro and Shadipur."
        keywords="escort service patel nagar, call girl patel nagar, patel nagar call girls, independent escorts central delhi, rajendra nagar call girls"
      />

      {/* --- Vintage Blueprint Floating Actions (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:hidden">
        <a
          href={phoneNumber ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-none border border-[#0F172A] shadow-[4px_4px_0px_rgba(30,58,138,1)]"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#C2410C] text-white p-4 rounded-none border border-[#0F172A] shadow-[4px_4px_0px_rgba(30,58,138,1)]"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* --- Blueprint Grid Structural Hero Section --- */}
      <section className="relative pt-12 pb-20 bg-white border-b-2 border-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Architectural Layout Title */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 py-4 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center gap-2 bg-[#1E3A8A] text-white px-3 py-1 text-xs font-bold tracking-widest">
                [ REGIONAL DISPATCH: SECTOR_PTN_2026 ]
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">
                PATEL NAGAR <br />
                <span className="text-[#C2410C]">INDEPENDENT</span> <br />
                ROSTER GATEWAY
              </h1>

              <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Direct outcall allocation interface servicing Central-West Delhi's upscale sectors. Instantly access verified independent models, selective college scholars, and elite companions operating within secure hotel and residential perimeters.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-6 py-4 bg-[#C2410C] text-white font-bold uppercase text-xs tracking-wider border border-[#0F172A] shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:bg-[#1E3A8A] transition-colors"
                >
                  ESTABLISH COMM_LINE
                </a>
                <Link
                  to="/photos"
                  className="px-6 py-4 bg-white text-[#0F172A] font-bold uppercase text-xs tracking-wider border border-[#1E3A8A] shadow-[4px_4px_0px_rgba(194,65,12,1)] hover:bg-slate-50"
                >
                  BROWSE SPEC_LOOKBOOK
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span className="bg-[#F1F5F9] px-2 py-1 text-[#0F172A] border border-slate-300">✓ ZERO UPFRONT FEES</span>
                <span className="bg-[#F1F5F9] px-2 py-1 text-[#0F172A] border border-slate-300">✓ IN-PERSON DIRECT CASH</span>
              </div>
            </div>

            {/* Right Column: Matte Embedded Photo Frame */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="bg-[#1E3A8A] p-4 w-full max-w-sm border border-[#0F172A] shadow-[8px_8px_0px_rgba(194,65,12,0.2)]">
                <div className="relative h-[28rem] w-full bg-slate-100 overflow-hidden border border-[#0F172A]">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter contrast-[103%] saturate-[98%]"
                    alt="Patel Nagar Central Delhi Executive Escort Presentation"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1E3A8A] text-white text-[10px] uppercase font-bold tracking-widest text-center py-1.5">
                    VERIFIED RAD: PATEL_METRO // CENTRAL_WEST
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- District Mapping Copy Block --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#1E3A8A] p-6 sm:p-10 shadow-[6px_6px_0px_rgba(30,58,138,0.05)]">
          <div className="border-b border-[#1E3A8A] pb-4 mb-6">
            <span className="text-[10px] uppercase font-bold text-[#C2410C] tracking-widest block">// DISTRICT ARCHITECTURE METRICS</span>
            <h2 className="text-2xl font-black text-[#0F172A] uppercase mt-1">Central-West Demography Deployment</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
            <p>
              Patel Nagar acts as a foundational residential and commercial crossroads in Delhi, linking established, sprawling colonies with high-profile commercial districts. Whether your stay is positioned near the busy corporate lanes of <strong className="text-[#0F172A] font-bold">Patel Nagar Metro Station</strong>, checking into local high-end residences, or holding corporate meetings around local centers, access mapping coordinates function seamlessly here.
            </p>
            <p>
              Our dynamic coordination database links your specifications instantly with top-tier independent girls, elite air hostess models, and private call girls. Prompt outcall transit operations navigate across the entire regional tier, reaching smoothly into <span className="text-[#0F172A] font-mono bg-[#1E3A8A]/5 px-1 font-bold">West Patel Nagar, East Patel Nagar, South Patel Nagar, Shadipur, Rajendra Nagar, and Kirti Nagar hubs</span> within 15 to 20 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* --- Structural Blueprint Cost Grids --- */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-widest text-slate-400">
          [ DEPLOYMENT COST LOGS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "Student Fun", rate: "3,000", code: "PTN-STU-01" },
            { tag: "Executive Date", rate: "5,000", code: "PTN-EXE-02" },
            { tag: "B2B Special", rate: "4,000", code: "PTN-B2B-03" },
            { tag: "Night Queen", rate: "10,000", code: "PTN-VIP-04" },
          ].map((item, index) => (
            <div key={index} className="bg-white border border-[#1E3A8A] p-5 flex flex-col justify-between shadow-[4px_4px_0px_rgba(30,58,138,1)]">
              <div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-100 pb-2 mb-3">
                  <span>{item.code}</span>
                  <span className="text-[#C2410C] font-bold">[ACTIVE]</span>
                </div>
                <h3 className="text-base font-black uppercase text-[#0F172A]">{item.tag}</h3>
                <p className="text-[11px] text-slate-500 font-sans mt-2">Includes immediate outcall routing to premium residential colonies, boutique properties, or executive suites.</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">Base Unit</span>
                <span className="text-xl font-black text-[#0F172A]">₹{item.rate}</span>
              </div>
              <Link to="/gallery" className="text-[10px] font-bold uppercase text-slate-400 hover:text-[#C2410C] flex items-center justify-between pt-3 border-t border-slate-50 mt-4">
                VALIDATE PROFILE METRIC <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Blueprint Verification Protocol Channels --- */}
      <section className="py-16 bg-white border-t border-b border-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-2 border-l-2 border-[#C2410C] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">Wiped Session Registries</h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                All voice endpoints, coordinate logs, and interaction records are systematically erased upon final session completion to guarantee 100% privacy protection.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-[#C2410C] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">Unmarked Private Fleet</h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                Companions route using standard personal transport variables, allowing them to integrate completely into regular residential neighborhood flows undetected.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-[#C2410C] pl-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">Hotel & Residence Clearances</h4>
              <p className="text-slate-500 text-xs font-sans leading-relaxed">
                Logistics models align smoothly with administrative security loops across premium residential blocks and central boutique hotels.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Blueprint FAQ Structure --- */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-black text-center uppercase tracking-wider text-[#0F172A] mb-8">[ SECTION_FAQ_RESOLUTIONS ]</h2>
        
        <div className="space-y-2">
          {[
            {
              q: "How to confirm independent models in Patel Nagar?",
              a: "Initialize a call flow to our central routing desk. Up-to-date lookbook profiles currently active inside your specific sector radius will be transmitted immediately via secure text loops.",
            },
            {
              q: "Is there a requirement for advanced tokens or deposit transfers?",
              a: "Negative. We operate on a strict, upfront-free trust policy. All financial exchanges are finalized directly with your choice companion at your destination.",
            },
            {
              q: "Do you execute dispatches near East Patel Nagar residential arcs?",
              a: "Affirmative. East, West, and South Patel Nagar blocks, Shadipur hotel lines, and Rajendra Nagar quarters fall entirely within our fast 15-minute allocation ring.",
            },
          ].map((faq, index) => (
            <details key={index} className="group bg-white border border-[#1E3A8A] rounded-none overflow-hidden">
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#0F172A] list-none cursor-pointer hover:bg-slate-50">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-slate-400 group-open:rotate-180 text-xs">▼</span>
              </summary>
              <div className="p-4 font-sans text-xs text-slate-600 border-t border-[#1E3A8A] bg-[#FAF9FA] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- REINVENTED DESIGN: STAMPED PROJECT PERMIT CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white text-[#0F172A] p-6 sm:p-10 relative border-2 border-slate-900 shadow-[6px_6px_0_rgba(30,58,138,1)]">
          
          {/* Top Stamp Header Styling */}
          <div className="absolute top-4 right-6 text-[10px] text-slate-400 font-mono tracking-tighter text-right hidden md:block border border-dashed border-[#C2410C] p-2 text-[#C2410C]">
            APPROVED // PERMIT_2026_PTN <br />
            DISPATCH_TRUE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#C2410C] uppercase block">
                // SYSTEM ALLOCATION BOARD
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-[#0F172A]">
                INITIALIZE VERIFIED PROFILE ACCESS
              </h2>
              <p className="text-slate-500 font-sans text-xs max-w-xl leading-relaxed">
                Our administrative operators manage direct outcall dispatches 24 hours a day across all sectors of the Patel Nagar district. Establish contact to filter active matches.
              </p>
            </div>

            {/* Right Action Area */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#1E3A8A] text-white py-3.5 font-bold uppercase tracking-wider border border-[#1E3A8A] shadow-[4px_4px_0px_#C2410C] hover:bg-[#C2410C] transition-colors"
              >
                EXECUTE OVERRIDE: {phoneNumber || "CONNECT"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent text-[#0F172A] border border-[#0F172A] py-3.5 font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                WHATSAPP INTERFACE
              </a>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-slate-200 text-[9px] font-bold text-slate-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• EAST PATEL SECTORS</span>
            <span>• WEST PATEL ARCS</span>
            <span>• RAJENDRA NAGAR NODES</span>
            <span>• SHADIPUR CROSSWAYS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatelNagar;