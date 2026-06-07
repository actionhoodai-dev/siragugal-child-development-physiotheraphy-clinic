'use client';

import { useEffect, useRef } from 'react';
import { animateCounter } from '@/lib/animations';

interface AnimatedCounterProps {
  targetValue: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({ targetValue, label, suffix = '' }: AnimatedCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (numRef.current) {
      const id = `counter-${Math.floor(Math.random() * 1000000)}`;
      numRef.current.id = id;
      animateCounter(`#${id}`, targetValue);
    }
  }, [targetValue]);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg">
      <span className="text-4xl md:text-5xl font-display font-extrabold text-secondary flex items-center">
        <span ref={numRef}>0</span>
        {suffix && <span>{suffix}</span>}
      </span>
      <span className="mt-2 text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
