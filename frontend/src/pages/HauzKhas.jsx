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

const HauzKhas = () => {
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
    "Hello FunWithJuli, I am near Hauz Khas and would like to review premium verified companion portfolios.",
  );

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-[#C5A880] selection:text-white">
      <MetaTags
        title="Escort Service in Hauz Khas - Call Girl FunwithJuli 24/7"
        description="Experience premium escort service in Hauz Khas. Top-rated independent models and verified call girls near Hauz Khas Village, South Delhi. No advance booking fees."
        keywords="escort service hauz khas, call girl hauz khas, hauz khas village escorts, independent call girl south delhi"
      />

      {/* --- Minimalist Floating Action Deck --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-xl text-white transform active:scale-95 transition-transform"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#BD9B6D] p-4 rounded-full shadow-xl text-white animate-bounce"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>

      {/* --- Editorial Split Hero Section --- */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-[#F3F0E9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-stone-300 px-3 py-1 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#BD9B6D] rounded-full animate-ping"></span>
                <span className="text-[#967449] text-[11px] font-bold uppercase tracking-widest font-mono">
                  Hauz Khas Elite Circle
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 leading-tight font-light">
                Curated <br className="hidden md:inline" />
                <span className="italic font-normal text-[#967449]">
                  Companionship
                </span>{" "}
                <br />
                in Hauz Khas
              </h1>

              <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Step into a world of sophisticated verification. We provide
                access to high-profile, independent models, agency rosters, and
                elite companions within Hauz Khas Village and the greater South
                Delhi district.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-all shadow-md active:scale-[0.99] tracking-wide"
                >
                  Request Dispatch
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4 bg-white border border-stone-300 text-stone-800 rounded-lg font-medium hover:bg-stone-50 transition-all shadow-sm"
                >
                  View Lookbook
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-stone-500 tracking-wide uppercase font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#BD9B6D]" /> No
                  Initial Advance
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#BD9B6D]" /> Absolute
                  Confidentiality
                </span>
              </div>
            </div>

            {/* Right Picture Column - Editorial Frame Design */}
            <div className="lg:col-span-5 w-full relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Visual Accent Back-Border */}
                <div className="absolute inset-0 border border-stone-400 translate-x-4 translate-y-4 rounded-xl -z-10"></div>

                <div className="bg-white p-3 rounded-xl shadow-lg border border-stone-200">
                  <div className="relative h-[26rem] w-full overflow-hidden rounded-lg bg-stone-100">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                      className="w-full h-full object-cover object-top filter grayscale-[20%] contrast-[105%]"
                      alt="Hauz Khas Premium Roster Lookbook"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/80 p-4 text-white">
                      <p className="text-xs uppercase tracking-wider font-mono opacity-80">
                        Location Radius
                      </p>
                      <p className="text-sm font-serif italic">
                        Hauz Khas Village & Surrounds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Premium Editorial Text Layout --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-b border-stone-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#967449] font-bold">
                The Destination
              </span>
              <h2 className="text-3xl font-serif text-stone-900 mt-2 leading-tight">
                Refined Leisure Around the Old Fort
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Hauz Khas seamlessly weaves deep historical heritage with
                contemporary lifestyle rhythms. Whether you are wrapping up a
                business dinner near the urban cafes of{" "}
                <strong className="text-stone-900 font-normal">
                  Hauz Khas Village
                </strong>
                , residing near the institutional hubs, or staying at an upscale
                hotel close to{" "}
                <strong className="text-stone-900 font-normal">
                  Green Park
                </strong>
                , finding premium accompaniment should be smooth and secure.
              </p>
              <p>
                Our selective platform matches discerning guests with elite
                companions. Profiles include verified high-fashion shoot models,
                private hostesses, and low-profile independent individuals. Our
                coverage zones extend into nearby premium locations, including{" "}
                <span className="text-[#967449] italic font-medium">
                  Safdarjung Enclave, Green Park, South Extension, and Malviya
                  Nagar
                </span>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-xs sm:text-sm text-stone-800 font-medium">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-[#BD9B6D]" /> Selected
                    Fine Arts Models
                  </p>
                  <p className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-[#BD9B6D]" />{" "}
                    Independent Elite Profiles
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-[#BD9B6D]" /> Verified
                    In-Call Secure Spaces
                  </p>
                  <p className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-[#BD9B6D]" /> Discrete
                    Hotel Escort Dispatch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Asymmetric Gallery Cards (Services) --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#967449] font-bold">
            Roster Packages
          </p>
          <h2 className="text-3xl font-serif text-stone-900 mt-1">
            Service Classification
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Student Fun",
              price: "3,000",
              tag: "Casual Date",
              icon: <UserIcon className="w-5 h-5" />,
            },
            {
              name: "Executive Date",
              price: "5,000",
              tag: "High Class",
              icon: <ShieldCheckIcon className="w-5 h-5" />,
            },
            {
              name: "B2B Special",
              price: "4,000",
              tag: "Relaxation",
              icon: <BoltIcon className="w-5 h-5" />,
            },
            {
              name: "Night Queen",
              price: "10,000",
              tag: "Elite VIP",
              icon: <SparklesIcon className="w-5 h-5" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 p-6 rounded-none shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[#967449] mb-4">{item.icon}</div>
                <span className="text-[10px] font-mono tracking-wider text-stone-400 uppercase">
                  {item.tag}
                </span>
                <h3 className="text-xl font-serif text-stone-900 mt-1 mb-2">
                  {item.name}
                </h3>
                <div className="w-8 h-px bg-stone-300 my-3"></div>
                <p className="text-xs text-stone-500 font-light">
                  Rates Starting From{" "}
                  <span className="block text-stone-900 font-serif text-lg font-medium mt-0.5">
                    ₹{item.price}
                  </span>
                </p>
              </div>
              <Link
                to="/gallery"
                className="text-xs font-medium tracking-wider text-[#967449] flex items-center gap-2 pt-6 mt-6 border-t border-stone-100 group"
              >
                PREVIEW ENTRY{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Institutional Security Principles --- */}
      <section className="py-20 bg-[#F3F0E9] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-16 space-y-2">
            <h2 className="text-3xl font-serif text-stone-900">
              Privacy Infrastructure
            </h2>
            <p className="text-stone-600 text-sm font-light">
              Our reservation protocols incorporate a distinct 3-layer security
              system to ensure absolute discretion for every booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3 bg-white p-6 rounded-xl border border-stone-200">
              <div className="w-10 h-10 bg-[#FAF9F5] text-[#967449] rounded-lg flex items-center justify-center">
                <FingerPrintIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-medium text-stone-900">
                Volatile Logging
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                All localized interaction histories and coordinate data are
                systematically scrubbed from active agency modules upon booking
                fulfillment.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-stone-200">
              <div className="w-10 h-10 bg-[#FAF9F5] text-[#967449] rounded-lg flex items-center justify-center">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-medium text-stone-900">
                Unmarked Dispatch
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                Companions utilize private, non-descript vehicle networks to
                blend in seamlessly with luxury residential frameworks.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-stone-200">
              <div className="w-10 h-10 bg-[#FAF9F5] text-[#967449] rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-medium text-stone-900">
                Vetted Hospitality Safety
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                Our logistical operations interface cleanly with major premium
                hospitality partners across South Delhi, ensuring absolute
                discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Accordion Section --- */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#967449] font-bold">
            Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900">
            Common Queries
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How to book an independent escort in Hauz Khas?",
              a: "Simply call our agency line or initiate a chat. Available portfolios for the Hauz Khas quadrant will be shared via secure link. Dispatches average under 30 minutes.",
            },
            {
              q: "Is advance payment required for booking?",
              a: "No. We operate on direct introduction trust metrics. The complete booking balance is cleared only upon physical introduction. Never pay upfront booking fees.",
            },
            {
              q: "Can I book a call girl for a hotel in Safdarjung?",
              a: "Yes. Safdarjung Enclave, Green Park, and South Extension are within our primary 15-minute dispatch zones.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-stone-200 rounded-lg overflow-hidden transition-all shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 p-5 font-medium text-sm sm:text-base text-stone-900 list-none cursor-pointer hover:bg-stone-50">
                <span>{faq.q}</span>
                <span className="text-[#BD9B6D] group-open:rotate-180 text-xs transition-transform duration-200">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 bg-[#FAF9F5] leading-relaxed font-light">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- High-End Magazine Style CTA Banner --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="relative border border-stone-300 bg-[#F3F0E9] p-8 sm:p-12 lg:p-16 text-center rounded-2xl overflow-hidden">
          {/* Faded Editorial Image Background Trick */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-luminosity pointer-events-none"
            style={{
              backgroundImage: `url('https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-light">
              Secure Private{" "}
              <span className="italic text-[#967449]">Accompaniment</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light max-w-md mx-auto leading-relaxed">
              Our direct scheduling desks are active 24 hours a day across the
              South Delhi corridors. Establish contact to finalize profile
              selection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 rounded-lg font-medium text-sm shadow-md hover:bg-stone-800 transition-all active:scale-[0.99]"
              >
                Call Concierge: {phoneNumber || "Call Now"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-sm shadow-md hover:bg-[#20ba56] transition-all active:scale-[0.99]"
              >
                Secure WhatsApp Request
              </a>
            </div>

            <p className="pt-4 text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              Hauz Khas Village • Safdarjung Enclave • Green Park • Malviya
              Nagar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HauzKhas;
