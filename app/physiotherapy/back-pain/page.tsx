import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Back Pain Physiotherapy in Namakkal | Siragugal Center',
  description: 'Relieve back pain and sciatica at Namakkal\'s premier physiotherapy clinic. We provide core strengthening, manual therapy, and lumbar strain care.',
  path: '/physiotherapy/back-pain',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Back Pain' },
];

export default function BackPainPage() {
  return (
    <ServiceInternalLayout
      title="Back Pain Treatment"
      boldSentence="Relieving lumbar strain, sciatica, and posture-related lower back pain through core stabilization in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Back Pain & Sciatica
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Lower back pain is a leading cause of activity limitation globally. It can stem from a variety of factors: poor core stability, lumbar muscle strain from improper lifting, spinal disc degeneration, or nerve root compression.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Sciatica is a specific condition where a herniated disc or muscle spasm presses on the sciatic nerve, triggering radiating electric-like pain, burning, or tingling down the buttocks and leg.
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Back Pain
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Physical rehabilitation is the primary recommended treatment for lower back pain. We focus on restoring mobility in the lumbar vertebrae and pelvis, relieving compression off nerve paths, and strengthening the core "muscular corset" to shield your spine from daily loads.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">Manual Decompression & Mobilization:</strong> Relieving facet joint locks.</li>
          <li><strong className="text-text-dark">Core Stabilization Training:</strong> Activating the transverse abdominis and multifidus muscles.</li>
          <li><strong className="text-text-dark">Therapeutic Modalities:</strong> Lumbar traction, TENS, or heating pads to relax spasms.</li>
          <li><strong className="text-text-dark">Lifting Mechanics Re-education:</strong> Proper squats and postures to safely handle daily weights.</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Simple mechanical lumbar strains respond well and heal within 2 to 3 weeks. Radiating nerve pain (sciatica) or disc herniation requires a comprehensive, structured program spanning 6 to 8 weeks.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border border-gray-200/60 rounded-xl shadow-sm">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Cat-Cow Stretch:</strong> On hands and knees, slowly arch your back towards the ceiling, then let your belly sink towards the floor. Perform 10 repetitions slowly.</li>
          <li><strong>Bird-Dog Exercise:</strong> On hands and knees, extend your right arm forward and left leg backward. Hold for 3 seconds. Alternate sides. Perform 10 reps total.</li>
          <li><strong>Pelvic Tilts:</strong> Lie on your back with knees bent. Flatten your back against the floor by tightening your lower abdominal muscles. Hold for 5 seconds. Repeat 10 times.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          When to Seek Urgent Care
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          Seek immediate emergency medical attention if your back pain is accompanied by loss of bowel or bladder control (Cauda Equina Syndrome), progressive weakness in both legs, numbness in the saddle area (inner thighs/groin), or if the pain is constant and wakes you up at night.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
