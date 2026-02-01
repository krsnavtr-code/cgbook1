import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Meetings from "../components/Meetings";
import MeetingsByLocation from "../components/MeetingsByLocation";
import TopRatedMeetings from "../components/TopRatedMeetings";
import NewArrivals from "../components/NewArrivals";
import ExploreFriendship from "../components/ExploreFriendship";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* ================= BACKGROUND GLOW EFFECTS ================= */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-violet-400 dark:from-indigo-500 dark:to-purple-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <Banner />

      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER & SEARCH */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Premium Escort Service for{" "}
                <span className="text-pink-600">Safe & Private Meetings</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our <strong>premium escort service</strong> is designed for
                people who value <strong>privacy, comfort, and safety</strong>{" "}
                above everything else. We focus on providing a professional
                platform where users can connect with{" "}
                <strong>trusted call girls and escort companions</strong> for
                strong, private meetings without stress or confusion. <br />
                Every interaction is handled with complete discretion, ensuring
                your personal details remain protected at all times. Our escort
                service follows strict quality guidelines so that clients
                receive a reliable and respectful experience. From first contact
                to final booking, the process is smooth, transparent, and
                confidential.
                <br />
                We understand that privacy matters, which is why our{" "}
                <strong>escort service for private meetings</strong> is
                structured around trust and secure communication. Whether you
                are looking for a premium experience or a discreet short-term
                booking, our platform offers dependable support. <br />
                With a strong focus on <strong>safe escort services</strong>,
                professional coordination, and client satisfaction, we aim to
                deliver a premium experience that feels comfortable and reliable
                every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Meetings />

      <NewArrivals />

      <MeetingsByLocation />

      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER & SEARCH */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                City-Wise Escort Services in{" "}
                <span className="text-pink-600">Delhi NCR</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We offer <strong>city-wise escort services in Delhi NCR</strong>
                , making it easy to find trusted companions in your preferred
                location. Our services cover{" "}
                <strong>
                  Delhi, Noida, Ghaziabad, Gurgaon, and Greater Noida,
                </strong>
                , each with dedicated listings and verified profiles.
                <br />
                This city-focused approach improves accessibility and ensures
                faster coordination. Users searching for{" "}
                <strong>escort services in Delhi NCR</strong> can easily choose
                their city and explore suitable options without confusion.
                <br />
                Each city page is optimized to provide local relevance, accurate
                information, and reliable service standards. Whether you need a{" "}
                <strong>call girls service in Delhi</strong> or a premium escort
                option in Gurgaon, our platform ensures consistent quality
                across all locations.
                <br />
                By offering structured{" "}
                <strong>city-wise escort services</strong>, we help users enjoy
                a smoother, safer, and more personalized booking experience
                throughout the Delhi NCR region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TopRatedMeetings />

      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER & SEARCH */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Why Choose Our Escort{" "}
                <span className="text-pink-600">Service</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Choosing the right escort platform matters, and our service
                stands out because of{" "}
                <strong>trust, discretion, and professionalism</strong>. We
                focus on providing a reliable
                <strong>escort service</strong> that values user privacy and
                transparent communication. <br />
                Our platform offers <strong>verified call girls</strong>, quick
                response times, and easy coordination. Unlike random listings,
                we emphasize quality over quantity, ensuring each profile meets
                our service standards. This makes booking smoother and more
                secure.
                <br />
                Another reason to choose us is our commitment to{" "}
                <strong>safe and private meetings</strong>. We use
                privacy-focused processes and confidential support to protect
                user information. Whether you are booking for the first time or
                returning, the experience remains consistent and respectful.
                <br />
                With city-wide coverage across{" "}
                <strong>Delhi NCR escort services</strong>, professional
                support, and a focus on user satisfaction, our escort service is
                built for people who want a discreet, dependable, and
                stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExploreFriendship />
    </div>
  );
};

export default Home;
