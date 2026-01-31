import React from "react";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeSlashIcon,
  UserCircleIcon,
  ServerIcon,
  ArrowLeftIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* --- Progress Navigation --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-pink-500 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Exit
          </button>
          <div className="flex items-center gap-3">
            <LockClosedIcon className="h-4 w-4 text-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              End-to-End Encrypted
            </span>
          </div>
        </div>
      </nav>

      {/* --- Hero Header --- */}
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl mb-8">
          <ShieldCheckIcon className="h-10 w-10 text-pink-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-none">
          Privacy <span className="text-zinc-400">is our</span> <br />
          First Priority.
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          At funwithjuli.in, we believe your data belongs to you. This policy
          outlines how we protect your identity and manage your information.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-32">
        {/* --- Quick Facts Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {[
            {
              icon: EyeSlashIcon,
              title: "No Selling",
              desc: "We never sell data to advertisers.",
            },
            {
              icon: UserCircleIcon,
              title: "Anonymity",
              desc: "Browse without public tracking.",
            },
            {
              icon: ServerIcon,
              title: "Secure",
              desc: "256-bit AES Server Encryption.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl text-center"
            >
              <item.icon className="h-6 w-6 mx-auto mb-3 text-pink-500" />
              <h3 className="font-bold text-sm mb-1 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Policy Content --- */}
        <article className="space-y-12 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
              <span className="h-6 w-1 bg-pink-500 rounded-full" />
              Information Collection
            </h2>
            <p>
              When you use funwithjuli.in, we collect minimal information
              necessary to provide our service. This includes technical data
              like your IP address (anonymized) and device type to ensure our
              gallery displays correctly on your screen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
              <span className="h-6 w-1 bg-pink-500 rounded-full" />
              How We Protect You
            </h2>
            <p>
              Our infrastructure is built on secure, private clouds. We use
              Secure Socket Layer (SSL) technology to ensure that all data
              passed between our web server and your browser remains private and
              integral.
            </p>
            <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm italic border-l-4 border-pink-500">
              "We perform weekly security audits to ensure no vulnerabilities
              exist that could compromise user browsing sessions."
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
              <span className="h-6 w-1 bg-pink-500 rounded-full" />
              Third Party Links
            </h2>
            <p>
              Occasionally, we may include links to third-party services (like
              WhatsApp). These sites have separate privacy policies. We,
              therefore, have no responsibility for the content and activities
              of these linked sites.
            </p>
          </section>
        </article>

        {/* --- Global Standard Badge --- */}
        <div className="mt-20 p-8 border-2 border-zinc-100 dark:border-zinc-900 rounded-[3rem] flex flex-col items-center text-center">
          <GlobeAltIcon className="h-12 w-12 text-zinc-200 dark:text-zinc-800 mb-4" />
          <h3 className="font-bold text-lg mb-2">Global Privacy Standard</h3>
          <p className="text-sm text-zinc-500 mb-6 max-w-sm">
            We align our data processing with international best practices to
            ensure your right to privacy is respected worldwide.
          </p>
          <a
            href="mailto:privacy@funwithjuli.in"
            className="text-pink-500 font-bold hover:underline"
          >
            privacy@funwithjuli.in
          </a>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em]">
          Privacy Vault • funwithjuli.in • 2026
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
