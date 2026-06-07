'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface ConditionCardProps {
  tamilName: string;
  englishName: string;
  description: string;
  symptoms: string[];
  therapies: string[];
}

export default function ConditionCard({
  tamilName,
  englishName,
  description,
  symptoms,
  therapies,
}: ConditionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-text-dark shadow-solid overflow-hidden mb-6">
      {/* Header Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div>
          <span className="block text-xs font-bold text-accent uppercase tracking-wider mb-1">
            Condition Profile
          </span>
          <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="tamil-text font-bold text-lg md:text-xl text-secondary">{tamilName}</span>
            <span className="text-gray-400 font-semibold text-sm hidden sm:inline">|</span>
            <span>{englishName}</span>
          </h3>
        </div>
        <div className="p-2 border-2 border-text-dark bg-bg-light shadow-solid hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-4">
          <ChevronDown className={`h-5 w-5 text-text-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Accordion Body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t-2 border-text-dark bg-bg-light"
          >
            <div className="p-6 space-y-6">
              
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-2">
                  What is this condition?
                </h4>
                <p className="text-sm md:text-base text-text-mid leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Symptoms & Therapies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-3">
                    Common Signs & Symptoms
                  </h4>
                  <ul className="space-y-2 text-sm text-text-mid">
                    {symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2 font-bold">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-3">
                    Recommended Therapies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {therapies.map((therapy, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-primary text-white border border-text-dark text-xs font-bold uppercase tracking-wider"
                      >
                        {therapy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alert Banner */}
              <div className="flex items-start p-4 bg-secondary/10 border-l-4 border-secondary text-sm text-text-dark">
                <AlertCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <p className="font-bold">
                  Early diagnosis leads to significantly better outcomes — contact us for a free screening call.
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
