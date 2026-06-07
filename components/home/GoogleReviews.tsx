'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const reviews = [
  {
    author: 'Saravanan M.',
    rating: 5,
    date: '1 week ago',
    text: "Namakkal's best child development center. The occupational therapy program helped my son achieve his motor milestones. Highly professional and clean environment.",
  },
  {
    author: 'Deepika R.',
    rating: 5,
    date: '3 weeks ago',
    text: 'Highly recommended for speech therapy. The therapists are extremely patient and train parents on home plans. We saw positive changes within a few weeks.',
  },
  {
    author: 'Karthik Raja',
    rating: 5,
    date: '1 month ago',
    text: 'Excellent physiotherapy rehabilitation. My chronic shoulder stiffness was completely cured by their specialized manual exercises. Very polite and expert team.',
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAF8] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block">
              Patient Feedback & Ratings
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary uppercase tracking-tight">
              Loved by Parents & Patients
            </h2>
            <div className="h-1 w-16 bg-primary rounded mt-3" />
          </div>

          {/* Google Star Badge (Shadcn Card Style) */}
          <div className="bg-white border border-slate-200/60 rounded-xl p-5 shadow-sm flex items-center space-x-4 max-w-sm">
            {/* Google G Icon */}
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100">
              <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-display font-extrabold text-lg text-primary leading-none">4.9</span>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mt-1">
                Based on 120+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Shadcn Cards style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Author Info */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm md:text-base">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                      {rev.date}
                    </span>
                  </div>
                  {/* Review Rating Stars */}
                  <div className="flex text-secondary">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2 italic">
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

        {/* Write Review CTA Button (Shadcn Style) */}
        <div className="mt-12 text-center">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ0-T7l2xVqDsRkX3Xq4Xq4Q8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-primary/20 hover:border-primary/40 bg-white text-primary hover:bg-primary/5 inline-flex items-center space-x-2 px-6 py-3 font-semibold normal-case tracking-normal rounded-lg transition-all duration-200 shadow-sm"
          >
            <MessageSquare className="h-4 w-4 mr-2 text-primary" />
            <span>Write a Google Review</span>
          </a>
        </div>

      </div>
    </section>
  );
}
