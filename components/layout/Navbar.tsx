'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, MessageCircle, 
  Activity, Brain, MessageSquare, GraduationCap, Users 
} from 'lucide-react';
import Image from 'next/image';

const childDevServices = [
  { name: 'Occupational Therapy', href: '/child-development/occupational-therapy', icon: Activity, desc: 'Motor skill & sensory integration' },
  { name: 'Speech Therapy', href: '/child-development/speech-therapy', icon: MessageSquare, desc: 'Speech & language development' },
  { name: 'Special Education', href: '/child-development/special-education', icon: GraduationCap, desc: 'Academic remediation & IEP' },
  { name: 'Behavioral Therapy', href: '/child-development/behavioral-therapy', icon: Brain, desc: 'Behavior modification & ABA' },
  { name: 'Counseling Psychology', href: '/child-development/counseling-psychology', icon: Users, desc: 'Assessments & family support' },
];

export const WingsLogo = () => (
  <svg className="h-8 w-8 text-primary flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16 26C16 26 10 20 6 15C2.5 10.5 3 6 7 6C11 6 14.5 10.5 16 13C17.5 10.5 21 6 25 6C29 6 29.5 10.5 26 15C22 20 16 26 16 26Z" 
      fill="url(#logo-gradient)" 
    />
    <path 
      d="M16 14C16 14 14.5 11 11 11C8.5 11 8.5 13.5 11 15.5C13.5 17.5 16 21 16 21" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M16 14C16 14 17.5 11 21 11C23.5 11 23.5 13.5 21 15.5C18.5 17.5 16 21 16 21" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
    <defs>
      <linearGradient id="logo-gradient" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1B2A8A" />
        <stop offset="0.5" stopColor="#00AACC" />
        <stop offset="1" stopColor="#F5A800" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Track scrolling to toggle opaque background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    // Close on Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white border-b border-gray-100 shadow-md' 
        : 'bg-white/95 md:bg-transparent'
    }`}>
      {/* Scroll indicator hook */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 flex-shrink-0 focus:outline-none" aria-label="Siragugal Home">
            <Image 
              src="/logo.png" 
              alt="Siragugal Logo" 
              width={48} 
              height={48} 
              className="h-12 w-12 flex-shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-extrabold text-primary tracking-tight leading-none">
                Siragugal<span className="text-secondary font-black">.</span>
              </span>
              <span className="text-[9px] font-semibold text-text-mid uppercase tracking-wider mt-1 hidden lg:block">
                Child Development & Physiotherapy Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-semibold text-sm transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-text-dark'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-semibold text-sm transition-colors hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-text-dark'}`}
            >
              About
            </Link>

            {/* Child Development Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/child-development"
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(false)}
                className={`flex items-center font-semibold text-sm transition-colors hover:text-primary focus:outline-none ${
                  pathname.startsWith('/child-development') ? 'text-primary' : 'text-text-dark'
                }`}
              >
                Child Development
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-80 bg-white border border-gray-100 rounded-xl shadow-lg p-4 z-50"
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    <div className="grid gap-2">
                      <p className="text-xs font-bold text-text-mid uppercase tracking-wider border-b pb-2">
                        Specialized Services
                      </p>
                      {childDevServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`flex items-start p-2 rounded transition-colors hover:bg-bg-light group ${
                              pathname === service.href ? 'bg-bg-light text-primary' : 'text-text-dark'
                            }`}
                          >
                            <Icon className="h-5 w-5 text-accent mr-3 mt-0.5 group-hover:text-primary" />
                            <div>
                              <div className="font-bold text-sm group-hover:text-primary">{service.name}</div>
                              <div className="text-xs text-text-mid mt-0.5">{service.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/physiotherapy" 
              className={`font-semibold text-sm transition-colors hover:text-primary ${pathname.startsWith('/physiotherapy') ? 'text-primary' : 'text-text-dark'}`}
            >
              Physiotherapy
            </Link>
            <Link 
              href="/conditions" 
              className={`font-semibold text-sm transition-colors hover:text-primary ${pathname === '/conditions' ? 'text-primary' : 'text-text-dark'}`}
            >
              Conditions
            </Link>
            <Link 
              href="/contact" 
              className={`font-semibold text-sm transition-colors hover:text-primary ${pathname === '/contact' ? 'text-primary' : 'text-text-dark'}`}
            >
              Contact
            </Link>

            {/* Book Appointment CTA */}
            <Link href="/contact" className="btn btn-secondary text-xs uppercase tracking-wider px-5 py-2.5">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center space-x-3">
            <Link 
              href="/contact" 
              className="btn btn-secondary px-4 py-2.5 text-xs uppercase font-extrabold tracking-wider"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-text-dark border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none flex items-center justify-center"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 w-screen h-screen bg-white z-[60] flex flex-col md:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center h-20 px-4 border-b border-gray-100 flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2.5 focus:outline-none" onClick={() => setIsOpen(false)}>
                <Image 
                  src="/logo.png" 
                  alt="Siragugal Logo" 
                  width={36} 
                  height={36} 
                  className="h-9 w-9 flex-shrink-0 object-contain"
                />
                <span className="font-display text-xl font-extrabold text-primary tracking-tight leading-none">
                  Siragugal<span className="text-secondary font-black">.</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 text-text-dark border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none flex items-center justify-center"
                aria-label="Close Navigation Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links Content */}
            <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
              <Link 
                href="/" 
                className={`block font-extrabold text-lg border-b pb-3 ${pathname === '/' ? 'text-primary' : 'text-text-dark'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block font-extrabold text-lg border-b pb-3 ${pathname === '/about' ? 'text-primary' : 'text-text-dark'}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              {/* Flat list for Child Dev Services */}
              <div className="space-y-3">
                <span className="block text-xs font-bold text-text-mid uppercase tracking-wider">
                  Child Development Services
                </span>
                <div className="pl-3 border-l-2 border-accent space-y-3">
                  <Link
                    href="/child-development"
                    className={`block text-sm font-bold py-1 transition-colors ${
                      pathname === '/child-development' ? 'text-primary' : 'text-text-dark hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    All Services (Hub)
                  </Link>
                  {childDevServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block text-sm font-bold py-1 transition-colors ${
                        pathname === service.href ? 'text-primary' : 'text-text-dark hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/physiotherapy" 
                className={`block font-extrabold text-lg border-b pb-3 ${pathname.startsWith('/physiotherapy') ? 'text-primary' : 'text-text-dark'}`}
                onClick={() => setIsOpen(false)}
              >
                Physiotherapy
              </Link>
              <Link 
                href="/conditions" 
                className={`block font-extrabold text-lg border-b pb-3 ${pathname === '/conditions' ? 'text-primary' : 'text-text-dark'}`}
                onClick={() => setIsOpen(false)}
              >
                Conditions Treated
              </Link>
              <Link 
                href="/contact" 
                className={`block font-extrabold text-lg border-b pb-3 ${pathname === '/contact' ? 'text-primary' : 'text-text-dark'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile Contact strip */}
              <div className="pt-4 space-y-4">
                <a 
                  href="tel:+917338833962" 
                  className="flex items-center text-sm font-bold text-primary"
                  aria-label="Call Siragugal Clinic at +917338833962"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 73388 33962
                </a>
                <a 
                  href="https://wa.me/917338833962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center btn btn-primary w-full py-3 text-sm uppercase tracking-wider"
                  aria-label="Chat on WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
