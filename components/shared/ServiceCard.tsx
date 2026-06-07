'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  iconName: string;
  href: string;
}

export default function ServiceCard({ name, description, iconName, href }: ServiceCardProps) {
  const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white border border-text-dark/5 p-6 md:p-8 flex flex-col justify-between h-full rounded-2xl shadow-[0_8px_30px_rgba(26,26,46,0.04)] hover:shadow-[0_20px_40px_rgba(26,26,46,0.08)] transition-all duration-300"
    >
      <div>
        <div className="inline-flex items-center justify-center p-3.5 bg-secondary/15 text-primary rounded-xl mb-6">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary mb-3">
          {name}
        </h3>
        <p className="text-sm md:text-base text-text-mid line-clamp-3 mb-6">
          {description}
        </p>
      </div>

      <Link 
        href={href} 
        className="inline-flex items-center font-bold text-sm text-primary hover:text-secondary group transition-colors focus:outline-none"
        aria-label={`Learn more about ${name}`}
      >
        Learn More
        <Icons.ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
