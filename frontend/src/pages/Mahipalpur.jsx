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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Escort Service in Mahipalpur <br />
            <span className="text-pink-500">Premium Call Girls</span> by
            <span className="text-white"> FunwithJuli</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-pink-100 max-w-7xl mx-auto">
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="flex items-center justify-center px-10 py-5 bg-white text-pink-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              <PhoneIcon className="w-6 h-6 mr-2" /> Call Now:{" "}
              {phoneNumber || "Contact Us"}
            </a>
            <Link
              to="/photos"
              className="flex items-center justify-center px-10 py-5 bg-pink-600 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all"
            >
              View Gallery & Book
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-l-8 border-pink-600 pl-4">
              Premium Call Girl in Mahipalpur by FunwithJuli
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
              <p>
                At <strong>FunWithJuli</strong>, we bridge the gap between your
                hectic corporate life and ultimate relaxation. Whether you are
                bored with business stress or seeking quality time after a busy
                day, our
                <strong> escort service in Mahipalpur</strong> focuses on your
                privacy, comfort, and 100% satisfaction.
              </p>
              <p>
                Mahipalpur is a central hub for hotels near the IGI Airport. We
                welcome visitors from across India who are here for business
                trips or tours. Our{" "}
                <strong>call girls in Mahipalpur Delhi</strong> are friendly,
                verified, and know exactly how to make your time enjoyable with
                B2B massage, hourly sessions, or full-night stays.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10">
                Why Choose FunwithJuli for Escort Service in Mahipalpur
              </h3>
              <p>
                FunwithJuli is becoming a trusted name for people searching for
                a reliable <strong>Escort service in Mahipalpur</strong>. We
                focus on quality service, quick response, 24*7 availability and
                customer privacy. Our goal is to give every client smooth
                service by <strong>call girl in mahipalpur</strong> and
                satisfaction , safety and personal time with our{" "}
                <strong>service call girl in mahipalpur delhi</strong>.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 list-none p-0">
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
                thousands of verified and professional call girl in mahipalpur.
              </p>
              <p>
                <strong>24/7 customer support:</strong> We have a dedicated
                customer team who will provide you 24*7 service, no matter if
                you want Escort service in Mahipalpur service at day or midnight
                12 am.
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

              <h3 className="text-2xl font-bold text-gray-800 mt-10">
                Russian Call Girls in Mahipalpur
              </h3>
              <p>
                The demand for <strong>Russian call girls in Mahipalpur</strong>{" "}
                is increasing. FunwithJuli offers international-style
                companionship, including body-to-body massage and premium fun.
                Whether you want a 2-hour session or a full-night experience,
                our Russian models provide 100% safe and private service
                directly to your hotel room.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10">
                Call Girls in Mahipalpur for Premium Experience
              </h3>
              <p>
                Many visitors and local clients search for trusted{" "}
                <strong>call girls in Mahipalpur</strong> as you know Mahipalpur
                area is famous for people who are searching for hotels, business
                travelers, and airport stays. FunwithJuli offers premium
                companionship services that help clients enjoy quality time
                without stress.
              </p>
              <p>
                Our call girl in Mahipalpur are friendly, well-mannered, and
                they know how to make conversations enjoyable and give you
                satisfaction. Whether you need call girl for dinner, travel,
                parties, or private time, we offer options according to your
                preference.
              </p>
              <p>
                We focus on your comfort and provide professional support and
                directly provide you the call girl to your hotel room.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10">
              Call Girl in Mahipalpur Delhi with Safe and Private Booking
            </h3>
            <p>
              If you are searching for a call girl in Mahipalpur Delhi,
              FunwithJuli offers a smooth and private booking process. We
              respect every client’s privacy and keep all information secure.
              Our services are suitable for:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Business travelers</li>
              <li>Tourists visiting Delhi</li>
              <li>Hotel guests in Mahipalpur</li>
              <li>People looking for premium companionship</li>
              <li>People who want to spend their private time</li>
            </ul>
            <p className="mt-2">
              Mahipalpur is one of the busiest locations near the airport, and
              people choose Call girl in Mahipalpur services for comfort and
              relaxation. FunWithJuli makes the process simple and hassle-free.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10">
              Russian Call Girls in Mahipalpur
            </h3>
            <p>
              The demand for Russian call girls in Mahipalpur is increasing day
              by day, because many clients look for international-style
              companionship and premium experiences with Russian Call Girls in
              Mahipalpur. FunwithJuli offers enjoyable moments and fun with
              russian girl who provide you body to body massage, sex, oral sex,
              and much more.
            </p>
            <p>Our service focuses on:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Professional behavior</li>
              <li>Clean and safe environment</li>
              <li>Premium companionship</li>
              <li>Fast response and support</li>
            </ul>
            <p className="mt-2">
              We always try to provide quality service that matches client
              expectations.
            </p>
            <p>
              We at FunwithJuli provide you best in calls russian girl the
              prices are depend upon you timing no matter if you want for 2
              hour, 6 hours or full night service by Russian Call Girl in
              Mahipalpur, our service will never disappoint you, also our
              service are available for 24*7 and 7 Days in a week, we will
              provide you Russian call girl in mahipalpur who will satisfy you
              and give you the moments you’re missing in your life with 100%
              safety and privately to the hotel in mahipalpur.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10">
              Professional Call Girl in Mahipalpur for Every Occasion- Starting
              at @2000
            </h3>
            <p>
              No matter if you're looking for Indian, African or Russian Call
              Girl in Mahipalpur, we have every type of call girl available in
              mahipalpur and finding call girl becomes easier with FunwithJuli.
              We provide hourly or full night services for different occasions
              such as dinner dates, parties, travel companionship, and private
              meetings.
            </p>
            <p>
              Our support team helps clients choose the best option according to
              their requirements. We believe in offering a simple and
              comfortable experience from start to finish.
            </p>
            <p>
              FunwithJuli works with call girls around the globe from local as
              well as foreign girls, We have 100% Customer satisfaction rate for
              Call Girls in mahipalpur That is why many clients choose our
              Escort service in Mahipalpur again and again.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10">
              Book Escort Service in Mahipalpur Today
            </h3>
            <p>
              If you want a trusted and premium Escort service in Mahipalpur,
              FunwithJuli is here to help. We focus on privacy, comfort, and
              customer satisfaction and provide you mahipalpur sex​ from our all
              sexy and beautiful call girl to provide a smooth experience for
              every client. Whether you are looking for premium companionship,
              friendly company, or professional support, FunwithJuli offers
              reliable services across Mahipalpur and nearby Delhi locations.
              Contact us today and enjoy a safe, private, and premium experience
              with our professional companions.
            </p>
          </div>

          {/* Sidebar Booking Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 h-fit lg:sticky lg:top-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SparklesIcon className="w-6 h-6 text-pink-500 mr-2" /> Booking
              Info
            </h3>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Starting Price</p>
              <div className="text-4xl font-bold text-pink-600">
                ₹2,000<span className="text-lg text-gray-400">/hr</span>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <ClockIcon className="w-5 h-5 text-purple-600 mt-1 mr-2" />
                <span>Available 24/7 & 7 Days a week</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-purple-600 mt-1 mr-2" />
                <span>Direct service to your Hotel Room</span>
              </div>
              <div className="flex items-start">
                <CreditCardIcon className="w-5 h-5 text-purple-600 mt-1 mr-2" />
                <span>Cash, UPI, GPay, Paytm & Cards</span>
              </div>
            </div>
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="block text-center bg-purple-700 text-white py-4 rounded-xl font-bold hover:bg-purple-800 transition-colors shadow-lg"
            >
              Book via Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Pricing/Category Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional Companions for Every Occasion
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="p-8 border border-pink-100 rounded-3xl hover:shadow-2xl transition-all text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{item.type}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <div className="text-pink-600 font-black text-2xl">
                  Starting @ {item.price}/-
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Payment Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Safe & Easy Payment Methods
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <BanknotesIcon className="w-12 h-12 text-pink-500 mb-2" />
              <span>Cash</span>
            </div>
            <div className="flex flex-col items-center">
              <CreditCardIcon className="w-12 h-12 text-pink-500 mb-2" />
              <span>Debit/Credit Card</span>
            </div>
            <div className="flex flex-col items-center">
              <CurrencyRupeeIcon className="w-12 h-12 text-pink-500 mb-2" />
              <span>UPI / GPay / PhonePe</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">
                How to book an escort service in Mahipalpur discreetly?
              </h3>
              <p className="text-gray-700">
                To book, simply search for FunWithJuli on Google or call us
                directly. We ensure all your details are kept 100% private and
                deleted after service.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">
                What are the typical rates for private companions in Mahipalpur?
              </h3>
              <p className="text-gray-700">
                Rates vary by category. Indian call girls are more affordable
                (starting @2000), while Russian and international models have
                higher premium rates.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">
                How to verify authenticity of private escorts?
              </h3>
              <p className="text-gray-700">
                You can verify our services through user reviews and
                testimonials. We provide 100% genuine photos on WhatsApp before
                booking.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">
                Are services available for full night?
              </h3>
              <p className="text-gray-700">
                Yes, we offer hourly, 6-hour, and full-night packages for all
                categories including Indian and Russian girls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-pink-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Don't Spend Your Night Alone!
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Enjoy safe, private, and premium moments with our professional
              companions.
            </p>
            <a
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="inline-block px-12 py-5 bg-white text-pink-600 rounded-full font-black text-xl hover:bg-gray-100 shadow-xl"
            >
              CALL JULI NOW: {phoneNumber || "CONTACT US"}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
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
