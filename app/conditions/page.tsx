import SectionHeading from '@/components/shared/SectionHeading';
import ConditionCard from '@/components/shared/ConditionCard';
import { getMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = getMetadata({
  title: 'Conditions Treated | Child Development & Physiotherapy Center',
  description: 'Namakkal\'s specialized care guides for Autism, ADHD, Cerebral Palsy, Down Syndrome, Learning Disabilities, and motor delays.',
  path: '/conditions',
});

const conditionsList = [
  {
    tamilName: 'ஆட்டிசம்',
    englishName: 'Autism Spectrum Disorder (ASD)',
    description: 'A developmental condition that affects how a person communicates, interacts, and behaves. Early intervention supports sensory regulation and social integration.',
    symptoms: [
      'Lack of consistent eye contact and social responsiveness',
      'Repetitive movements or words (stimming/echolalia)',
      'Delays in functional speech and language usage',
      'Difficulty understanding non-verbal social cues',
    ],
    therapies: ['Occupational Therapy', 'Speech Therapy', 'Behavioral Therapy (ABA)'],
  },
  {
    tamilName: 'மூளை வளர்ச்சி குறைபாடு',
    englishName: 'Intellectual Disability',
    description: 'Significant limitations in intellectual functioning and adaptive behavior, affecting day-to-day conceptual, social, and practical skills.',
    symptoms: [
      'Delayed motor and self-help milestones (sitting, dressing)',
      'Difficulty understanding logical relationships or solving problems',
      'Struggles with communication and understanding social rules',
    ],
    therapies: ['Special Education', 'Occupational Therapy', 'Behavioral Therapy'],
  },
  {
    tamilName: 'வளர்ச்சி தாமதம்',
    englishName: 'Development Delay',
    description: 'When a child does not reach cognitive, language, social-emotional, or motor development milestones compared to peers of the same chronological age.',
    symptoms: [
      'Late head control, sitting, crawling, or independent walking',
      'Significant delays in babbling, words, or answering questions',
      'Struggles with peer interaction and playground cooperation',
    ],
    therapies: ['Occupational Therapy', 'Physiotherapy', 'Speech Therapy'],
  },
  {
    tamilName: 'மூளை முடக்கு வாதம்',
    englishName: 'Cerebral Palsy (CP)',
    description: 'A group of neurological disorders that permanently affect body movement, muscle coordination, and posture due to early brain development damage.',
    symptoms: [
      'Muscle stiffness (spasticity) or floppy limbs (hypotonia)',
      'Asymmetrical movements (using only one side of the body)',
      'Delay in gross motor skills (standing, walking)',
      'Joint stiffness and coordination issues',
    ],
    therapies: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy'],
  },
  {
    tamilName: 'டவுன் சின்ட்ரோம்',
    englishName: 'Down Syndrome',
    description: 'A genetic condition caused by an extra copy of chromosome 21, resulting in mild to moderate developmental delays and specific physiological features.',
    symptoms: [
      'Weak muscle tone (hypotonia) at birth',
      'Slower cognitive development and verbal speech delays',
      'Joint hypermobility (excessive flexibility)',
    ],
    therapies: ['Speech Therapy', 'Occupational Therapy', 'Physiotherapy'],
  },
  {
    tamilName: 'கற்றலில் குறைபாடு',
    englishName: 'Learning Disability',
    description: 'Neurological processing difficulties that interfere with basic learning skills such as reading, writing, spelling, or mathematical calculations (e.g., Dyslexia).',
    symptoms: [
      'Frequent spelling errors, letter reversals (b vs d, p vs q)',
      'Inability to read fluently or comprehend age-appropriate texts',
      'Struggles with numbers, mathematical symbols, or arithmetic logic',
      'Poor focus and memory retention during school tasks',
    ],
    therapies: ['Special Education', 'Counseling Psychology'],
  },
  {
    tamilName: 'நரம்பியல் சார்ந்த பிரச்சனை',
    englishName: 'Neurological Problems',
    description: 'Disorders affecting the central or peripheral nervous systems in children or adults, causing mobility limits, nerve pain, or muscle weakness.',
    symptoms: [
      'Muscle weakness, hand tremors, or coordination problems',
      'Loss of sensation, burning, or radiating nerve pain in limbs',
      'Asymmetric facial weakness or walking gait changes',
    ],
    therapies: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy'],
  },
  {
    tamilName: 'துறு துறு நிலை கவனக்குறைபாடு',
    englishName: 'ADHD',
    description: 'Attention-Deficit/Hyperactivity Disorder is characterized by ongoing patterns of inattention, hyperactivity, and impulsive behaviors.',
    symptoms: [
      'Extreme difficulty focusing on details or staying on single tasks',
      'Frequent fidgeting, squirming, and inability to sit still in class',
      'Interrupting conversations and acting on impulses without caution',
    ],
    therapies: ['Behavioral Therapy', 'Occupational Therapy', 'Special Education'],
  },
];

export default function ConditionsPage() {
  return (
    <div className="bg-bg-light">
      
      {/* Header */}
      <section className="bg-primary text-white py-8 md:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="max-w-3xl text-center lg:text-left space-y-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              Clinical Scope
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight">
              Conditions We Treat
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-semibold leading-relaxed">
              Siragugal Clinic provides expert therapeutic interventions for developmental delays, childhood disorders, and physical ailments.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="Condition Profiles" 
            subtitle="EXPLORE SYMPTOMS AND APPLICABLE THERAPIES" 
          />

          <div className="mt-10">
            {conditionsList.map((cond, index) => (
              <ConditionCard 
                key={index}
                tamilName={cond.tamilName}
                englishName={cond.englishName}
                description={cond.description}
                symptoms={cond.symptoms}
                therapies={cond.therapies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-lg space-y-6">
            
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-primary border-b-2 border-secondary pb-3 uppercase tracking-tight">
              Parent's Guide: Understanding Developmental Disorders
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-text-mid leading-relaxed font-semibold">
              <div>
                <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                  What to Do When You First Suspect a Delay
                </h3>
                <p>
                  As a parent, your instincts are powerful. If you observe that your child is not meeting standard milestones—such as speaking single words by age two, sitting independently by nine months, or responding to their name—do not adopt a "wait and see" approach. The first step is to document your observations and seek professional help. Early intervention capitalization is the most critical factor in pediatric development.
                </p>
              </div>

              <div>
                <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                  How Diagnostic Assessment Works
                </h3>
                <p>
                  A diagnostic assessment is not a test your child can fail. It is a comprehensive, play-based observation of their abilities. Pediatric developmental specialists, clinical psychologists, and therapists utilize standardized checklists (like the M-CHAT) to evaluate motor coordination, speech comprehension, social reciprocity, and behavioral adaptation.
                </p>
              </div>

              <div>
                <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                  What Therapists Look For
                </h3>
                <p>
                  Therapists assess developmental domains rather than chronological ages. Occupational therapists look at sensory modulation and grip controls. Speech therapists check oral musculature and receptive vocabulary. Behavioral therapists observe the environmental functions that prompt crying, repetitive actions, or social withdrawal.
                </p>
              </div>

              <div>
                <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                  How to Choose the Right Therapy Center
                </h3>
                <p>
                  Choose a center that values multidisciplinary coordination. Children thrive when their occupational, speech, and behavioral goals are coordinated on a unified care plan. Additionally, select a center that prioritizes caregiver education; since parents spend the most time with kids, home reinforcement is the ultimate key to accelerating recovery progress.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-text-dark/10 text-center">
              <Link 
                href="/contact" 
                className="btn btn-secondary px-8 py-3.5 inline-block uppercase text-xs md:text-sm tracking-wider font-extrabold"
              >
                Request a Free Screening Call
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
