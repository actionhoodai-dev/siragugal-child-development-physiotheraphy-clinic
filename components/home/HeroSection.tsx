'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Sparkles, Brain, Shield, Heart, Activity } from 'lucide-react';
import { animateHeroText } from '@/lib/animations';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const icon1Y = useTransform(scrollY, [0, 600], [0, -60]);
  const icon2Y = useTransform(scrollY, [0, 600], [0, 40]);
  const icon3Y = useTransform(scrollY, [0, 600], [0, -35]);
  const icon4Y = useTransform(scrollY, [0, 600], [0, 50]);

  useEffect(() => {
    animateHeroText('.hero-title-container');
  }, []);

  const clinicName = 'Siragugal Child Development & Physiotherapy Center';
  const words = clinicName.split(' ');

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-bg-dark text-white overflow-hidden py-12 md:py-20">
      
      {/* Sliced Teal Background Accent (JSK Reference Style) */}
      <motion.div 
        className="absolute top-0 right-0 h-full w-[45%] bg-accent pointer-events-none hidden lg:block opacity-85 z-0"
        style={{ 
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          y: bgY
        }}
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
                <Image 
                  src="/images/child_therapy_hero.png" 
                  alt="Child Development Therapy Session at Siragugal" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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

              {/* Floating Therapy Icons (Soft Shadow & Rounded with multi-axis dynamic float) */}
              {/* Icon 1: Heart (Speech/Love) */}
              <motion.div style={{ y: icon1Y }} className="absolute -top-4 -left-4 z-20">
                <motion.div
                  animate={{ y: [0, -12, 0], x: [0, 6, 0], rotate: [0, 6, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="p-4 bg-white border border-text-dark/5 shadow-lg rounded-2xl text-secondary flex items-center justify-center"
                >
                  <Heart className="h-6 w-6 fill-secondary text-secondary" />
                </motion.div>
              </motion.div>

              {/* Icon 2: Occupational */}
              <motion.div style={{ y: icon2Y }} className="absolute -bottom-6 -left-4 z-20">
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -8, 0], rotate: [0, -4, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="p-4 bg-accent border border-white/5 shadow-lg rounded-2xl text-white flex items-center justify-center"
                >
                  <Activity className="h-6 w-6" />
                </motion.div>
              </motion.div>

              {/* Icon 3: Brain/Behavioral */}
              <motion.div style={{ y: icon3Y }} className="absolute top-12 -right-4 z-20">
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, -6, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="p-4 bg-secondary border border-text-dark/5 shadow-lg rounded-2xl text-text-dark flex items-center justify-center"
                >
                  <Brain className="h-6 w-6 text-text-dark" />
                </motion.div>
              </motion.div>

              {/* Icon 4: Shield */}
              <motion.div style={{ y: icon4Y }} className="absolute -bottom-6 right-10 z-20">
                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, 8, 0], rotate: [0, -8, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
                  className="p-4 bg-white border border-text-dark/5 shadow-lg rounded-2xl text-primary flex items-center justify-center"
                >
                  <Shield className="h-6 w-6 text-primary" />
                </motion.div>
              </motion.div>

            </motion.div>

          </div>

          {/* Left Column (60%) - Text Content second on mobile */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Logo in Homepage Header */}
            <div className="flex items-center space-x-3 mb-2">
              <Image 
                src="/logo.png" 
                alt="Siragugal Logo" 
                width={80} 
                height={80} 
                className="h-20 w-20 rounded-full border-2 border-white/20 bg-white p-1 shadow-lg flex-shrink-0 object-contain animate-pulse"
                priority
              />
              <div className="text-left hidden sm:block">
                <span className="font-display font-black text-white text-base md:text-lg uppercase tracking-tight block leading-none">
                  SIRAGUGAL
                </span>
                <span className="text-[9px] font-semibold text-secondary uppercase tracking-widest block mt-1">
                  CHILD DEVELOPMENT & REHAB
                </span>
              </div>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/15 border border-secondary/35 px-4 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4 text-secondary fill-secondary" />
              <span className="text-xs md:text-sm font-extrabold text-secondary uppercase tracking-wider">
                Caring Hands, Healing Tots
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title-container text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3 pb-4 -mb-4 align-bottom">
                  <span className="word-reveal inline-block align-bottom pb-1.5" style={{ opacity: 0 }}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Short Tagline */}
            <div className="space-y-1.5">
              <span className="text-secondary font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide uppercase block leading-tight">
                “Because Every Child Deserves the Chance to Shine” ✨
              </span>
              <span className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold tamil-text block leading-relaxed">
                இவைகளுக்கு சிறப்பான சிகிச்சை அளிக்கப்படும்
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 font-medium leading-relaxed max-w-2xl">
              Helping children unlock their potential through expert therapy and individualized care. Our multidisciplinary center coordinates occupational, speech, behavioral, and advanced physiotherapy care under one roof.
            </p>

            {/* Core Services Checklist */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-white/90 font-bold max-w-xl w-full pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Physiotherapy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Occupational Therapy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Speech Therapy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Special Education</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Counseling Psychology</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary font-black">✔</span>
                <span>Behaviour Therapy</span>
              </div>
            </div>

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
