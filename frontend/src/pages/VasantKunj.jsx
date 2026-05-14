import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  BriefcaseIcon,
  LockClosedIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const VasantKunj = () => {
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
  return (
    <div className="min-h-screen bg-[#fafafc] text-gray-800">
      <MetaTags
        title="Escort Service in Vasant Kunj - Premium Call Girl by FunwithJuli"
        description="Premium escort service in Vasant Kunj. Get 100% verified call girls, Russian escorts, and high-profile models. Safe, private, and 24/7 service in Vasant Kunj."
        keywords="escort service vasant kunj, call girl vasant kunj, vasant kunj escort, russian call girls vasant kunj, independent escorts vasant kunj, high profile call girls delhi"
      />

      {/* Hero Section - Light & Airy Luxury */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-pink-50 border border-pink-100 shadow-sm">
            <SparklesIcon className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-pink-600 font-bold text-xs uppercase tracking-[0.2em]">
              Luxury Reimagined
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1]">
            Elite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Escort Service
            </span>{" "}
            <br className="hidden md:block" /> in Vasant Kunj
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Discover the most sophisticated and high-profile companions in
            Delhi's posh Vasant Kunj area. Tailored for discerning gentlemen who
            seek excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 hover:-translate-y-1 transition-all"
            >
              <PhoneIcon className="w-6 h-6 mr-2" /> Call Now
            </a>
            <Link
              to="/photos"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold text-lg shadow-sm hover:bg-gray-50 transition-all"
            >
              Explore Profiles{" "}
              <ArrowRightIcon className="w-5 h-5 ml-2 text-pink-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Deep Content - Why Vasant Kunj? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-pink-600 pl-6">
              The Finest Companion Service for Vasant Kunj & South Delhi
            </h2>
            <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
              <p>
                Vasant Kunj is synonymous with luxury, class, and premium
                living. At <strong>FunwithJuli</strong>, we believe your
                companionship should be no different. Whether you are staying at
                a high-end farmhouse or one of the premium hotels like Grand
                Hyatt, our <strong>escort service in Vasant Kunj</strong>{" "}
                ensures you never spend a lonely night.
              </p>
              <p>
                We provide a diverse range of profiles, from{" "}
                <strong>Independent college girls</strong> to{" "}
                <strong>High-profile Russian escorts</strong>. Every companion
                in our roster is chosen not just for her physical beauty, but
                for her ability to engage in intelligent conversation and
                provide a relaxed environment.
              </p>
              <p>
                Our <strong>call girls in Vasant Kunj</strong> are available for
                both in-call and out-call services, covering all sectors
                including Vasant Kunj Sector A, B, C, D, and nearby areas like
                Aerocity and Nelson Mandela Road.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-pink-50/50 rounded-[2rem] border border-pink-100 flex flex-col justify-center items-center text-center">
              <CheckBadgeIcon className="w-12 h-12 text-pink-600 mb-4" />
              <h4 className="font-bold text-gray-900">100% Genuine</h4>
              <p className="text-xs text-gray-500 mt-2">Verified Photos Only</p>
            </div>
            <div className="p-8 bg-purple-50/50 rounded-[2rem] border border-purple-100 flex flex-col justify-center items-center text-center">
              <LockClosedIcon className="w-12 h-12 text-purple-600 mb-4" />
              <h4 className="font-bold text-gray-900">Discrete</h4>
              <p className="text-xs text-gray-500 mt-2">No Leak Policy</p>
            </div>
            <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-center items-center text-center col-span-2">
              <h3 className="text-4xl font-black text-pink-600">30 Min</h3>
              <p className="font-bold text-gray-900 mt-1 uppercase tracking-widest text-xs">
                Fast Arrival in Vasant Kunj
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Visual & Textual */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Desired Companion
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Russian Call Girls",
                rate: "Premium",
                desc: "Experience the exotic charm of European models in Vasant Kunj.",
                icon: <StarIcon className="w-6 h-6" />,
                color: "from-blue-50 to-blue-100",
              },
              {
                title: "Desi College Girls",
                rate: "Sweet",
                desc: "Young, vibrant, and energetic college students for a fresh vibe.",
                icon: <HeartIcon className="w-6 h-6" />,
                color: "from-pink-50 to-pink-100",
              },
              {
                title: "Airhostess & Models",
                rate: "VIP",
                desc: "Groomed professionals for corporate events and luxury dinners.",
                icon: <BriefcaseIcon className="w-6 h-6" />,
                color: "from-purple-50 to-purple-100",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center mb-6 text-pink-600`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {cat.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{cat.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-black text-pink-600 tracking-tighter">
                    VIP CHOICE
                  </span>
                  <Link
                    to="/gallery"
                    className="text-gray-900 font-bold text-sm border-b-2 border-pink-500 pb-1"
                  >
                    View All
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Booking Process (New Content) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-20 uppercase tracking-tighter">
            How to Book?{" "}
            <span className="text-pink-600 italic text-2xl font-normal lowercase">
              simple 3-step process
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-pink-50 hidden md:block -translate-y-1/2"></div>
            {[
              {
                step: "01",
                title: "Select Profile",
                text: "Browse our premium gallery or ask for latest pics on WhatsApp.",
              },
              {
                step: "02",
                title: "Confirm Details",
                text: "Choose your duration (1hr, 2hr, Full night) and provide location.",
              },
              {
                step: "03",
                title: "Enjoy Time",
                text: "Our companion will arrive at your Vasant Kunj doorstep in 30 mins.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl font-black text-pink-100 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Location SEO Hub */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Serving Every Corner of Vasant Kunj
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Sector A",
              "Sector B Pocket 1",
              "Sector C",
              "Sector D",
              "Nelson Mandela Road",
              "DLF Emporio",
              "Promenade Mall",
              "Ambience Mall VK",
              "Vasant Kunj Farmhouses",
              "Masoodpur",
              "Kishangarh",
              "Aruna Asaf Ali Marg",
            ].map((tag) => (
              <span
                key={tag}
                className="px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-gray-600 text-sm font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion FAQ Section */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 underline decoration-pink-500 decoration-4 underline-offset-8">
            Vasant Kunj Escort FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the price for escort service in Vasant Kunj?",
                a: "Our basic packages start from ₹3,000 for Indian girls and go up to ₹15,000+ for elite models or Russian companions. Rates depend on the duration and category selected.",
              },
              {
                q: "Do you provide home service in Vasant Kunj residential areas?",
                a: "Yes, we provide out-call services to both hotels and private residences or farmhouses in Vasant Kunj. We ensure the companion arrives in a private vehicle to maintain 100% discretion.",
              },
              {
                q: "How can I be sure about the quality of the girl?",
                a: "FunwithJuli is a trusted brand. We provide recent, unedited photos of our companions. If the girl doesn't match the photo provided on WhatsApp, we have a 'No Questions Asked' replacement policy.",
              },
              {
                q: "Are the services available 24/7 in Vasant Kunj?",
                a: "Yes, our team and companions are available 24 hours a day. Whether it's a quick lunch date or a late-night companionship, we are always ready.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 flex items-start">
                  <span className="text-pink-600 mr-3">Q.</span> {faq.q}
                </h3>
                <p className="mt-4 text-gray-500 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Premium CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-[4rem] p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready for an{" "}
              <span className="text-pink-500 italic">Unforgettable</span>{" "}
              Evening?
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light">
              The most beautiful companions of Vasant Kunj are waiting for your
              call. Book your luxury experience now.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : ""}
                className="px-12 py-6 bg-pink-600 text-white rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_50px_-15px_rgba(219,39,119,0.5)]"
              >
                BOOK NOW: {phoneNumber || ""}
              </a>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-green-500 font-bold">● 14 Girls</span>{" "}
                currently active in Vasant Kunj
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © 2024 FunWithJuli Premium Companionship | Vasant Kunj
          </p>
          <div className="mt-4 flex justify-center gap-6 text-[10px] text-gray-400 font-medium uppercase">
            <Link to="/terms" className="hover:text-pink-600">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-pink-600">
              Privacy
            </Link>
            <Link to="/contact-us" className="hover:text-pink-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VasantKunj;
