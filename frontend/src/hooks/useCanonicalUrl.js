import { useLocation } from "react-router-dom";

/**
 * Custom hook to generate canonical URL based on current route
 * @param {string} customPath - Optional custom path to override the current pathname
 * @returns {string} - Full canonical URL
 */
export const useCanonicalUrl = (customPath = null) => {
  const location = useLocation();
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.funwithjuli.in";

  // Use custom path if provided, otherwise use current pathname
  const pathname = customPath || location.pathname;

  // Remove trailing slash except for root path
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  return `${baseUrl}${cleanPath}`;
};
