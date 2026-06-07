import SectionHeading from '@/components/shared/SectionHeading';
import Link from 'next/link';
import { getMetadata } from '@/lib/metadata';
import { 
  Flame, Accessibility, RotateCw, Footprints, 
  Disc, Zap, User, Brain, Activity, Clock 
} from 'lucide-react';

export const metadata = getMetadata({
  title: 'Expert Physiotherapy in Namakkal | Siragugal Center',
  description: 'Evidence-based physical rehabilitation in Namakkal. We treat neck pain, back pain, shoulder pain, disc problems, stroke, and neuropathic pain.',
  path: '/physiotherapy',
});

const treatments = [
  { tamil: 'கமுத்து வலி', english: 'Neck Pain', icon: Flame, href: '/physiotherapy/neck-pain', detail: true },
  { tamil: 'முதுகு வலி', english: 'Back Pain', icon: Accessibility, href: '/physiotherapy/back-pain', detail: true },
  { tamil: 'தோள்பட்டை வலி', english: 'Shoulder Pain', icon: RotateCw, href: '/physiotherapy/shoulder-pain', detail: true },
  { tamil: 'குதிகால் வலி', english: 'Heel Pain', icon: Footprints, href: '/contact', detail: false },
  { tamil: 'டிஸ்க் பிரச்சனை', english: 'Disc Problems', icon: Disc, href: '/physiotherapy/disc-problems', detail: true },
  { tamil: 'நரம்பு தளர்ச்சி', english: 'Nerve Weakness', icon: Zap, href: '/contact', detail: false },
  { tamil: 'முகவாதம்', english: 'Facial Paralysis', icon: User, href: '/contact', detail: false },
  { tamil: 'பக்கவாதம்', english: 'Stroke / Paralysis', icon: Brain, href: '/physiotherapy/stroke-rehabilitation', detail: true },
  { tamil: 'நியூரோபதி வலி', english: 'Neuropathic Pain', icon: Activity, href: '/physiotherapy/neuropathic-pain', detail: true },
];

export default function PhysiotherapyHub() {
  return (
    <div className="bg-bg-light">
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="max-w-3xl text-center lg:text-left space-y-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              Physiotherapy Department
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight text-white">
              Expert Physiotherapy in Namakkal — Pain Relief, Rehabilitation, and Recovery
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-semibold leading-relaxed">
              Our physiotherapy department offers evidence-based treatment for musculoskeletal, neurological, and sports injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                DEPARTMENT OVERVIEW
              </span>
              <p className="text-lg md:text-xl font-bold text-primary leading-relaxed">
                Using manual therapy, therapeutic exercises, electrotherapy, and modern rehabilitation techniques, we help patients regain mobility, reduce pain, and return to their daily lives.
              </p>
              <p className="text-sm md:text-base text-text-mid font-medium leading-relaxed">
                Our approach combines clinical expertise with state-of-the-art equipment to treat both acute pain issues and long-term movement limitations. Every patient receives a comprehensive biomechanical evaluation prior to receiving a customized therapy plan.
              </p>
            </div>
            
            {/* Visiting Hours Callout */}
            <div className="lg:col-span-4 bg-bg-dark text-white border border-white/5 p-8 rounded-2xl shadow-lg flex items-start gap-4">
              <Clock className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
                  Visiting Hours
                </h3>
                <p className="text-secondary font-bold text-sm mt-1">
                  9:30 AM to 8:00 PM
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Monday – Saturday Daily Availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid Section */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeading 
            title="Conditions We Treat" 
            subtitle="OUR COMPREHENSIVE PHYSIOTHERAPY SERVICES" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {treatments.map((tr, index) => {
              const Icon = tr.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="inline-flex items-center justify-center p-2.5 bg-secondary/15 text-primary rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="tamil-text font-bold text-lg text-primary leading-tight">
                      {tr.tamil}
                    </h3>
                    <h4 className="text-sm font-extrabold text-text-dark uppercase tracking-wider mt-1">
                      {tr.english}
                    </h4>
                    <p className="text-xs text-text-mid font-semibold mt-3">
                      Professional physical diagnosis and targeted clinical relief for {tr.english.toLowerCase()} conditions at our Namakkal clinic.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-text-dark/5">
                    {tr.detail ? (
                      <Link 
                        href={tr.href} 
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-secondary focus:outline-none"
                      >
                        View Treatment Protocol →
                      </Link>
                    ) : (
                      <Link 
                        href={tr.href} 
                        className="inline-flex items-center text-xs font-bold text-text-mid hover:text-primary focus:outline-none"
                      >
                        Request Consultation →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-secondary text-text-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-tight">
              Ready to recover your mobility?
            </h2>
            <p className="font-bold text-sm md:text-base">
              Book your physiotherapy appointment with our specialists in Namakkal today.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="btn btn-primary w-full md:w-auto px-6 py-4 uppercase text-xs sm:text-sm tracking-wider font-extrabold text-center bg-primary text-white focus:outline-none"
          >
            Book Your Physiotherapy Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
