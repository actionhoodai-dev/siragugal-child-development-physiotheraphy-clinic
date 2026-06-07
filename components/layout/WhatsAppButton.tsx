'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3.5 bg-primary text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200 focus:outline-none flex items-center justify-center border border-white/10"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917338833962?text=Hello%20Siragugal%20Child%20Development%20%26%20Physiotherapy%20Center%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget-btn"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          viewBox="0 0 44 44" 
          className="h-8 w-8" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#25d366" d="M22 0C9.8 0 0 9.8 0 22c0 3.9 1 7.6 2.8 10.8L0 44l11.5-3c3 1.8 6.6 2.8 10.5 2.8 12.2 0 22-9.8 22-22S34.2 0 22 0z" />
          <path fill="#fff" d="M22 4C12.1 4 4 12.1 4 22c0 3.5.9 6.8 2.6 9.7L4 40l8.6-2.2c2.7 1.6 5.8 2.4 9.4 2.4 9.9 0 18-8.1 18-18S31.9 4 22 4zm10.4 25.1c-.5.7-2.6 1.3-3.6 1.4-1 .1-1.9.1-4.7-1-3.6-1.5-6.8-5.1-8.5-7.4-1.7-2.3-2.9-5-2.9-7.8 0-2.8 1.4-4.2 2-4.8.6-.6 1.4-.9 2-.9.4 0 .9 0 1.2.1.4.1.8.1 1.2 1 .5 1.1 1.6 3.9 1.7 4.1.1.3.2.7 0 1.1-.2.4-.4.7-.7.9-.3.3-.6.7-.9 1-.3.3-.6.6-.3 1.2.3.5 1.5 2.4 3.1 3.9 2.1 2 3.9 2.6 4.5 2.9.6.3.9.2 1.2-.2.3-.3 1.3-1.5 1.7-2 .4-.5.8-.4 1.3-.2.5.2 3 .8 3.5 1.1.5.3.8.4.9.6.1.2.1 1.2-.4 1.9z" />
        </svg>
      </a>
    </div>
  );
}
