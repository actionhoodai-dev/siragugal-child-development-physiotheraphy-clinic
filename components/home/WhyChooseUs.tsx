'use client';

import SectionHeading from '../shared/SectionHeading';
import { Users, ClipboardCheck, MapPin } from 'lucide-react';

const features = [
  {
    title: 'Expert Multidisciplinary Team',
    description: 'Our therapists are trained specialists with hands-on experience across occupational, speech, and behavioral therapy domains.',
    icon: Users,
  },
  {
    title: 'Holistic Child-Centered Approach',
    description: 'We evaluate each child completely — cognitive, physical, behavioral, and emotional — before designing a personalized care plan.',
    icon: ClipboardCheck,
  },
  {
    title: 'Accessible Quality Care in Namakkal',
    description: 'Bringing therapies that were previously only available in metro cities, now accessible to families across the Namakkal district and surrounding areas.',
    icon: MapPin,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <SectionHeading 
          title="Why Choose Siragugal" 
          subtitle="OUR CLINICAL COMMITMENT" 
        />

        <div className="mt-12 space-y-16">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual / Icon Box */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="p-8 bg-primary text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-secondary" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/3 space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-primary">
                    {feat.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-mid font-semibold leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
