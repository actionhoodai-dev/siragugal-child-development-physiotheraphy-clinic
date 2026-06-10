import SectionHeading from '@/components/shared/SectionHeading';
import { getMetadata } from '@/lib/metadata';
import { CheckCircle2, MapPin, Clock, Compass } from 'lucide-react';

export const metadata = getMetadata({
  title: 'About Us | Specialized Rehabilitation Clinic in Namakkal',
  description: 'Learn about the philosophy and science behind Siragugal Child Development & Physiotherapy Center. Discover how our team transforms lives.',
  path: '/about',
});

const principles = [
  {
    title: 'Assessment First',
    desc: 'Every child undergoes a thorough multi-domain assessment before any therapy begins to establish baseline capabilities.',
    color: 'bg-primary text-white border-primary',
  },
  {
    title: 'Goal-Oriented Plans',
    desc: 'Therapy is never generic; each plan has measurable 30-day and 90-day clinical milestones tailored to the child.',
    color: 'bg-secondary text-text-dark border-secondary',
  },
  {
    title: 'Family Education',
    desc: 'We actively train parents to continue progress at home, bridging the gap between clinical sessions.',
    color: 'bg-accent text-white border-accent',
  },
  {
    title: 'Progress Monitoring',
    desc: 'Monthly reviews ensure that the therapy plan dynamically evolves alongside the child\'s growth.',
    color: 'bg-bg-dark text-white border-bg-dark',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-light">
      
      {/* Page Header */}
      <section className="bg-primary text-white py-8 md:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="max-w-3xl text-center lg:text-left space-y-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              Who We Are
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight text-white">
              About Siragugal
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                OUR PHILOSOPHY
              </span>
              <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
                Siragugal Child Development & Physiotherapy Center was established with a singular belief: that every child, regardless of their developmental challenges, deserves access to expert, compassionate, and consistent therapeutic care.
              </p>
              <p className="text-base md:text-lg text-text-mid font-medium leading-relaxed">
                Located in the heart of Namakkal, we bridge the gap between families who need specialized support and the world-class therapies that can transform a child's life. We specialize in bringing modern, evidence-based therapy protocols to the local community, eliminating the need to travel to metro cities for elite rehabilitation.
              </p>
            </div>
            <div className="lg:col-span-4 bg-secondary rounded-2xl p-8 shadow-md">
              <h3 className="font-display font-extrabold text-xl text-text-dark uppercase tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="font-bold text-sm text-text-dark/90 leading-relaxed">
                To empower children to build vital independence and assist individuals of all ages in relieving physical discomfort, restoring structural mobility, and achieving their highest biological potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Science Behind Our Care */}
      <section className="py-16 md:py-20 bg-bg-dark text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="The Science Behind Our Care" 
            subtitle="EVIDENCE-BASED REHABILITATION METHODOLOGY" 
            light 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            
            {/* Box 1 */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 space-y-4">
              <h3 className="text-lg md:text-xl font-display font-bold text-secondary">
                What is Early Intervention and Why Does It Matter?
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Research shows that therapeutic intervention before age 6 produces significantly better outcomes for children with developmental disorders. During these formative years, high neuroplasticity allows the brain to reorganize and adapt pathways much faster in response to training.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 space-y-4">
              <h3 className="text-lg md:text-xl font-display font-bold text-secondary">
                How Multidisciplinary Therapy Works
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Development is multi-faceted. When occupational, speech, and behavioral therapists collaborate on a single, integrated care plan, treatment efficacy increases. Rather than treating isolated symptoms, our team coordinates to address the root cognitive, motor, and psychological pillars concurrently.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 space-y-4">
              <h3 className="text-lg md:text-xl font-display font-bold text-secondary">
                Parent Involvement in Pediatric Therapy
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Clinical studies confirm that children whose parents actively participate in home-based therapy exercises progress 40% faster than those who rely solely on clinical sessions. We actively involve and educate caregivers to make therapy an ongoing daily reality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="Our Clinical Approach" 
            subtitle="GUIDING PRINCIPLES OF TREATMENT" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {principles.map((pr, index) => (
              <div 
                key={index}
                className={`p-6 border border-text-dark/5 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${pr.color.replace('border-primary', 'border-primary/25').replace('border-secondary', 'border-secondary/25').replace('border-accent', 'border-accent/25').replace('border-bg-dark', 'border-bg-dark/25')}`}
              >
                <div>
                  <h3 className="text-lg font-display font-extrabold uppercase tracking-wider mb-4 border-b border-white/20 pb-2 text-inherit">
                    {pr.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Location & Accessibility */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="Find Our Clinic" 
            subtitle="LOCATION, ACCESSIBILITY, AND VISITING HOURS" 
          />

          <div className="space-y-12 mt-10">
            
            {/* Info Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Address card */}
              <a 
                href="https://www.google.com/maps/place/Siragugal+Therapy+Center/@11.2431652,78.1648462,17z/data=!3m1!4b1!4m6!3m5!1s0x3babcffb7c614db5:0x37a516262bada3d9!8m2!3d11.2431652!4d78.1648462!16s%2Fg%2F11sbpxh50r"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 cursor-pointer group"
              >
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:text-secondary transition-colors" />
                <div>
                  <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary mb-1 group-hover:text-secondary transition-colors">
                    Address
                  </h4>
                  <p className="text-sm font-bold text-text-dark leading-relaxed">
                    5/438 - A, Rajivgandhi Nagar,<br />
                    Chinna Mudhalaipatti Road,<br />
                    Murugan Kovil Back side, Salem Road,<br />
                    Namakkal – 637 001
                  </p>
                  <span className="text-[11px] text-secondary font-extrabold mt-1 inline-flex items-center gap-1 group-hover:underline">
                    Open in Google Maps →
                  </span>
                </div>
              </a>

              {/* Hours card */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary mb-1">
                    Visiting Hours
                  </h4>
                  <p className="text-sm font-bold text-text-dark leading-relaxed">
                    9:30 AM to 8:00 PM<br />
                    (Monday – Saturday)
                  </p>
                </div>
              </div>

              {/* Landmark card */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <Compass className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary mb-1">
                    Landmark
                  </h4>
                  <p className="text-sm font-bold text-text-dark leading-relaxed">
                    Behind Murugan Kovil on Salem Road — easily accessible from all areas of Namakkal.
                  </p>
                </div>
              </div>

            </div>

            {/* Full Width Map Column */}
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-xl overflow-hidden shadow-md w-full h-96 md:h-[450px]">
                <iframe
                  title="Siragugal Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2479040432945!2d78.16484627007098!3d11.243165225983294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcffb7c614db5%3A0x37a516262bada3d9!2sSiragugal%20Therapy%20Center!5e0!3m2!1sen!2sin!4v1780922014159!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/Siragugal+Therapy+Center/@11.2431652,78.1648462,17z/data=!3m1!4b1!4m6!3m5!1s0x3babcffb7c614db5:0x37a516262bada3d9!8m2!3d11.2431652!4d78.1648462!16s%2Fg%2F11sbpxh50r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn btn-secondary py-3.5 text-sm uppercase tracking-wider w-full text-center"
                aria-label="Visit Us on Google Maps"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Visit Us (Google Maps)
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
