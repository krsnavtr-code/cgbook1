import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Meetings from "../components/Meetings";
import MeetingsByLocation from "../components/MeetingsByLocation";
import TopRatedMeetings from "../components/TopRatedMeetings";
import NewArrivals from "../components/NewArrivals";
import ExploreFriendship from "../components/ExploreFriendship";
import MetaTags from "../components/MetaTags";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FunwithJuli - Premium Escort Service",
    description:
      "Premium escort service in Delhi NCR offering safe, private meetings with verified companions",
    url: "https://funwithjuli.in",
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
    areaServed: ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Greater Noida"],
    serviceType: "Escort Services",
    keywords:
      "escort service Delhi, call girls Delhi NCR, premium escort service, private meetings, safe escort service",
  };

  return (
    <>
      <MetaTags
        title="Best Escort Service in Delhi NCR | funwithjuli Premium Call Girls"
        description="Looking for the best escort service in Delhi NCR? funwithjuli offers premium companions in Delhi, Noida, and Gurgaon. Call 9548679151 for elite female models today."
        keywords="escort service Delhi, call girls Delhi NCR, premium escort service, private meetings, safe escort service, Delhi escort, Noida escort, Gurgaon escort, Ghaziabad escort, Greater Noida escort, verified companions, discreet escort service"
        canonicalUrl="https://funwithjuli.in/"
        structuredData={structuredData}
      />
      <div className="relative isolate overflow-hidden bg-white transition-colors duration-300">
        {/* ================= BACKGROUND GLOW EFFECTS ================= */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-violet-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* ================= HERO SECTION ================= */}
        <Banner />

        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Why funwithjuli is the Best Escort Service in Delhi NCR
                </h2>
                <p className="text-lg text-black ">
                  What sets us apart from other agencies is our commitment to
                  quality over quantity. Rather than simply offering a list of
                  names, we provide a carefully curated experience tailored to
                  your preferences. Our diverse portfolio includes both
                  independent and agency-managed companions, giving you the
                  flexibility to choose someone who matches your vibe.
                  <br />
                  We prioritize discretion and handle all interactions with
                  complete privacy, ensuring your confidentiality at every step.
                  We also value your time, which is why punctuality is a key
                  part of our service, whether you’re in Gurgaon or Noida. Above
                  all, our companions maintain a high standard of
                  professionalism, creating a comfortable and engaging
                  experience from beginning to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Meetings />

        <NewArrivals />

        <MeetingsByLocation />

        <section className="bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900  mb-4">
                  About Us: The Story of funwithjuli
                </h2>
                <p className="text-lg text-black">
                  At the core of our operations is a simple philosophy: to
                  provide unmatched hospitality through companionship. As the
                  best escort service in Delhi NCR, funwithjuli was founded on
                  the principles of transparency and customer satisfaction. We
                  realized that the market was saturated with unreliable
                  options, and we wanted to create a platform where clients
                  could find genuine, premium call girls in Delhi without any
                  stress.
                </p>
                <p className="text-lg text-black ">
                  Our team works tirelessly to vet every individual who joins
                  our agency. We look for charm, personality, and a genuine
                  interest in social interaction. This meticulous selection
                  process is what makes us a premium escort agency Delhi clients
                  trust year after year. We are not just a service provider; we
                  are a bridge between you and a memorable experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TopRatedMeetings />

        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Why Choose Our Escort{" "}
                  <span className="text-pink-600">Service</span>
                </h2>
                <p className="text-lg text-black">
                  Choosing the right escort platform matters, and our service
                  stands out because of{" "}
                  <strong>trust, discretion, and professionalism</strong>. We
                  focus on providing a reliable
                  <strong>escort service</strong> that values user privacy and
                  transparent communication. <br />
                  Our platform offers <strong>verified call girls</strong>,
                  quick response times, and easy coordination. Unlike random
                  listings, we emphasize quality over quantity, ensuring each
                  profile meets our service standards. This makes booking
                  smoother and more secure.
                  <br />
                  Another reason to choose us is our commitment to{" "}
                  <strong>safe and private meetings</strong>. We use
                  privacy-focused processes and confidential support to protect
                  user information. Whether you are booking for the first time
                  or returning, the experience remains consistent and
                  respectful.
                  <br />
                  With city-wide coverage across{" "}
                  <strong>Delhi NCR escort services</strong>, professional
                  support, and a focus on user satisfaction, our escort service
                  is built for people who want a discreet, dependable, and
                  stress-free experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ExploreFriendship />
      </div>
    </>
  );
};

export default Home;
