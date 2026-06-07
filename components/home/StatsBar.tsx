'use client';

import AnimatedCounter from '../shared/AnimatedCounter';
import { Clock } from 'lucide-react';

export default function StatsBar() {
  return (
    <section className="bg-bg-dark text-white border-b-4 border-text-dark py-12 md:py-16">
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
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white/5 border border-white/10 rounded-lg">
            <span className="text-3xl md:text-4xl font-display font-extrabold text-secondary flex items-center gap-2">
              <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
              <span className="tracking-tight">9:30 - 8:00</span>
            </span>
            <span className="mt-3 text-xs md:text-sm font-semibold text-white uppercase tracking-wider leading-tight">
              Daily Availability (Mon-Sat)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
