'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Page transitions
  useEffect(() => {
    // Prevent transition trigger on first load (since loading covers it)
    if (loading) return;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // Duration matches animation transition
    return () => clearTimeout(timer);
  }, [pathname, loading]);

  const showLoader = loading || isTransitioning;

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="flex flex-col items-center space-y-5 text-center px-4">
            
            {/* Pulsing Logo Container */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="h-40 w-40 rounded-full border-4 border-primary/10 p-2 bg-white shadow-xl flex items-center justify-center"
            >
              <Image 
                src="/logo.png" 
                alt="Siragugal Logo" 
                width={160} 
                height={160} 
                className="object-contain w-full h-full"
                priority
              />
            </motion.div>

            {/* Brand Title */}
            <div className="space-y-1.5">
              <h1 className="font-display font-black text-primary text-3xl uppercase tracking-tighter block leading-none">
                SIRAGUGAL<span className="text-secondary">.</span>
              </h1>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                Child Development & Physiotherapy Center
              </p>
              <p className="text-[11px] font-extrabold italic text-secondary block mt-1 tracking-wider uppercase">
                "Caring Hands, Healing Tots"
              </p>
            </div>
            
            {/* Spinning Loader Indicator */}
            <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin mt-4" />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
