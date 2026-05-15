import React, { useState, useEffect } from "react";
import { getOwnerInfo } from "../api/ownerInfoApi";

const ExploreFriendship = () => {
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const ownerResponse = await getOwnerInfo();
        const ownerData =
          ownerResponse.data?.ownerInfo || ownerResponse.data || ownerResponse;
        setOwnerInfo(ownerData);
      } catch (error) {
        console.log("Owner info not available:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOwnerInfo();
  }, []);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  const categories = [
    {
      id: 1,
      title: "For Social Events",
      description:
        "If you need a partner for a wedding or a gala, our luxury call girls in Delhi are the perfect choice. They carry themselves with poise and can blend into any high-society gathering.",
      icon: "✈️",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "For Private Evenings",
      description:
        "If you prefer a quiet night in your hotel or apartment, our premium call girls in Delhi offer a relaxed and attentive presence.",
      icon: "🍷",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: 3,
      title: "For Travel Companionship",
      description:
        "If you are touring the NCR, having someone who knows the best spots in Gurgaon or the hidden gems of Delhi can make your trip much more enjoyable.",
      icon: "🎭",
      color: "from-rose-400 to-pink-500",
    },
  ];

  return (
    <section className="pb-12 pt-8 md:pb-24 md:pt-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 text-center md:text-left gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
              More Than Just{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Meetings
              </span>
            </h2>
            <p className="text-gray-800 text-sm md:text-lg leading-relaxed">
              With so many options available, how do you decide? At funwithjuli,
              we suggest looking at your schedule and the nature of the meeting.
            </p>
          </div>
        </div>

        {/* ================= FEATURE CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-gray-50 border border-gray-100/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg mb-5 md:mb-6 transform group-hover:rotate-6 transition-transform`}
                >
                  {cat.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 md:mb-3">
                  {cat.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] select-none pointer-events-none">
                <span className="text-7xl md:text-8xl font-black">
                  {cat.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOOKING INFO SECTION ================= */}
        <section className="bg-gray-50/70 rounded-3xl p-6 md:p-10 mt-12 md:mt-16 border border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                  Easy Booking &{" "}
                  <span className="text-pink-600 block sm:inline">
                    100% Discreet Support
                  </span>
                </h2>
                <div className="text-sm md:text-base text-gray-800 space-y-4 leading-relaxed font-medium">
                  <p>
                    Our platform offers an <strong>easy booking process</strong>{" "}
                    designed to save time while maintaining full privacy. Users
                    can browse verified profiles, choose their preference, and
                    connect through a secure system without unnecessary
                    complications.
                  </p>
                  <p>
                    We provide <strong>100% discreet support</strong>, ensuring
                    that every inquiry and booking is handled confidentially.
                    Our support team is available to assist with questions,
                    coordination, and general guidance, making the process
                    smooth and reliable.
                  </p>
                  <p>
                    Privacy is our priority, which is why we avoid sharing
                    personal information and focus on secure communication. This
                    makes our <strong>escort booking service</strong> suitable
                    for users who value discretion and professionalism.
                  </p>
                  <p>
                    With fast responses, clear communication, and dedicated
                    assistance, our platform delivers a stress-free experience.
                    Whether you are booking a <strong>call girl service</strong>{" "}
                    or a premium escort option, our discreet support ensures
                    peace of mind at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPANIONSHIP SECTION ================= */}
        <section className="bg-white mt-12 md:mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Understanding the Need for{" "}
                <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Professional Companionship
                </span>
              </h2>
            </div>

            <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-4 md:space-y-6 text-left">
              <p>
                Life in a fast-paced city can be demanding. Often, individuals
                seek a brief escape or a graceful partner to accompany them to
                social events, dinners, or simply to spend quality time with.
                This is where the best escort service in Delhi NCR becomes an
                essential resource. We understand that every client is unique,
                and so are their requirements. Our agency focuses on curating a
                list of companions who are not only visually stunning but also
                intellectually engaging.
              </p>

              <p>
                When you choose funwithjuli, you are choosing a brand that
                values your time. We have streamlined our booking process to
                ensure that you can find premium escort agency Delhi services
                without any unnecessary hurdles. From the moment you contact us
                at 9548679151, our team works to match you with a partner who
                aligns with your preferences.
              </p>

              {/* Collapsible Content Module */}
              <div
                className={`transition-all duration-500 overflow-hidden ${showFullContent ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="space-y-6 pt-4">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-4">
                    Elite Female Models Delhi: Beyond Just Beauty
                  </h3>
                  <p>
                    When people look for the best escort service in Delhi NCR,
                    they often focus solely on physical appearance. While our
                    elite female models Delhi are indeed striking, we believe
                    that true companionship goes deeper. Our partners are
                    individuals with their own interests, hobbies, and
                    conversational skills.
                  </p>
                  <p>
                    Whether you want to discuss global trends over a glass of
                    wine or simply enjoy a quiet evening, our companions are
                    capable of adapting to the mood. This versatility is a
                    hallmark of the funwithjuli brand. We cater to a discerning
                    clientele that appreciates the finer things in life,
                    including meaningful conversation and graceful presence.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-4">
                    Seamless Integration of Services in NCR
                  </h3>
                  <p>
                    The beauty of the NCR region is its interconnectedness. You
                    might start your day in Delhi and end it in a luxury suite
                    in Noida. The best escort service in Delhi NCR must be able
                    to follow that rhythm. At funwithjuli, we have logistics in
                    place to ensure that our service is as mobile as you are.
                  </p>
                  <p>
                    If you are looking for independent escorts Delhi NCR who can
                    travel to your location, we facilitate those connections
                    with ease. Our goal is to make sure that no matter where you
                    are within the borders of the National Capital Region,
                    high-end companionship is always accessible.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-4">
                    Safety and Reliability
                  </h3>
                  <p>
                    In an industry where trust is paramount, funwithjuli stands
                    out by being a reliable partner. We encourage our clients to
                    communicate their needs clearly. By calling 9548679151, you
                    can speak with our coordinators who will guide you through
                    the available options. Being the best escort service in
                    Delhi NCR means we take responsibility for the safety and
                    comfort of both our clients and our companions.
                  </p>
                  <p>
                    We strictly adhere to professional standards. Our
                    interactions are based on mutual respect. This creates a
                    positive environment where you can truly relax and be
                    yourself.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-4">
                    Serving the Modern Gentleman in the Digital Age
                  </h3>
                  <p>
                    The way people search for companionship has changed. Today,
                    you want a website that is easy to navigate and information
                    that is clear. At funwithjuli.in, we have designed our
                    digital presence to be as professional as our physical
                    services. We provide a clear overview of what we offer
                    without using misleading imagery or complicated jargon.
                  </p>
                  <p>
                    As the best escort service in Delhi NCR, we stay updated
                    with the latest trends in hospitality and customer service.
                    We listen to feedback and constantly refine our offerings to
                    ensure that funwithjuli remains at the top of your list.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-4">
                    Your Journey with funwithjuli Starts Here
                  </h3>
                  <p>
                    Whether you are looking for elite female models Delhi or
                    independent escorts Delhi NCR, your search for perfection
                    ends with us. We have spent years building a brand that
                    stands for quality, elegance, and reliability.
                  </p>
                  <p>
                    Delhi, Noida, Gurgaon, and the entire NCR are vibrant
                    places, and they deserve a companionship service that
                    matches that energy. Don't settle for anything less than the
                    best escort service in Delhi NCR. Contact funwithjuli today
                    at 9548679151 and let us help you find the perfect partner
                    for your next occasion. We are committed to making every
                    moment count, ensuring that your experience is nothing short
                    of exceptional.
                  </p>
                </div>
              </div>

              {/* Trigger Toggle Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowFullContent(!showFullContent)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md active:scale-[0.98] text-sm md:text-base"
                >
                  <span>{showFullContent ? "Show Less" : "Read More"}</span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${showFullContent ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMMUNITY INVITE BANNER ================= */}
        <div className="mt-14 md:mt-20 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 md:mb-4 tracking-tight">
                Become a Partner?
              </h3>
              <p className="text-blue-100 text-sm md:text-lg max-w-md mx-auto lg:mx-0">
                Join our verified network and get matched with people looking
                for high-end companionship and social dates.
              </p>
            </div>

            <a
              href={whatsappLink || "#"}
              target={whatsappLink ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`w-full lg:w-auto whitespace-nowrap px-8 py-4 md:px-10 md:py-5 bg-white text-indigo-600 font-black rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all active:scale-[0.98] text-center block text-sm md:text-base ${
                !whatsappLink
                  ? "opacity-60 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
              title={
                !whatsappLink
                  ? "Contact details unavailable"
                  : "Connect via WhatsApp"
              }
            >
              {loading
                ? "Loading..."
                : ownerInfo
                  ? "Get At Today Night"
                  : "Unavailable"}
            </a>
          </div>

          {/* Canvas Decorative Background Glow Shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-48 h-48 md:w-64 md:h-64 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFriendship;
