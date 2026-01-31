import React, { useState } from "react";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UserMinusIcon,
  ShieldExclamationIcon,
  ArrowLeftIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const ScamReport = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the report would go here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6 p-10 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center">
            <ShieldCheckIcon className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold dark:text-white">
            Report Received
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Thank you for keeping the community safe. Our moderators will review
            this profile immediately.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 pb-20">
      {/* --- Header Section --- */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-pink-500 transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Go Back
          </span>
        </button>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Report a <span className="text-red-500">Scam</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl">
            Help us maintain the integrity of funwithjuli.in. If you encountered
            a fake profile or fraudulent behavior, let us know.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- Information Sidebar --- */}
        <div className="md:col-span-1 space-y-6">
          <div className="p-6 bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-3xl">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mb-4" />
            <h3 className="font-bold text-red-900 dark:text-red-400">
              Quick Alert
            </h3>
            <p className="text-sm text-red-700/80 dark:text-red-400/60 mt-2">
              Never share your OTP, bank details, or personal addresses with
              anyone on the platform.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              What happens next?
            </h4>
            <ul className="space-y-4">
              {[
                { icon: UserMinusIcon, text: "Profile is flagged" },
                { icon: ShieldExclamationIcon, text: "Manual verification" },
                { icon: ShieldCheckIcon, text: "Permanent Ban if guilty" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-zinc-500"
                >
                  <item.icon className="h-5 w-5 text-zinc-400" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Profile Name/ID
              </label>
              <input
                type="text"
                required
                placeholder="Who are you reporting?"
                className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-red-500 transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Type of Issue
              </label>
              <select className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-red-500 transition-all outline-none appearance-none">
                <option>Fake Photos / Misleading</option>
                <option>Financial Fraud / Scam</option>
                <option>Harassment</option>
                <option>Underage Profile</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Details
              </label>
              <textarea
                rows="4"
                required
                placeholder="Please describe what happened..."
                className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-red-500 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Evidence (Optional)
              </label>
              <div className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-red-500 transition-colors cursor-pointer group">
                <CloudArrowUpIcon className="h-8 w-8 text-zinc-400 group-hover:text-red-500 transition-colors" />
                <span className="text-sm text-zinc-500 mt-2">
                  Upload screenshots
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-500/25 transition-all active:scale-[0.98]"
            >
              Submit Report
            </button>

            <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest px-4">
              False reporting may result in the suspension of your own account.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ScamReport;
