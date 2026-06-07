import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Behavioral Therapy in Namakkal | Siragugal Center',
  description: 'Namakkal\'s leading behavioral therapy center. We specialize in Applied Behavior Analysis (ABA), behavior modification, and tantrums management.',
  path: '/child-development/behavioral-therapy',
});

const breadcrumbs = [
  { name: 'Child Development', href: '/child-development' },
  { name: 'Behavioral Therapy' },
];

const signs = [
  'Frequent, prolonged tantrums or severe emotional outbursts over minor changes',
  'Engaging in self-injurious behavior (e.g., head-banging, hand-biting)',
  'Aggression toward peers, siblings, parents, or teachers',
  'Inability to follow simple social rules, wait for turns, or cooperate in group play',
  'Highly repetitive and obsessive routines that trigger distress if interrupted',
];

const conditions = ['Autism Spectrum Disorder (ASD)', 'ADHD', 'Intellectual Disability'];

export default function BehavioralTherapyPage() {
  return (
    <ServiceInternalLayout
      title="Behavioral Therapy"
      boldSentence="Structured behavior modification techniques based on ABA principles to replace challenging actions with positive behaviors."
      breadcrumbs={breadcrumbs}
      imageUrl="/images/child_behavioral_therapy.png"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          What is Behavioral Therapy?
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Behavioral Therapy uses evidence-based psychological strategies to understand why challenging behaviors occur and implement plans to replace them with positive, adaptive responses. Our approach is largely rooted in Applied Behavior Analysis (ABA), which is widely recognized as the gold standard for behavioral intervention.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          At Siragugal, we focus on identifying environmental triggers that cause aggression, self-injury, or tantrums, and teach children functional communication skills so they can express their needs without resorting to challenging behaviors.
        </p>
      </section>

      {/* How We Deliver Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How We Deliver Behavioral Therapy at Siragugal
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-text-mid list-decimal pl-5">
          <li className="pl-2">
            <strong className="text-text-dark">Functional Behavior Assessment (FBA):</strong> We analyze the Antecedents, Behaviors, and Consequences (ABCs) of specific challenging habits.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Positive Reinforcement Systems:</strong> Establishing token economies or reward charts to motivate positive behavioral choices.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Functional Communication Training (FCT):</strong> Teaching children how to express verbal requests, use gestures, or point to icons rather than screaming or hitting.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Social Skills Groups:</strong> Structured peer integration sessions to practice sharing, waiting, and cooperative play under supervision.
          </li>
        </ol>
      </section>

      {/* Signs Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Signs Your Child May Need Behavioral Intervention
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
          Who Benefits from Behavioral Therapy?
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
          The therapist conducts a play-based intake session to observe your child\'s triggers and behavioral responses. We collaborate closely with parents to define target behaviors that need immediate management.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
