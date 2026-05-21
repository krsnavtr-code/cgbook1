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

const Aerocity = () => {
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
    "Hello FunWithJuli, I have just arrived at Aerocity and would like to review your premium, high-profile independent models available for hotel outcall.",
  );

  return (
    <div className="min-h-screen bg-[#0B111E] text-slate-300 font-sans antialiased selection:bg-[#A5F3FC] selection:text-slate-900">
      <MetaTags
        title="Escort Service in Aerocity - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Aerocity Delhi. Elite international models, executive flight hostesses, and high-profile call girls near Worldmark and 5-star luxury transit hotels."
        keywords="escort service aerocity, call girl aerocity, aerocity call girls, independent escorts aerocity delhi, hotel outcall escorts aerocity"
      />

      {/* --- Luminous Glassmorphic Floating Triggers --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4.5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] border border-white/20 backdrop-blur-md"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-gradient-to-r from-[#A5F3FC] to-cyan-400 text-slate-950 p-4.5 rounded-full shadow-[0_0_20px_rgba(165,243,252,0.4)]"
        >
          <PhoneIcon className="w-5 h-5 font-bold" />
        </a>
      </div>

      {/* --- First-Class Transit Lounge Hero Banner --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-[#111827] to-[#0B111E] border-b border-slate-800">
        {/* Luminous Jetstream Vector Graphics */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 left-0 w-[400px] h-[300px] bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Runway Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/80 px-4 py-1.5 rounded-full text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                INTERNATIONAL TRANSIT TERMINAL ARRIVALS
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                First-Class Luxury <br />
                <span className="bg-gradient-to-r from-[#A5F3FC] via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Escort Privileges
                </span>{" "}
                <br />
                Inside Aerocity
              </h1>

              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                A seamless, ultra-secure companionship framework engineered for
                global corporate travelers and premium jetsetters touching down
                at IGI Airport. Review elite independent models and executive
                hostesses.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4 bg-gradient-to-r from-[#A5F3FC] to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-none shadow-[0_4px_20px_rgba(165,243,252,0.2)] hover:opacity-90 transition-all"
                >
                  Request Hotel Dispatch
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4 bg-slate-900/80 text-white font-bold text-xs uppercase tracking-widest rounded-none border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  Verify Premium Roster
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-cyan-400" /> Secure
                  5-Star Outcall
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-cyan-400" /> Cash
                  Handed on Meeting
                </span>
              </div>
            </div>

            {/* Right Liquid Platinum Frame Column */}
            <div className="lg:col-span-5 w-full">
              <div className="relative mx-auto max-w-sm bg-gradient-to-b from-slate-700 to-slate-900 p-[1px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="bg-[#0B111E] p-4 rounded-2xl">
                  <div className="relative h-[29rem] w-full overflow-hidden rounded-xl bg-slate-950">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                      className="w-full h-full object-cover object-top contrast-[105%] brightness-[92%]"
                      alt="Premium Aerocity Luxury Companion Looking Segment"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Worldmark Corporate Enclave Details --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase block">
                TRANSIT HUB MATCHING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Sophisticated Compositions for High-End Layovers
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"></div>
            </div>

            <div className="lg:w-2/3 space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Aerocity stands alone as the crown jewel of Delhi's upscale
                corporate and premium hospitality networks. Whether you are
                checked into the architectural luxury spaces of the{" "}
                <strong className="text-white font-semibold">
                  JW Marriott, Andaz, or Pullman
                </strong>
                , or attending high-profile global business meetups close to the
                commercial squares of{" "}
                <strong className="text-white font-semibold">
                  Worldmark Aerocity
                </strong>
                , elite companionship functions on demand.
              </p>
              <p>
                Our specialized private dispatch framework handles requests with
                absolute timing, syncing seamlessly with visiting international
                independent models, elite corporate flight crews, and VIP
                celebrity companions. Logistics pathways remain under tight
                security protocols, handling direct delivery loops inside{" "}
                <span className="text-[#A5F3FC] font-medium">
                  Mahipalpur luxury clusters, Vasant Kunj hotel zones, and IGI
                  Airport hotel wings
                </span>{" "}
                perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Premium Fleet Class Rate Modules --- */}
      <section className="pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase block">
            TIER CLASSIFICATIONS
          </span>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mt-1">
            Premium Cabin Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Student Fun", rate: "3,000", class: "Economy Premium" },
            { title: "Executive Date", rate: "5,000", class: "Business Class" },
            { title: "B2B Special", rate: "4,000", class: "Lounge Exclusive" },
            { title: "Night Queen", rate: "10,000", class: "First Class VIP" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#111827] to-[#0B111E] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4 text-[10px] uppercase font-bold tracking-wider text-slate-500">
                  <span>{item.class}</span>
                  <UserIcon className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                  Tailored specifically for elite hotel outcalls with complete
                  personalized custom variables.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-baseline justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  Rendezvous Base
                </span>
                <span className="text-2xl font-bold text-[#A5F3FC]">
                  ₹{item.rate}
                </span>
              </div>
              <Link
                to="/gallery"
                className="text-[11px] font-bold text-cyan-400 flex items-center justify-between pt-4 border-t border-slate-800/50 mt-4 group"
              >
                Open Cabin Roster{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- High-Security Airport Protocol Strips --- */}
      <section className="py-20 bg-slate-950 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <FingerPrintIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Encrypted Client Masking
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                All booking transaction nodes, room locations, and
                communications are safely scrubbed out of temporary file tracks
                upon outcall completion.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Premium Cab Transit
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Companions coordinate using luxury corporate sedan fleets,
                allowing them to integrate naturally into regular hotel entryway
                checkpoints.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                5-Star Concierge Compliance
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Logistics models align smoothly with standard safety guidelines
                across global luxury hospitality brands and elite properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Clean Aviation FAQ Systems --- */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-lg font-bold text-center uppercase tracking-widest text-white mb-12">
          Transit Briefings (FAQ)
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "How to safely schedule a 5-star hotel outcall in Aerocity?",
              a: "Connect with our dispatch desk via phone or encrypted chat link. Our coordinators will instantly provide an active view-link showcasing exclusive profiles currently inside the Aerocity quadrant.",
            },
            {
              q: "Are advance hotel booking deposits required?",
              a: "No. Our agency runs completely on advance-free trust structures. Full financial settlements are handled directly with your selected companion upon secure physical arrival.",
            },
            {
              q: "Can you deliver to major luxury hotels near Worldmark?",
              a: "Yes. All international luxury hotel properties inside Aerocity, plus adjacent Vasant Kunj and Mahipalpur star hotel sectors, are covered within our 20-minute priority dispatch line.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-slate-900/50 border border-slate-800/80 rounded-xl overflow-hidden transition-all"
            >
              <summary className="flex items-center justify-between p-5 font-semibold text-xs sm:text-sm text-white list-none cursor-pointer hover:bg-slate-800/40 select-none">
                <span className="tracking-wide">{faq.q}</span>
                <span className="text-cyan-400 group-open:rotate-180 transition-transform duration-200 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 bg-slate-950 font-light leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- NEW DESIGN: ELITE TERMINAL BOARDING PASS CTA BANNER --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-20">
        <div className="relative bg-gradient-to-r from-slate-900 via-[#111827] to-slate-900 text-white p-8 sm:p-12 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Boarding Pass Dashed Tear Line */}
          <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-slate-800 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Area (Main Ticket body) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 tracking-[0.25em] uppercase">
                <span>PASSENGER MANIFEST CONSOLE</span>
                <span>•</span>
                <span>GATEWAY 24/7</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                ACTIVATE LUXURY OUT CALL LOGISTICS
              </h2>
              <p className="text-slate-400 text-xs font-light max-w-xl leading-relaxed">
                Our operations team manages elite, high-profile dispatches
                around the clock across all luxury hotels in Aerocity. Connect
                with the private desk to complete profile validation routines.
              </p>
            </div>

            {/* Right Action Area (The Ticket Stub) */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-sans text-xs pt-4 lg:pt-0">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-gradient-to-r from-[#A5F3FC] to-cyan-400 text-slate-950 py-3.5 font-bold uppercase tracking-widest hover:opacity-90 transition-all rounded-md shadow-lg"
              >
                PRIORITY CALL: {phoneNumber || "CONNECT LINE"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-800 text-white border border-slate-700 py-3.5 font-bold uppercase tracking-widest hover:bg-slate-700 transition-colors rounded-md"
              >
                SECURE WHATSAPP DESK
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/60 text-[9px] font-bold text-slate-500 tracking-widest uppercase flex flex-wrap gap-6">
            <span>• WORLDMARK ENCLAVE</span>
            <span>• LUXURY 5-STAR WINGS</span>
            <span>• IGI TRANSIT ZONE</span>
            <span>• MAHIPALPUR CLUSTERS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aerocity;
