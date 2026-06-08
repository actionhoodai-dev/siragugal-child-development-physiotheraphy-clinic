'use client';

import { motion } from 'framer-motion';
import { Star, Edit, ExternalLink } from 'lucide-react';

/* Official Google "G" icon — the four-color shield/roundel */
const GoogleGIcon = ({ className = 'h-8 w-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="py-12 md:py-16 bg-bg-light border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm"
        >
          {/* Content: Icon + Rating + CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Google icon + branding */}
            <div className="flex items-center gap-4">
              <GoogleGIcon className="h-10 w-10 flex-shrink-0" />
              <div>
                <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-800 leading-tight">
                  Google Reviews
                </h2>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Local Business Rating
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-12 w-[1px] bg-slate-200" />

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-3xl text-slate-800 leading-none">4.9</span>
              <div>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">out of 5.0</span>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Write Review CTA */}
            <a
              href="https://g.page/r/CdmjrSsmFqU3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none w-full sm:w-auto"
            >
              <Edit className="h-4 w-4" />
              <span>Write a Review</span>
            </a>
          </div>

          {/* Subtle footer link */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
            <a
              href="https://g.page/r/CdmjrSsmFqU3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a73e8] hover:text-[#1557b0] transition-colors"
            >
              <span>View all reviews on Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
