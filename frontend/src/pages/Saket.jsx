import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  UserIcon,
  SparklesIcon,
  MapPinIcon,
  HandThumbUpIcon,
  RocketLaunchIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Saket = () => {
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
    <div className="min-h-screen bg-[#fafaff] text-slate-900 font-sans">
      <MetaTags
        title="Escort Service in Saket - Premium Call Girl by FunwithJuli"
        description="Looking for trusted and premium escort service in Saket? FunwithJuli provides professional, safe, and private call girl services with 100% customer satisfaction."
        keywords="escort service saket, call girl saket, saket escort, russian call girls saket, funwithjuli"
      />

      {/* --- Sticky CTA for Mobile --- */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden">
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : ""}
          className="flex-1 bg-pink-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
        >
          <PhoneIcon className="w-5 h-5" /> Call Now
        </a>
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
              : ""
          }
          className="flex-1 bg-green-500 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
        >
          <ChatBubbleBottomCenterTextIcon className="w-5 h-5" /> WhatsApp
        </a>
      </div>

      {/* --- Split Hero Section --- */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-50 -z-10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
                Live in East Delhi
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
                Escorts
              </span>{" "}
              in Saket
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              No fake promises. Just real girls, real photos, and real
              satisfaction. Serving Laxmi Nagar, Shakarpur, and Nirman Vihar
              with elite companionship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : ""}
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:bg-pink-600 transition-all"
              >
                Book a Date
              </a>
              <Link
                to="/photos"
                className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:border-pink-500 transition-all"
              >
                Browse Gallery
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laxmi Nagar Escort"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                  <HandThumbUpIcon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">
                    Verified Profiles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Steps Section (The "How it Works" Timeline) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-black mb-6 italic">
                Simple 3-Step <br />
                Booking Process
              </h2>
              <p className="text-slate-500">
                We keep it simple because we know you're in a hurry to enjoy
                your evening in East Delhi.
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {[
                {
                  step: "01",
                  title: "Pick Your Style",
                  desc: "Browse our diverse category of college girls, housewives, and professional models active in Saket.",
                  icon: <UserIcon />,
                },
                {
                  step: "02",
                  title: "Instant Connect",
                  desc: "Call or WhatsApp us. We share current location photos and availability immediately.",
                  icon: <RocketLaunchIcon />,
                },
                {
                  step: "03",
                  title: "No-Fuss Meet",
                  desc: "She reaches your hotel or home in 20-30 minutes. Pay only after you meet.",
                  icon: <ShieldCheckIcon />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-8 p-8 rounded-[2rem] border border-slate-100 hover:border-pink-200 hover:bg-pink-50/30 transition-all"
                >
                  <div className="text-5xl font-black text-slate-100 group-hover:text-pink-100 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 text-pink-600">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Local Context Section (Rich Text for SEO) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5">
          <MapPinIcon className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Why <span className="text-pink-500">Saket</span> is the best
                place for fun?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Saket is one of South Delhi's most prestigious neighborhoods
                with premium malls and hotels, demands elite companionship
                services. FunWithJuli understands your need for quality time,
                private moments, and good company after a busy day. We focus on
                your privacy, comfort, and 100% customer satisfaction. highly
                discrete, catering specifically to students and young
                professionals who value privacy above all.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <LockClosedIcon className="w-8 h-8 text-pink-500 mb-2" />
                  <h4 className="font-bold">Zero Risk</h4>
                  <p className="text-xs text-slate-500">
                    Cash on delivery, no advance scams.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <SparklesIcon className="w-8 h-8 text-pink-500 mb-2" />
                  <h4 className="font-bold">Variety</h4>
                  <p className="text-xs text-slate-500">
                    College girls to High-profile models.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white text-slate-900 p-10 rounded-[3rem] shadow-2xl shadow-pink-500/20">
              <h3 className="text-2xl font-black mb-6">
                Our Arrival Guarantee
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-pink-100 p-2 rounded-lg text-pink-600 font-bold">
                    15m
                  </div>
                  <p className="text-sm">Reach nearby areas in South Delhi.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-pink-100 p-2 rounded-lg text-pink-600 font-bold">
                    20m
                  </div>
                  <p className="text-sm">Reach Saket Metro & nearby areas.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-pink-100 p-2 rounded-lg text-pink-600 font-bold">
                    30m
                  </div>
                  <p className="text-sm">
                    Outer East Delhi regions (Anand Vihar/IP Ext).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Cards --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Available Packages</h2>
          <p className="text-slate-500">
            Tailored companionship for every budget in South Delhi
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              type: "Quickie",
              price: "₹3,000",
              desc: "Perfect for a 1-hour fast break during your lunch or travel.",
              color: "bg-blue-50",
            },
            {
              type: "Premium Date",
              price: "₹5,000",
              desc: "A detailed 2-3 hours session with conversation and intimacy.",
              color: "bg-pink-50",
            },
            {
              type: "Full Night",
              price: "₹12,000",
              desc: "Unlimited fun until the sun comes up. GFE included.",
              color: "bg-indigo-50",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`${card.color} p-10 rounded-[2.5rem] border border-transparent hover:border-slate-200 transition-all flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{card.type}</h3>
                <p className="text-3xl font-black text-slate-900 mb-6">
                  {card.price}
                </p>
                <p className="text-slate-600 mb-8">{card.desc}</p>
              </div>
              <button className="w-full py-4 bg-white rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all">
                Select This <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Dont Wait For <br />
            The Weekend.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            "Your privacy is our religion. In a crowded place like Saket, we
            ensure your secret stays with us."
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="bg-pink-600 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-xl shadow-pink-200 hover:scale-105 transition-all"
            >
              Call: {phoneNumber || ""}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Saket;
