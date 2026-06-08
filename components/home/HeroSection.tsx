'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Sparkles, Clock } from 'lucide-react';
import { animateHeroText } from '@/lib/animations';

export default function HeroSection() {
  useEffect(() => {
    animateHeroText('.hero-title-container');
  }, []);

  const clinicName = 'Siragugal Child Development & Physiotherapy Center';
  const words = clinicName.split(' ');

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-bg-dark text-white overflow-hidden py-16 md:py-24">
      
      {/* Full-Screen Background Image with increased visibility (opacity-45) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/child_therapy_hero_bg.png" 
          alt="Siragugal Child Development & Physiotherapy Center Background" 
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 object-center" 
        />
        {/* Soft, reduced-opacity gradient overlay to make the photo clearly visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/65 to-bg-dark/35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full z-10 relative">
        <div className="max-w-4xl space-y-6 md:space-y-8 text-left">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/15 border border-secondary/35 px-4 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-secondary fill-secondary" />
            <span className="text-xs md:text-sm font-extrabold text-secondary uppercase tracking-wider">
              Premier Rehabilitation Center
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title-container text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 pb-4 -mb-4 align-bottom">
                <span className="word-reveal inline-block align-bottom pb-1.5" style={{ opacity: 0 }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Short Tagline */}
          <div className="space-y-2">
            <span className="text-secondary font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide uppercase block leading-tight">
              “Because Every Child Deserves the Chance to Shine” ✨
            </span>
            <span className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold tamil-text block leading-relaxed">
              இவைகளுக்கு சிறப்பான சிகிச்சை அளிக்கப்படும்
            </span>
          </div>

          {/* Logo Placed In-Between Title/Tagline and Description */}
          <div className="flex items-center space-x-4 py-3 my-4 border-y border-white/10 max-w-xl">
            <Image 
              src="/logo.png" 
              alt="Siragugal Official Logo" 
              width={80} 
              height={80} 
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-white/20 bg-white p-1 shadow-lg flex-shrink-0 object-contain"
              priority
            />
            <div className="text-left">
              <span className="font-display font-black text-white text-base sm:text-lg uppercase tracking-tight block leading-none">
                SIRAGUGAL
              </span>
              <span className="text-[9px] font-semibold text-secondary uppercase tracking-widest block mt-1.5">
                CHILD DEVELOPMENT & REHAB
              </span>
              <span className="text-[10px] sm:text-xs italic text-gray-300 font-medium block mt-1">
                "Caring Hands, Healing Tots"
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 font-medium leading-relaxed max-w-3xl">
            Helping children unlock their potential through expert therapy and individualized care. Our multidisciplinary center coordinates occupational, speech, behavioral, and advanced physiotherapy care under one roof.
          </p>

          {/* Core Services Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90 font-bold max-w-3xl w-full pt-4 border-t border-white/10">
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

          {/* Contact & Hours Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-white/95 justify-start w-full">
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
            <div className="flex items-center text-white/90">
              <Clock className="h-4 w-4 text-secondary mr-2" />
              <span>Mon - Sat: 9:30 AM - 8:00 PM</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
