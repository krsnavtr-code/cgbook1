import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar hamesha top par rahega */}
      <Navbar />

      {/* Main Content Area - Yahan alag-alag pages load honge */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer hamesha bottom par rahega */}
      <Footer />
    </div>
  );
};

export default Layout;
