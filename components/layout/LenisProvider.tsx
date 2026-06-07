'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Sync ScrollTrigger with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Tell GSAP to use Lenis's requestAnimationFrame
    const updateGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // Scroll progress indicator logic
    const progressLine = document.getElementById('scroll-progress');
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        if (progressLine) {
          progressLine.style.width = `${progress}%`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGsapTicker);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}
