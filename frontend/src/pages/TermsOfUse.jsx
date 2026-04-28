import React from "react";
import {
  ScaleIcon,
  UserGroupIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import MetaTags from "../components/MetaTags";

const TermsOfUse = () => {
  const navigate = useNavigate();

  const summaryPoints = [
    { icon: UserGroupIcon, text: "Must be 18+ to enter" },
    { icon: NoSymbolIcon, text: "Zero tolerance for harassment" },
    { icon: ShieldCheckIcon, text: "Your data is encrypted" },
  ];

  return (
    <>
      <MetaTags
        title="Terms of Use - FunwithJuli Escort Service Agreement"
        description="Read FunwithJuli's terms of use and service agreement. Understand the guidelines for using our premium escort platform and legal requirements."
        keywords="terms of use, service agreement, escort terms, legal terms, FunwithJuli terms, platform guidelines, user agreement"
        canonicalUrl="https://funwithjuli.in/terms-of-use"
        noIndex={true}
      />
      <div className="min-h-screen bg-white  text-zinc-900  transition-colors duration-300">
        {/* --- Aesthetic Header --- */}
        <div className="relative overflow-hidden bg-zinc-50  border-b border-zinc-200 ">
          <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-zinc-500 hover:text-pink-500 transition-all mb-10"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Return
              </span>
            </button>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20">
                  <ScaleIcon className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Legal Agreement
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                  Terms of <span className="text-zinc-400">Use</span>
                </h1>
              </div>
              <p className="text-sm text-zinc-500  max-w-xs font-medium leading-relaxed">
                By accessing funwithjuli.in, you agree to follow these
                guidelines. Last updated: Jan 2026.
              </p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-pink-500/5 blur-[100px] rounded-full" />
        </div>

        <main className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Quick Summary Bento --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 bg-zinc-900  text-white  rounded-[2.5rem] shadow-2xl">
                <h3 className="text-xl font-bold mb-6">The TL;DR</h3>
                <ul className="space-y-6">
                  {summaryPoints.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-pink-500 shrink-0" />
                      <span className="text-sm font-medium opacity-80">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-zinc-200  rounded-[2.5rem] flex flex-col items-center text-center">
                <CheckBadgeIcon className="h-10 w-10 text-zinc-300 mb-4" />
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                  Certified Safe Platform
                </p>
              </div>
            </div>
          </div>

          {/* --- Detailed Legal Content --- */}
          <div className="lg:col-span-8 space-y-12 prose prose-zinc max-w-none">
            <section>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-pink-500/20 italic">
                  01
                </span>
                <h2 className="text-2xl font-bold m-0">Acceptance of Terms</h2>
              </div>
              <p className="text-zinc-600  leading-relaxed">
                By using this website, you confirm that you are at least 18
                years of age. If you do not agree with any part of these terms,
                you must immediately cease use of our services. Our gallery is
                for informational and entertainment purposes only.
              </p>
            </section>

            <section>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-pink-500/20 italic">
                  02
                </span>
                <h2 className="text-2xl font-bold m-0">User Conduct</h2>
              </div>
              <p className="text-zinc-600  leading-relaxed">
                You agree not to use the platform to harass, abuse, or harm
                another person. Any attempt to scrape data, use automated bots,
                or misrepresent your identity will result in a permanent IP ban.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li className="flex gap-2">
                  <span>•</span> No commercial solicitation without written
                  consent.
                </li>
                <li className="flex gap-2">
                  <span>•</span> No redistribution of gallery content.
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-pink-500/20 italic">
                  03
                </span>
                <h2 className="text-2xl font-bold m-0">
                  Disclaimer of Liability
                </h2>
              </div>
              <div className="p-6 bg-zinc-50  border-l-4 border-pink-500 rounded-r-2xl">
                <p className="text-sm italic text-zinc-600  m-0">
                  "funwithjuli.in acts as a directory service. We do not employ
                  the individuals listed in our gallery and are not responsible
                  for interactions occurring outside of our platform."
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-pink-500/20 italic">
                  04
                </span>
                <h2 className="text-2xl font-bold m-0">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-zinc-600  leading-relaxed">
                All logos, designs, and curated content are the exclusive
                property of funwithjuli.in. Unauthorized use of our trademark or
                assets is strictly prohibited.
              </p>
            </section>
          </div>
        </main>

        {/* --- Final CTA Footer --- */}
        <footer className="border-t border-zinc-200  py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <DocumentTextIcon className="h-10 w-10 text-zinc-300" />
              <div>
                <p className="font-bold">Still have legal questions?</p>
                <p className="text-sm text-zinc-500">
                  Contact our legal team at legal@funwithjuli.in
                </p>
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-zinc-200  rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50  transition-colors"
            >
              Download PDF
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TermsOfUse;
