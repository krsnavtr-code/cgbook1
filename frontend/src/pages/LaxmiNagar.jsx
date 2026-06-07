import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  MapPinIcon,
  CheckBadgeIcon,
  FingerPrintIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  HomeIcon,
  UsersIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const LaxmiNagar = () => {
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
    <div className="min-h-screen bg-[#fcfcfd]">
      <MetaTags
        title="Escort Service in Laxmi Nagar - Call Girl FunwithJuli 24/7"
        description="Get the best escort service in Laxmi Nagar. Top-rated call girls in Laxmi Nagar, East Delhi. Independent models, college girls, and 100% verified profiles. Call now!"
        keywords="escort service laxmi nagar, call girl laxmi nagar, east delhi escorts, independent call girl laxmi nagar, russian escort laxmi nagar"
      />

      {/* --- Floating Action Button (Mobile Only) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={
            phoneNumber
              ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
              : ""
          }
          className="bg-green-500 p-4 rounded-full shadow-lg text-white"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
        <a
          href={phoneNumber ? `tel:${phoneNumber}` : ""}
          className="bg-pink-600 p-4 rounded-full shadow-lg text-white animate-bounce"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>

      {/* --- Modern Hero Section --- */}
      <section className="relative pt-10 lg:pt-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 px-3 py-1 rounded-md mb-6">
              <BoltIcon className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 text-xs font-bold uppercase tracking-widest">
                Active in East Delhi Now
              </span>
            </div>
            <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Premium and{" "}
              <span className="text-pink-600 underline decoration-indigo-500/30">
                Best Call Girls
              </span>{" "}
              in Laxmi Nagar
            </h1>
            <p className="text-sm md:text-lg  mb-8 max-w-xl leading-relaxed">
              Are you tired and looking for premium call in laxmi nagar, we
              completely understand your desire and we will surely full fill it
              with our vip escort service in laxmi nagar, Laxmi Nagar is located
              in east delhi, It’s a hub of coaching and hub of study in east
              delhi, It is also known as it’s premium call girls in laxmi nagar,
              people comes here from different area for travel, enjoy and find
              sexy call girls to spend their private time with these beautiful
              angels.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={phoneNumber ? `tel:${phoneNumber}` : ""}
                className="px-8 py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-pink-600 transition-all flex items-center gap-2 shadow-xl shadow-slate-200"
              >
                <PhoneIcon className="w-5 h-5" /> Call Agency
              </a>
              <Link
                to="/photos"
                className="px-8 py-2 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-pink-200 transition-all shadow-sm"
              >
                View Real Photos
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <CheckBadgeIcon className="w-5 h-5 text-green-500" /> Privacy
                Guaranteed
              </span>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl h-64 bg-slate-200 animate-pulse overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.50.24-pm--1--26042026-1122.jpeg"
                    className="w-full h-full object-cover"
                    alt="Laxmi Nagar Companion"
                  />
                </div>
                <div className="bg-pink-600 p-6 rounded-3xl text-white">
                  <p className="text-2xl font-black">50+</p>
                  <p className="text-xs uppercase opacity-80">
                    Verified Models
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-600 p-6 rounded-3xl text-white">
                  <p className="text-2xl font-black">20m</p>
                  <p className="text-xs uppercase opacity-80">
                    Average Arrival
                  </p>
                </div>
                <div className="rounded-3xl h-64 bg-slate-200 animate-pulse overflow-hidden">
                  <img
                    src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.50.23-pm--1--26042026-1122.jpeg"
                    className="w-full h-full object-cover"
                    alt="East Delhi Escort"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Hyper-Local SEO Content --- */}
      <section className="pt-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-2">
          <div className="bg-white rounded-sm lg:rounded-[3rem] p-3 md:p-16 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-lg md:text-3xl font-bold text-slate-900 leading-snug">
                  Full fill your Desire with Call girl{" "}
                  <span className="text-pink-600">in laxmi Nagar</span>
                </h2>
                <div className="prose prose-slate max-w-none ">
                  <p>
                    Yes, you heard right, our escort service in laxmi nagar will
                    fulfil your desire. We have every type of call girl no
                    matter if you want desi bhabhi, Russian call girl or College
                    Call Girl. We can provide you room to room delivery. It
                    means you get an amazing experience with our call girls in
                    laxmi nagar
                  </p>
                  <p>
                    We have more than 500+ verified{" "}
                    <a href="https://www.funwithjuli.in/escort-service-laxmi-nagar">
                      call girl in laxmi nagar
                    </a>{" "}
                    and nearby areas. You can choose them by calling or sending
                    messages in whatsapp. We’ll provide you every girl who are
                    waiting for you.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> Low
                        Profile College Girls
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> High
                        Profile Shoot Models
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" />{" "}
                        Discrete Housewife Escorts
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> 100%
                        In-call/Out-call
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" /> Hotel
                        Safe Guaranteed
                      </li>
                      <li className="flex items-center gap-2 font-medium text-slate-800">
                        <SparklesIcon className="w-5 h-5 text-pink-500" />{" "}
                        Professional GFE
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-600 mt-5">
                    Our goal is not just to provide companionship but also to
                    make your time in laxmi nagar more enjoyable and relaxing.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900 rounded-sm md:rounded-[2.5rem] p-2 md:p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MagnifyingGlassIcon className="w-32 h-32 text-white" />
                </div>
                <p className="text-xl font-bold mb-4 italic">
                  "What Makes Fun with Juli Different?"
                </p>
                <ul className="space-y-1 pb-5">
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> 100% Easy
                    booking with call or whatsapp
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> Hotel
                    Friendly and professional call girl
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> Private
                    and secure meetings
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> Available
                    across Delhi NCR
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> 24/7
                    customer support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white">
                    <SparklesIcon className="w-5 h-5 text-pink-500" /> 100%
                    Verified Call Girls
                  </li>
                </ul>
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <a
                    href={
                      phoneNumber
                        ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi, I'm interested in booking a call girl in Laxmi Nagar. Please share available profiles.`
                        : ""
                    }
                    className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Russian Call Girls Section --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <div className="bg-white rounded md:rounded-3xl p-2 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
            Hot Russian Call Girls in Laxmi Nagar, Delhi
          </h2>
          <div className="prose prose-slate max-w-none space-y-4">
            <p>
              In laxmi nagar people come from different area to spend time with
              russian girls, russian girls are so pretty and very much popular
              in indian young age group. So it means every guy want to spend
              time with these russian girls. They are very pretty and our
              russian escort service in laxmi nagar give you special feel you
              never get before.
            </p>
            <p>
              Russian girl charge very high rate for these service but at fun
              with juli we can provide you russian call girl in affordable
              price, it means they will make you happy also no load in your
              pocket, so get these independent russian girl now call us or send
              hi in our whatsapp.
            </p>
            <p className="font-bold text-slate-900">
              We cover many major locations nearby laxmi nagar also:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Connaught
                  Place
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Karol Bagh
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Saket
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Vasant Kunj
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Dwarka
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Rohini
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Mahipalpur
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> Lajpat Nagar
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-pink-500" /> South Delhi
                  areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Desi Call Girls Section --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-3 md:p-8 shadow-sm border border-pink-100">
          <h2 className="text-xl md:text-4xl font-black text-slate-900 mb-6">
            Desi Call girl Escort service in Laxmi Nagar
          </h2>
          <div className="prose prose-slate max-w-none space-y-4">
            <p>
              Who doesn't want indian desi college call girl, their young age
              and charming personality make them so special, our{" "}
              <a href="https://www.funwithjuli.in/escort-service-laxmi-nagar">
                desi escort service in laxmi nagar
              </a>{" "}
              make you feel like going to heaven, seal packed college going girl
              know how to play with you in the bed and give you an extreme feel.
            </p>
            <p>
              Desi girls are very adorable and they can easily make you wet,
              with their kissing and body figure, we promise you will get the
              experience you had not feel before.
            </p>
          </div>
        </div>
      </section>

      {/* --- Affordable Pricing Section --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <div className="bg-slate-900 rounded-3xl p-3 md:p-12 text-white">
          <h2 className="text-2xl md:text-4xl font-black mb-6">
            Call girl in Laxmi Nagar Starting from 2500/-
          </h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p>
              Yes you heard right, our call girl are starting from 2500 rupees
              only, yes it means full fun at minimal cost, these affordable call
              girl with minimal price comes with hotness and beauty that make
              you feel awesome, these naughty girls have skill to satisfy you.
            </p>
            <p>
              Get most personalised experience with these hot babies with their
              naughty behave like a kid with you in the bed, your most welcome
              to these call girls are waiting for you, just connect with us over
              call or whatsapp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" /> Call Now
            </a>
            <a
              href={
                phoneNumber
                  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
                  : ""
              }
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- Pricing/Service Grid --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <h2 className="text-xl md:text-3xl font-black text-slate-900 lg:text-center">
          100% Verified Call Girls in Laxmi Nagar
        </h2>
        <p>
          Funwith Juli offers 100% Verified{" "}
          <a href="https://www.funwithjuli.in/escort-service-laxmi-nagar">
            call girls in laxmi nagar
          </a>{" "}
          for different types of occasions. No matter you want a one night
          partner, need a company, need a partner for dinner or need call girls
          in delhi for sex, we can provide you hottest and 100% verified call
          girls in laxmi nagar.
        </p>
        <p>
          It means which girl you will book or see the photos the exact same
          girl with spend a night with you also you can book through whatsapp or
          call.
        </p>

        <p className="text-lg font-bold text-slate-900 mb-6">
          You Can Book Our Escort Service in Laxmi Nagar For:
        </p>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            {
              name: "Business trips ",
              icon: <BuildingOffice2Icon className="w-6 h-6" />,
              tag: "Most Popular",
            },
            {
              name: "Hotel companionship ",
              icon: <BuildingOffice2Icon className="w-6 h-6" />,
              tag: "Classy",
            },
            {
              name: "Dinner dates ",
              icon: <SparklesIcon className="w-6 h-6" />,
              tag: "Relaxing",
            },
            {
              name: "Private parties ",
              icon: <UsersIcon className="w-6 h-6" />,
              tag: "VIP",
            },
            {
              name: "Travel companionship ",
              icon: <PaperAirplaneIcon className="w-6 h-6" />,
              tag: "VIP",
            },
            {
              name: "Nightlife outings",
              icon: <SparklesIcon className="w-6 h-6" />,
              tag: "VIP",
            },
            {
              name: "Weekend relaxation",
              icon: <HomeIcon className="w-6 h-6" />,
              tag: "VIP",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-200 p-2 md:p-8 rounded-xl md:rounded-3xl hover:border-pink-200 hover:shadow-xl hover:shadow-pink-50/50 transition-all"
            >
              {/* <div className="w-12 h-12 text-pink-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div> */}
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-tighter">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-4">
                {item.name}
              </h3>
              <a
                href={
                  phoneNumber
                    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi, I'm interested in booking for ${item.name}. Please share available profiles.`
                    : ""
                }
                className="text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                BOOK NOW <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
          <p>
            No matter the reason, our team focuses on making your experience
            safe and enjoyable.
          </p>
        </div>
      </section>

      {/* --- VIP Escort Service Section --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <div className="bg-white rounded md:rounded-3xl p-2 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-xl md:text-4xl font-black text-slate-900 mb-6">
            Make your Night Memorable with Vip Escort Service in Laxmi Nagar
          </h2>
          <div className="prose prose-slate max-w-none space-y-4">
            <p>
              Laxmi Nagar is heaven for those who are looking escort service in
              laxmi nagar and nearby area, at our call girl service we have
              collection of vip girls, Russian girls and independent girl these
              girl will fully satisfy you and full fill your inner desire. These
              hot girl are trusted and verified they will do whatever you want
              with affordable pricing.
            </p>
            <p>
              No matter if you want some hours or stay night with these baddies
              the whole night and from oral sex to doggy style everything they
              will provide you to make your night fully memorable and fully
              secure with a private room.
            </p>
          </div>
        </div>
      </section>

      {/* --- Booking Process Section --- */}
      <section className="pt-10 pb-10 max-w-7xl mx-auto px-2">
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-3 md:p-8 shadow-sm border border-indigo-100">
          <h2 className="text-xl md:text-4xl font-black text-slate-900 mb-6">
            Booking process at our Escort service laxmi nagar
          </h2>
          <div className="prose prose-slate max-w-none space-y-4">
            <p>
              What make us different is our process, our process is very simple
              and short at our Laxmi Nagar Escort services you can book what you
              want as per you need if you want to book russian girl , vip
              escort, desi call or or housewife.
            </p>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Go to FunwithJuli
                  </h4>
                  <p className="text-sm text-slate-600">
                    go to FunwithJuli website and you can see all call girl
                    profile you can select them as per your choice
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Select a profile</h4>
                  <p className="text-sm text-slate-600">
                    after choosing a profile for escort service laxmi nagar the
                    second choice is select a profile as per your interest
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Call Or Message Us
                  </h4>
                  <p className="text-sm text-slate-600">
                    if you're still confused which girl will be best for me you
                    can simply call or message us over whatsapp with your
                    requirements
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Selection of Girls
                  </h4>
                  <p className="text-sm text-slate-600">
                    We will provide you photos of our 100% verified escort
                    service, as per your requirements and choice
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Enjoy the night</h4>
                  <p className="text-sm text-slate-600">
                    After successful selection of a call girl you can enjoy
                    night with her. We also offer cash on delivery. It means
                    when we deliver the call girl at you hotel/room after that
                    only you pay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Privacy & Security --- */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-2">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Your Privacy is our{" "}
              <span className="text-pink-500">Religion</span>
            </h2>
            <p className="text-slate-400">
              In Laxmi Nagar, we understand the importance of keeping things
              low-key. We follow 3-tier security for every booking.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <FingerPrintIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Encrypted Data</h4>
                <p className="text-sm text-slate-400">
                  Your number and details are deleted immediately after the
                  service is completed.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Discrete Arrival</h4>
                <p className="text-sm text-slate-400">
                  Companions arrive in private cars. No flashy clothes or loud
                  behavior in residential areas.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-pink-500">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Hotel Support</h4>
                <p className="text-sm text-slate-400">
                  We suggest 100% safe hotels in East Delhi where you won't face
                  any identity issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-14 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center underline decoration-indigo-500">
          FAQs
        </h2>
        <div className="space-y-2">
          {[
            {
              q: "What are the best call girl service providers in Delhi? ",
              a: "Fun with juli is the call girl service provider in delhi with affordable price.",
            },
            {
              q: "How much does Call Girl cost in Laxmi Nagar?",
              a: "Our price starts from 2000 only. It also depends upon you how many hours you want to book a call girl in Laxmi nagar, you can book a call girl from 2 hours to a full day or a long time as well.",
            },
            {
              q: "How can I book an Escort service in Laxmi Nagar?",
              a: "You can directly book our escort service from Funwithjuli and after that connect with our team we will provide you with all information.",
            },
            {
              q: "Do you provide Verified Call girls in Laxmi Nagar?",
              a: "Yes, At Funwithjuli we provide 100% verified call girl in laxmi nagar.",
            },
            {
              q: "Do you provide Hotel delivery service?",
              a: "Yes, we provide delivery service directly to your hotel or room.",
            },
            {
              q: "Can I book for Full Night or Dinner Date?",
              a: "Yes, you can book a full day or dinner date according to your preference.",
            },
            {
              q: "Is complete privacy guaranteed?",
              a: "Yes, At Funwithjuli we give you 100% Privacy Guaranteed. We maintain full confidentiality. No details are shared with anyone. Your identity is completely safe.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl p-3 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-slate-900 list-none">
                {faq.q}
                <span className="text-pink-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4  text-sm leading-relaxed border-t pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="bg-pink-600 py-16 px-2">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Ready for some real action?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : ""}
              className="bg-white text-pink-600 px-4 py-3 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all"
            >
              CALL NOW: {phoneNumber || ""}
            </a>
            <a
              href={
                phoneNumber
                  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
                  : ""
              }
              className="bg-green-500 text-white px-4 py-3 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all"
            >
              WHATSAPP CHAT
            </a>
          </div>
          <p className="mt-8 text-pink-100 text-sm font-medium">
            Laxmi Nagar | Nirman Vihar | Preet Vihar | Shakarpur
          </p>
        </div>
      </section>
    </div>
  );
};

export default LaxmiNagar;
