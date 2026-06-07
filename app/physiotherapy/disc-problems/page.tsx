import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Disc Problems Treatment in Namakkal | Siragugal Center',
  description: 'Specialized therapy for herniated disc, bulging disc, and spinal stenosis in Namakkal. Recover without surgery through mechanical traction.',
  path: '/physiotherapy/disc-problems',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Disc Problems' },
];

export default function DiscProblemsPage() {
  return (
    <ServiceInternalLayout
      title="Disc Problems Treatment"
      boldSentence="Clinical care for herniated discs, bulging discs, and spinal stenosis using mechanical spinal decompression and traction in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Spinal Disc Problems
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          The intervertebral discs act as shock absorbers between the vertebrae of your spine. Due to aging, trauma, or poor lifting postures, a disc can bulge outwards or rupture (herniate / slipped disc). This puts direct pressure on neighboring spinal nerves, causing severe localized back pain and radiating nerve pain down the arms or legs.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Spinal stenosis is a related condition where the spinal canal narrows, compressing the spinal cord and nerves, which makes walking or standing for long periods highly uncomfortable.
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Disc Conditions
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Except for severe cases requiring emergency surgery, most disc conditions respond exceptionally well to conservative physiotherapy. By using mechanical traction, spinal decompression, and McKenzie extensions, we centralize radiating pain, widen the intervertebral spaces, and relieve nerve root pressure.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">Mechanical Lumbar / Cervical Traction:</strong> Controlled mechanical pull to widen spinal disc spacing.</li>
          <li><strong className="text-text-dark">McKenzie Method Evaluation:</strong> Specific directional exercises to retract the bulged disc.</li>
          <li><strong className="text-text-dark">Core Stabilization:</strong> Building structural muscle support to prevent future slips.</li>
          <li><strong className="text-text-dark">Postural & Ergonomic Advice:</strong> Avoiding prolonged flexed positions that strain the discs.</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Disc bulges and herniations require patient compliance. Significant pain relief is typically felt within 3 to 4 weeks of starting therapy. A complete core and spinal stabilization program requires 6 to 10 weeks to ensure long-term structural healing.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border-2 border-text-dark">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Prone Lying / Elbow Props:</strong> Lie flat on your stomach. If comfortable, prop yourself up on your elbows. This tilts the pelvis and reduces pressure on the posterior disc wall. Hold for 2-3 minutes.</li>
          <li><strong>Prone Press-Ups:</strong> Lie on your stomach with hands under your shoulders. Slowly press your chest up while keeping your hips flat on the floor. Hold for 2 seconds. Perform 10 reps.</li>
          <li><strong>Avoid Forward Bending:</strong> Avoid bending forward at the waist (e.g. to tie shoes or pick items up) during acute pain flares. Bend your knees instead.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          When to Seek Urgent Care
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          Seek immediate emergency medical care if you experience sudden "drop foot" (inability to lift the front of your foot), progressive numbness or loss of sensation in your groin or saddle area, or sudden loss of bowel or bladder control.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
