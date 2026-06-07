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

  const clinicName = 'Siragugal Child Development & Physiotherapy Center';
  const words = clinicName.split(' ');

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-bg-dark text-white overflow-hidden py-12 md:py-20">
      
      {/* Sliced Teal Background Accent (JSK Reference Style) */}
      <div 
        className="absolute top-0 right-0 h-full w-[45%] bg-accent pointer-events-none hidden lg:block opacity-85 z-0"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column (40%) - Image first on mobile */}
          <div className="lg:col-span-5 flex justify-center items-center h-full relative py-6 z-10 order-1 lg:order-2">
            
            {/* Main Badge Container (Infinite float loop) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Main Rounded Image */}
              <div 
                className="absolute inset-0 border border-text-dark/5 shadow-2xl overflow-hidden transition-all duration-300"
                style={{ borderRadius: '2rem' }}
              >
                <img 
                  src="/images/child_therapy_hero.png" 
                  alt="Child Development Therapy Session at Siragugal" 
                  className="w-full h-full object-cover" 
                />
                {/* Visual Overlay for branding */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/90 to-transparent p-6 text-white pt-16">
                  <span className="font-display font-black text-white text-xl md:text-2xl uppercase tracking-tighter block">
                    SIRAGUGAL CLINIC
                  </span>
                  <span className="text-secondary font-extrabold text-[9px] tracking-widest uppercase mt-1 block tamil-text">
                    இவைகளுக்கு சிறப்பான சிகிச்சை
                  </span>
                </div>
              </div>

              {/* Floating Therapy Icons (Soft Shadow & Rounded) */}
              {/* Icon 1: Speech */}
              <motion.div
                animate={{ rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 p-4 bg-white border border-text-dark/5 shadow-lg rounded-2xl text-secondary flex items-center justify-center"
              >
                <Heart className="h-6 w-6 fill-secondary text-secondary" />
              </motion.div>

              {/* Icon 2: Occupational */}
              <motion.div
                animate={{ rotate: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-6 p-4 bg-accent border border-white/5 shadow-lg rounded-2xl text-white flex items-center justify-center"
              >
                <Activity className="h-6 w-6" />
              </motion.div>

              {/* Icon 3: Brain/Behavioral */}
              <motion.div
                animate={{ rotate: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute top-12 -right-4 p-4 bg-secondary border border-text-dark/5 shadow-lg rounded-2xl text-text-dark flex items-center justify-center"
              >
                <Brain className="h-6 w-6 text-text-dark" />
              </motion.div>

              {/* Icon 4: Shield */}
              <motion.div
                animate={{ rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="absolute -bottom-6 right-10 p-4 bg-white border border-text-dark/5 shadow-lg rounded-2xl text-primary flex items-center justify-center"
              >
                <Shield className="h-6 w-6 text-primary" />
              </motion.div>

            </motion.div>

          </div>

          {/* Left Column (60%) - Text Content second on mobile */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/15 border border-secondary/35 px-4 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4 text-secondary fill-secondary" />
              <span className="text-xs md:text-sm font-extrabold text-secondary uppercase tracking-wider">
                Namakkal's #1 Child Development & Rehab Hub
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title-container text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <span className="word-reveal inline-block" style={{ opacity: 0 }}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Short Tagline */}
            <div className="space-y-1">
              <span className="text-secondary font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide uppercase block">
                Specialized Treatment for All Conditions
              </span>
              <span className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold tamil-text block leading-relaxed">
                இவைகளுக்கு சிறப்பான சிகிச்சை அளிக்கப்படும்
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 font-medium leading-relaxed max-w-2xl">
              Namakkal's premier multidisciplinary center providing expert therapeutic services combining occupational, speech, behavioral, and advanced physiotherapy care under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="btn btn-secondary text-center w-full sm:w-auto px-6 py-3.5 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/child-development" 
                className="btn bg-white text-primary hover:bg-white/90 text-center w-full sm:w-auto px-6 py-3.5 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>

            {/* Contact Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-white/95 justify-center lg:justify-start w-full">
              <a 
                href="tel:+917338833962" 
                className="flex items-center hover:text-secondary transition-colors"
                aria-label="Call clinic phone: +917338833962"
              >
                <Phone className="h-4 w-4 text-secondary mr-2" />
                +91 73388 33962
              </a>
              <a 
                href="mailto:siragugalrehab@gmail.com" 
                className="flex items-center hover:text-secondary transition-colors"
                aria-label="Send email to clinic: siragugalrehab@gmail.com"
              >
                <Mail className="h-4 w-4 text-secondary mr-2" />
                siragugalrehab@gmail.com
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
