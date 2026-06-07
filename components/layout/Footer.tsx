'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { WingsLogo } from './Navbar';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white border-t-4 border-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Clinic Brand & Address */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <WingsLogo />
              <div className="flex flex-col">
                <span className="font-display text-xl font-extrabold text-white tracking-tight leading-none">
                  Siragugal<span className="text-secondary font-black">.</span>
                </span>
                <span className="text-[9px] font-semibold text-accent uppercase tracking-wider mt-0.5">
                  Child Development & Physiotherapy Center
                </span>
              </div>
            </div>
            <p className="text-secondary font-semibold tamil-text text-sm leading-relaxed">
              இவைகளுக்கு சிறப்பான சிகிச்சை அளிக்கப்படும்.
            </p>
            <div className="flex items-start text-sm text-gray-300 space-x-3 pt-2">
              <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span>
                5/438, Rajivgandhi Nagar, Chinna Mudhalaipatti Road,<br />
                Behind Murugan Kovil, Salem Road,<br />
                Namakkal – 637 001
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white border-b-2 border-secondary pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/child-development" className="hover:text-secondary transition-colors">Child Development</Link>
              </li>
              <li>
                <Link href="/physiotherapy" className="hover:text-secondary transition-colors">Physiotherapy</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-secondary transition-colors">Conditions Treated</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white border-b-2 border-secondary pb-2 inline-block">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a 
                  href="tel:+917338833962" 
                  className="flex items-center hover:text-secondary transition-colors"
                  aria-label="Call Siragugal Clinic at +917338833962"
                >
                  <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span>+91 73388 33962</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:siragugalrehab@gmail.com" 
                  className="flex items-center hover:text-secondary transition-colors"
                  aria-label="Send email to siragugalrehab@gmail.com"
                >
                  <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span className="break-all">siragugalrehab@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Visiting Hours</span>
                  <span>9:30 AM to 8:00 PM</span>
                  <span className="block text-xs text-gray-400 mt-0.5">(Monday – Saturday)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Siragugal Child Development & Physiotherapy Center. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
