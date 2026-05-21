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

const SouthDelhi = () => {
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
    "Hello FunWithJuli, I am in South Delhi and wish to request a premium booking of verified independent companion profiles.",
  );

  return (
    <div className="min-h-screen bg-white text-[#2C2925] font-sans antialiased selection:bg-[#8C6D41] selection:text-white">
      <MetaTags
        title="Escort Service in South Delhi - Call Girl FunwithJuli 24/7"
        description="Experience the finest escort service in South Delhi. Premium high-profile models, independent elite call girls, and top-tier companionship across posh South Delhi localities. 100% discrete."
        keywords="escort service south delhi, call girl south delhi, south delhi call girls, independent escorts south delhi, premium russian escort south delhi"
      />

      {/* --- Minimal Luxury Floating Contact Bar --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#128C7E] text-white p-4.5 rounded-none shadow-xl transition-transform active:scale-95"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#8C6D41] text-white p-4.5 rounded-none shadow-xl tracking-widest font-bold"
        >
          <PhoneIcon className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* --- High-End Gallery Frame Hero Banner --- */}
      <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-36 bg-[#FCFBF9] border-b border-[#EAE6DF]">
        {/* Architectural Framing Elements */}
        <div className="absolute top-0 left-0 w-full h-full border-l-[16px] border-r-[16px] border-[#FAF7F2] pointer-events-none hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Prestigious Copy Design */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border-b border-[#8C6D41]/30 pb-2">
                <span className="text-[#8C6D41] text-[10px] uppercase font-bold tracking-[0.3em]">
                  Elite District Roster // South Delhi Core
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#1F1D1A] tracking-tight leading-[1.1]">
                Uncompromising <br />
                <span className="font-serif italic text-[#8C6D41]">
                  Elegance
                </span>{" "}
                & Private <br />
                Companionship
              </h1>

              <p className="text-[#6E6861] text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Welcome to a secure framework tailored exclusively for
                high-net-worth visitors. Access carefully vetted independent
                models, international flight hostesses, and elite local
                companions in South Delhi.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4.5 bg-[#1F1D1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8C6D41] transition-colors duration-300"
                >
                  Request Dispatch
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4.5 bg-white border border-[#EAE6DF] text-[#1F1D1A] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FCFBF9] transition-colors"
                >
                  Open Lookbook
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-6 text-[11px] text-[#A69E94] uppercase tracking-widest font-semibold">
                <span className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-[#8C6D41]" />{" "}
                  Cash-On-Rendezvous
                </span>
                <span className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-[#8C6D41]" /> Zero
                  Upfront Deposit
                </span>
              </div>
            </div>

            {/* Right Column: Architectural Inset Image Frame */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-sm lg:max-w-none bg-white p-4 border border-[#EAE6DF]">
                <div className="relative h-[30rem] w-full overflow-hidden bg-[#FAF7F2]">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top contrast-[103%]"
                    alt="South Delhi Premium Roster Image Representation"
                  />
                  <div className="absolute inset-0 bg-[#8C6D41]/5 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Opulent Spatial Narrative Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold text-[#8C6D41] tracking-[0.2em] uppercase block">
              // Premium Localized Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1F1D1A] tracking-tight">
              Sophisticated Matches for Delhi's Elite Enclaves
            </h2>
            <p className="text-[#6E6861] text-sm sm:text-base font-light leading-relaxed pt-2">
              South Delhi represents the standard of premium living in the
              capital. Whether you are conducting executive meetings near the
              luxury suites of{" "}
              <strong className="text-[#1F1D1A] font-semibold">
                Greater Kailash
              </strong>
              , staying near the quiet residential avenues of{" "}
              <strong className="text-[#1F1D1A] font-semibold">
                Vasant Vihar
              </strong>
              , or resting at a high-end boutique hotel close to{" "}
              <strong className="text-[#1F1D1A] font-semibold">Saket</strong>,
              finding authentic companionship is handled with unmatched
              discretion.
            </p>
            <p className="text-[#6E6861] text-sm font-light leading-relaxed">
              Our direct system seamlessly connects you with elite high-fashion
              companions, corporate hostesses, and international independent
              models. Direct doorstep dispatches extend flawlessly across all
              posh South Delhi neighborhoods, including{" "}
              <span className="text-[#8C6D41] font-medium italic">
                Green Park, Hauz Khas, Gulmohar Park, Safdarjung, and
                Chhattarpur Farmhouses
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* --- Linear Framed Pricing Matrix --- */}
      <section className="py-20 bg-[#FCFBF9] border-t border-b border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14 text-center sm:text-left">
            <span className="text-[10px] font-bold text-[#A69E94] tracking-widest uppercase block">
              Verified Tiers
            </span>
            <h2 className="text-2xl font-light text-[#1F1D1A] uppercase tracking-wide mt-1">
              Roster Classifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Student Fun", price: "3,000", cat: "Casual Category" },
              { name: "Executive Date", price: "5,000", cat: "Elite Category" },
              { name: "B2B Special", price: "4,000", cat: "Sensory Package" },
              { name: "Night Queen", price: "10,000", cat: "VIP Roster" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAE6DF] p-8 flex flex-col justify-between hover:border-[#8C6D41] transition-colors duration-300 rounded-none"
              >
                <div className="space-y-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A69E94] block">
                    {item.cat}
                  </span>
                  <h3 className="text-lg font-medium text-[#1F1D1A]">
                    {item.name}
                  </h3>
                  <div className="w-6 h-px bg-[#8C6D41]/40"></div>
                  <p className="text-xs text-[#6E6861] font-light leading-relaxed">
                    Full access privileges including personalized dinner date
                    and corporate matching arrays.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-[#FAF7F2] flex justify-between items-baseline">
                  <span className="text-[10px] text-[#A69E94] uppercase tracking-wider">
                    From
                  </span>
                  <span className="text-xl font-serif text-[#8C6D41]">
                    ₹{item.price}
                  </span>
                </div>
                <Link
                  to="/gallery"
                  className="mt-4 text-[10px] font-bold text-[#1F1D1A] tracking-widest uppercase flex items-center justify-between group pt-2"
                >
                  View Album{" "}
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Institutional Discretion Grid --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-lg mx-auto space-y-3 mb-20">
          <h2 className="text-3xl font-light text-[#1F1D1A] tracking-tight">
            Privacy Architecture
          </h2>
          <div className="w-8 h-0.5 bg-[#8C6D41] mx-auto"></div>
          <p className="text-[#6E6861] text-xs sm:text-sm font-light">
            Every query and interface process routes through our three
            foundational privacy guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 border-l border-[#EAE6DF] pl-6">
            <div className="text-[#8C6D41]">
              <FingerPrintIcon className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1F1D1A]">
              Automated Data Erasure
            </h4>
            <p className="text-[#6E6861] text-xs sm:text-sm leading-relaxed font-light">
              All digital call parameters, address coordinates, and message
              histories are fully scrubbed from localized channels upon session
              finalization.
            </p>
          </div>

          <div className="space-y-4 border-l border-[#EAE6DF] pl-6">
            <div className="text-[#8C6D41]">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1F1D1A]">
              Private Vehicle Transit
            </h4>
            <p className="text-[#6E6861] text-xs sm:text-sm leading-relaxed font-light">
              Companions travel strictly via unmarked personal vehicles,
              integrating naturally and invisibly with premium hotel or
              residential drop zones.
            </p>
          </div>

          <div className="space-y-4 border-l border-[#EAE6DF] pl-6">
            <div className="text-[#8C6D41]">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1F1D1A]">
              Elite Hotel Alignment
            </h4>
            <p className="text-[#6E6861] text-xs sm:text-sm leading-relaxed font-light">
              Logistical systems execute dispatches that blend smoothly with
              checking security procedures at upscale 5-star properties across
              South Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* --- Minimalist Premium FAQ Accordion --- */}
      <section className="py-24 max-w-3xl mx-auto px-6 border-t border-[#EAE6DF]">
        <h2 className="text-2xl font-light text-[#1F1D1A] tracking-tight text-center uppercase tracking-widest mb-12">
          Reservations FAQ
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "How to safely book an independent escort in South Delhi?",
              a: "Connect with our direct concierge via a simple phone call or private chat link. Our desk will instantly text you an encrypted view-link showcasing profiles active in your current South Delhi neighborhood.",
            },
            {
              q: "Do you ask for advance cash deposits?",
              a: "Absolutely not. We practice zero-advance trust structures. Complete booking amounts are cleared strictly in person directly with your companion at the destination.",
            },
            {
              q: "Can you dispatch to luxury apartments in Vasant Kunj?",
              a: "Yes. Vasant Kunj, Saket, Greater Kailash, and all upscale residential belts in South Delhi are seamlessly covered within our standard 20-minute priority dispatch loop.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-[#EAE6DF] overflow-hidden transition-all"
            >
              <summary className="flex items-center justify-between p-5 font-medium text-xs sm:text-sm text-[#1F1D1A] list-none cursor-pointer hover:bg-[#FCFBF9] select-none uppercase tracking-wider">
                <span>{faq.q}</span>
                <span className="text-[#8C6D41] group-open:rotate-180 transition-transform duration-200 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-[#6E6861] border-t border-[#EAE6DF] bg-[#FCFBF9] leading-relaxed font-light">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- EXCLUSIVE LUXURY HOUSES BANNER DESIGN --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto mb-24">
        <div className="relative border border-[#8C6D41]/40 bg-white p-10 sm:p-16 lg:p-20 text-center shadow-sm">
          {/* Subtle Linear Background Framing Box */}
          <div className="absolute inset-2 border border-[#EAE6DF] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <span className="text-[10px] font-bold text-[#8C6D41] tracking-[0.3em] uppercase block">
              // PRIVATE CONCIERGE ASSISTANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1F1D1A] uppercase tracking-wide leading-tight">
              Secure Your Elite <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#8C6D41]">
                Accompaniment
              </span>{" "}
              Session
            </h2>
            <p className="text-[#6E6861] text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
              Our professional coordinators manage private dispatches 24 hours a
              day across the entire South Delhi map. Contact our desk to finish
              profile lookup routines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 text-xs font-bold uppercase tracking-[0.15em]">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-[#1F1D1A] text-white px-8 py-4 hover:bg-[#8C6D41] transition-colors shadow-md"
              >
                Call Verification: {phoneNumber || "Connect Line"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#128C7E] text-white px-8 py-4 hover:bg-[#0f7368] transition-colors shadow-md"
              >
                Secure WhatsApp Request
              </a>
            </div>

            <p className="pt-4 text-[9px] font-bold text-[#A69E94] tracking-[0.25em] uppercase">
              Vasant Kunj • Greater Kailash • Saket • Chhattarpur Farmhouses
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SouthDelhi;
