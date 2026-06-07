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
          viewBox="0 0 24 24" 
          className="h-6 w-6 fill-white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.88.52 3.65 1.43 5.18L2 22l4.97-1.3c1.47.8 3.14 1.26 4.93 1.26 5.52 0 10-4.48 10-10C21.904 6.48 17.52 2 12.004 2zM17.5 15.63c-.24.69-1.22 1.26-1.89 1.34-.67.08-1.52.11-2.45-.19-.94-.3-1.95-.7-2.81-1.16-2.52-1.33-4.14-3.87-4.26-4.04-.12-.17-.99-1.31-.99-2.5 0-1.19.62-1.78.84-2.01.22-.23.49-.29.66-.29.17 0 .34 0 .49.01.16.01.37-.06.57.42.21.5.71 1.74.77 1.87.06.13.1.28.01.46-.09.18-.2.3-.39.52-.19.22-.39.46-.56.62-.19.18-.39.38-.17.76.22.38.98 1.62 2.1 2.62 1.45 1.3 2.66 1.7 3.04 1.88.38.18.6.15.82-.1.22-.25.95-1.11 1.2-1.49.25-.38.5-.32.84-.2.34.12 2.16 1.02 2.53 1.2.37.18.62.27.71.42.09.15.09.87-.15 1.56z"/>
        </svg>
      </a>
    </div>
  );
}
