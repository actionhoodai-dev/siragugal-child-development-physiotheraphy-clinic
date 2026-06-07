'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, MessageCircle, 
  Activity, Brain, MessageSquare, GraduationCap, Users 
} from 'lucide-react';

const childDevServices = [
  { name: 'Occupational Therapy', href: '/child-development/occupational-therapy', icon: Activity, desc: 'Motor skill & sensory integration' },
  { name: 'Speech Therapy', href: '/child-development/speech-therapy', icon: MessageSquare, desc: 'Speech & language development' },
  { name: 'Special Education', href: '/child-development/special-education', icon: GraduationCap, desc: 'Academic remediation & IEP' },
  { name: 'Behavioral Therapy', href: '/child-development/behavioral-therapy', icon: Brain, desc: 'Behavior modification & ABA' },
  { name: 'Counseling Psychology', href: '/child-development/counseling-psychology', icon: Users, desc: 'Assessments & family support' },
];

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
          <Link href="/" className="flex flex-col flex-shrink-0 focus:outline-none" aria-label="Siragugal Home">
            <span className="font-display text-2xl md:text-3xl font-extrabold text-primary tracking-tight leading-none">
              Siragugal
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-text-mid uppercase tracking-wider mt-1">
              Child Development & Physiotherapy Center
            </span>
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center font-semibold text-sm transition-colors hover:text-primary focus:outline-none ${
                  pathname.startsWith('/child-development') ? 'text-primary' : 'text-text-dark'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Child Development
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-80 bg-white border border-gray-100 rounded-xl shadow-lg p-4 z-50"
                    onMouseLeave={() => setDropdownOpen(false)}
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
          <div className="flex md:hidden items-center space-x-2">
            <Link href="/contact" className="btn btn-secondary px-3 py-1.5 text-xs uppercase font-bold">
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-dark border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-white border-b border-gray-100 shadow-md overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <Link 
                href="/" 
                className={`block font-bold text-lg border-b pb-2 ${pathname === '/' ? 'text-primary' : 'text-text-dark'}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block font-bold text-lg border-b pb-2 ${pathname === '/about' ? 'text-primary' : 'text-text-dark'}`}
              >
                About Us
              </Link>

              {/* Flat list for Child Dev Services */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-text-mid uppercase tracking-wider">
                  Child Development Services
                </span>
                <div className="pl-3 border-l-2 border-accent space-y-2">
                  {childDevServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block text-sm font-semibold py-1 transition-colors ${
                        pathname === service.href ? 'text-primary' : 'text-text-dark hover:text-primary'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/physiotherapy" 
                className={`block font-bold text-lg border-b pb-2 ${pathname.startsWith('/physiotherapy') ? 'text-primary' : 'text-text-dark'}`}
              >
                Physiotherapy
              </Link>
              <Link 
                href="/conditions" 
                className={`block font-bold text-lg border-b pb-2 ${pathname === '/conditions' ? 'text-primary' : 'text-text-dark'}`}
              >
                Conditions Treated
              </Link>
              <Link 
                href="/contact" 
                className={`block font-bold text-lg border-b pb-2 ${pathname === '/contact' ? 'text-primary' : 'text-text-dark'}`}
              >
                Contact Us
              </Link>

              {/* Mobile Contact strip */}
              <div className="pt-4 space-y-3">
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
