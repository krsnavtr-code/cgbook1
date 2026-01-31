import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { getOwnerInfo } from "../api/ownerInfoApi";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const phoneNumber = ownerInfo?.callNumber?.replace(/[^\d+]/g, "") || "";

  // Component: NavLink with improved active state
  const NavLink = ({ to, children, className = "" }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-1 py-1 text-sm font-bold transition-colors ${
          isActive
            ? "text-pink-600 dark:text-pink-400"
            : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
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
    <nav className="sticky top-0 z-[100] w-full border-b border-pink-100/50 dark:border-gray-800 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* --- BRANDING --- */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-black">J</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-black tracking-tight dark:text-white">
                funwithjuli<span className="text-pink-600">.in</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Premium Escapes
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/photos">HD Photos</NavLink>

              {/* Refined Dropdown */}
              <div className="relative group py-4">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">
                  Locations{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  {["Noida", "Delhi", "Ghaziabad", "Gurugram"].map((city) => (
                    <Link
                      key={city}
                      to={`/meetings/${city.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/contact-us">Contact</NavLink>
            </div>

            <div className="flex items-center pl-6 border-l border-gray-100 dark:border-gray-800 gap-4">
              {/* <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-all"
              >
                {mounted && (darkMode ? <Moon size={20} /> : <Sun size={20} />)}
              </button> */}

              {loading ? (
                <div className="w-32 h-11 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
              ) : (
                phoneNumber && (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    <Phone size={16} fill="currentColor" />
                    Call Now
                  </a>
                )
              )}

              {isAuthenticated && isAdmin && (
                <Link
                  to="/admin"
                  className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 border border-amber-100 dark:border-amber-900/50"
                >
                  <ShieldCheck size={20} />
                </Link>
              )}
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400"
            >
              {mounted && (darkMode ? <Moon size={22} /> : <Sun size={22} />)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-pink-50 dark:bg-gray-800 text-pink-600 dark:text-pink-400"
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
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {["Home", "Photos", "Videos", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-colors"
                >
                  {item}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                {phoneNumber && (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full p-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-pink-500/20"
                  >
                    <Phone size={20} fill="currentColor" />
                    Connect Directly
                  </a>
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
