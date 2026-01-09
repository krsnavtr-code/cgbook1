// frontend/src/components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const hideNavAndFooter = ["/login", "/register", "/admin"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavAndFooter && <Navbar />}
      <main className={`flex-grow ${hideNavAndFooter ? "bg-gray-50" : ""}`}>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
