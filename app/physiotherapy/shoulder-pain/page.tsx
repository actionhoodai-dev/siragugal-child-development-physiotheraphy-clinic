import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Shoulder Pain Physiotherapy in Namakkal | Siragugal Center',
  description: 'Relieve frozen shoulder and rotator cuff injuries at Namakkal\'s premier rehab center. Get expert joint mobilization and range of motion therapy.',
  path: '/physiotherapy/shoulder-pain',
});

const breadcrumbs = [
  { name: 'Physiotherapy', href: '/physiotherapy' },
  { name: 'Shoulder Pain' },
];

export default function ShoulderPainPage() {
  return (
    <ServiceInternalLayout
      title="Shoulder Pain Treatment"
      boldSentence="Effective physical rehabilitation for rotator cuff injuries, frozen shoulder, and impingement syndrome in Namakkal."
      breadcrumbs={breadcrumbs}
      ctaText="Book Your Appointment"
      imageUrl="/images/child_pediatric_physiotherapy.png"
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Understanding Shoulder Pain & Frozen Shoulder
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          The shoulder is a highly mobile ball-and-socket joint, making it susceptible to complex injuries. Common causes of shoulder discomfort include rotator cuff tears or tendinitis (muscle strain), shoulder impingement (pinched tendons when raising the arm), and adhesive capsulitis, commonly known as "frozen shoulder."
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Frozen shoulder causes progressive stiffness and pain that worsens at night, severely limiting the ability to reach overhead, comb hair, or reach behind the back.
        </p>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How Physiotherapy Helps Shoulder Pain
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Physiotherapy restores joint biomechanics. We use manual joint mobilization to stretch tight capsule fibers, progressive stretching to reclaim lost range of motion (ROM), and targeted strengthening of the scapular stabilizers and rotator cuff to ensure pain-free movement.
        </p>
      </section>

      {/* Our Treatment Protocol */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Our Treatment Protocol at Siragugal
        </h2>
        <ul className="space-y-2 text-sm text-text-mid list-disc pl-5">
          <li><strong className="text-text-dark">Passive Joint Mobilization:</strong> Gentle manual glide techniques to stretch the shoulder capsule.</li>
          <li><strong className="text-text-dark">Electrotherapy / Ultrasound:</strong> Boosting blood flow and tissue healing around inflamed tendons.</li>
          <li><strong className="text-text-dark">Scapular Stability Training:</strong> Re-training shoulder blade muscles (serratus anterior, rhomboids) to move in sync.</li>
          <li><strong className="text-text-dark">Theraband Exercises:</strong> Resisted rotation drills to build tendon durability.</li>
        </ul>
      </section>

      {/* Recovery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Expected Recovery Timeline
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Rotator cuff tendinitis or mild impingement can improve in 3 to 4 weeks. Frozen shoulder runs in phases and typically requires 6 to 12 weeks of consistent, specialized physical therapy to fully restore joint range.
        </p>
      </section>

      {/* Home Exercises (SEO Gold) */}
      <section className="space-y-4 bg-bg-light p-6 border border-gray-200/60 rounded-xl shadow-sm">
        <h2 className="text-lg md:text-xl font-display font-extrabold text-primary">
          Home Exercises & Care Tips
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-text-mid list-decimal pl-5 font-medium">
          <li><strong>Codman Pendulum Swings:</strong> Lean forward supporting yourself on a table. Let your painful arm hang loose. Swing it gently in small circles. Perform for 2 minutes.</li>
          <li><strong>Towel Stretch:</strong> Hold a towel behind your back with both hands. Use your good arm to gently pull the painful arm upwards to stretch the shoulder. Hold for 15 seconds. Repeat 10 times.</li>
          <li><strong>Finger Wall Crawl:</strong> Face a wall. Use your fingers to slowly "walk" up the wall as high as comfortable. Hold for 5 seconds. Repeat 10 times.</li>
        </ul>
      </section>

      {/* Urgency Callout */}
      <section className="bg-secondary/15 p-5 border-l-4 border-secondary space-y-2 text-text-dark">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
          When to See a Specialist Urgently
        </h3>
        <p className="text-xs md:text-sm leading-relaxed">
          Seek immediate medical attention if you experience sudden, severe shoulder pain accompanied by chest tightness, shortness of breath, or sweating, as this can be a sign of a cardiac event. Also, seek help if the shoulder joint looks visibly deformed or if you cannot move your arm at all after a fall.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
