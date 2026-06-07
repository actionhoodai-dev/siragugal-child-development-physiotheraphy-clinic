import ServiceInternalLayout from '@/components/shared/ServiceInternalLayout';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Speech & Language Therapy in Namakkal | Siragugal Center',
  description: 'Namakkal\'s top speech therapy clinic. We treat speech delay, articulation disorders, stuttering, and communication difficulties in children and adults.',
  path: '/child-development/speech-therapy',
});

const breadcrumbs = [
  { name: 'Child Development', href: '/child-development' },
  { name: 'Speech Therapy' },
];

const signs = [
  'Not speaking single words by age 2, or simple phrases by age 3',
  'Unclear speech that is difficult for family members or strangers to understand',
  'Stuttering, stammering, or frequent repetitions of sounds/words',
  'Difficulty following simple oral directions or understanding questions (receptive language)',
  'Lack of verbal interaction, poor eye contact during communication, or social withdrawal',
];

const conditions = ['Autism Spectrum Disorder (ASD)', 'Intellectual Disability', 'Down Syndrome', 'Neurological Problems'];

export default function SpeechTherapyPage() {
  return (
    <ServiceInternalLayout
      title="Speech & Language Therapy"
      boldSentence="Improving communication, language processing, and articulation in children and adults to build expressive confidence."
      breadcrumbs={breadcrumbs}
    >
      
      {/* What is Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          What is Speech & Language Therapy?
        </h2>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          Speech and Language Therapy addresses challenges with communication, speech clarity, comprehension, and oral-motor mechanics. It targets both receptive language (the ability to understand spoken words) and expressive language (the ability to produce words to express needs, feelings, and ideas).
        </p>
        <p className="text-sm md:text-base text-text-mid leading-relaxed">
          At Siragugal, we employ evidence-based approaches to correct articulation errors, address voice/fluency disorders, expand vocabulary, and, where necessary, introduce Augmentative and Alternative Communication (AAC) methods.
        </p>
      </section>

      {/* How We Deliver Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          How We Deliver Speech Therapy at Siragugal
        </h2>
        <ol className="space-y-4 text-sm md:text-base text-text-mid list-decimal pl-5">
          <li className="pl-2">
            <strong className="text-text-dark">Speech & Language Diagnostics:</strong> We analyze oral muscle structures, phonetic repertoire, and word comprehension levels.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Articulation & Phonics Training:</strong> Target drills to correct individual sound productions and improve clear pronunciation.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">Social Pragmatics Practice:</strong> Guided peer and role-play activities to build conversational skills, turn-taking, and active listening.
          </li>
          <li className="pl-2">
            <strong className="text-text-dark">AAC Tools & Visual Supports:</strong> Implementing picture exchange systems (PECS) and speech-generating tablet apps for non-verbal children.
          </li>
        </ol>
      </section>

      {/* Signs Section */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary">
          Signs Your Child May Need Speech Therapy
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
          Who Benefits from Speech Therapy?
        </h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {conditions.map((cond, index) => (
            <span 
              key={index} 
              className="px-3.5 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              {cond}
            </span>
          ))}
        </div>
      </section>

      {/* Parents Reassurance */}
      <section className="bg-bg-light p-6 border-l-4 border-primary space-y-2">
        <h3 className="font-display font-extrabold text-sm md:text-base text-primary uppercase tracking-wider">
          What to Expect in Your First Session
        </h3>
        <p className="text-xs md:text-sm text-text-mid leading-relaxed">
          The first session is designed to make the child comfortable. Through interactive games, books, and flashcards, we evaluate how the child communicates. Parents are actively briefed on findings and immediate action steps.
        </p>
      </section>

    </ServiceInternalLayout>
  );
}
