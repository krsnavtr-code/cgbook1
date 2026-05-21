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
    url: "https://www.funwithjuli.in",
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
                <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-3">
                  Why Funwith Juli is a Trusted Delhi Escort Service
                </h2>
                <p className="text-lg text-black ">
                  Funwith Juli has become a preferred name for many people
                  looking for a reliable <strong>Delhi escort service</strong>.
                  We focus on client safety, privacy, and customer satisfaction.
                  Our call girl in delhi are stylish, professional that you get
                  personal moments and amazing experience.
                  <br />
                  We have 500+ verified call with with their photos with almost
                  thousand of client who take our escort service in delhi highly
                  trusted on our services.
                  <br />
                  Many business travelers and visitors choose Escort service in
                  Delhi because we make booking easy and private. We know that
                  privacy matters the most, and we always keep your details
                  secure.
                </p>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  What Makes Fun with Juli Different?
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Easy booking with diverse call girl</li>
                  <li>Friendly and verified call girl</li>
                  <li>Private and secure meetings</li>
                  <li>Available across Delhi NCR</li>
                  <li>24/7 customer support</li>
                  <li>100% Verified Call Girls</li>
                </ul>
                <p className="text-xs md:text-lg text-black">
                  Our goal is not just to provide companionship but also to make
                  your time in Delhi more enjoyable and relaxing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Meetings />

        <NewArrivals />

        <section className="bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-md md:text-3xl font-black text-gray-900  mb-4">
                  Escort Service in New Delhi with Luxury Experience
                </h2>
                <p className="text-sm md:text-lg text-black">
                  If you are staying in central areas, hotels, or business hubs,
                  our <strong>escort service in New Delhi</strong> can help you
                  find premium companions quickly. New Delhi is one of the
                  busiest parts of the city, and many travelers prefer private
                  <strong>companionship services</strong> during their stay.
                </p>
                <p className="text-sm md:text-lg text-black ">
                  Our <strong>call girl in delhi</strong> are well-groomed,
                  stylish, and friendly. They know how to make clients feel
                  comfortable in every situation. Whether you are visiting for a
                  short trip or staying longer, Funwith Juli helps you enjoy
                  your time in the city.
                </p>
                <p className="text-sm md:text-lg text-black ">
                  We cover many major locations including:
                </p>
                <ul className="list-disc list-inside text-lg text-black ">
                  <li>Connaught Place</li>
                  <li>Karol Bagh</li>
                  <li>Saket</li>
                  <li>Vasant Kunj</li>
                  <li>Dwarka</li>
                  <li>Rohini</li>
                  <li>Mahipalpur</li>
                  <li>Lajpat Nagar</li>
                  <li>South Delhi areas</li>
                </ul>
                <p className="text-lg text-black ">
                  Our service is quick and available according to your timing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MeetingsByLocation />

        <section className="bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900  mb-4">
                  About Us: The Story of funwithjuli
                </h2>
                <p className="text-sm md:text-lg text-black">
                  At the core of our operations is a simple philosophy: to
                  provide unmatched hospitality through companionship. As the
                  best escort service in Delhi NCR, funwithjuli was founded on
                  the principles of transparency and customer satisfaction. We
                  realized that the market was saturated with unreliable
                  options, and we wanted to create a platform where clients
                  could find genuine, premium call girls in Delhi without any
                  stress.
                </p>
                <p className="text-sm md:text-lg text-black ">
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

        <section className="bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900  mb-4">
                  Independent Escorts in Delhi At only @2000
                </h2>
                <p className="text-sm md:text-lg text-black">
                  Yes you heard it right, many agencies in delhi charge very
                  high for call girl in noida, but we take care of your wallet
                  first, client satisfaction is our ultimate goal. If your life
                  is stressful, especially for people who travel often or work
                  long hours. A professional <strong>call girl Delhi</strong>{" "}
                  service can help people relax and enjoy quality personal time.
                  We have all type of call girl in delhi contact us in our
                  whatsapp to get detail and personal photos of every call girl.
                </p>
                <p className="text-sm md:text-lg text-black ">
                  Our independent call girl in delhi are confident, polite, and
                  easy to talk to. They know how to maintain satisfy you with a
                  friendly atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TopRatedMeetings />

        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-4">
                  Call Girl in Delhi NCR for Comfortable Companionship
                </h2>
                <p className="text-sm md:text-lg text-black">
                  Funwith Juli also provides{" "}
                  <strong>escort service in Delhi NCR</strong> including nearby
                  cities and areas. Many travelers stay in NCR locations because
                  of business meetings, hotels, and airport connectivity. We
                  cover all Delhi NCR area like: vasant kunj, saket, laxmi
                  nagar, mahipalpur, south delhi, dwarka, uttam nagar, aerocity
                  and other local areas in delhi.
                </p>
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-5">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-3 py-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
                          Other Location
                        </th>
                        <th className="px-3 py-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
                          Delhi NCR Location
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          Call Girl in Noida
                        </td>
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          <a href="https://www.funwithjuli.in/escort-service-vasant-kunj">
                            Call Girl in Vasant Kunj
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          Call Girl in Ghaziabad
                        </td>
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          <a href="https://www.funwithjuli.in/escort-service-saket">
                            Call Girl in Saket
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          Call Girl in Faridabad
                        </td>
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          <a href="https://www.funwithjuli.in/escort-service-laxmi-nagar">
                            Call Girl in Laxmi Nagar
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          Call Girl in Gurgaon
                        </td>
                        <td className="text-xs md:text-lg px-3 py-2 text-base font-medium text-gray-800">
                          <a href="https://www.funwithjuli.in/escort-service-mahipalpur">
                            Call Girl in Mahipalpur
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm md:text-lg text-black">
                  Our team helps clients find suitable companions according to
                  location and timing. Whether you are staying in a luxury hotel
                  or attending a business event, our companions are available
                  across NCR.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER & SEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-4">
                  Why Choose Our Escort{" "}
                  <span className="text-pink-600">Service</span>
                </h2>
                <p className="text-sm md:text-lg text-black">
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
