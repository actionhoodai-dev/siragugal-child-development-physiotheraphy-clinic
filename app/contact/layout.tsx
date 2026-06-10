import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata({
  title: 'Contact Us | Book Consultation in Namakkal',
  description: 'Book your screening or physiotherapy appointment at Siragugal Clinic. Contact us via phone, email, WhatsApp, or our secure form.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
