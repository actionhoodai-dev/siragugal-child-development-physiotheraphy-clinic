import SectionHeading from '@/components/shared/SectionHeading';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Privacy Policy | Patient Data Security',
  description: 'Understand how Siragugal Child Development & Physiotherapy Center protects and manages patient clinical history and diagnostic data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-bg-light py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-lg space-y-6">
          <SectionHeading 
            title="Privacy Policy" 
            subtitle="PATIENT DATA SECURITY AND COMPLIANCE" 
          />

          <div className="space-y-6 text-sm md:text-base text-text-mid leading-relaxed font-semibold">
            <p>
              At Siragugal Child Development & Physiotherapy Center, we prioritize the confidentiality and safety of patient records. This document outlines how clinical histories, evaluation scores, and contact information are gathered, stored, and protected.
            </p>

            <div>
              <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                1. Information Collection
              </h3>
              <p>
                We collect diagnostic records, developmental milestones history, orthopedic test scores, phone numbers, and address details necessary for defining individualized therapy plans.
              </p>
            </div>

            <div>
              <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                2. Data Protection
              </h3>
              <p>
                All patient profiles are stored securely. Access is restricted solely to the therapists and administrative staff directly handling the patient\'s care plan. No data is shared with external commercial entities.
              </p>
            </div>

            <div>
              <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                3. Caregiver Consent
              </h3>
              <p>
                For minor children, diagnostic assessments and therapeutic interventions are initiated only after explicit written consent from the parents or legal guardians.
              </p>
            </div>

            <div>
              <h3 className="text-text-dark font-display font-extrabold text-base mb-1 uppercase tracking-wide">
                4. Contact Information
              </h3>
              <p>
                If you have questions about our data security measures or wish to review your child\'s records, please email us at <strong>siragugalrehab@gmail.com</strong> or visit our Namakkal office.
              </p>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
