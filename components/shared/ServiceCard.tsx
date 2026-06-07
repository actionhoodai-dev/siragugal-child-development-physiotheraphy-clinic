'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  iconName: string;
  href: string;
  imageUrl?: string;
}

export default function ServiceCard({ name, description, iconName, href, imageUrl }: ServiceCardProps) {
  const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white border border-text-dark/5 flex flex-col justify-between h-full rounded-2xl shadow-[0_8px_30px_rgba(26,26,46,0.04)] hover:shadow-[0_20px_40px_rgba(26,26,46,0.08)] transition-all duration-300 overflow-hidden"
    >
      <div>
        {imageUrl && (
          <div className="h-48 w-full overflow-hidden relative border-b border-text-dark/5">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
            {/* Float icon overlay */}
            <div className="absolute bottom-3 right-3 p-2.5 bg-white/95 text-primary rounded-xl shadow-md flex items-center justify-center">
              <Icon className="h-4 w-4" />
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          {!imageUrl && (
            <div className="inline-flex items-center justify-center p-3.5 bg-secondary/15 text-primary rounded-xl mb-6">
              <Icon className="h-6 w-6" />
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary mb-3">
            {name}
          </h3>
          <p className="text-sm md:text-base text-text-mid line-clamp-3 mb-6">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
        <Link 
          href={href} 
          className="inline-flex items-center font-bold text-sm text-primary hover:text-secondary group transition-colors focus:outline-none"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
          <Icons.ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
