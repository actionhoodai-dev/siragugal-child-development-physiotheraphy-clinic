'use client';

import React from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface ServiceInternalLayoutProps {
  title: string;
  boldSentence: string;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  imageUrl?: string;
  children: React.ReactNode;
}

export default function ServiceInternalLayout({
  title,
  boldSentence,
  breadcrumbs,
  ctaText = 'Book a Free Assessment',
  imageUrl,
  children,
}: ServiceInternalLayoutProps) {
  return (
    <article className="min-h-screen bg-bg-light py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Hero Section */}
        <header className="bg-primary text-white rounded-2xl shadow-lg mb-8 md:mb-12 border border-white/5 overflow-hidden">
          <div className="p-6 md:p-8 space-y-3 max-w-4xl">
            <BreadcrumbNav items={breadcrumbs} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight text-white">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-200 leading-relaxed">
              {boldSentence}
            </p>
          </div>
        </header>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-10 bg-white border border-text-dark/5 p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(26,26,46,0.04)]">
            {children}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 md:space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-bg-dark text-white border border-white/5 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-lg font-display font-extrabold text-secondary mb-3 uppercase tracking-wider">
                Siragugal Rehab
              </h3>
              <p className="text-xs md:text-sm text-gray-300 mb-6 leading-relaxed">
                Namakkal's premier multidisciplinary center providing expert therapeutic services for pediatric development and adult physical rehabilitation.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+917338833962" 
                  className="btn btn-secondary w-full py-3 block text-center uppercase tracking-wider text-xs md:text-sm font-bold focus:outline-none"
                  aria-label="Call clinic at +917338833962"
                >
                  Call 7338833962
                </a>
                <a 
                  href="https://wa.me/917338833962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-white text-white hover:bg-white/10 w-full py-3 block text-center uppercase tracking-wider text-xs md:text-sm font-bold focus:outline-none"
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Visiting Hours Card */}
            <div className="bg-white border border-text-dark/5 rounded-2xl shadow-[0_8px_30px_rgba(26,26,46,0.04)] p-6">
              <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-2">
                Visiting Hours
              </h4>
              <p className="text-xs md:text-sm text-text-mid font-semibold">
                Monday – Saturday<br />
                9:30 AM to 8:00 PM
              </p>
            </div>

            {/* Early Intervention Card */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 text-text-dark">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                Why Early Intervention?
              </h4>
              <p className="text-xs md:text-sm font-semibold leading-relaxed">
                Therapeutic rehabilitation before age 6 yields significantly better outcomes. Call us to book a screening assessment.
              </p>
            </div>

          </aside>

        </div>

        {/* Bottom CTA Banner */}
        <section className="mt-12 md:mt-16 bg-secondary text-text-dark rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left max-w-2xl">
            <h3 className="text-xl md:text-2xl font-display font-extrabold uppercase tracking-tight">
              Ready to start your recovery?
            </h3>
            <p className="font-bold text-xs md:text-sm text-text-dark/95">
              Contact us today to schedule your evaluation session with our specialized therapists in Namakkal.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="btn btn-primary w-full md:w-auto px-8 py-3.5 text-center uppercase text-xs md:text-sm tracking-wider font-bold focus:outline-none"
          >
            {ctaText}
          </Link>
        </section>

      </div>
    </article>
  );
}
