import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Neuropathic Pain Treatment in Namakkal | Siragugal Center',
  description: 'Relieve burning, tingling, and diabetic neuropathic pain at Namakkal\'s premier rehab center. Targeted TENS and nerve mobilization therapy.',
  path: '/physiotherapy/neuropathic-pain',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Neuropathic Pain' },
];

export default function NeuropathicPainPage() {
  return (
    <ServiceInternalLayout
      title="Neuropathic Pain Treatment"
      boldSentence="Relieving diabetic neuropathy, burning, tingling, and chronic nerve pain using TENS and nerve mobilization in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Neuropathic Pain & Diabetic Neuropathy
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Neuropathic pain is a chronic pain state caused by damage or dysfunction in the nervous system. Patients describe it as a burning, shooting, electric, or "pins and needles" sensation. A major cause is diabetic neuropathy, where prolonged high blood sugar damages delicate nerve fibers, typically starting in the feet and hands.
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          This condition can also result in nerve sensitivity (allodynia, where even a light touch feels painful) or a complete loss of sensation, which puts patients at high risk of undetected injuries or ulcers.
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Neuropathic Pain
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Physiotherapy helps modulate pain signals and restore nerve health. We use Transcutaneous Electrical Nerve Stimulation (TENS) to block pain signals from reaching the brain, nerve mobilization (flossing) to restore movement within nerve pathways, and desensitization techniques to calm overactive nerve endings.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">TENS Therapy:</strong> Micro-currents to block pain transmission pathways.</li>
          <li><strong className="text-text-dark">Nerve Mobilization:</strong> Gentle glide exercises to release trapped nerves from adjacent tissue.</li>
          <li><strong className="text-text-dark">Tactile Desensitization:</strong> Exposing hypersensitive areas to various textures to normalize sensation.</li>
          <li><strong className="text-text-dark">Nutritional & Lifestyle Guidance:</strong> Advising on diet and vitamins (B-complex) for nerve health.</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Nerve healing is a gradual process. While TENS therapy offers immediate temporary relief from burning sensations, significant reductions in chronic nerve pain and improvements in functional sensation require 6 to 12 weeks of structured therapy.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border-2 border-text-dark">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Sciatic Nerve Flossing:</strong> Sit on a chair. Slouch your back. Straighten one leg while looking up towards the ceiling. Then, bend your knee while looking down. Move between these two positions gently 10 times. Do not push into sharp pain.</li>
          <li><strong>Daily Foot Inspections:</strong> Inspect the bottom of your feet daily for cuts, blisters, or redness, especially if you have reduced sensation from diabetes.</li>
          <li><strong>Gentle Aerobic Exercise:</strong> Walking 20-30 minutes daily improves blood circulation, which helps deliver essential nutrients to damaged peripheral nerves.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          When to Seek Urgent Care
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          If you have diabetes and notice an open sore, cut, blister, or ulcer on your foot that is not healing or looks red and inflamed, see a podiatrist or medical specialist immediately. Neglecting neuropathic foot ulcers is a leading cause of severe infections.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
