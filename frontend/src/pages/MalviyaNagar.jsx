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

const MalviyaNagar = () => {
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
    "Hello FunWithJuli, I am near Malviya Nagar and would like to access verified independent companion profiles right now."
  );

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#111111] font-mono selection:bg-[#111111] selection:text-[#FFD700]">
      <MetaTags
        title="Escort Service in Malviya Nagar - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Malviya Nagar. Elite college student companions, air hostess models, and verified call girls near Select Citywalk and Malviya Nagar Market."
        keywords="escort service malviya nagar, call girl malviya nagar, malviya nagar call girls, independent escorts malviya nagar"
      />

      {/* --- Raw Industrial Floating Actions (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 border-2 border-[#111111] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#FFD700] text-[#111111] p-4 border-2 border-[#111111] shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        >
          <PhoneIcon className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* --- Urban Industrial Split Hero --- */}
      <section className="relative pt-12 pb-20 bg-white border-b-4 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Bold Industrial Readout */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 py-6 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center gap-2 bg-[#111111] text-[#FFD700] px-3 py-1 text-xs font-bold tracking-widest">
                [ AUTHENTICITY PARAMETERS VERIFIED ]
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase leading-none">
                MALVIYA NAGAR <br />
                <span className="bg-[#111111] text-white px-2 py-1 inline-block my-1">
                  INDEPENDENT
                </span> <br />
                COMPANIONS
              </h1>

              <p className="text-neutral-600 text-xs sm:text-sm font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Direct access interface for localized dispatch routing. Match instantly with verified independent models, selective elite students, and upscale companions operating inside Malviya Nagar commercial and residential zones.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-6 py-4 bg-[#FFD700] text-[#111111] font-bold uppercase text-xs border-2 border-[#111111] shadow-[4px_4px_0px_rgba(11,11,11,1)] hover:bg-yellow-400 transition-all"
                >
                  INITIALIZE CALL // DISPATCH
                </a>
                <Link
                  to="/photos"
                  className="px-6 py-4 bg-white text-[#111111] font-bold uppercase text-xs border-2 border-[#111111] shadow-[4px_4px_0px_rgba(11,11,11,1)] hover:bg-neutral-50 transition-all"
                >
                  LOOKBOOK DATABASE
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                <span className="bg-[#EAEAEA] px-2 py-1 text-[#111111] border border-neutral-300">✓ ZERO UPFRONT CASH</span>
                <span className="bg-[#EAEAEA] px-2 py-1 text-[#111111] border border-neutral-300">✓ DIRECT HAND SETTLEMENT</span>
              </div>
            </div>

            {/* Right Column: High-Contrast Frame Box */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="bg-[#111111] p-3 w-full max-w-sm border-2 border-[#111111]">
                <div className="relative h-[28rem] w-full bg-neutral-200 overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top filter grayscale contrast-[108%] brightness-[96%] hover:grayscale-0 transition-all duration-500"
                    alt="Malviya Nagar Street Style Companion Frame Layout"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#FFD700] text-[#111111] text-[10px] uppercase font-bold tracking-widest text-center py-1.5">
                    LOC: MALVIYA_NAGAR_MAIN // SECURE_TRUE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Urban Logistics Copy block --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#111111] p-6 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <div className="border-b border-[#111111] pb-4 mb-6">
            <span className="text-[10px] uppercase font-bold text-neutral-400">ZONE SPECIFIC ROUTING LOGS</span>
            <h2 className="text-2xl font-black text-[#111111] uppercase mt-1">High-Density Sub-District Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed">
            <p>
              Malviya Nagar acts as a critical commercial intersection in South Delhi, hosting an intense crowd of premier cafes, premium lifestyle spaces, and modern residences. Whether your stay is centered near the premium shopping arrays of <strong className="text-[#111111] font-bold">Select Citywalk Mall Saket</strong>, checking into local boutique configurations, or transiting out from regional markets, private accompaniment maps instantly here.
            </p>
            <p>
              Our dynamic coordination systems match selective expectations with certified local independent girls and high-profile models. Prompt on-call or outcall delivery structures operate directly across adjacent neighborhood points like <span className="text-[#111111] bg-[#FFD700]/30 font-mono px-1 font-bold">Saket blocks, Khirki Extension, Shivalik, Hauz Khas, and Geetanjali Enclave</span>.
            </p>
          </div>
        </div>
      </section>

      {/* --- Industrial Clean Grid Rates --- */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 font-bold text-xs uppercase tracking-widest text-neutral-400">
          // SERVICE RATE PARAMETERS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Student Fun", rate: "3,000", id: "MN-ST1" },
            { name: "Executive Date", rate: "5,000", id: "MN-EX2" },
            { name: "B2B Special", rate: "4,000", id: "MN-RLX" },
            { name: "Night Queen", rate: "10,000", id: "MN-VIP" },
          ].map((item, index) => (
            <div key={index} className="bg-white border-2 border-[#111111] p-5 flex flex-col justify-between shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                  <span>{item.id}</span>
                  <span className="text-[#111111] font-bold">[ACTIVE]</span>
                </div>
                <h3 className="text-base font-black uppercase text-[#111111]">{item.name}</h3>
                <p className="text-[11px] text-neutral-500 font-sans mt-2">Includes verified personal date companionship and full accommodation matching variables.</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#EAEAEA] flex items-baseline justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-400">Rate Matrix</span>
                <span className="text-xl font-black text-[#111111]">₹{item.rate}</span>
              </div>
              <Link to="/gallery" className="text-[10px] font-bold uppercase text-neutral-400 hover:text-[#111111] flex items-center justify-between pt-3 border-t border-neutral-50 mt-4">
                Verify Data Roster <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Stripped Privacy Channels --- */}
      <section className="py-16 bg-white border-t-2 border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#111111] text-[#FFD700] flex items-center justify-center font-bold">01</div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#111111]">Wiped System Registries</h4>
              <p className="text-neutral-500 text-xs font-sans leading-relaxed">
                All voice endpoints, structural messages, and geographic coordinate logs are fully removed post delivery execution.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#111111] text-[#FFD700] flex items-center justify-center font-bold">02</div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#111111]">Unmarked Civilian Transit</h4>
              <p className="text-neutral-500 text-xs font-sans leading-relaxed">
                Companions route using standard personal transport variables, blending perfectly into metropolitan neighborhood flows.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#111111] text-[#FFD700] flex items-center justify-center font-bold">03</div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#111111]">Commercial Hotel Clearances</h4>
              <p className="text-neutral-500 text-xs font-sans leading-relaxed">
                Logistics patterns synchronize seamlessly with local luxury boutique properties and administrative security loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Technical Accordion Blocks --- */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-black text-center uppercase tracking-wider text-[#111111] mb-8">[ FREQUENT QUERY BLUEPRINTS ]</h2>
        
        <div className="space-y-2">
          {[
            {
              q: "How to confirm independent models in Malviya Nagar?",
              a: "Initialize a call stream with our central dispatcher. Verified active lookbook channels matching your direct grid location will be transmitted instantly via message loops.",
            },
            {
              q: "Is there a requirement for advanced token deposits?",
              a: "Negative. Our operating protocols use a 100% upfront-free trust structure. Full transaction settlements take place directly with your choice companion at destination point.",
            },
            {
              q: "Do you offer delivery to hotels near Select Citywalk?",
              a: "Affirmative. Saket mall zones, Malviya Nagar Main Market, and all boutique hotels nearby drop inside our high-priority 15-minute dispatch bubble.",
            },
          ].map((faq, index) => (
            <details key={index} className="group bg-white border border-[#111111] rounded-none overflow-hidden">
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#111111] list-none cursor-pointer hover:bg-neutral-50">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-neutral-400 group-open:rotate-180 text-xs">▼</span>
              </summary>
              <div className="p-4 text-xs font-sans text-neutral-600 border-t border-[#111111] bg-[#FAF9FA] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- NEW DESIGN: TECH-MANIFEST TICKET STRIP CTA BANNER --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-[#111111] text-white p-6 sm:p-10 relative border-l-8 border-[#FFD700] shadow-[8px_8px_0_rgba(0,0,0,0.15)]">
          
          {/* Barcode Structural Design Graphic */}
          <div className="absolute top-4 right-6 text-[10px] text-neutral-500 font-mono tracking-tighter text-right hidden md:block">
            |||||||||||||||||||||||||||||||||||||||||||||||||||| <br />
            MANIFEST_REF_026_MALVIYA_NAGAR
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#FFD700] uppercase block">
                // DISPATCH CONSOLE TERMINAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none">
                INITIALIZE SECURE LOOKUP CHANNEL
              </h2>
              <p className="text-neutral-400 font-sans text-xs max-w-xl leading-relaxed">
                Our operations infrastructure remains continuously live across all localized South Delhi cross-sectors. Establish direct contact with dispatch to complete roster validation routines.
              </p>
            </div>

            {/* Right Action Button Column */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#FFD700] text-[#111111] border-2 border-[#FFD700] py-3.5 font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#FFD700] transition-colors"
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
                className="w-full text-center bg-transparent text-white border-2 border-white py-3.5 font-bold uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors"
              >
                WHATSAPP INTERFACE
              </a>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800 text-[9px] font-bold text-neutral-500 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• MALVIYA MARKET ZONE</span>
            <span>• SAKET SECTOR HUBS</span>
            <span>• SHIVALIK SECTORS</span>
            <span>• GEETANJALI ROADWAY</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MalviyaNagar;