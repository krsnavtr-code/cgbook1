import React, { useState } from 'react';
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon, 
  ShieldCheckIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const SupportCenter = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How do I verify a profile?",
      a: "Look for the blue checkmark icon. Verified profiles have undergone a live video or photo verification process by our team."
    },
    {
      q: "Is my data kept private?",
      a: "Absolutely. We encrypt all user communications and never share your phone number with third parties without your consent."
    },
    {
      q: "How can I report a problem?",
      a: "You can use our dedicated Scam Report page or click the 'Help' button on any specific profile to flag it."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      
      {/* --- Top Navigation --- */}
      <nav className="p-6">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all"
        >
          <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-bold text-xs uppercase tracking-[0.2em]">Back to Gallery</span>
        </button>
      </nav>

      {/* --- Hero Header --- */}
      <header className="px-6 py-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/10 rounded-3xl mb-6">
          <LifebuoyIcon className="h-8 w-8 text-pink-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
          How can we <span className="text-pink-500 underline decoration-pink-500/30">help?</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Search our knowledge base or reach out to our dedicated support team.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- Left Column: Contact Cards --- */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-6">Direct Support</h2>
          
          <a href="https://wa.me/yournumber" className="flex items-center gap-5 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] hover:border-pink-500/50 transition-all group">
            <div className="bg-green-500/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-bold">WhatsApp Chat</h3>
              <p className="text-sm text-zinc-500">Average response: 5 mins</p>
            </div>
          </a>

          <div className="flex items-center gap-5 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] hover:border-pink-500/50 transition-all group cursor-pointer">
            <div className="bg-blue-500/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold">Email Support</h3>
              <p className="text-sm text-zinc-500">support@funwithjuli.in</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2rem] text-white shadow-xl shadow-pink-500/20">
            <ShieldCheckIcon className="h-10 w-10 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Safety Guarantee</h3>
            <p className="text-pink-100 text-sm leading-relaxed">
              Your security is our priority. Our support agents will never ask for your login password or payment OTPs.
            </p>
          </div>
        </div>

        {/* --- Right Column: FAQs --- */}
        <div className="lg:col-span-7">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-6">Frequently Asked</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDownIcon className={`h-5 w-5 text-zinc-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* --- Search Box Replacement --- */}
          <div className="mt-10 p-8 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] flex flex-col items-center text-center">
            <QuestionMarkCircleIcon className="h-10 w-10 text-zinc-300 mb-4" />
            <h3 className="font-bold mb-1">Still have questions?</h3>
            <p className="text-sm text-zinc-500 mb-6">We're available 24/7 to assist you with any inquiries.</p>
            <button className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform">
              Open a Ticket
            </button>
          </div>
        </div>

      </main>

      {/* --- Simple Bottom Footer --- */}
      <div className="border-t border-zinc-100 dark:border-zinc-900 py-10 text-center">
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em]">Help Center • funwithjuli.in</p>
      </div>
    </div>
  );
};

export default SupportCenter;