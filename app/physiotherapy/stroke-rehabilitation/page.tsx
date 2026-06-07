import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Stroke Rehabilitation in Namakkal | Siragugal Center',
  description: 'Namakkal\'s top neurological rehabilitation service. We provide specialized gait training, hemiplegia care, and neuroplasticity stroke recovery.',
  path: '/physiotherapy/stroke-rehabilitation',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Stroke Rehabilitation' },
];

export default function StrokeRehabilitationPage() {
  return (
    <ServiceInternalLayout
      title="Stroke & Neuro Rehabilitation"
      boldSentence="Specialized clinical care for hemiplegia, gait training, and neuroplasticity-based stroke recovery in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Stroke & Neurological Injury
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          A stroke occurs when blood flow to a part of the brain is interrupted or reduced, depriving brain tissue of oxygen. This can lead to hemiplegia (weakness or paralysis on one side of the body), loss of balance, muscle spasticity, coordination difficulties, and gait (walking) abnormalities.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Neurological rehabilitation is essential to re-teach the brain how to coordinate movements, capitalizing on the brain's inherent ability to rewire neural pathways (neuroplasticity).
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Stroke Recovery
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Neurological physiotherapy is critical to stimulate motor learning. Through repetitive, task-specific training, gait correction, balance drills, and muscle tone management, we help stroke survivors regain independence in eating, standing, walking, and daily self-care tasks.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">Proprioceptive Neuromuscular Facilitation (PNF):</strong> Manual guidance to stimulate weak muscles.</li>
          <li><strong className="text-text-dark">Gait Training:</strong> Correcting walking patterns using parallel bars, mirrors, and foot markers.</li>
          <li><strong className="text-text-dark">Spasticity Management:</strong> Passive stretching and electrical stimulation to relax hyperactive muscles.</li>
          <li><strong className="text-text-dark">Functional Task Training:</strong> Practice transfers (bed to chair, chair to standing).</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          The fastest rate of neurological recovery occurs in the first 3 to 6 months post-stroke. However, functional improvements can continue for years. A structured rehabilitation program at Siragugal spans 3 to 6 months depending on the stroke severity.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border border-gray-200/60 rounded-xl shadow-sm">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Ankle Pumps:</strong> Sitting or lying down, bend your ankles up towards you, then point them down. Perform 20 times to promote circulation and prevent stiffness.</li>
          <li><strong>Sit-to-Stands:</strong> Sit on a sturdy chair. Lean forward slightly and press through your heels to stand up. Slowly lower yourself back down. Perform 10 repetitions with assistance if needed.</li>
          <li><strong>Mirror Therapy:</strong> Watch your unaffected hand/leg perform movements in a mirror. This visual feedback triggers motor areas in the brain to facilitate movement on the weak side.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          FAST Stroke Warning Signs
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          If you suspect someone is having a stroke, act <strong>FAST</strong>: <br />
          <strong>F (Face):</strong> Ask them to smile. Does one side of the face droop? <br />
          <strong>A (Arms):</strong> Ask them to raise both arms. Does one drift downward? <br />
          <strong>S (Speech):</strong> Ask them to repeat a simple phrase. Is their speech slurred? <br />
          <strong>T (Time):</strong> Time is critical. Call emergency services immediately.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
