'use client';

import AnimatedCounter from '../shared/AnimatedCounter';
import { Clock } from 'lucide-react';

export default function StatsBar() {
  return (
    <section className="bg-bg-dark text-white border-b border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <AnimatedCounter 
            targetValue={500} 
            label="Children Successfully Treated" 
            suffix="+" 
          />
          
          <AnimatedCounter 
            targetValue={6} 
            label="Specialized Therapy Services" 
          />
          
          <AnimatedCounter 
            targetValue={9} 
            label="Conditions Treated" 
          />
          
          {/* Static Hours Card */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-secondary flex items-center gap-2 whitespace-nowrap">
              <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="tracking-tight">9:30 AM - 8:00 PM</span>
            </span>
            <span className="mt-3 text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider leading-tight whitespace-nowrap">
              Daily Availability (Mon-Sat)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
