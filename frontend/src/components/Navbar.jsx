import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getOwnerInfo } from "../api/ownerInfoApi";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const profileRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const fetchOwnerInfo = async () => {
      try {
        const data = await getOwnerInfo();
        // Get the primary owner or first owner in the list
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

  // Format the phone number for display and tel: link
  const formatPhoneNumber = (number) => {
    if (!number) return "";
    // Remove all non-digit characters except the leading +
    return number.replace(/^(\+?\d+)[\s-]*(\d+)$/, "$1$2");
  };

  const phoneNumber = ownerInfo?.callNumber
    ? formatPhoneNumber(ownerInfo.callNumber)
    : "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    setIsProfileOpen(false);
    logout();
    navigate("/");
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-1 py-1 text-sm font-semibold transition-all duration-300 ${
          isActive
            ? "text-pink-600 dark:text-pink-400"
            : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
        }`}
      >
        {children}
        <span
          className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transform transition-transform duration-300 origin-center ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-100/50 dark:border-gray-800 bg-white/70 dark:bg-gray-900/90 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center py-3">
          {/* ================= BRANDING ================= */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30 transform transition-transform group-hover:rotate-12">
                <span className="text-xl font-black">J</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-900 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-400 dark:to-indigo-400">
                funwithjuli
                <span className="text-gray-900 dark:text-white">.in</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 leading-none">
                Exclusive Content
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink to="/videos">Videos</NavLink>
              <NavLink to="/photos">Photos</NavLink>
              <NavLink to="/categories">Categories</NavLink>
              {isAuthenticated && isAdmin && (
                <Link
                  to="/admin"
                  className="text-xs font-bold px-2 py-1 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                >
                  ADMIN
                </Link>
              )}
            </div>

            <div className="flex items-center pl-6 border-l border-gray-100 dark:border-gray-800 gap-4">
              <button
                onClick={toggleTheme}
                className="p-1 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:ring-2 ring-pink-100 dark:ring-pink-900/30 transition-all"
              >
                {mounted && (darkMode ? "🌙" : "☀️")}
              </button>

              {loading ? (
                <div className="w-28 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              ) : phoneNumber ? (
                <a
                  href={`tel:${phoneNumber}`}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all active:scale-95 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
              ) : (
                <span className="text-xs text-gray-500 dark:text-gray-400 px-2">
                  Call not available
                </span>
              )}
            </div>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-lg">
              {mounted && (darkMode ? "🌙" : "☀️")}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-pink-50 dark:bg-gray-800 text-pink-600 dark:text-pink-400"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white dark:bg-gray-900`}
      >
        <div className="px-4 pt-2 pb-8 space-y-2 border-t border-gray-100 dark:border-gray-800">
          <Link
            to="/videos"
            className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-700 dark:text-gray-200"
          >
            Videos
          </Link>
          <Link
            to="/photos"
            className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-700 dark:text-gray-200"
          >
            Photos
          </Link>
          <Link
            to="/categories"
            className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-700 dark:text-gray-200"
          >
            Categories
          </Link>

          <div className="grid grid-cols-2 gap-3 p-2">
            {loading ? (
              <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            ) : phoneNumber ? (
              <a
                href={`tel:${phoneNumber}`}
                className="p-4 text-center rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            ) : (
              <span className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                Call not available
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;