import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Occupational Therapy in Namakkal | Siragugal Center',
  description: 'Namakkal\'s premier occupational therapy service. We help children improve fine motor skills, sensory processing, and independent daily self-care.',
  path: '/child-development/occupational-therapy',
});

const breadcrumbs = [
  { name: 'Child Development', href: '/child-development' },
  { name: 'Occupational Therapy' },
];

const signs = [
  'Difficulty holding pencils, crayons, or eating utensils properly',
  'Hypersensitivity or hyposensitivity to textures, sounds, lights, or touch',
  'Inability to perform self-care tasks (e.g., buttoning clothes, tying shoes, brushing teeth)',
  'Poor handwriting, structural coordination, and general fine motor skills',
  'Difficulty maintaining posture or balance during standard desk tasks',
];

const conditions = ['Autism Spectrum Disorder (ASD)', 'Cerebral Palsy (CP)', 'Developmental Delay', 'ADHD'];

export default function OccupationalTherapyPage() {
  return (
    <ServiceInternalLayout
      title="Occupational Therapy (OT)"
      boldSentence="Developing independence in daily activities through structured motor skill training, adaptive techniques, and sensory integration."
      breadcrumbs={breadcrumbs}
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          What is Occupational Therapy?
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Occupational Therapy (OT) helps children build the physical, cognitive, and sensory skills needed to perform everyday tasks (or "occupations") independently. For a child, these occupations include playing, learning, socializing, and self-care tasks like dressing, eating, and writing.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          At Siragugal, our certified occupational therapists evaluate the child's developmental age compared to chronological milestones, identifying gaps in fine motor control, bilateral coordination, and sensory processing before designing custom corrective training pathways.
        </p>
      </section>

      {/* How We Deliver Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How We Deliver Occupational Therapy at Siragugal
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-text-mid list-decimal pl-5">
          <li className="pl-2">
            <strong className="text-text-dark">Comprehensive Intake Assessment:</strong> We evaluate the child's sensory profile, motor planning capabilities, and muscle tone.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Sensory Integration Therapy:</strong> We utilize specialized swings, textured pathways, and deep-pressure techniques inside our customized therapy room to regulate sensory processing.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Fine Motor & Hand-Eye Training:</strong> Focuses on grip strengthening, finger dexterity, pencil grasp, and manipulative play.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Activities of Daily Living (ADL) Training:</strong> Structured simulations to teach buttoning, shoe-tying, grooming, and independent feeding.
          </li>
        </ol>
      </section>

      {/* Signs Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Signs Your Child May Need Occupational Therapy
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
          Who Benefits from Occupational Therapy?
        </h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {conditions.map((cond, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-bg-light border-2 border-text-dark text-xs font-bold uppercase tracking-wider text-text-dark"
            >
              {cond}
            </span>
          ))}
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-bg-light p-6 border-l-4 border-primary space-y-2">
        <h3 className="font-display font-extrabold text-sm md:text-base text-primary uppercase tracking-wider">
          What to Expect in Your First Session
        </h3>
        <p className="text-xs md:text-sm text-text-mid leading-relaxed">
          Your child's first visit is a relaxed, play-based assessment. We observe how they interact with toys, move, and respond to sensory triggers. We discuss medical history and parent goals before formulating a treatment strategy.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
