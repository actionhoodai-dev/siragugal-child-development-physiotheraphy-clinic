'use client';

import { motion } from 'framer-motion';
import { Star, Edit } from 'lucide-react';

const reviews = [
  {
    author: 'Saravanan M.',
    initial: 'S',
    avatarColor: 'bg-[#3f51b5]', // Indigo
    rating: 5,
    date: 'a week ago',
    text: "Namakkal's best child development center. The occupational therapy program helped my son achieve his motor milestones. Highly professional and clean environment.",
    localGuide: true,
  },
  {
    author: 'Deepika R.',
    initial: 'D',
    avatarColor: 'bg-[#e91e63]', // Pink
    rating: 5,
    date: '3 weeks ago',
    text: 'Highly recommended for speech therapy. The therapists are extremely patient and train parents on home plans. We saw positive changes within a few weeks.',
    localGuide: false,
  },
  {
    author: 'Karthik Raja',
    initial: 'K',
    avatarColor: 'bg-[#ff9800]', // Amber
    rating: 5,
    date: '1 month ago',
    text: 'Excellent physiotherapy rehabilitation. My chronic shoulder stiffness was completely cured by their specialized manual exercises. Very polite and expert team.',
    localGuide: true,
  },
];

const GoogleWordmark = () => (
  <svg viewBox="0 0 106 37" className="h-5 w-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* G */}
    <path d="M12.04 11.08H22.75C22.88 11.72 23.01 12.42 23.01 13.23C23.01 16.48 22.09 19.82 20.06 21.84C18.1 23.92 15.42 25 11.91 25C5.46 25 0 19.54 0 13C0 6.46 5.46 1 11.91 1C15.42 1 18.1 2.31 20.02 4.19L17.18 7.03C15.77 5.71 13.99 4.77 11.91 4.77C7.62 4.77 4.31 8.35 4.31 13C4.31 17.65 7.62 21.23 11.91 21.23C15.02 21.23 16.78 19.98 17.91 18.84C18.83 17.92 19.43 16.63 19.66 14.85H12.04V11.08Z" fill="#4285F4"/>
    {/* o */}
    <path d="M35.66 13C35.66 19.65 30.56 24.62 24.36 24.62C18.16 24.62 13.06 19.65 13.06 13C13.06 6.35 18.16 1.38 24.36 1.38C30.56 1.38 35.66 6.35 35.66 13ZM31.62 13C31.62 8.78 28.32 5.25 24.36 5.25C20.4 5.25 17.1 8.78 17.1 13C17.1 17.19 20.4 20.75 24.36 20.75C28.32 20.75 31.62 17.19 31.62 13Z" fill="#EA4335"/>
    {/* o */}
    <path d="M59.66 13C59.66 19.65 54.56 24.62 48.36 24.62C42.16 24.62 37.06 19.65 37.06 13C37.06 6.35 42.16 1.38 48.36 1.38C54.56 1.38 59.66 6.35 59.66 13ZM55.62 13C55.62 8.78 52.32 5.25 48.36 5.25C44.4 5.25 41.1 8.78 41.1 13C41.1 17.19 44.4 20.75 48.36 20.75C52.32 20.75 55.62 17.19 55.62 13Z" fill="#FBBC05"/>
    {/* g */}
    <path d="M82.66 2.38V23.62C82.66 32.33 77.46 35.91 71.36 35.91C65.56 35.91 62.06 32.01 60.76 28.76L64.26 27.31C64.88 28.81 67.06 31.36 71.36 31.36C75.86 31.36 78.66 28.58 78.66 23.32V21.64H78.48C77.08 23.36 74.48 24.87 70.98 24.87C64.68 24.87 58.78 19.33 58.78 12.94C58.78 6.51 64.68 1 70.98 1C74.48 1 77.08 2.51 78.48 4.19H78.66V2.38H82.66ZM79.02 12.98C79.02 8.65 75.86 5.25 71.8 5.25C67.74 5.25 64.48 8.65 64.48 12.98C64.48 17.27 67.74 20.75 71.8 20.75C75.86 20.75 79.02 17.27 79.02 12.98Z" fill="#4285F4"/>
    {/* l */}
    <path d="M88.66 1V24H84.66V1H88.66Z" fill="#34A853"/>
    {/* e */}
    <path d="M96.66 13.08C96.66 6.18 92.06 1.38 86.96 1.38C81.96 1.38 77.26 6.18 77.26 13C77.26 19.72 81.96 24.62 86.96 24.62C92.26 24.62 96.66 20.92 96.66 13.08ZM81.26 13C81.26 8.78 83.66 5.25 86.96 5.25C90.26 5.25 92.66 8.78 92.66 13C92.66 17.19 90.26 20.75 86.96 20.75C83.66 20.75 81.26 17.19 81.26 13Z" fill="#EA4335"/>
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-20 bg-bg-light border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Section Heading with Side-by-Side Ratings Widget and CTA Button */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block">
              Patient Feedback & Ratings
            </span>
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary uppercase tracking-tight">
                Google Reviews
              </h2>
            </div>
            <div className="h-1 w-16 bg-primary rounded mt-3" />
          </div>

          {/* Right side container: Google widget & write review button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Google Ratings Widget (Maps Card Style) */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center space-x-5 max-w-sm w-full sm:w-auto">
              <div className="flex flex-col space-y-1">
                <GoogleWordmark />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Local Business Rating
                </span>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-xl text-slate-800 leading-none">4.9</span>
                  <span className="text-[10px] font-bold text-slate-400">/ 5.0</span>
                </div>
                <div className="flex text-secondary mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>

            {/* Write Review CTA Button (Google Maps Blue Button UI placed at top to prevent empty gap) */}
            <a
              href="https://g.page/r/CdmjrSsmFqU3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none w-full sm:w-auto h-12"
            >
              <Edit className="h-4 w-4 mr-1 text-white" />
              <span>Write a Google Review</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid (Google Maps UI style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Author Avatar & Info */}
                <div className="flex items-center space-x-3.5 mb-4">
                  {/* Google Style Round Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg ${rev.avatarColor}`}>
                    {rev.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                      {rev.localGuide ? 'Local Guide' : 'Google User'}
                    </span>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex text-secondary">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">•</span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
