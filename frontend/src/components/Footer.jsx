import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Footer = () => {
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

  const keyframesStyle = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  // 2. Container ki custom styles ka object
  const containerStyle = {
    background: "linear-gradient(135deg, #f0f4ff, #fff1f2, #fef9c3, #ecfeff)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 10s ease infinite",
    borderRadius: "16px",
    padding: "3rem 2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
  };

  return (
    <footer className="relative mt-auto border-t border-pink-50 bg-white transition-colors duration-300 pt-10 pb-6 md:pt-16 md:pb-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-pink-100/20 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div
        style={containerStyle}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-pink-500/20 transition-transform group-hover:rotate-6">
                <span className="text-lg font-black">J</span>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                funwithjuli
                <span className="text-gray-900">.in</span>
              </span>
            </Link>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm mx-auto sm:mx-0">
              The ultimate destination for exclusive visual storytelling. Join
              our premium community and experience creativity like never before.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="text-center sm:text-left col-span-1 lg:col-span-2">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-3 md:mb-4">
              Content
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Contact Us", path: "/contact-us" },
                { label: "Help Center", path: "/help-center" },
                { label: "HD Photo Sets", path: "/photos" },
                { label: "Scam Report", path: "/scam-report" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-xs md:text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors inline-block py-1 sm:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Safety Column */}
          <div className="text-center sm:text-left col-span-1 lg:col-span-2">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-3 md:mb-4">
              Trust & Safety
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms of Use", path: "/terms-of-use" },
                { label: "Cookies Policy", path: "/cookies-policy" },
                { label: "Support Center", path: "/support-center" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-xs md:text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors inline-block py-1 sm:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box Component */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-pink-50/40 p-5 md:p-6 rounded-2xl border border-pink-100 text-center sm:text-left h-fit mt-4 sm:mt-0">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2">
              Need Assistance?
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-4">
              Our support team is available for any account or billing queries.
            </p>

            {loading ? (
              <div className="h-11 w-full bg-gray-200 rounded-xl animate-pulse"></div>
            ) : phoneNumber ? (
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-white rounded-xl text-pink-600 font-bold text-sm shadow-sm hover:shadow-md transition-all border border-pink-100 hover:border-pink-200 active:scale-[0.99]"
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="truncate">{phoneNumber}</span>
              </a>
            ) : (
              <p className="text-xs font-bold text-gray-400 italic py-2">
                Direct support currently offline
              </p>
            )}
          </div>
        </div>

        {/* Bottom Footer - All Pages Interlinking */}

        {/* React tarike se CSS Keyframes inject karna */}
        <style>{keyframesStyle}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-4">
            {/* Main Pages */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                Main
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/photos"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-arrivals"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Core Hub Zones */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                Regional Hubs
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/meetings/delhi"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Delhi Hub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meetings/noida"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Noida Hub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meetings/gurugram"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Gurugram Hub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meetings/ghaziabad"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Ghaziabad Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Central & South Sectors */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                Central & South
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/escort-service-connaught-place"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Connaught Place
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-karol-bagh"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Karol Bagh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-south-delhi"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    South Delhi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-saket"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Saket
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-hauz-khas"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Hauz Khas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-malviya-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Malviya Nagar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-lajpat-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Lajpat Nagar
                  </Link>
                </li>
              </ul>
            </div>

            {/* West & East Sectors */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                West & East Areas
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/escort-service-dwarka"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Dwarka
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-janakpuri"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Janakpuri
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-tilak-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Tilak Nagar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-patel-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Patel Nagar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-palam"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Palam
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-laxmi-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Laxmi Nagar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-new-ashok-nagar"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    New Ashok Nagar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Airport & Business Hubs */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                Transit & Commercial
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/escort-service-aerocity"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Aerocity
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-mahipalpur"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Mahipalpur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-vasant-kunj"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Vasant Kunj
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-munirka"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Munirka
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escort-service-nehru-place"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Nehru Place
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-wider mb-2">
                System Support
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/contact-us"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help-center"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support-center"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scam-report"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Scam Report
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-use"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies-policy"
                    className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
                  >
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Sonam"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Sonam
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Parul"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Photo Gallery
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Nilam"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Nilam
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Salu"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Salu
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Kajal"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Kajal
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Soniya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Soniya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Riya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Riya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Vandna"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Vandna
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Ragni"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Ragni
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Mina"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Mina
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Shiwani"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Shiwani
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Kavya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Kavya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Manisha"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Manisha
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Vidya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Vidya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Nitya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Nitya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Neha"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Neha
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Anushka"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Anushka
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Aarti"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Aarti
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Nisha"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Nisha
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Meera"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Meera
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Kiara"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Kiara
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Anaya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Anaya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Myra"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Myra
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Avni"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Avni
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Ishita"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Ishita
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Diya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Diya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Saanvi"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Saanvi
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Aadhya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Aadhya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Vanya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Vanya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Zoya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Zoya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Navya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Navya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Avni"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Avni
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Pooja"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Pooja
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Somiya"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Somiya
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/sabnam"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                sabnam
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Rukshar"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Rukshar
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/shuhana"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                shuhana
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Bulbul"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Bulbul
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Manisha"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Manisha
              </Link>
            </p>
            <p>
              <Link
                to="https://www.funwithjuli.in/profile/Nikita"
                className="text-[10px] md:text-xs font-bold hover:text-gray-900 transition-colors"
              >
                Nikita
              </Link>
            </p>
          </div>
        </div>

        {/* Sub-Footer Base Area */}
        <div className="border-t border-gray-100 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-bold font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-900 font-bold">funwithjuli.in</span>. All
            rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Semantic Payment Badge Icons Wrapper */}
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              {/* UPI Icon */}
              <span className="text-[9px] font-black text-gray-400 tracking-tighter border border-gray-300 rounded px-1 scale-90">
                UPI
              </span>
              {/* Card Icon Minimal Mock */}
              <svg
                className="w-5 h-3.5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              {/* Wallet Mock Icon */}
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>

            <div className="hidden sm:block h-3 w-px bg-gray-200"></div>

            <p className="text-[11px] font-bold text-red-500 bg-red-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-tight border border-red-100">
              18+ <span className="w-1 h-1 bg-red-400 rounded-full"></span>{" "}
              Adult Content
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
