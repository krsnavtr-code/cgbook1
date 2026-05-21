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

const ConnaughtPlace = () => {
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
    "Hello FunWithJuli, I am at Connaught Place. Please share the premium VIP profiles available in the Inner/Outer Circle area.",
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      <MetaTags
        title="Escort Service in Connaught Place - Call Girl FunwithJuli 24/7"
        description="Premium VIP escort service in Connaught Place (CP). Top-rated independent models and verified call girls near Janpath, Barakhamba, and Mandi House. Absolute privacy."
        keywords="escort service connaught place, call girl cp delhi, janpath escorts, independent call girl connaught place, vip escorts central delhi"
      />

      {/* --- Floating Action Hub (Mobile) --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-white"
        >
          <ChatBubbleLeftRightIcon className="w-7 h-7" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-indigo-600 p-4 rounded-full shadow-[0_10px_30px_rgba(79,70,229,0.4)] text-white animate-pulse"
        >
          <PhoneIcon className="w-7 h-7" />
        </a>
      </div>

      {/* --- RADIAL BANNER DESIGN (Hero) --- */}
      <section className="relative pt-12 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content Column */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 rounded-full mb-8 border border-indigo-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                </span>
                <span className="text-indigo-900 text-xs font-black uppercase tracking-[0.2em]">
                  The Central Hub Experience
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1] mb-8">
                Elite <span className="font-black text-indigo-600">Circle</span>{" "}
                <br />
                Companionship
              </h1>

              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
                Positioned at the epicenter of the capital. We offer verified,
                high-profile independent companions for the discerning gentlemen
                visiting Delhi’s most iconic landmark.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:-translate-y-1"
                >
                  Call Now
                </a>
                <Link
                  to="/photos"
                  className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:border-indigo-600 transition-all"
                >
                  View Lookbook
                </Link>
              </div>
            </div>

            {/* Right Side: RADIAL MASK IMAGE DESIGN */}
            <div className="flex-1 relative order-1 lg:order-2">
              <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] mx-auto">
                {/* Rotating Border Ring */}
                <div className="absolute inset-0 border-[1px] border-dashed border-indigo-300 rounded-full animate-[spin_20s_linear_infinite]"></div>

                {/* Circular Image Mask */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                    alt="Premium Connaught Place Companion Portfolio"
                  />
                </div>

                {/* Floating Badge (Glassmorphism) */}
                <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 max-w-[160px]">
                  <p className="text-xs font-black text-indigo-600 uppercase mb-1">
                    Status
                  </p>
                  <p className="text-sm text-slate-800 font-medium">
                    Verified Independent Models Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CENTER SECTION (Contextual Content) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Refined Service at the <br />
                <span className="text-indigo-600">
                  Capital's Geographic Center
                </span>
              </h2>
              <div className="w-20 h-2 bg-indigo-600"></div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Connaught Place (CP) stands as a monument to Delhi's colonial
                past and its vibrant commercial present. For the traveler
                staying near{" "}
                <strong className="text-slate-900 font-semibold">
                  Janpath
                </strong>
                , the corporate staying at{" "}
                <strong className="text-slate-900 font-semibold">
                  Barakhamba Road
                </strong>
                , or those visiting the high-end hotels near{" "}
                <strong className="text-slate-900 font-semibold">
                  Mandi House
                </strong>
                , we provide a service that matches the prestige of the
                location.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Inner Circle Outcalls",
                  desc: "Fastest dispatch to all premium heritage hotels.",
                },
                {
                  title: "High-Profile Models",
                  desc: "Elite models visiting Central Delhi for shoots.",
                },
                {
                  title: "Corporate Dating",
                  desc: "Sophisticated companions for business dinners.",
                },
                {
                  title: "Absolute Discretion",
                  desc: "Zero-trace booking for high-net-worth clients.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600 transition-colors shadow-sm"
                >
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-widest">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MINIMALIST VERTICAL PRICING --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest">
            Rate Cards
          </h2>
          <p className="text-slate-400 mt-2">
            Transparent pricing for premium quality
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Student Fun", price: "3k", tag: "Popular" },
            { name: "Executive Date", price: "5k", tag: "Refined" },
            { name: "B2B Special", price: "4k", tag: "Sensual" },
            { name: "Night Queen", price: "10k", tag: "Exclusive" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-64 bg-white border-b-4 border-indigo-600 p-10 text-center shadow-lg hover:-translate-y-2 transition-all"
            >
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4 block">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {item.name}
              </h3>
              <div className="text-4xl font-black text-slate-900 mb-8">
                ₹{item.price}
              </div>
              <Link
                to="/gallery"
                className="text-xs font-black uppercase text-slate-400 hover:text-indigo-600 tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                Details <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- ARCHITECTURAL PROTOCOL (Security) --- */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 -skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <FingerPrintIcon className="w-12 h-12 text-indigo-400" />
              <h4 className="text-xl font-bold uppercase">Zero-Data Policy</h4>
              <p className="text-indigo-200 text-sm font-light leading-relaxed">
                Your digital footprint is completely scrubbed from our systems
                the moment the service concludes.
              </p>
            </div>
            <div className="space-y-4">
              <MapPinIcon className="w-12 h-12 text-indigo-400" />
              <h4 className="text-xl font-bold uppercase">Executive Transit</h4>
              <p className="text-indigo-200 text-sm font-light leading-relaxed">
                Companions utilize unmarked executive sedan services for a
                seamless hotel check-in experience.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheckIcon className="w-12 h-12 text-indigo-400" />
              <h4 className="text-xl font-bold uppercase">
                Verified Portfolios
              </h4>
              <p className="text-indigo-200 text-sm font-light leading-relaxed">
                Every model is video-verified to ensure the profile you see is
                the companion you meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (Accordion) --- */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-widest">
          Client Briefing (FAQ)
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I book an escort in Connaught Place?",
              a: "Simply call our agency or use the WhatsApp dispatch link. We will provide a secure portfolio link. Selection to arrival in CP takes under 25 minutes.",
            },
            {
              q: "Is there any advance payment required?",
              a: "No. We believe in direct trust. Payments are handled personally with the companion upon physical arrival and your complete satisfaction.",
            },
            {
              q: "Which areas do you cover from CP?",
              a: "Our dispatch covers Janpath, Barakhamba Road, Mandi House, Gole Market, and all major star-hotels within the 3km radius of the Inner Circle.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-slate-200 rounded-none overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 font-bold text-slate-900 list-none cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="uppercase text-sm tracking-widest">
                  {faq.q}
                </span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-500 text-sm font-light leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- THE FINAL CTA (Metro Banner) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-slate-900 rounded-none p-12 lg:p-20 text-center text-white relative overflow-hidden">
          {/* Subtle Indigo Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/10 mix-blend-screen"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Ready for the{" "}
              <span className="font-black italic text-indigo-500">Capital</span>{" "}
              Experience?
            </h2>
            <p className="max-w-xl mx-auto text-slate-400 font-light">
              Available 24/7. Your privacy is our religion. Connect with our
              dispatch team now.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="px-12 py-6 bg-indigo-600 text-white font-bold rounded-none hover:bg-indigo-700 transition-all shadow-[0_10px_40px_rgba(79,70,229,0.4)]"
              >
                CALL DISPATCH: {phoneNumber || "CONNECT"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-[#25D366] text-white font-bold rounded-none hover:bg-[#20ba56] transition-all shadow-[0_10px_40px_rgba(37,211,102,0.4)]"
              >
                WHATSAPP BOOKING
              </a>
            </div>

            <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500">
              Inner Circle • Outer Circle • Janpath • Barakhamba
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnaughtPlace;
