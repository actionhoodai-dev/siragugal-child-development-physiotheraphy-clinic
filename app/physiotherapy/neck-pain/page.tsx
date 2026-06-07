import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Neck Pain Physiotherapy in Namakkal | Siragugal Center',
  description: 'Specialized neck pain treatment in Namakkal. We relieve pain from cervical spondylosis, muscle spasms, and whiplash with targeted therapy.',
  path: '/physiotherapy/neck-pain',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Neck Pain' },
];

export default function NeckPainPage() {
  return (
    <ServiceInternalLayout
      title="Neck Pain Treatment"
      boldSentence="Cervical spondylosis, whiplash, muscle spasms, and postural correction therapies in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Neck Pain (Cervical Pain)
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Neck pain is a very common condition that can range from a mild dull ache to sharp, debilitating nerve irritation. It is often caused by postural dysfunction (such as "text neck" from prolonged mobile or computer use), cervical spondylosis (wear and tear of the spine joints), muscle strain, or whiplash injuries.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          When neglected, structural cervical compression can lead to radiating numbness down the arms (cervical radiculopathy), persistent tension headaches, and decreased range of neck rotation.
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Neck Pain
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Physiotherapy targets the root musculoskeletal imbalance. Manual therapy techniques, cervical traction, and therapeutic exercises release locked joints, decrease inflammation, and rebuild the deep neck flexor muscles to support your head's weight properly.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">Manual Therapy:</strong> Joint mobilization and trigger point soft tissue release.</li>
          <li><strong className="text-text-dark">Electrotherapy:</strong> Targeted TENS or ultrasound therapy to numb acute spasms.</li>
          <li><strong className="text-text-dark">Postural Ergonomic Training:</strong> Aligning desk, monitor, and seating setups.</li>
          <li><strong className="text-text-dark">Strengthening & Stretch Program:</strong> Activating deep stabilizers and stretching tight upper trapezius muscles.</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Acute muscle spasms usually resolve within 1 to 2 weeks of consistent therapy. Chronic cervical spondylosis issues or nerve compression symptoms require a structured 4 to 6-week rehabilitation program to achieve lasting pain-free outcomes.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border border-gray-200/60 rounded-xl shadow-sm">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Chin Tucks:</strong> Sit straight, pull your chin straight back (making a double chin) without tilting your head. Hold for 5 seconds. Repeat 10 times.</li>
          <li><strong>Trapezius Stretch:</strong> Gently tilt your right ear to your right shoulder, holding your left shoulder down. Hold for 20 seconds. Repeat on the other side.</li>
          <li><strong>Take Posture Breaks:</strong> Every 45 minutes of desk work, stand up and perform gentle neck rolls and shoulder shrugs.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          When to Seek Urgent Care
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          Contact a doctor or physiotherapist immediately if your neck pain is accompanied by numbness, tingling, or weakness in your arms/hands, loss of bowel/bladder control, or if it was caused by a high-impact fall or accident.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
