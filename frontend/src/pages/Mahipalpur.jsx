import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon,
  UserGroupIcon,
  HeartIcon,
  CheckCircleIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
  FingerPrintIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import MetaTags from "../components/MetaTags";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Mahipalpur = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 font-sans">
      <MetaTags
        title="Escort Service in Mahipalpur - Premium Call Girl by FunwithJuli"
        description="Best escort service in Mahipalpur. FunwithJuli offers elite call girls, Russian escorts, and 24/7 private companionship. 100% safe, verified profiles, and luxury service."
        keywords="escort service mahipalpur, call girl mahipalpur, mahipalpur escort, russian call girls mahipalpur, high profile escorts mahipalpur, independent escorts mahipalpur, Aerocity escorts, female companions Mahipalpur"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Escort Service in Mahipalpur <br />
            <span className="text-pink-500">Premium Call Girls</span> by
            <span className="text-white"> FunwithJuli</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-pink-100 max-w-7xl mx-auto">
            Are you Looking for Private time or Satisfaction from call girl in
            mahipalpur, you jump at the exact right place at FunWithJuli we
            provide trusted and premium{" "}
            <strong>Escort service in Mahipalpur</strong>. FunwithJuli gives you
            a private, safe, and comfortable experience with a professional and
            100% safe <strong>Call Girl in Mahipalpur Delhi</strong>. We
            understand that you are bored with your hectic corporate life or
            business and you want quality time, private moments, and good
            company after a busy day. That is why FunWithJuli Escort Service in
            Mahipalpur focuses on your privacy, comfort, and 100% customer
            satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-white text-pink-600 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" /> Call Now:{" "}
              {phoneNumber || "Contact Us"}
            </a>
            <a
              href={
                phoneNumber
                  ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello FunWithJuli, I'm interested in your premium services in Mahipalpur. Please share details.")}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white text-pink-600 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              {/* Adding a WhatsApp Icon for better UX */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48 2.245 2.244 3.481 5.229 3.481 8.408 0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.51-5.703-1.477l-6.281 1.648zm6.26-4.223l.348.207c1.479.878 3.189 1.341 4.931 1.341 5.176 0 9.387-4.212 9.387-9.388 0-2.507-.977-4.863-2.75-6.637-1.774-1.774-4.131-2.75-6.637-2.75-5.176 0-9.388 4.212-9.388 9.388 0 1.761.493 3.48 1.425 4.986l.228.368-1.01 3.692 3.785-.993z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              to="/photos"
              className="flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-pink-600 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-pink-600 transition-all"
            >
              View Gallery & Book
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="pt-12 sm:pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full">
            {/* Main Container with Orange Background */}
            <div className="relative overflow-hidden">
              {/* Top Decorative Brush/Wave Effect */}
              <div
                className="absolute top-0 left-0 w-full h-8 bg-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 80%)" }}
              ></div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:w-1/2 text-left z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                    Best Escort Service in Delhi: <br />
                    <span className="font-medium text-xl sm:text-2xl md:text-3xl">
                      Crafted for High-Class Gentlemen
                    </span>
                  </h2>

                  <div className="space-y-4 sm:space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p>
                      The real splendor of our{" "}
                      <strong>Best escort service in Delhi</strong> is that it
                      adapts itself to your temperament. Do you choose the
                      excellent lady friend to revel in, a flirty dinner date,
                      or a formidable bedroom experience? We customize the
                      moment according to your desire.
                    </p>

                    <p>
                      Our companions are knowledgeable, and they're skilled in
                      the artwork of seduction. They are able to make you feel
                      cozy after they enter the room. All the motions are
                      uninhibited. Every smile is genuine.
                    </p>

                    <p className="italic">
                      That is more than your normal escort services delhi; this
                      is your companionship delivered with fashion.
                    </p>
                  </div>

                  <a
                    href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                    className="mt-6 sm:mt-8 inline-block bg-[#5D2E17] hover:bg-[#432111] text-white font-bold py-3 px-8 sm:px-10 rounded transition-colors uppercase tracking-widest text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Right Image Gallery Column */}
                <div className="lg:w-1/2 flex gap-1 sm:gap-2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] items-center">
                  {/* Profile 1 */}
                  <div className="flex-1 h-[90%] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.41-pm--2--26042026-1110.jpeg"
                      alt="Profile 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Profile 2 (Offset) */}
                  <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 -translate-y-2 sm:-translate-y-4">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.43-pm-26042026-1110.jpeg"
                      alt="Profile 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Profile 3 */}
                  <div className="flex-1 h-[90%] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.42-pm--1--26042026-1110.jpeg"
                      alt="Profile 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Profile 4 (Offset) */}
                  <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 translate-y-2 sm:translate-y-4">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.47-pm--1--26042026-1110.jpeg"
                      alt="Profile 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Brush/Wave Effect */}
              <div
                className="absolute bottom-0 left-0 w-full h-8 bg-white"
                style={{
                  clipPath: "polygon(0 70%, 100% 20%, 100% 100%, 0 100%)",
                }}
              ></div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10">
              Russian Call Girls in Mahipalpur
            </h3>
            <p className="text-base sm:text-lg">
              The demand for <strong>Russian call girls in Mahipalpur</strong>{" "}
              is increasing. FunwithJuli offers international-style
              companionship, including body-to-body massage and premium fun.
              Whether you want a 2-hour session or a full-night experience, our
              Russian models provide 100% safe and private service directly to
              your hotel room.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-700 space-y-4 sm:space-y-6 max-w-none">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10">
                  Why Choose FunwithJuli for Escort Service in Mahipalpur
                </h3>
                <p>
                  FunwithJuli is becoming a trusted name for people searching
                  for a reliable <strong>Escort service in Mahipalpur</strong>.
                  We focus on quality service, quick response, 24*7 availability
                  and customer privacy. Our goal is to give every client smooth
                  service by <strong>call girl in mahipalpur</strong> and
                  satisfaction , safety and personal time with our{" "}
                  <strong>service call girl in mahipalpur delhi</strong>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 list-none p-0">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-pink-500" />
                    <span>Thousands of Verified Profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-pink-500" />
                    <span>24/7 Dedicated Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-pink-500" />
                    <span>Complete Privacy & Security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-pink-500" />
                    <span>Simple Booking via Call/WhatsApp</span>
                  </li>
                </ul>
                <p>
                  <strong>Verified and professional girls:</strong> We have
                  thousands of verified and professional call girl in
                  mahipalpur.
                </p>
                <p>
                  <strong>24/7 customer support:</strong> We have a dedicated
                  customer team who will provide you 24*7 service, no matter if
                  you want Escort service in Mahipalpur service at day or
                  midnight 12 am.
                </p>
                <p>
                  <strong>Complete privacy and security:</strong> We take care
                  about your privacy with hotel in Mahipalpur
                </p>
                <p>
                  <strong>Easy booking process:</strong> you can easily book our
                  service from calling the number
                </p>
                <p>
                  <strong>Friendly and respectful service:</strong> Service
                  available across Mahipalpur and nearby areas
                </p>
                <p>
                  <strong>Easy Payment Methods:</strong> We provide you the easy
                  and simple payment methods with Cash, Debit Card/ Credit Card,
                  UPI, Paytm, Phonepe, Gpay etc
                </p>
                <p>
                  We understand that trust matters the most. That is why our
                  support team is always available to help you with bookings and
                  information.
                </p>
              </div>

              <div className="w-full bg-gray-50 py-6">
                <div className="relative max-w-7xl mx-auto bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                  <div
                    className="absolute top-0 left-0 w-full h-10 bg-white"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 90%)",
                    }}
                  >
                    <div className="w-full h-full bg-[#E5D7B7] rounded-b-[40%]" />{" "}
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center pt-6 sm:pt-8">
                    <div className="lg:w-1/2 flex gap-2 sm:gap-3 h-[300px] sm:h-[400px] md:h-[500px] items-center relative order-2 lg:order-1">
                      <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 lg:-top-16 lg:-left-16 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#E5D7B7]/60 rounded-full blur-3xl z-0" />

                      <div className="flex-1 h-[90%] rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/90 z-10">
                        <img
                          src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.44.45-pm-26042026-1122.jpeg"
                          alt="Companion Portrait"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/90 -translate-y-3 sm:-translate-y-6 z-10">
                        <img
                          src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.44.46-pm--3--26042026-1122.jpeg"
                          alt="Lace Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 h-[90%] rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/90 z-10">
                        <img
                          src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.50.20-pm--1--26042026-1122.jpeg"
                          alt="Casual Portrait"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/90 translate-y-3 sm:translate-y-6 z-10">
                        <img
                          src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.50.21-pm--2--26042026-1122.jpeg"
                          alt="Full Body Portrait"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* [Right Content Column - Existing Text] */}
                    <div className="lg:w-1/2 text-left z-10 order-1 lg:order-2">
                      <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-tight mb-6 sm:mb-8">
                        Call Girls in Mahipalpur for Premium Experience
                      </h3>

                      <div className="space-y-2 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                          Many visitors and local clients search for trusted{" "}
                          <strong className="text-pink-700">
                            call girls in Mahipalpur
                          </strong>{" "}
                          as you know Mahipalpur area is famous for people who
                          are searching for hotels, business travelers, and
                          airport stays. FunwithJuli offers premium
                          companionship services that help clients enjoy quality
                          time without stress.
                        </p>

                        <p>
                          Our call girl in Mahipalpur are friendly,
                          well-mannered, and they know how to make conversations
                          enjoyable and give you satisfaction. Whether you need
                          call girl for dinner, travel, parties, or private
                          time, we offer options according to your preference.
                        </p>

                        <p className="italic bg-pink-50 p-4 sm:p-5 rounded-xl border-l-4 border-pink-500 text-pink-900 shadow-inner">
                          We focus on your comfort and provide professional
                          support and directly provide you the call girl to your
                          hotel room.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Wave/Brush Stroke Effect - Bottom */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-10 bg-white"
                    style={{
                      clipPath: "polygon(0 80%, 100% 10%, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="w-full h-full bg-[#E5D7B7] rounded-t-[40%]" />{" "}
                    {/* Mimics the gold wave */}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10">
                  Call Girl in Mahipalpur Delhi with Safe and Private Booking
                </h3>
                <p>
                  If you are searching for a call girl in Mahipalpur Delhi,
                  FunwithJuli offers a smooth and private booking process. We
                  respect every client’s privacy and keep all information
                  secure. Our services are suitable for:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Business travelers</li>
                  <li>Tourists visiting Delhi</li>
                  <li>Hotel guests in Mahipalpur</li>
                  <li>People looking for premium companionship</li>
                  <li>People who want to spend their private time</li>
                </ul>
                <p className="mt-2">
                  Mahipalpur is one of the busiest locations near the airport,
                  and people choose Call girl in Mahipalpur services for comfort
                  and relaxation. FunWithJuli makes the process simple and
                  hassle-free.
                </p>
              </div>

              <div className="relative mt-8 sm:mt-12 overflow-hidden rounded-3xl bg-[#0f172a] shadow-2xl border border-slate-800">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side: Single Image Container */}
                  <div className="relative w-full lg:w-1/3 h-48 sm:h-56 md:h-64 lg:h-auto overflow-hidden">
                    <img
                      src="https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.50.22-pm-26042026-1122.jpeg"
                      alt="Premium Russian Model"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                    {/* Overlay gradient to blend into content on desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f172a]"></div>
                  </div>

                  {/* Right Side: Content Column */}
                  <div className="flex flex-col justify-center p-4 sm:p-6 lg:w-2/3 lg:p-10">
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 rounded-full w-fit">
                      International Premium
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
                      Russian Call Girls in Mahipalpur
                    </h3>

                    <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-snug">
                      <p>
                        The demand for{" "}
                        <strong className="text-white">
                          Russian call girls in Mahipalpur
                        </strong>{" "}
                        is increasing rapidly. Clients looking for
                        international-style companionship and elite experiences
                        choose FunwithJuli for unforgettable moments involving
                        body-to-body massage and professional care.
                      </p>

                      {/* Tight Grid for Services */}
                      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2 py-2 border-y border-white/5">
                        {[
                          "Professional behavior",
                          "Clean & safe environment",
                          "Premium companionship",
                          "24/7 Fast response",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <svg
                              className="w-4 h-4 text-pink-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm italic text-gray-400">
                        Available for 2 hours, 6 hours, or full-night stays. Our
                        service ensures
                        <span className="text-pink-400">
                          {" "}
                          100% safety and privacy
                        </span>{" "}
                        at your hotel room in Mahipalpur.
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:space-x-4">
                      <a
                        href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-pink-600/20 active:scale-95 text-center"
                      >
                        Book Now
                      </a>
                      <div className="text-xs text-gray-500 font-mono">
                        STATUS:{" "}
                        <span className="text-green-500 animate-pulse">
                          ONLINE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10">
                  Professional Call Girl in Mahipalpur for Every Occasion-
                  Starting at @2000
                </h3>
                <p>
                  No matter if you're looking for Indian, African or Russian
                  Call Girl in Mahipalpur, we have every type of call girl
                  available in mahipalpur and finding call girl becomes easier
                  with FunwithJuli. We provide hourly or full night services for
                  different occasions such as dinner dates, parties, travel
                  companionship, and private meetings.
                </p>
                <p>
                  Our support team helps clients choose the best option
                  according to their requirements. We believe in offering a
                  simple and comfortable experience from start to finish.
                </p>
                <p>
                  FunwithJuli works with call girls around the globe from local
                  as well as foreign girls, We have 100% Customer satisfaction
                  rate for Call Girls in mahipalpur That is why many clients
                  choose our Escort service in Mahipalpur again and again.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10">
                  Book Escort Service in Mahipalpur Today
                </h3>
                <p>
                  If you want a trusted and premium Escort service in
                  Mahipalpur, FunwithJuli is here to help. We focus on privacy,
                  comfort, and customer satisfaction and provide you mahipalpur
                  sex​ from our all sexy and beautiful call girl to provide a
                  smooth experience for every client. Whether you are looking
                  for premium companionship, friendly company, or professional
                  support, FunwithJuli offers reliable services across
                  Mahipalpur and nearby Delhi locations. Contact us today and
                  enjoy a safe, private, and premium experience with our
                  professional companions.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div
            className="relative p-6 sm:p-8 rounded-3xl shadow-xl border border-pink-100 h-fit lg:sticky lg:top-28 overflow-hidden group"
            style={{
              backgroundImage: `url('https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.48-pm-26042026-1110.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay to make text pop - you can adjust opacity via 'bg-opacity-XX' */}
            <div className="absolute inset-0 bg-white bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>

            {/* Content (Must be relative to sit above the overlay) */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />{" "}
                Booking Info
              </h3>

              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  Starting Price
                </p>
                <div className="text-3xl sm:text-4xl font-bold text-pink-600">
                  ₹2,000
                  <span className="text-base sm:text-lg text-gray-400">
                    /hr
                  </span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start text-gray-800">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-1 mr-2" />
                  <span className="font-medium text-sm sm:text-base">
                    Available 24/7 & 7 Days a week
                  </span>
                </div>
                <div className="flex items-start text-gray-800">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-1 mr-2" />
                  <span className="font-medium text-sm sm:text-base">
                    Direct service to your Hotel Room
                  </span>
                </div>
                <div className="flex items-start text-gray-800">
                  <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-1 mr-2" />
                  <span className="font-medium text-sm sm:text-base">
                    Cash, UPI, GPay, Paytm & Cards
                  </span>
                </div>
              </div>

              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="block text-center bg-purple-700 text-white hover:text-white py-3 sm:py-4 rounded-xl font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Book via Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Category Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Professional Companions for Every Occasion
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                type: "Indian Call Girls",
                price: "₹2,000",
                desc: "Local beauties for a desi experience.",
              },
              {
                type: "Russian Escorts",
                price: "₹8,000",
                desc: "Premium international models for elite taste.",
              },
              {
                type: "African & Others",
                price: "₹5,000",
                desc: "Diverse companions for exotic experiences.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 border border-pink-100 rounded-3xl hover:shadow-2xl transition-all text-center"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {item.type}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {item.desc}
                </p>
                <div className="text-pink-600 font-black text-xl sm:text-2xl">
                  Starting @ {item.price}/-
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Payment Section */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
            Safe & Easy Payment Methods
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <BanknotesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-2" />
              <span className="text-sm sm:text-base">Cash</span>
            </div>
            <div className="flex flex-col items-center">
              <CreditCardIcon className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-2" />
              <span className="text-sm sm:text-base">Debit/Credit Card</span>
            </div>
            <div className="flex flex-col items-center">
              <CurrencyRupeeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-2" />
              <span className="text-sm sm:text-base">UPI / GPay / PhonePe</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                How to book an escort service in Mahipalpur discreetly?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                To book, simply search for FunWithJuli on Google or call us
                directly. We ensure all your details are kept 100% private and
                deleted after service.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                What are the typical rates for private companions in Mahipalpur?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Rates vary by category. Indian call girls are more affordable
                (starting @2000), while Russian and international models have
                higher premium rates.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                How to verify authenticity of private escorts?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                You can verify our services through user reviews and
                testimonials. We provide 100% genuine photos on WhatsApp before
                booking.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg mb-2">
                Are services available for full night?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Yes, we offer hourly, 6-hour, and full-night packages for all
                categories including Indian and Russian girls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-center text-white shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url('https://www.funwithjuli.in/api/upload/file/whatsapp-image-2026-04-26-at-4.36.41-pm--1--26042026-1110.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Vibrant Pink/Purple Gradient Overlay 
          This ensures the white text "pops" and looks professional 
      */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700/90 via-pink-600/80 to-purple-800/90 mix-blend-multiply"></div>

            {/* Content - Wrapped in relative z-10 to stay on top of overlay */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
                Don't Spend Your Night Alone!
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 opacity-95 font-medium max-w-2xl mx-auto">
                Enjoy safe, private, and premium moments with our professional
                companions. We are available 24/7 to serve you.
              </p>

              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-white text-pink-600 rounded-full font-black text-base sm:text-xl hover:scale-105 transition-transform shadow-2xl hover:bg-gray-100"
              >
                {/* Added a small icon for better look */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL JULI NOW: {phoneNumber || "CONTACT US"}
              </a>
            </div>

            {/* Subtle Animation Effect: Floating background glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-10 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p>
            © 2024-2026 FunwithJuli. All Rights Reserved. | Escort Service
            Mahipalpur
          </p>
          <p className="mt-2">
            Disclaimer: 18+ Only. We provide companionship services only. Safety
            and privacy are our top priorities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Mahipalpur;
