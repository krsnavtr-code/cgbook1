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
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.87l-1.025 6.703c-.111.489-.47.608-.88.373l-1.611-1.187-.78 0.751c-.086.086-.16.158-.33.158l0.113-1.605 2.926-2.643c0.127-.113-.028-.176-.197-.063l-3.616 2.277-1.558-.487c-.339-.107-.348-.339.07-.503l6.088-2.345c.281-.104.527.063.402.566z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
