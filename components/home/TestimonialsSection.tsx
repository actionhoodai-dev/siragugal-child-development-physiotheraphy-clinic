'use client';

import SectionHeading from '../shared/SectionHeading';
import MobileCarousel from '../shared/MobileCarousel';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Senthil Kumar',
    location: 'Namakkal',
    text: 'Our son had significant speech delays and motor issues. After 6 months of occupational and speech therapy at Siragugal, he is now communicating confidently. The therapists are incredibly patient and dedicated.',
    condition: 'Development Delay & Speech Support',
  },
  {
    name: 'Priya R.',
    location: 'Rasipuram',
    text: 'I visited Siragugal for severe, chronic lower back pain. Their targeted physiotherapy exercise plan and manual therapy sessions gave me absolute relief in just 4 weeks. Highly recommended!',
    condition: 'Chronic Back Pain',
  },
  {
    name: 'Rajesh K.',
    location: 'Tiruchengode',
    text: 'Exceptional behavioral therapy center. We saw dramatic positive improvements in our daughter\'s social interactions and academic focus. The multidisciplinary approach under one roof is highly effective.',
    condition: 'ADHD Management',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b-4 border-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <SectionHeading 
          title="Patient Success Stories" 
          subtitle="TESTIMONIALS FROM FAMILIES WE SUPPORT" 
        />

        {/* Desktop View (3-column Grid) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((test, index) => (
            <TestimonialCard key={index} testimonial={test} />
          ))}
        </div>

        {/* Mobile View (Embla Carousel) */}
        <div className="block md:hidden mt-8">
          <MobileCarousel>
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} testimonial={test} />
            ))}
          </MobileCarousel>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-bg-light border-2 border-text-dark p-6 md:p-8 flex flex-col justify-between h-full shadow-solid"
    >
      <div className="space-y-4">
        {/* Rating Stars & Quote Icon */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
            ))}
          </div>
          <MessageSquareQuote className="h-6 w-6 text-accent/50" />
        </div>

        {/* Text */}
        <p className="text-sm md:text-base text-text-mid font-medium leading-relaxed italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author details */}
      <div className="mt-8 pt-4 border-t border-text-dark/10 flex justify-between items-end">
        <div>
          <span className="block font-display font-extrabold text-primary text-sm md:text-base">
            {testimonial.name}
          </span>
          <span className="block text-[10px] md:text-xs text-text-mid font-semibold uppercase tracking-wider">
            {testimonial.location}
          </span>
        </div>
        <span className="px-2.5 py-1 bg-secondary text-text-dark border border-text-dark text-[10px] font-extrabold uppercase tracking-wider">
          {testimonial.condition}
        </span>
      </div>
    </motion.div>
  );
}
