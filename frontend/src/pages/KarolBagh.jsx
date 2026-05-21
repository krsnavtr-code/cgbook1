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

const KarolBagh = () => {
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
    "Hello FunWithJuli, I am in Karol Bagh and want to check premium verified companion portfolios immediately.",
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-neutral-800 font-sans antialiased selection:bg-[#A21C26] selection:text-white">
      <MetaTags
        title="Escort Service in Karol Bagh - Call Girl FunwithJuli 24/7"
        description="Premium independent escort service in Karol Bagh. Beautiful elite models, air hostess companions, and high-profile call girls in Karol Bagh, Central Delhi. Cash on delivery."
        keywords="escort service karol bagh, call girl karol bagh, karol bagh call girls, independent escorts central delhi"
      />

      {/* --- Vibrant Retail-Style Floating Panel --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-transform active:scale-95"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : "#"}
          className="bg-[#A21C26] text-white p-4 rounded-full shadow-[0_8px_24px_rgba(162,28,38,0.3)] animate-bounce"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>

      {/* --- High-Impact Luxe Frontispiece Hero --- */}
      <section className="relative bg-gradient-to-b from-[#FFF5F5] to-white pt-16 pb-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left High-Contrast Typography Deck */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-[#A21C26]/10 text-[#A21C26] text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded">
                Central Delhi Premier Roster
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none uppercase">
                Premium <br />
                <span className="text-[#A21C26]">Companionship</span> <br />
                Karol Bagh
              </h1>

              <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto lg:mx-0 rounded-full"></div>

              <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Connect instantly with top-tier independent escorts,
                high-profile agency models, and exclusive campus companions in
                Karol Bagh and neighboring business precincts.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                  className="px-8 py-4 bg-[#A21C26] text-white font-bold uppercase text-sm tracking-wider rounded shadow-lg hover:bg-[#85141B] transition-all transform active:translate-y-0.5"
                >
                  Call Booking Desk
                </a>
                <Link
                  to="/photos"
                  className="px-8 py-4 bg-white border-2 border-neutral-800 text-neutral-900 font-bold uppercase text-sm tracking-wider rounded hover:bg-neutral-50 transition-all"
                >
                  Explore Showcase
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-neutral-500 uppercase tracking-wide">
                <span className="flex items-center gap-1">
                  <CheckBadgeIcon className="w-4 h-4 text-[#D4AF37]" /> No
                  Advance Cash
                </span>
                <span className="flex items-center gap-1">
                  <CheckBadgeIcon className="w-4 h-4 text-[#D4AF37]" /> 100%
                  Secure Meetings
                </span>
              </div>
            </div>

            {/* Right Framed Retail Display Column */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                {/* Decorative Solid Block Shadow */}
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-2xl translate-x-3 translate-y-3 -z-10"></div>

                <div className="bg-white border-4 border-neutral-900 rounded-2xl p-4 shadow-xl">
                  <div className="relative h-[28rem] w-full overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      alt="Karol Bagh Exclusive Companion Showcase Portfolio"
                    />
                    <div className="absolute top-4 left-4 bg-[#A21C26] text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 shadow-md">
                      Verified On-Call
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bold Dual-Column Commercial Copy Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-3">
              <span className="text-xs font-black text-[#D4AF37] tracking-widest uppercase block">
                The Urban Core
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 uppercase leading-tight tracking-tight">
                Luxury Services Amidst Delhi's Grandest Bazaar
              </h2>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-neutral-600 text-sm leading-relaxed">
              <p>
                Karol Bagh showcases an vibrant mixture of classical commercial
                grandeur and cosmopolitan lifestyle dynamics. Whether you are
                resting post-transit near the luxurious hotels of{" "}
                <strong className="text-neutral-900 font-semibold">
                  Pusa Road
                </strong>
                , exploring the vast market avenues of{" "}
                <strong className="text-neutral-900 font-semibold">
                  Gaffar Market
                </strong>
                , or staying deep in central residential configurations, premium
                companionship stays right at your doorstep.
              </p>
              <p>
                Our selective service interface matches selective travelers with
                magnificent independent call girls. All companion profiles
                feature absolute physical authenticity. Dispatch structures
                easily envelope adjacent Central-West territories like{" "}
                <span className="text-[#A21C26] font-semibold">
                  Rajendra Place, Patel Nagar, Connaught Place, and Jhandewalan
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Boutique Retail Price Cards --- */}
      <section className="py-20 bg-[#F3F4F6] border-t border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold text-[#A21C26] uppercase tracking-widest">
              // SELECTION MENU
            </span>
            <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight mt-1">
              Rates & Roster Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Student Fun",
                rate: "3,000",
                description:
                  "Young, casual companions perfect for friendly dates and fun outings.",
              },
              {
                title: "Executive Date",
                rate: "5,000",
                description:
                  "Refined models suited for corporate events and dinners.",
              },
              {
                title: "B2B Special",
                rate: "4,000",
                description:
                  "Sensory relaxation packages tailored for absolute peace of mind.",
              },
              {
                title: "Night Queen",
                rate: "10,000",
                description:
                  "Elite high-profile models providing premium all-night companionship.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-[#A21C26] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {card.title}
                    </h3>
                    <SparklesIcon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] font-extrabold text-neutral-400 block tracking-wider uppercase">
                      Starting From
                    </span>
                    <span className="text-2xl font-black text-[#A21C26]">
                      ₹{card.rate}
                    </span>
                  </div>
                </div>
                <Link
                  to="/gallery"
                  className="bg-neutral-50 hover:bg-[#A21C26] text-neutral-800 hover:text-white text-center py-3 text-xs font-bold uppercase tracking-wider border-t border-neutral-100 transition-all flex items-center justify-center gap-2"
                >
                  View Lookbook <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Premium Safety Signposts --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
          <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight">
            Discreet Booking Pillars
          </h2>
          <p className="text-neutral-500 text-sm">
            We handle every single meeting request through three strict privacy
            verification channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border-t-4 border-[#A21C26] rounded-xl shadow-sm text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-[#FFF5F5] text-[#A21C26] rounded-full flex items-center justify-center">
              <FingerPrintIcon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 uppercase">
              Wiped Call Footprints
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              All telephone records and text logs are wiped permanently from our
              systems once your session concludes safely.
            </p>
          </div>

          <div className="bg-white p-8 border-t-4 border-[#D4AF37] rounded-xl shadow-sm text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-amber-50 text-[#D4AF37] rounded-full flex items-center justify-center">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 uppercase">
              Private Fleet Arrival
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              Companions travel via unmarked personal vehicles, blending
              completely with regular boutique hotel arrivals.
            </p>
          </div>

          <div className="bg-white p-8 border-t-4 border-[#A21C26] rounded-xl shadow-sm text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-[#FFF5F5] text-[#A21C26] rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 uppercase">
              Trusted Venue Coverage
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              Our dispatch processes interface effortlessly with premier
              business luxury hotels and commercial residencies across Central
              Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* --- Interactive FAQ Accordion Area --- */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 border-t border-neutral-200">
        <h2 className="text-2xl font-black text-neutral-900 text-center uppercase tracking-tight mb-10">
          Frequently Answered Protocols
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "How can I hire an independent escort in Karol Bagh?",
              a: "Give our central desk a call or connect via WhatsApp. We will swiftly text you an encrypted view-link of models active around the Karol Bagh radius for selection.",
            },
            {
              q: "Do you demand an advance down payment?",
              a: "Absolutely not. We follow a strict cash-on-delivery system. You pay your chosen companion directly at the rendezvous point upon full physical satisfaction.",
            },
            {
              q: "Can you dispatch call girls to Pusa Road hotels?",
              a: "Yes. Pusa Road, Rajendra Place, Patel Nagar, and New Delhi Railway Station areas are fully serviced within our 20-minute rapid dispatch bubble.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-neutral-200 rounded-lg overflow-hidden transition-shadow shadow-sm hover:shadow-md"
            >
              <summary className="flex items-center justify-between p-5 font-bold text-sm sm:text-base text-neutral-900 list-none cursor-pointer bg-neutral-50/50 hover:bg-neutral-50 select-none">
                <span>{faq.q}</span>
                <span className="text-[#A21C26] group-open:rotate-180 transition-transform duration-200 text-xs">
                  ▼
                </span>
              </summary>
              <div className="p-5 text-xs sm:text-sm text-neutral-600 border-t border-neutral-100 bg-white font-normal leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- Luxurious Premium Final Banner --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="relative bg-neutral-950 text-white p-8 sm:p-12 lg:p-16 text-center rounded-3xl overflow-hidden shadow-2xl">
          {/* Accent Glow Ring */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#A21C26]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-black text-[#D4AF37] tracking-widest uppercase block">
              // EXCLUSIVE CONCIERGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
              EXPERIENCE ELITE COMPANIONSHIP TODAY
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-normal max-w-md mx-auto leading-relaxed">
              Our professional booking desk coordinates dispatches 24 hours a
              day across the whole Central Delhi region. Connect with us to
              reserve your model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 text-xs font-bold uppercase tracking-wider">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center justify-center bg-[#A21C26] text-white px-8 py-4 rounded shadow-md hover:bg-[#85141B] transition-transform active:scale-[0.98]"
              >
                Call Now: {phoneNumber || "Connect"}
              </a>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded shadow-md hover:bg-[#20ba56] transition-transform active:scale-[0.98]"
              >
                WhatsApp Booking Line
              </a>
            </div>

            <p className="pt-4 text-[10px] font-semibold text-neutral-500 tracking-widest uppercase">
              Karol Bagh Market • Pusa Road • Rajendra Place • Patel Nagar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarolBagh;
