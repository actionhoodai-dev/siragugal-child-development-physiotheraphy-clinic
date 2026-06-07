'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index}
            className="bg-white border border-text-dark/5 shadow-[0_4px_20px_rgba(26,26,46,0.02)] rounded-xl overflow-hidden transition-all duration-200"
          >
            {/* Question Bar */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-display font-extrabold text-sm md:text-base text-primary pr-4">
                {faq.question}
              </span>
              <div className="p-1.5 bg-bg-light rounded-lg flex-shrink-0 hover:bg-text-dark/5 transition-colors">
                <ChevronDown className={`h-4 w-4 text-text-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="border-t border-text-dark/10 bg-bg-light"
                >
                  <p className="p-5 text-xs md:text-sm text-text-mid font-semibold leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
