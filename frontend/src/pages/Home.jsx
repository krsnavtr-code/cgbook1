import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* ================= BACKGROUND GLOW EFFECTS ================= */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-violet-400 dark:from-indigo-500 dark:to-purple-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* Badge */}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-600/10 dark:ring-indigo-400/20">
                What's New
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                <span>Version 2.0 Released</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.16 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Main Title */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Watch, Share & Inspire with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Visual Stories
            </span>
          </h1>

          {/* Subtitle (Refined for Professional Look) */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Apne pasandida photos aur videos dekhein, upload karein aur duniya
            ke sath share karein. The ultimate platform for creators and viewers
            alike.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/videos"
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:-translate-y-1"
            >
              Start Watching
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Join for Free <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* ================= HERO IMAGE / ILLUSTRATION ================= */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {/* Placeholder for a Dashboard Image or Collage */}
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden w-[20rem] sm:w-[35rem] aspect-video flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20"></div>
                <div className="text-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 mx-auto text-indigo-500 mb-4 animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Trending Content Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES STRIP ================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 text-center">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              HD Videos
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Experience crystal clear playback with our advanced player.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Easy Upload
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Share your moments with the world in just a few clicks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="mx-auto w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Community
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Connect with creators and build your own audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
