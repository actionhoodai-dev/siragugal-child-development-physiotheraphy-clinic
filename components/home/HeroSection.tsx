'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, Sparkles, Brain, Shield, Heart, Activity } from 'lucide-react';
import { animateHeroText } from '@/lib/animations';

export default function HeroSection() {
  useEffect(() => {
    animateHeroText('.hero-title-container');
  }, []);

  const headline = 'Every Child Deserves To Reach Their Full Potential';
  const words = headline.split(' ');

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-bg-light overflow-hidden border-b-4 border-text-dark py-12 md:py-20">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary border-4 border-text-dark" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary border-4 border-text-dark rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/15 border-2 border-secondary px-4 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4 text-secondary fill-secondary" />
              <span className="text-xs md:text-sm font-extrabold text-text-dark uppercase tracking-wider">
                Namakkal's #1 Child Development Center
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title-container text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight tracking-tight">
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <span className="word-reveal inline-block" style={{ opacity: 0 }}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-text-mid font-semibold leading-relaxed max-w-2xl">
              Specialized therapy services combining occupational, speech, behavioral, and physiotherapy care — all under one roof in Namakkal.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn-secondary px-8 py-4 rounded text-center uppercase tracking-wider text-sm font-extrabold"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/child-development" 
                className="btn-outline px-8 py-4 rounded text-center uppercase tracking-wider text-sm font-extrabold bg-white"
              >
                Explore Services
              </Link>
            </div>

            {/* Contact Strip */}
            <div className="pt-4 border-t border-text-dark/10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-text-dark">
              <a 
                href="tel:+917338833962" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Call clinic phone: +917338833962"
              >
                <Phone className="h-4 w-4 text-secondary mr-2" />
                +91 73388 33962
              </a>
              <a 
                href="mailto:siragugalrehab@gmail.com" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Send email to clinic: siragugalrehab@gmail.com"
              >
                <Mail className="h-4 w-4 text-secondary mr-2" />
                siragugalrehab@gmail.com
              </a>
            </div>

          </div>

          {/* Right Column (40%) - CSS Art & Floating Therapy Icons */}
          <div className="lg:col-span-5 flex justify-center items-center h-full relative py-6">
            
            {/* Main Badge Container (Infinite float loop) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Outer Bold Shape */}
              <div 
                className="absolute inset-0 bg-primary border-4 border-text-dark shadow-solid-secondary flex items-center justify-center transition-all duration-300"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
              >
                <div className="text-center p-8 max-w-xs z-10 select-none">
                  <span className="font-display font-black text-white text-3xl md:text-5xl uppercase tracking-tighter block">
                    SIRAGUGAL
                  </span>
                  <span className="text-secondary font-extrabold text-[10px] md:text-xs tracking-widest uppercase mt-2 block tamil-text">
                    சிறப்பான சிகிச்சை
                  </span>
                </div>
              </div>

              {/* Floating Therapy Icons */}
              {/* Icon 1: Speech */}
              <motion.div
                animate={{ rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 p-4 bg-white border-2 border-text-dark shadow-solid rounded-lg text-secondary flex items-center justify-center"
              >
                <Heart className="h-6 w-6 fill-secondary" />
              </motion.div>

              {/* Icon 2: Occupational */}
              <motion.div
                animate={{ rotate: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-6 p-4 bg-accent border-2 border-text-dark shadow-solid rounded-lg text-white flex items-center justify-center"
              >
                <Activity className="h-6 w-6" />
              </motion.div>

              {/* Icon 3: Brain/Behavioral */}
              <motion.div
                animate={{ rotate: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute top-12 -right-4 p-4 bg-secondary border-2 border-text-dark shadow-solid rounded-lg text-text-dark flex items-center justify-center"
              >
                <Brain className="h-6 w-6" />
              </motion.div>

              {/* Icon 4: Shield/Safe environment */}
              <motion.div
                animate={{ rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="absolute -bottom-6 right-10 p-4 bg-white border-2 border-text-dark shadow-solid rounded-lg text-primary flex items-center justify-center"
              >
                <Shield className="h-6 w-6" />
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
