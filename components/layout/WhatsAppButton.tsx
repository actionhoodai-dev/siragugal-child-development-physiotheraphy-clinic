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
        className="p-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex items-center justify-center animate-bounce focus:outline-none border border-white/10"
        style={{ animationDuration: '3s' }}
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="h-6 w-6 fill-white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.451 5.437 1.452 5.513 0 9.997-4.485 10.001-9.999.002-2.67-1.037-5.18-2.924-7.07C17.276 1.647 14.766.61 12.012.61c-5.51 0-10 4.49-10 10 0 2.01.52 3.98 1.52 5.73l-.4 1.46-.71 2.59c-.2.72.18 1.1.52.76l2.67-.7zm12.35-5.32c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-1.38-.69-2.43-1.28-3.38-2.9-.95-1.62-1.95-3.53-1.95-3.53s.2-.17.38-.38c.18-.21.28-.35.38-.56.1-.21.05-.4-.02-.56-.07-.16-.6-.17-.83-.17s-.61.06-.83.17c-.22.11-1.95.96-2.25 1.07-.48.17-.64.16-.81.03-.22-.16-.38-.34-.45-.53-.2-.51-.31-1.4-.04-2.23.27-.83 1.42-1.7 1.7-1.79.28-.09 2.09-3.2 5.07-4.49.7-.3 1.25-.48 1.68-.62.7-.22 1.34-.19 1.84-.11.56.08 1.95.8 2.22 1.57.27.77.27 1.43.19 1.57-.08.14-.3.22-.63.38z" />
        </svg>
      </a>
    </div>
  );
}
