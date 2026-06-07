'use client';

import SectionHeading from '../shared/SectionHeading';
import ServiceCard from '../shared/ServiceCard';
import MobileCarousel from '../shared/MobileCarousel';
import { Activity, Brain, MessageSquare, GraduationCap, Users, HeartPulse } from 'lucide-react';

const services = [
  {
    name: 'Occupational Therapy',
    description: 'Developing independence in daily activities through structured motor skill training and sensory integration.',
    iconName: 'Activity',
    href: '/child-development/occupational-therapy',
    imageUrl: '/images/child_occupational_therapy.png',
  },
  {
    name: 'Physiotherapy',
    description: 'Evidence-based physical rehabilitation for musculoskeletal, neurological, and pediatric conditions.',
    iconName: 'HeartPulse',
    href: '/physiotherapy',
    imageUrl: '/images/child_pediatric_physiotherapy.png',
  },
  {
    name: 'Speech Therapy',
    description: 'Improving communication, language processing, and articulation in children and adults.',
    iconName: 'MessageSquare',
    href: '/child-development/speech-therapy',
    imageUrl: '/images/child_speech_therapy.png',
  },
  {
    name: 'Special Education',
    description: 'Customized educational strategies for children with learning differences and developmental delays.',
    iconName: 'GraduationCap',
    href: '/child-development/special-education',
    imageUrl: '/images/child_special_education.png',
  },
  {
    name: 'Counseling Psychology',
    description: 'Cognitive and behavioral assessments with therapeutic interventions for children and families.',
    iconName: 'Users',
    href: '/child-development/counseling-psychology',
    imageUrl: '/images/child_counseling_psychology.png',
  },
  {
    name: 'Behavioral Therapy',
    description: 'Structured behavior modification techniques based on ABA principles for lasting positive change.',
    iconName: 'Brain',
    href: '/child-development/behavioral-therapy',
    imageUrl: '/images/child_behavioral_therapy.png',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <SectionHeading 
          title="Comprehensive Care Under One Roof" 
          subtitle="OUR CORE THERAPIES" 
        />
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              name={service.name}
              description={service.description}
              iconName={service.iconName}
              href={service.href}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="block md:hidden mt-8">
          <MobileCarousel>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                name={service.name}
                description={service.description}
                iconName={service.iconName}
                href={service.href}
                imageUrl={service.imageUrl}
              />
            ))}
          </MobileCarousel>
        </div>

      </div>
    </section>
  );
}
