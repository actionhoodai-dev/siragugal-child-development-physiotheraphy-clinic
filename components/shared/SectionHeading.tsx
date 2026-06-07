'use client';

import { useEffect } from 'react';
import { animateSectionHeading } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  useEffect(() => {
    animateSectionHeading('.clip-wipe-heading');
  }, []);

  return (
    <div className="mb-10 space-y-2">
      <h2 
        className={`clip-wipe-heading text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg font-semibold ${
          light ? 'text-secondary' : 'text-accent'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
