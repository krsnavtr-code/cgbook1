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

const Janakpuri = () => {
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
    "Hello FunWithJuli, I am near Janakpuri and would like to request premium independent companion profiles for immediate dispatch.",
  );

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#222222] font-sans antialiased selection:bg-[#8B1E2F] selection:text-white">
      <MetaTags
        title="Escort Service in Janakpuri - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Janakpuri West Delhi. High-profile models, elite college student companions, and verified call girls near Janakpuri District Centre."
        keywords="escort service janakpuri, call girl janakpuri, janakpuri call girls, independent escorts west delhi, call girl district centre janakpuri"
      />

      {/* --- Heavy Contrast Floating Actions --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4.5 rounded-none border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#8B1E2F] text-white p-4.5 rounded-none border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)]"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* --- Crimson & Charcoal Block Hero Banner --- */}
      <section className="relative bg-white pt-16 pb-24 border-b-2 border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#8B1E2F] text-white px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
                WEST DISTRICT NETWORK // JANAKPURI CENTRAL
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#222222] uppercase leading-none">
                PREMIUM WEST DELHI <br />
                <span className="text-[#8B1E2F] underline decoration-4 decoration-[#222222]/10">
                  COMPANIONSHIP
                </span>
              </h1>

              <p className="text-neutral-600 text-sm max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Direct outcall dispatch logistics centered around West Delhi’s
                largest suburban block. Review verified profiles of independent
                local models, high-fashion hostesses, and elite corporate
                companions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4.5 bg-[#222222] text-white font-bold text-xs uppercase tracking-widest rounded-none border-2 border-[#222222] shadow-[4px_4px_0px_rgba(139,30,47,1)] hover:bg-[#8B1E2F] transition-colors"
                >
                  DISPATCH DIRECT LINE
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4.5 bg-white text-[#222222] font-bold text-xs uppercase tracking-widest rounded-none border-2 border-[#222222] hover:bg-[#F9F8F6] transition-colors"
                >
                  ACCESS ROSTER SYSTEM
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-6 text-[11px] text-neutral-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#8B1E2F]" /> NO
                  TRANSFER TOKENS
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#8B1E2F]" /> CASH AT
                  RESIDENCE / HOTEL
                </span>
              </div>
            </div>

            {/* Right Offset Frame Image Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative border-2 border-[#222222] bg-[#F9F8F6] p-4 shadow-[10px_10px_0px_rgba(34,34,34,1)] w-full max-w-sm">
                <div className="relative h-[29rem] w-full overflow-hidden border border-[#222222] bg-white">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top contrast-[102%]"
                    alt="Janakpuri Executive Independent Roster Portrait"
                  />
                  <div className="absolute top-3 right-3 bg-[#222222] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest">
                    MN-CORE / ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Regional Suburban Hub Layout --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white border-2 border-[#222222] p-8 sm:p-12 shadow-[6px_6px_0px_rgba(139,30,47,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] font-black text-[#8B1E2F] tracking-[0.2em] uppercase block">
                // URBAN METRIC DATA
              </span>
              <h2 className="text-2xl font-black text-[#222222] uppercase tracking-tight leading-none">
                Suburban Discretion Across West Hubs
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Janakpuri acts as the core logistical pivot for West Delhi,
                blending an intense array of administrative blocks, corporate
                clusters, and upscale neighborhood avenues. Whether you are
                checking into a premier business stay close to the{" "}
                <strong className="text-[#222222] font-bold">
                  Janakpuri District Centre
                </strong>
                , utilizing upscale local transit facilities, or residing in
                private lanes, safe matching operations execute fluidly here.
              </p>
              <p>
                Our structural matchmaking platform bridges preferences
                seamlessly with elite independent models, visiting air
                hostesses, and high-profile local call girls. Secure delivery
                structures loop perfectly throughout the entire sector tier,
                reaching smoothly into{" "}
                <span className="text-[#8B1E2F] font-bold underline">
                  Vikaspuri, Uttam Nagar, Tilak Nagar, Rajouri Garden, and
                  Dwarka Enclaves
                </span>{" "}
                inside a 20-minute timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- High Contrast Pricing Log Tables --- */}
      <section className="pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 font-bold text-xs uppercase tracking-widest text-neutral-400">
          // RATE VERIFICATION PARAMS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { segment: "Student Fun", rate: "3,000", serial: "JKP-STU-01" },
            { segment: "Executive Date", rate: "5,000", serial: "JKP-EXE-02" },
            { segment: "B2B Special", rate: "4,000", serial: "JKP-B2B-03" },
            { segment: "Night Queen", rate: "10,000", serial: "JKP-VIP-04" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#222222] p-6 flex flex-col justify-between shadow-[4px_4px_0px_rgba(34,34,34,1)]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-bold">
                  <span>{item.serial}</span>
                  <span className="text-[#8B1E2F]">[VALID]</span>
                </div>
                <h3 className="text-base font-black uppercase text-[#222222]">
                  {item.segment}
                </h3>
                <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                  Full access package including personalized outcalls to all
                  premium local residential and star hotel zones.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">
                    NET_VAL
                  </span>
                  <span className="text-xl font-black text-[#8B1E2F]">
                    ₹{item.rate}
                  </span>
                </div>
                <Link
                  to="/gallery"
                  className="text-[10px] font-black uppercase text-[#222222] hover:text-[#8B1E2F] flex items-center justify-between pt-3 mt-3 border-t border-neutral-100 group"
                >
                  Open Identity Index{" "}
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Institutional Discretion Standards --- */}
      <section className="py-20 bg-[#222222] text-white border-t-2 border-b-2 border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#8B1E2F] flex items-center justify-center font-bold text-white border border-white/20">
                01
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Full Identity Erasure
              </h4>
              <p className="text-neutral-400 text-xs font-normal leading-relaxed">
                All temporary client coordinate metrics, localized chat paths,
                and device link entries are systematically purged immediately
                upon session completion.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#8B1E2F] flex items-center justify-center font-bold text-white border border-white/20">
                02
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Unmarked Civilian Fleet
              </h4>
              <p className="text-neutral-400 text-xs font-normal leading-relaxed">
                Companions utilize private, premium unmarked vehicles for
                transit routines, allowing them to blend directly into standard
                neighborhood flows seamlessly.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#8B1E2F] flex items-center justify-center font-bold text-white border border-white/20">
                03
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                District Security Sync
              </h4>
              <p className="text-neutral-400 text-xs font-normal leading-relaxed">
                Logistics pathways are calibrated to safely clear checking rules
                across major regional business hotels, premium residences, and
                local boutique rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Traditional High-Contrast FAQ Arcs --- */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-black text-center uppercase tracking-[0.25em] text-[#222222] mb-12">
          // RESERVATION LOGS FAQ
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "How can I verify an independent escort in Janakpuri?",
              a: "Initiate communication with our localized desk operator. Freshly vetted portfolio links mapping perfectly to your specific sector blocks will be instantly dispatched via secure message threads.",
            },
            {
              q: "Do you require advance token payments?",
              a: "Negative. We work on a strict zero-deposit policy. Full financial packages are cleared directly in person with your choice companion at the destination.",
            },
            {
              q: "Can you dispatch to hotels around the District Centre?",
              a: "Affirmative. The entire Janakpuri District Centre area, local business hotel towers, and neighboring residential sectors fall fully inside our fast 15-to-20 minute priority routing ring.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border-2 border-[#222222] rounded-none overflow-hidden transition-all"
            >
              <summary className="flex items-center justify-between p-4 font-bold text-xs uppercase text-[#222222] list-none cursor-pointer hover:bg-[#F9F8F6] select-none">
                <span>{`>> ${faq.q}`}</span>
                <span className="text-[#8B1E2F] group-open:rotate-180 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-4 text-xs text-neutral-600 border-t border-[#222222] bg-[#F9F8F6] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- NEW DESIGN: CLUB ADMISSION PASS CTA BANNER --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-white border-4 border-[#222222] p-6 sm:p-10 relative shadow-[8px_8px_0px_rgba(139,30,47,1)] text-[#222222]">
          {/* Decorative Corner Notches to look like an Admission Ticket */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#F9F8F6] border-2 border-[#222222] rounded-full hidden md:block"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#F9F8F6] border-2 border-[#222222] rounded-full hidden md:block"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#F9F8F6] border-2 border-[#222222] rounded-full hidden md:block"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#F9F8F6] border-2 border-[#222222] rounded-full hidden md:block"></div>

          <div className="text-right text-[10px] font-bold text-[#8B1E2F] uppercase border-b-2 border-dashed border-[#222222]/20 pb-3 mb-6">
            TICKET_REF: WEST_DELHI_LOG_2026 // SECURITY_CLEAR
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#8B1E2F] uppercase block">
                // SYSTEM TERMINAL ROUTING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#222222] leading-none">
                INITIALIZE COMPANION VERIFICATION
              </h2>
              <p className="text-neutral-500 font-sans text-xs max-w-xl leading-relaxed">
                Our local coordination teams operate active outcall delivery
                lines around the clock across all sectors of the Janakpuri
                district. Contact the desk to complete validation routines.
              </p>
            </div>

            {/* Right Action Area */}
            <div className="lg:col-span-4 flex flex-col gap-3 text-xs">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full text-center bg-[#8B1E2F] text-white py-3.5 font-bold uppercase tracking-widest border-2 border-[#222222] shadow-[3px_3px_0px_rgba(34,34,34,1)] hover:bg-[#222222] transition-colors"
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
                className="w-full text-center bg-[#222222] text-white py-3.5 font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                SECURE WHATSAPP DESK
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-[#222222]/20 text-[9px] font-bold text-neutral-400 tracking-widest uppercase flex flex-wrap gap-4">
            <span>• DISTRICT CENTRE WINGS</span>
            <span>• VIKASPURI LOCAL ARCS</span>
            <span>• TILAK NAGAR CROSSWAYS</span>
            <span>• DWARKA TRANSIT BUBBLES</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Janakpuri;
