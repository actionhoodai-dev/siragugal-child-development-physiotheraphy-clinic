'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { 
  Phone, Mail, Clock, MapPin, MessageCircle, 
  CheckCircle, Loader2, AlertCircle 
} from 'lucide-react';
import FaqSection from '@/components/shared/FaqSection';
import SectionHeading from '@/components/shared/SectionHeading';

// Zod Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian phone number'),
  email: z.string().email('Enter a valid email address').optional().or(z.string().length(0)),
  childAge: z.string().min(1, 'Please select an age group'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  description: z.string().min(5, 'Please add a brief description of concerns'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ageOptions = [
  { label: 'Under 2 years', value: 'Under 2' },
  { label: '2 – 5 years', value: '2-5 years' },
  { label: '6 – 12 years', value: '6-12 years' },
  { label: '13 – 18 years', value: '13-18 years' },
  { label: 'Adult (Physiotherapy)', value: 'Adult' },
];

const serviceOptions = [
  'Occupational Therapy',
  'Physiotherapy',
  'Speech Therapy',
  'Special Education',
  'Counseling Psychology',
  'Behavioral Therapy',
  'Not Sure',
];

const contactFaqs = [
  {
    question: 'How quickly can I get an appointment?',
    answer: 'We typically schedule evaluations within 2–3 working days. Once you submit the contact form, our intake coordinator will contact you to confirm a date.',
  },
  {
    question: 'Is there a consultation fee?',
    answer: 'Consultation fees vary depending on the therapy domain and duration of assessment. Contact us directly at 7338833962 for detailed pricing information.',
  },
  {
    question: 'Do you offer home visits?',
    answer: 'Yes, we provide home therapy sessions for specific clinical situations (e.g., severe neurological impairments or stroke rehabilitation). Contact us to discuss options.',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      childAge: '',
      services: [],
      description: '',
    },
  });

  const selectedServices = watch('services');

  const handleCheckboxChange = (service: string) => {
    const current = [...selectedServices];
    const index = current.indexOf(service);
    if (index === -1) {
      current.push(service);
    } else {
      current.splice(index, 1);
    }
    setValue('services', current, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormValues) => {
    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      setSubmitError(validation.error.issues[0].message);
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');
    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSubmitError('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-light">
      
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center lg:text-left">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Contact Siragugal
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 font-semibold max-w-2xl leading-relaxed">
            Reach out to our Namakkal clinic today to consult with our specialized rehabilitation therapists.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% - Contact Form */}
            <div className="lg:col-span-7 bg-bg-light border border-gray-200/50 p-6 md:p-10 rounded-2xl shadow-md">
              
              <h2 className="text-2xl font-display font-extrabold text-primary mb-6 uppercase tracking-tight">
                Request an Evaluation
              </h2>

              {submitSuccess ? (
                <div className="bg-success/10 border-2 border-success p-6 text-text-dark space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                    <h3 className="font-display font-extrabold text-lg">Message Sent Successfully!</h3>
                  </div>
                  <p className="text-sm font-semibold leading-relaxed">
                    Thank you for contacting Siragugal Child Development & Physiotherapy Center. Our clinical team will reach out to you within 24 to 48 hours to confirm your consultation schedule.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-primary px-6 py-2 text-xs uppercase"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {submitError && (
                    <div className="bg-red-50 border-2 border-red-500 p-4 text-red-700 flex items-start text-sm font-bold">
                      <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      {...register('fullName')}
                      className={`w-full p-3 border border-gray-300 rounded-lg font-medium text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'bg-white'
                      }`}
                      placeholder="Enter parent or patient name"
                    />
                    {errors.fullName && (
                      <p className="text-xs font-bold text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Phone Number * (10-digit)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={`w-full p-3 border border-gray-300 rounded-lg font-medium text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'bg-white'
                      }`}
                      placeholder="e.g. 7338833962"
                    />
                    {errors.phone && (
                      <p className="text-xs font-bold text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white font-medium text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. email@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs font-bold text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Child's Age Dropdown */}
                  <div className="space-y-1">
                    <label htmlFor="childAge" className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Child's Age / Patient Bracket *
                    </label>
                    <select
                      id="childAge"
                      {...register('childAge')}
                      className={`w-full p-3 border border-gray-300 rounded-lg font-bold text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.childAge ? 'border-red-500 bg-red-50' : ''
                      }`}
                    >
                      <option value="">-- Select Age Bracket --</option>
                      {ageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.childAge && (
                      <p className="text-xs font-bold text-red-600">{errors.childAge.message}</p>
                    )}
                  </div>

                  {/* Service Required Multi-select (Checkboxes) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Service Required * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => {
                        const isChecked = selectedServices?.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleCheckboxChange(service)}
                            className={`flex items-center p-3 border rounded-lg text-left text-xs md:text-sm font-bold uppercase transition-all duration-150 ${
                              isChecked 
                                ? 'bg-primary text-white border-primary shadow-sm' 
                                : 'bg-white text-text-dark border-gray-200 hover:bg-bg-light hover:border-gray-300'
                            }`}
                          >
                            <span className={`w-4 h-4 border border-gray-300 rounded mr-3 flex items-center justify-center ${
                              isChecked ? 'bg-secondary border-secondary' : 'bg-white'
                            }`}>
                              {isChecked && <span className="w-2 h-2 bg-text-dark" />}
                            </span>
                            {service}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-xs font-bold text-red-600">{errors.services.message}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label htmlFor="description" className="block text-xs font-bold text-text-dark uppercase tracking-wider">
                      Brief Description of Clinical Concerns *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      {...register('description')}
                      className={`w-full p-3 border border-gray-300 rounded-lg font-medium text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.description ? 'border-red-500 bg-red-50' : 'bg-white'
                      }`}
                      placeholder="Please outline the issues or delays you would like addressed"
                    />
                    {errors.description && (
                      <p className="text-xs font-bold text-red-600">{errors.description.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-secondary w-full py-4 uppercase text-sm font-extrabold tracking-widest flex items-center justify-center focus:outline-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin mr-3 text-text-dark" />
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                </form>
              )}

            </div>

            {/* Right 40% - Contact Info & Maps */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Stacked Cards */}
              <div className="space-y-4">
                
                {/* MapPin */}
                <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
                      Clinic Address
                    </h4>
                    <p className="text-xs md:text-sm font-bold text-text-dark mt-1">
                      5/438, Rajivgandhi Nagar, Chinna Mudhalaipatti Road,<br />
                      Behind Murugan Kovil, Salem Road,<br />
                      Namakkal – 637 001
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
                      Call / WhatsApp
                    </h4>
                    <a 
                      href="tel:+917338833962" 
                      className="text-sm md:text-base font-extrabold text-secondary hover:underline mt-1 block"
                      aria-label="Call clinic at +917338833962"
                    >
                      +91 73388 33962
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
                      Email Address
                    </h4>
                    <a 
                      href="mailto:siragugalrehab@gmail.com" 
                      className="text-xs md:text-sm font-extrabold text-secondary hover:underline mt-1 block break-all"
                      aria-label="Send email to siragugalrehab@gmail.com"
                    >
                      siragugalrehab@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
                      Visiting Hours
                    </h4>
                    <p className="text-xs md:text-sm font-bold text-text-dark mt-1">
                      9:30 AM to 8:00 PM (Monday – Saturday)
                    </p>
                  </div>
                </div>

                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/917338833962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center btn btn-primary py-3 text-sm uppercase tracking-wider w-full text-center"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>

              </div>

              {/* Embedded Map */}
              <div className="border border-gray-100 rounded-xl overflow-hidden shadow-md w-full h-64 md:h-72">
                <iframe
                  title="Siragugal Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.869032688005!2d78.165411!3d11.218900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab070000000001%3A0x0!2zMTHCsDEzJzA4LjAiTiA3OMKwMDknNTUuNSJFOA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="Appointment FAQs" 
            subtitle="ANSWERS TO COMMONLY ASKED SCHEDULING QUESTIONS" 
          />
          <div className="mt-8">
            <FaqSection faqs={contactFaqs} />
          </div>
        </div>
      </section>

    </div>
  );
}
