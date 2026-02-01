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
    <footer className="relative mt-auto border-t border-pink-50 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300 pt-20 pb-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/30 dark:bg-pink-900/10 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 transition-transform group-hover:rotate-6">
                <span className="text-xl font-black">J</span>
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-400 dark:to-indigo-400">
                funwithjuli
                <span className="text-gray-900 dark:text-white">.in</span>
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              The ultimate destination for exclusive visual storytelling. Join
              our premium community and experience creativity like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Content
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/photos"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  HD Photo Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/scam-report"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Scam Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal/Safety */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Trust & Safety
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support-center"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-4 bg-pink-50/50 dark:bg-gray-800/50 p-6 rounded-3xl border border-pink-100 dark:border-gray-700">
            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-4">
              Need Assistance?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Our support team is available for any account or billing queries.
            </p>

            {loading ? (
              <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            ) : phoneNumber ? (
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white dark:bg-gray-900 rounded-2xl text-pink-600 dark:text-pink-400 font-bold shadow-sm hover:shadow-md transition-all border border-pink-100 dark:border-gray-700"
              >
                <svg
                  className="h-5 w-5"
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
                {phoneNumber}
              </a>
            ) : (
              <p className="text-xs font-bold text-gray-400 italic">
                Direct support currently offline
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              funwithjuli.in
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {/* Payment Icons Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-5 bg-gray-100 dark:bg-gray-800 border border-white dark:border-gray-900 rounded-sm"
                ></div>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700"></div>
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
