import React, { useState, useEffect } from 'react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { setAgeVerified } from '../utils/cookies';

const AgeVerification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified') || 
                      document.cookie.includes('ageVerified=true');
    
    if (!ageVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setAgeVerified();
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsDeclined(true);
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 3000);
  };

  if (!isVisible) return null;

  if (isDeclined) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md mx-4 text-center">
          <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Access Denied
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            You must be 18+ to access this website. You will be redirected in 3 seconds...
          </p>
          <div className="animate-pulse">
            <div className="h-2 bg-red-500 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md mx-4 relative">
        <button
          onClick={() => window.location.href = 'https://www.google.com'}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl font-bold">18+</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            Age Verification Required
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            This website contains adult content and is intended for individuals who are 
            18 years of age or older. By entering this website, you confirm that you are 
            of legal age to view adult content in your jurisdiction.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleAccept}
              className="w-full py-3 px-6 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-500/20 transition-all duration-200"
            >
              I am 18+ - Enter Website
            </button>
            
            <button
              onClick={handleDecline}
              className="w-full py-3 px-6 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-2xl font-bold transition-all duration-200"
            >
              I am under 18 - Leave
            </button>
          </div>
          
          <p className="text-xs text-zinc-500 mt-6">
            By entering, you agree to our{' '}
            <a href="/terms-of-use" className="text-pink-500 hover:underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-pink-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
