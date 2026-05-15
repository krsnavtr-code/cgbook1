import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getOwnerInfo } from "../api/ownerInfoApi";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ShieldCheck } from "lucide-react";
import { LOCATIONS } from "../constants/locations";

const Navbar = () => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const fetchOwnerInfo = async () => {
      try {
        const data = await getOwnerInfo();
        const primaryOwner =
          data.owners?.find((o) => o.isPrimary) || data.owners?.[0];
        setOwnerInfo(primaryOwner);
      } catch (err) {
        console.error("Owner fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOwnerInfo();
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  const phoneNumber = ownerInfo?.callNumber?.replace(/[^\d+]/g, "") || "";

  // Component: NavLink with improved active state for desktop
  const NavLink = ({ to, children, className = "" }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-1 py-1 text-sm font-bold transition-colors ${
          isActive ? "text-pink-600" : "text-black hover:text-pink-500"
        } ${className}`}
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="navUnderline"
            className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"
          />
        )}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-pink-100/50 bg-white/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* --- BRANDING --- */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-black">J</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-black tracking-tight text-gray-900">
                funwithjuli
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Premium Escapes
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-3">
              <NavLink to="/">Home</NavLink>

              {/* Refined Dropdown */}
              <div className="relative group py-4">
                <button className="flex items-center gap-1 text-sm font-bold text-black hover:text-pink-500 transition-colors">
                  In Delhi{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  {LOCATIONS.map((city) => (
                    <Link
                      key={city}
                      to={`/escort-service-${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/new-arrivals">New Arrivals</NavLink>
              <NavLink to="/photos">HD Photos</NavLink>
              <NavLink to="/contact-us">Contact</NavLink>
            </div>

            <div className="flex items-center">
              {loading ? (
                <div className="w-32 h-11 bg-gray-100 rounded-xl animate-pulse" />
              ) : (
                phoneNumber && (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-3 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    <Phone size={16} fill="currentColor" />
                    Call Now
                  </a>
                )
              )}

              {isAuthenticated && isAdmin && (
                <Link
                  to="/admin"
                  className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100"
                >
                  <ShieldCheck size={20} />
                </Link>
              )}
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated && isAdmin && (
              <Link
                to="/admin"
                className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 mr-1"
              >
                <ShieldCheck size={18} />
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-pink-50 text-pink-600"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <Link
                to="/"
                className={`flex items-center p-3.5 rounded-2xl font-bold transition-colors ${
                  location.pathname === "/"
                    ? "bg-pink-50 text-pink-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                Home
              </Link>

              {/* Mobile Dropdown Accordion for Locations */}
              <div className="rounded-2xl bg-gray-50 overflow-hidden">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-between p-3.5 font-bold text-gray-700 transition-colors"
                >
                  <span>In Delhi</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180 text-pink-600" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/50 px-4 pb-2 space-y-1"
                    >
                      {LOCATIONS.map((city) => {
                        const targetPath = `/escort-service-${city.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                          <Link
                            key={city}
                            to={targetPath}
                            className={`block p-2.5 rounded-xl text-sm font-medium transition-colors ${
                              location.pathname === targetPath
                                ? "text-pink-600 bg-pink-50/50"
                                : "text-gray-600 hover:text-pink-500"
                            }`}
                          >
                            {city}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/new-arrivals"
                className={`flex items-center p-3.5 rounded-2xl font-bold transition-colors ${
                  location.pathname === "/new-arrivals"
                    ? "bg-pink-50 text-pink-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                New Arrivals
              </Link>

              <Link
                to="/photos"
                className={`flex items-center p-3.5 rounded-2xl font-bold transition-colors ${
                  location.pathname === "/photos"
                    ? "bg-pink-50 text-pink-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                HD Photos
              </Link>

              <Link
                to="/contact-us"
                className={`flex items-center p-3.5 rounded-2xl font-bold transition-colors ${
                  location.pathname === "/contact-us"
                    ? "bg-pink-50 text-pink-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                Contact
              </Link>

              {/* Mobile CTA Action Button */}
              <div className="pt-4 border-t border-gray-100">
                {loading ? (
                  <div className="w-full h-14 bg-gray-100 rounded-2xl animate-pulse" />
                ) : (
                  phoneNumber && (
                    <a
                      href={`tel:${phoneNumber}`}
                      className="w-full p-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-pink-500/20 target-interactive"
                    >
                      <Phone size={20} fill="currentColor" />
                      Call Now
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
