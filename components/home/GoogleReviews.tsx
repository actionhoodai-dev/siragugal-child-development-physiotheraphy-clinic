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
  <svg viewBox="0 0 272 92" className="h-6 w-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.3 81.24 25 93.5 25s22.25 9.3 22.25 22.18zm-9.74 0c0-7.62-5.7-12.87-12.51-12.87s-12.51 5.25-12.51 12.87 5.7 12.87 12.51 12.87 12.51-5.25 12.51-12.87z" fill="#EA4335"/>
    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.88 9.99-22.18 22.25-22.18s22.25 9.3 22.25 22.18zm-9.74 0c0-7.62-5.7-12.87-12.51-12.87s-12.51 5.25-12.51 12.87 5.7 12.87 12.51 12.87 12.51-5.25 12.51-12.87z" fill="#FBBC05"/>
    <path d="M209.75 26.38v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.18 7.87 7.23 0 11.35-4.47 11.35-12.87v-3.15h-.34c-2.13 2.62-6.13 4.91-11.22 4.91-10.75 0-20.75-9.33-20.75-22.01 0-12.77 10-22.18 20.75-22.18 5.08 0 9.09 2.29 11.22 4.88h.34v-3.82h9.25zm-8.82 20.92c0-7.43-4.87-12.98-11.26-12.98-6.47 0-11.72 5.55-11.72 12.98s5.25 12.87 11.72 12.87c6.39 0 11.26-5.44 11.26-12.87z" fill="#4285F4"/>
    <path d="M225 3v64h-9.5V3h9.5z" fill="#34A853"/>
    <path d="M262.71 54.49l7.56 5.04c-2.44 3.61-8.32 9.87-18.15 9.87-12.23 0-21.72-9.49-21.72-22.18 0-13.11 9.58-22.18 20.67-22.18 11.18 0 16.51 9.25 18.27 14.11l1 2.51-30.08 12.44c2.31 4.54 5.92 6.81 10.92 6.81 5.04 0 8.53-2.48 10.83-6.11zm-21.89-7.73l20.08-8.29c-1.09-2.77-4.16-4.71-7.82-4.71-4.75 0-12.39 4.24-12.26 13z" fill="#EA4335"/>
    <path d="M35 44.5h20.5c.2 1.1.3 2.4.3 3.8 0 5.8-1.59 13.89-7.64 19.95-5.92 6.06-12.77 9.25-23.16 9.25C11.37 77.5 0 60.13 0 38.75S11.37 0 35.03 0c12.94 0 22.56 5.04 29.5 11.72l-8.21 8.21c-5-4.77-11.55-8.43-21.29-8.43-16.3 0-28.78 13.19-28.78 29.5s12.48 29.5 28.78 29.5c10.42 0 16.22-4.16 20-6.19 3.03-1.51 5.04-3.61 5.88-6.81H35v-10.5z" fill="#4285F4"/>
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-20 bg-bg-light border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

          {/* Google Ratings Widget (Maps Card Style) */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center space-x-6 max-w-sm w-full md:w-auto">
            <div className="flex flex-col space-y-1.5">
              <GoogleWordmark />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Local Business Rating
              </span>
            </div>
            <div className="h-12 w-[1px] bg-slate-200" />
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-display font-extrabold text-2xl text-slate-800 leading-none">4.9</span>
                <span className="text-xs font-bold text-slate-400">/ 5.0</span>
              </div>
              <div className="flex text-secondary mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mt-1">
                120+ verified reviews
              </span>
            </div>
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

        {/* Write Review CTA Button (Google Maps Blue Button UI) */}
        <div className="mt-12 text-center">
        <a
          href="https://g.page/r/CdmjrSsmFqU3EBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
        >
          <Edit className="h-4 w-4 mr-1 text-white" />
          <span>Write a Google Review</span>
        </a>
        </div>

      </div>
    </section>
  );
}
