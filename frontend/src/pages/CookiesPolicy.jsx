import React from "react";
import {
  ShieldCheckIcon,
  FingerPrintIcon,
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
  InformationCircleIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const CookiesPolicy = () => {
  const navigate = useNavigate();

  const sections = [
    { id: "what", title: "What are cookies?" },
    { id: "how", title: "How we use them" },
    { id: "types", title: "Types of cookies" },
    { id: "control", title: "Your choices" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      {/* --- Minimal Header --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-pink-500 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            BACK
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Privacy Standards 2026
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* --- Sidebar Navigation --- */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div>
              <h1 className="text-3xl font-black mb-4 dark:text-white">
                Cookies <br />
                Policy
              </h1>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Last updated: January 2026. <br />
                We value your transparency and control over your data.
              </p>
            </div>

            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-bold text-zinc-400 hover:text-pink-500 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-800 group-hover:bg-pink-500 transition-colors" />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- Content Area --- */}
        <div className="lg:col-span-8 space-y-16">
          <section id="what" className="space-y-4">
            <div className="flex items-center gap-3 text-pink-500 mb-2">
              <InformationCircleIcon className="h-6 w-6" />
              <h2 className="text-xl font-bold uppercase tracking-tight dark:text-white">
                What are cookies?
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Cookies are small text files that are stored on your device when
              you visit <strong>funwithjuli.in</strong>. They help us remember
              your preferences, keep you logged in, and analyze how you interact
              with our gallery to provide a smoother experience.
            </p>
          </section>

          <section id="how" className="space-y-6">
            <div className="flex items-center gap-3 text-pink-500 mb-2">
              <FingerPrintIcon className="h-6 w-6" />
              <h2 className="text-xl font-bold uppercase tracking-tight dark:text-white">
                How we use them
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
                <h3 className="font-bold mb-2">Authentication</h3>
                <p className="text-xs text-zinc-500">
                  To recognize you when you sign in so you don't have to enter
                  your password on every page.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
                <h3 className="font-bold mb-2">Personalization</h3>
                <p className="text-xs text-zinc-500">
                  To remember your preferred locations and categories across
                  different sessions.
                </p>
              </div>
            </div>
          </section>

          <section id="types" className="space-y-4">
            <div className="flex items-center gap-3 text-pink-500 mb-2">
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
              <h2 className="text-xl font-bold uppercase tracking-tight dark:text-white">
                Types of cookies
              </h2>
            </div>
            <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="p-4 text-xs font-black uppercase tracking-widest">
                      Category
                    </th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="p-4 text-sm font-bold">Essential</td>
                    <td className="p-4 text-sm text-zinc-500">
                      Required for the site to function. Cannot be disabled.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-bold">Analytics</td>
                    <td className="p-4 text-sm text-zinc-500">
                      Helps us understand traffic patterns and popular profiles.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-bold">Marketing</td>
                    <td className="p-4 text-sm text-zinc-500">
                      Used to show you relevant recommendations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            id="control"
            className="p-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold">Your Preferences</h2>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm">
                You can change your cookie settings at any time.
              </p>
            </div>
            <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-500/20 transition-all">
              Manage Settings
            </button>
          </section>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="py-20 text-center border-t border-zinc-200 dark:border-zinc-900">
        <ShieldCheckIcon className="h-8 w-8 mx-auto text-zinc-300 dark:text-zinc-700 mb-4" />
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.5em]">
          Secure & Encrypted • funwithjuli.in
        </p>
      </footer>
    </div>
  );
};

export default CookiesPolicy;
