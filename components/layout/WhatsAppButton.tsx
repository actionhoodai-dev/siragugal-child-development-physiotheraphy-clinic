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
          className="h-7 w-7 fill-white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.48 0 9.944-4.464 9.948-9.944.004-5.48-4.465-9.948-9.946-9.948-5.48 0-9.947 4.467-9.95 9.948-.001 2.051.589 3.992 1.637 5.728l-1.066 3.896 3.985-1.045zm11.103-6.992c-.151-.077-.895-.442-1.033-.493-.138-.051-.239-.077-.339.077-.1.154-.387.493-.475.594-.088.102-.176.115-.327.038-.151-.077-.638-.235-1.215-.75-.449-.4-.752-.893-.841-1.046-.089-.153-.01-.236.067-.312.069-.068.153-.178.23-.267.077-.089.102-.153.153-.255.051-.102.026-.192-.013-.268-.038-.077-.339-.817-.464-1.118-.124-.298-.251-.257-.339-.262-.088-.005-.189-.005-.289-.005-.102 0-.268.038-.408.192-.14.154-.536.524-.536 1.278s.55 1.482.626 1.583c.077.102 1.077 1.646 2.609 2.311.363.157.646.251.867.322.364.115.695.099.956.06.291-.044.895-.366 1.021-.719.127-.353.127-.655.088-.719-.038-.064-.14-.102-.291-.178z"/>
        </svg>
      </a>
    </div>
  );
}
