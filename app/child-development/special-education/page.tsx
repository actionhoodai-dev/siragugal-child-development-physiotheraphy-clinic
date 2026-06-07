import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Special Education in Namakkal | Siragugal Center',
  description: 'Namakkal\'s top special education services. We provide customized educational strategies, academic remediation, and Individualized Education Plans (IEPs).',
  path: '/child-development/special-education',
});

const breadcrumbs = [
  { name: 'Child Development', href: '/child-development' },
  { name: 'Special Education' },
];

const signs = [
  'Persistent reading difficulties, letter reversals (e.g., confusing b and d), or word skipping',
  'Struggles with basic math concepts, numbers sequences, or arithmetic operations',
  'Inability to follow multi-step classroom instructions or stay on task',
  'Extremely short attention span and high distractibility during learning hours',
  'Severe stress, anxiety, or emotional outbursts related to schoolwork or homework',
];

const conditions = ['Learning Disability (Dyslexia, Dysgraphia, Dyscalculia)', 'ADHD', 'Intellectual Disability'];

export default function SpecialEducationPage() {
  return (
    <ServiceInternalLayout
      title="Special Education Services"
      boldSentence="Customized educational strategies and multisensory learning for children with learning differences and developmental delays."
      breadcrumbs={breadcrumbs}
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          What is Special Education?
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Special Education is a specialized branch of teaching designed to meet the unique learning needs of children with cognitive, developmental, or learning differences. Rather than fitting the child into a rigid school curriculum, we modify teaching methodologies to align with how the child's brain naturally processes information.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          At Siragugal, we create custom Individualized Education Plans (IEPs) for children with learning disabilities (like Dyslexia, Dysgraphia, and Dyscalculia), ADHD, and cognitive delays, helping them bridge academic gaps and integrate successfully into regular classrooms.
        </p>
      </section>

      {/* How We Deliver Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How We Deliver Special Education at Siragugal
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-text-mid list-decimal pl-5">
          <li className="pl-2">
            <strong className="text-text-dark">Educational Assessment:</strong> Identifying the child's specific academic challenges, reading/math levels, and memory retention spans.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">IEP Formulation:</strong> Writing a structured Individualized Education Plan outlining detailed 30-day learning goals.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Multisensory Learning:</strong> Using visual, auditory, and tactile aids (e.g., sand tracing, colored blocks, phonics cards) to teach concepts.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Academic Remediation:</strong> Targeted coaching in reading phonetics, handwriting, sentence formation, and mathematical logic.
          </li>
        </ol>
      </section>

      {/* Signs Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Signs Your Child May Need Special Education Support
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
          Who Benefits from Special Education?
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
          We perform a soft diagnostic review of the child's academic capabilities in a non-stressful, collaborative manner. We identify their learning style (visual, auditory, or kinesthetic) and establish a clear plan forward.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
