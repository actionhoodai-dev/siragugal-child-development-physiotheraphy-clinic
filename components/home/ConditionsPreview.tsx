'use client';

const conditions = [
  { tamil: 'ஆட்டிசம்', english: 'Autism Spectrum Disorder (ASD)' },
  { tamil: 'மூளை வளர்ச்சி குறைபாடு', english: 'Intellectual Disability' },
  { tamil: 'வளர்ச்சி தாமதம்', english: 'Development Delay' },
  { tamil: 'மூளை முடக்கு வாதம்', english: 'Cerebral Palsy' },
  { tamil: 'டவுன் சின்ட்ரோம்', english: 'Down Syndrome' },
  { tamil: 'கற்றலில் குறைபாடு', english: 'Learning Disability' },
  { tamil: 'நரம்பியல் சார்ந்த பிரச்சனை', english: 'Neurological Problems' },
  { tamil: 'துறு துறு நிலை கவனக்குறைபாடு', english: 'ADHD' },
];

export default function ConditionsPreview() {
  const scrollTags = [...conditions, ...conditions, ...conditions];

  return (
    <section className="bg-bg-dark border-b-4 border-text-dark py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mb-8 text-center lg:text-left">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
          Conditions Treated
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white uppercase tracking-tight">
          Specialized Treatment for Developmental & Physical Challenges
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-2 select-none">
        <div className="animate-scroll-tag space-x-6">
          {scrollTags.map((cond, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white border-2 border-text-dark pl-4 pr-6 py-3.5 shadow-solid-secondary flex-shrink-0"
            >
              {/* Amber left border replacement (solid box element) */}
              <div className="w-1.5 h-10 bg-secondary flex-shrink-0" />
              
              <div className="flex flex-col">
                <span className="tamil-text font-bold text-sm md:text-base text-primary leading-tight">
                  {cond.tamil}
                </span>
                <span className="text-xs font-extrabold text-text-dark tracking-wide uppercase mt-0.5">
                  {cond.english}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
