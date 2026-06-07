import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Counseling & Psychology in Namakkal | Siragugal Center',
  description: 'Professional counseling and psychological assessments in Namakkal. We offer IQ testing, cognitive behavioral therapy (CBT), and family counseling.',
  path: '/child-development/counseling-psychology',
});

const breadcrumbs = [
  { name: 'Child Development', href: '/child-development' },
  { name: 'Counseling Psychology' },
];

const signs = [
  'Excessive fear, anxiety, worry, or clingy behavior that restricts normal activities',
  'Frequent, unexplained emotional outbursts, irritability, or mood swings',
  'Social withdrawal — avoiding peer interaction, play dates, or family gatherings',
  'School refusal or persistent complaints of physical pain (e.g., stomach aches) on school days',
  'Struggles with self-esteem, negative self-talk, or extreme difficulty coping with changes',
];

const conditions = ['Autism & ADHD (Emotional Support)', 'Learning Disabilities (Academic stress)', 'Anxiety & Mood Disorders', 'Parent & Family Dynamics'];

export default function CounselingPsychologyPage() {
  return (
    <ServiceInternalLayout
      title="Counseling Psychology"
      boldSentence="Cognitive, emotional, and behavioral assessments with supportive therapeutic interventions for children and their families."
      breadcrumbs={breadcrumbs}
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          What is Counseling Psychology?
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Counseling Psychology at Siragugal is dedicated to helping children, adolescents, and families navigate emotional hurdles, academic stress, anxiety, and behavioral dysregulation. By using child-friendly cognitive therapies, play therapy, and structured family systems, we help children build healthy emotional resilience.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Furthermore, our clinical psychologists conduct certified developmental assessments, IQ testing, and cognitive evaluations which provide official diagnostic clarity to guide therapy and school accommodations.
        </p>
      </section>

      {/* How We Deliver Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How We Deliver Psychological Counseling at Siragugal
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-text-mid list-decimal pl-5">
          <li className="pl-2">
            <strong className="text-text-dark">Psychometric & IQ Testing:</strong> Standardized diagnostic evaluations to understand the child\'s cognitive potential and learning strengths.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Cognitive Behavioral Therapy (CBT):</strong> Helping children identify anxious thought loops and replace them with healthy coping skills.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Play & Art Therapy:</strong> Utilizing projection techniques (toys, drawings) to help younger children express hidden emotional conflicts.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Family & Caregiver Counseling:</strong> Training parents in stress management and positive behavior reinforcement strategies to support home harmony.
          </li>
        </ol>
      </section>

      {/* Signs Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Signs Your Child or Family May Benefit from Counseling
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          {signs.map((sign, index) => (
            <li key={index} className="pl-1">
              {sign}
            </li>
          ))}
        </ul>
      </section>

      {/* Who Benefits Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Who Benefits from Counseling Psychology?
        </h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {conditions.map((cond, index) => (
            <span 
              key={index} 
              className="px-3.5 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              {cond}
            </span>
          ))}
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-bg-light p-6 border-l-4 border-primary space-y-2">
        <h3 className="font-display font-extrabold text-sm md:text-base text-primary uppercase tracking-wider">
          What to Expect in Your First Session
        </h3>
        <p className="text-xs md:text-sm text-text-mid leading-relaxed">
          The intake session involves talking with parents first to understand developmental concerns and family history, followed by a warm, conversational play assessment with the child to establish comfort and trust.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
