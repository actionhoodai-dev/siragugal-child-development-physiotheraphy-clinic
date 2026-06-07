'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

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
          className="p-3 bg-primary text-white border-2 border-text-dark shadow-solid rounded-full hover:-translate-y-1 transition-all focus:outline-none"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917338833962"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-success hover:bg-[#218838] text-white border-2 border-text-dark shadow-solid rounded-full hover:-translate-y-1 transition-all flex items-center justify-center animate-bounce focus:outline-none"
        style={{ animationDuration: '3s' }}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white text-success" />
      </a>
    </div>
  );
}
