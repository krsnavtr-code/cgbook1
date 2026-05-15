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

  return (
    <footer className="relative mt-auto border-t border-pink-50 bg-white transition-colors duration-300 pt-12 pb-8 md:pt-20 md:pb-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-pink-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 md:space-y-6 text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 transition-transform group-hover:rotate-6">
                <span className="text-xl font-black">J</span>
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                funwithjuli
                <span className="text-gray-900">.in</span>
              </span>
            </Link>
            <p className="text-black text-sm md:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              The ultimate destination for exclusive visual storytelling. Join
              our premium community and experience creativity like never before.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="text-center sm:text-left lg:col-span-2">
            <h3 className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-widest mb-4 md:mb-6">
              Content
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/contact-us"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/photos"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  HD Photo Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/scam-report"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Scam Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal/Safety Column */}
          <div className="text-center sm:text-left lg:col-span-2">
            <h3 className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-widest mb-4 md:mb-6">
              Trust & Safety
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support-center"
                  className="text-sm md:text-base text-black hover:text-pink-600 font-medium transition-colors"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Support / Call-To-Action Box */}
          <div className="sm:col-span-2 lg:col-span-4 bg-pink-50/50 p-6 rounded-3xl border border-pink-100 text-center sm:text-left">
            <h3 className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-widest mb-3 md:mb-4">
              Need Assistance?
            </h3>
            <p className="text-sm text-black mb-5 md:mb-6">
              Our support team is available for any account or billing queries.
            </p>

            {loading ? (
              <div className="h-12 w-full bg-gray-200 rounded-2xl animate-pulse"></div>
            ) : phoneNumber ? (
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-white rounded-2xl text-pink-600 font-bold shadow-sm hover:shadow-md transition-all border border-pink-100"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="truncate">{phoneNumber}</span>
              </a>
            ) : (
              <p className="text-xs font-bold text-gray-400 italic">
                Direct support currently offline
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar Sub-Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-xs md:text-sm text-black font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-900 font-bold">funwithjuli.in</span>. All
            rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2">
              {/* Payment Icons Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-5 bg-gray-100 border border-white rounded-sm"
                ></div>
              ))}
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200"></div>
            <p className="text-xs font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-tighter">
              18+ <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
              Adult Content
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
