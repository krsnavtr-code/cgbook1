import React from "react";
import MetaTags from "../../components/MetaTags";

const AdminDashboard = () => {
  return (
    <>
      <MetaTags
        title="Admin Dashboard - FunwithJuli Admin Panel"
        description="Admin dashboard for managing FunwithJuli escort service platform. Manage users, profiles, media, and settings."
        keywords="admin dashboard, FunwithJuli admin, escort service admin, platform management, admin panel"
        canonicalUrl="https://funwithjuli.in/admin"
        noIndex={true}
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 ">
            Dashboard Overview
          </h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm md:text-base">
            Add New Media
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-white  p-6 rounded-2xl shadow-sm border border-gray-100 ">
            <h3 className="text-gray-500  text-sm font-medium">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-gray-900  mt-2">
              1,234
            </p>
          </div>
          {/* Stat Card 2 */}
          <div className="bg-white  p-6 rounded-2xl shadow-sm border border-gray-100 ">
            <h3 className="text-gray-500  text-sm font-medium">
              Total Videos
            </h3>
            <p className="text-3xl font-bold text-gray-900  mt-2">
              456
            </p>
          </div>
          {/* Stat Card 3 */}
          <div className="bg-white  p-6 rounded-2xl shadow-sm border border-gray-100 ">
            <h3 className="text-gray-500  text-sm font-medium">
              Total Photos
            </h3>
            <p className="text-3xl font-bold text-gray-900  mt-2">
              890
            </p>
          </div>
        </div>

        {/* Placeholder Content Area */}
        <div className="bg-white  rounded-2xl shadow-sm border border-gray-100  p-8 text-center py-20">
          <div className="inline-block p-4 rounded-full bg-indigo-50  text-indigo-600  mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 ">
            Manage Content
          </h2>
          <p className="text-gray-500  mt-2">
            Select a category from the sidebar to manage videos, photos, or
            users.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
