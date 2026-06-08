import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ConditionsPreview from '@/components/home/ConditionsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GoogleReviews from '@/components/home/GoogleReviews';
import CTABanner from '@/components/home/CTABanner';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: "Namakkal's #1 Child Development & Physiotherapy Center",
  description: 'Siragugal Clinic provides specialized occupational therapy, speech therapy, behavioral therapy, special education, and physiotherapy services in Namakkal.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ConditionsPreview />
      <TestimonialsSection />
      <GoogleReviews />
      <CTABanner />
    </>
  );
}
