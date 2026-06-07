'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-secondary text-bg-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Is your child showing signs of developmental delay?
          </h2>
          <p className="text-base md:text-lg font-bold">
            Early intervention makes the biggest difference in long-term developmental progress.
          </p>
        </div>
        <Link 
          href="/contact" 
          className="btn btn-primary px-8 py-4 uppercase text-sm tracking-wider font-extrabold whitespace-nowrap bg-primary text-white focus:outline-none"
        >
          Talk to a Specialist Today
        </Link>
      </div>
    </section>
  );
}
