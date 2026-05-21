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

const LajpatNagar = () => {
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
    "Hello FunWithJuli, I am near Lajpat Nagar and would like to browse your live verified premium companion roster.",
  );

  return (
    <div className="min-h-screen bg-[#F3F2F7] text-[#4A3E4D] font-sans antialiased selection:bg-[#E07A5F] selection:text-white">
      <MetaTags
        title="Escort Service in Lajpat Nagar - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Lajpat Nagar. Elite models, college student companions, and high-profile call girls near Central Market, South Delhi. Safe doorstep dispatch."
        keywords="escort service lajpat nagar, call girl lajpat nagar, lajpat nagar call girls, independent escorts south delhi"
      />

      {/* --- Smooth Lifestyle Floating Action Deck --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4.5 rounded-2xl shadow-[0_12px_24px_rgba(37,211,102,0.25)] transition-transform active:scale-95"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#E07A5F] text-white p-4.5 rounded-2xl shadow-[0_12px_24px_rgba(224,122,95,0.3)]"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* --- Soft-Luxe Curved Hero Section --- */}
      <section className="relative bg-[#FAF9FC] pt-16 pb-24 rounded-b-[2.5rem] shadow-sm overflow-hidden">
        {/* Abstract Background Pastel Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07A5F]/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3C2A3F]/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Text Block */}
            <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-[#3C2A3F]/5 text-[#3C2A3F] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-xl">
                <SparklesIcon className="w-3.5 h-3.5 text-[#E07A5F]" /> South
                Delhi Premium Hub
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3C2A3F] tracking-tight leading-tight">
                Refined Luxury, <br />
                Tailored Privately in <br />
                <span className="text-[#E07A5F] font-extrabold">
                  Lajpat Nagar
                </span>
              </h1>

              <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Experience an curated style of local introduction. Discover
                verified independent models, selective agency rosters, and elite
                corporate companions operating seamlessly across the Lajpat
                Nagar sectors.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-7 py-3.5 bg-[#3C2A3F] text-white font-semibold text-sm rounded-2xl shadow-md hover:bg-[#2C1E2E] transition-all transform active:scale-98"
                >
                  Connect with Concierge
                </a>
                <Link
                  to="/photos"
                  className="px-7 py-3.5 bg-white border border-neutral-200 text-[#3C2A3F] font-semibold text-sm rounded-2xl shadow-sm hover:bg-neutral-50 transition-all"
                >
                  Browse Portfolio Lookbook
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-neutral-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#E07A5F]" /> No
                  Upfront Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-[#E07A5F]" /> Cash
                  Handed Directly
                </span>
              </div>
            </div>

            {/* Right Smooth Frame Card Display */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
                {/* Floating Aesthetic Card Element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 hidden sm:block z-20 max-w-[200px]">
                  <p className="text-xs font-bold text-[#3C2A3F]">
                    100% Identity Vetted
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Every profile undergoes physical confirmation benchmarks.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-neutral-100">
                  <div className="relative h-[26rem] w-full overflow-hidden rounded-[1.5rem] bg-neutral-50">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                      className="w-full h-full object-cover object-top filter brightness-[98%]"
                      alt="Premium Lajpat Nagar Companion Profile Representation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Lifestyle Content Narrative --- */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-neutral-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider block">
              The Urban Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3C2A3F] leading-snug">
              Upscale Companionship for Discerning Visitors
            </h2>
            <div className="w-12 h-1 bg-[#E07A5F] rounded-full mt-2"></div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-neutral-500 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Lajpat Nagar pulses as one of South Delhi’s ultimate lifestyle
              epicenters. Whether you are finalizing a demanding corporate tour
              near the busy retail setups of{" "}
              <strong className="text-[#3C2A3F] font-semibold">
                Central Market
              </strong>
              , checking into a private boutique residency, or relaxing in
              upscale quarters, accessing sophisticated companionship remains
              completely effortless.
            </p>
            <p>
              Our dynamic system syncs with local, independent female
              companions, private flight hostesses, and glamorous high-profile
              models. Logistics networks cover all local neighborhoods swiftly,
              ensuring safe deliveries into{" "}
              <span className="text-[#3C2A3F] font-semibold">
                Defence Colony, Amar Colony, Ashram, and Greater Kailash
              </span>{" "}
              zones.
            </p>
          </div>
        </div>
      </section>

      {/* --- Soft Cushion Grid Packages --- */}
      <section className="pb-24 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:text-left">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Pricing Setup
          </span>
          <h2 className="text-2xl font-bold text-[#3C2A3F] mt-1">
            Classified Tiers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Student Fun",
              rate: "3,000",
              tag: "Casual Companion",
              labelColor: "bg-indigo-50 text-indigo-600",
            },
            {
              name: "Executive Date",
              rate: "5,000",
              tag: "Elite Class",
              labelColor: "bg-amber-50 text-amber-700",
            },
            {
              name: "B2B Special",
              rate: "4,000",
              tag: "Sensory Calm",
              labelColor: "bg-emerald-50 text-emerald-700",
            },
            {
              name: "Night Queen",
              rate: "10,000",
              tag: "Premium VIP",
              labelColor: "bg-rose-50 text-rose-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-lg ${item.labelColor}`}
                  >
                    {item.tag}
                  </span>
                  <UserIcon className="w-4 h-4 text-neutral-300" />
                </div>
                <h3 className="text-lg font-bold text-[#3C2A3F]">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 font-normal mt-1">
                  Full service access parameters including GFE arrangements.
                </p>
                <div className="mt-5 pt-4 border-t border-neutral-50">
                  <span className="text-[10px] uppercase text-neutral-400 block tracking-wider font-semibold">
                    Starting Rate
                  </span>
                  <span className="text-2xl font-extrabold text-[#3C2A3F]">
                    ₹{item.rate}
                  </span>
                </div>
              </div>
              <Link
                to="/gallery"
                className="text-xs font-bold text-[#E07A5F] flex items-center justify-between pt-5 mt-5 border-t border-neutral-50 group"
              >
                Access Roster Data{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Clean Privacy Protocol Strips --- */}
      <section className="py-20 bg-[#FAF9FC] border-t border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-2 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3C2A3F]">
              Discretion Standards
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm">
              We process every single profile matching query through highly
              restricted local security chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-10 h-10 shrink-0 bg-[#3C2A3F]/5 rounded-xl flex items-center justify-center text-[#3C2A3F]">
                <FingerPrintIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#3C2A3F] uppercase">
                  Volatile Logs
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  All transaction traces, phone records, and coordination points
                  are deleted cleanly from current files after booking
                  completion.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-10 h-10 shrink-0 bg-[#E07A5F]/5 rounded-xl flex items-center justify-center text-[#E07A5F]">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#3C2A3F] uppercase">
                  Unmarked Fleet
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  Companions leverage casual, everyday private transport means
                  to blend entirely with routine residential flows.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-10 h-10 shrink-0 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#3C2A3F] uppercase">
                  Hotel Alignment
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  Dispatches align accurately with regular safety check
                  protocols at leading hotels and residential properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Minimalist Clean FAQ Section --- */}
      <section className="py-24 max-w-3xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl font-bold text-[#3C2A3F] text-center mb-10">
          Client FAQ Resolvers
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "How to hire an independent escort in Lajpat Nagar?",
              a: "Initialize phone dialogue or a secure chat message. The concierge team will share available live portfolios based inside your local South Delhi quadrant immediately.",
            },
            {
              q: "Is there a required advance booking payment?",
              a: "No. Our system completely operates without upfront financial booking fees. All payments are handed direct to your companion upon arrival.",
            },
            {
              q: "Can I coordinate dispatches to Defence Colony?",
              a: "Yes. Defence Colony, Amar Colony, Ashram, and Greater Kailash premium sectors are supported within our 15-to-20 minute local delivery window.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm transition-all"
            >
              <summary className="flex items-center justify-between p-5 font-semibold text-xs sm:text-sm text-[#3C2A3F] list-none cursor-pointer hover:bg-neutral-50/50 select-none">
                <span>{faq.q}</span>
                <span className="text-[#E07A5F] group-open:rotate-180 transition-transform duration-200 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-neutral-500 border-t border-neutral-50 bg-[#FAF9FC] leading-relaxed font-normal">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- Curvaceous Modern CTA Base Block --- */}
      <section className="py-12 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="relative bg-[#3C2A3F] text-white p-8 sm:p-12 lg:p-16 text-center rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A5F]/10 rounded-full filter blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold text-[#E07A5F] uppercase tracking-widest block">
              // PRIVATE BOOKING DESK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Initiate Discreet Portfolios Now
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-md mx-auto leading-relaxed">
              Our support desks maintain operations 24/7 across South Delhi
              corridors. Establish quick contact to filter active matches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3 text-xs font-semibold">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-[#E07A5F] text-white px-7 py-3.5 rounded-xl shadow-md hover:bg-[#c96a50] transition-all"
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
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl shadow-md hover:bg-[#20ba56] transition-all"
              >
                Secure WhatsApp Pipeline
              </a>
            </div>

            <p className="pt-4 text-[10px] font-medium text-neutral-400 tracking-wider uppercase">
              Central Market • Defence Colony • Amar Colony • Ashram Hub
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LajpatNagar;
