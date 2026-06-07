import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import FaqSection from '@/components/shared/FaqSection';
import { getMetadata } from '@/lib/metadata';
import { Activity, Brain, MessageSquare, GraduationCap, Users, HeartPulse } from 'lucide-react';

export const metadata = getMetadata({
  title: 'Child Development Therapy in Namakkal | Siragugal Center',
  description: 'Namakkal\'s premier pediatric therapy hub. We provide expert Occupational Therapy, Speech Therapy, Behavioral Therapy, and Special Education.',
  path: '/child-development',
});

const childServices = [
  {
    name: 'Occupational Therapy',
    description: 'Developing independence in daily activities through structured motor skill training and sensory integration.',
    iconName: 'Activity',
    href: '/child-development/occupational-therapy',
    imageUrl: '/images/child_occupational_therapy.png',
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
    name: 'Behavioral Therapy',
    description: 'Structured behavior modification techniques based on ABA principles for lasting positive change.',
    iconName: 'Brain',
    href: '/child-development/behavioral-therapy',
    imageUrl: '/images/child_behavioral_therapy.png',
  },
  {
    name: 'Counseling Psychology',
    description: 'Cognitive and behavioral assessments with therapeutic interventions for children and families.',
    iconName: 'Users',
    href: '/child-development/counseling-psychology',
    imageUrl: '/images/child_counseling_psychology.png',
  },
  {
    name: 'Pediatric Physiotherapy',
    description: 'Physical rehabilitation for developmental coordination disorders, cerebral palsy, and juvenile bone/joint conditions.',
    iconName: 'HeartPulse',
    href: '/physiotherapy',
    imageUrl: '/images/child_pediatric_physiotherapy.png',
  },
];

const conditions = [
  { tamil: 'ஆட்டிசம்', english: 'Autism Spectrum Disorder' },
  { tamil: 'மூளை வளர்ச்சி குறைபாடு', english: 'Intellectual Disability' },
  { tamil: 'வளர்ச்சி தாமதம்', english: 'Developmental Delay' },
  { tamil: 'மூளை முடக்கு வாதம்', english: 'Cerebral Palsy' },
  { tamil: 'டவுன் சின்ட்ரோம்', english: 'Down Syndrome' },
  { tamil: 'கற்றலில் குறைபாடு', english: 'Learning Disability' },
  { tamil: 'நரம்பியல் சார்ந்த பிரச்சனை', english: 'Neurological Problems' },
  { tamil: 'துறு துறு நிலை கவனக்குறைபாடு', english: 'ADHD' },
];

const childFaqs = [
  {
    question: 'At what age should I start therapy for my child?',
    answer: 'Early intervention yields the best results and can start as early as 6 months. If you observe deviations or delays in motor milestones, language acquisition, social responsive cues, or behavioral adaptions, it is recommended to seek assessment.',
  },
  {
    question: 'How long does each therapy session last?',
    answer: 'A standard pediatric therapy session at Siragugal is 45 minutes to 1 hour of active clinician-child interaction, followed by a 10-minute caregiver counseling session to review achievements and set home goals.',
  },
  {
    question: 'How do I know which therapy my child needs?',
    answer: 'Our multidisciplinary team conducts an intake screening and comprehensive evaluation across physical, language, behavioral, and adaptive levels to define the specific therapeutic domains required.',
  },
  {
    question: 'Can therapy help children with autism?',
    answer: 'Yes, clinical evidence shows that structured Occupational Therapy, Speech Therapy, and Applied Behavior Analysis (ABA) techniques significantly improve communication, decrease repetitive behaviors, and enhance sensory processing in children with Autism Spectrum Disorder (ASD).',
  },
  {
    question: 'Do you provide home therapy programs?',
    answer: 'Yes. Caregiver education is a core tenet of our clinical philosophy. Every child is provided a tailored home program, and we train parents to perform exercises at home to accelerate clinical progress.',
  },
];

export default function ChildDevelopmentHub() {
  return (
    <div className="bg-bg-light">
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center lg:text-left">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
            Child Development Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight max-w-4xl">
            Child Development Therapy — Unlocking Every Child's Potential
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 font-semibold max-w-2xl leading-relaxed">
            Our pediatric department coordinates occupational, speech, behavioral, and psychological therapies under one roof to support children with developmental differences.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="Specialized Pediatric Services" 
            subtitle="INTEGRATED CLINICAL SOLUTIONS" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {childServices.map((service, index) => (
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
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="Conditions We Treat" 
            subtitle="TAMIL & ENGLISH BILINGUAL PROFILES" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {conditions.map((cond, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-3"
              >
                <div className="w-1.5 h-10 bg-secondary flex-shrink-0" />
                <div>
                  <span className="tamil-text font-bold text-primary block leading-tight">{cond.tamil}</span>
                  <span className="text-xs font-bold text-text-dark uppercase mt-0.5 block">{cond.english}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="PEDIATRIC THERAPY FAQS" 
            />
          </div>
          <FaqSection faqs={childFaqs} />
        </div>
      </section>

    </div>
  );
}
