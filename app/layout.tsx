import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/layout/LenisProvider';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import PageLoader from '@/components/shared/PageLoader';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  variable: '--font-noto-tamil',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Siragugal Child Development & Physiotherapy Center | Namakkal',
  description: 'Namakkal\'s #1 center for pediatric therapy and physical rehabilitation. High-quality occupational, speech, behavioral therapy & physiotherapy.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${notoTamil.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Siragugal Child Development & Physiotherapy Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5/438 - A, Rajivgandhi Nagar, Chinna Mudhalaipatti Road, Murugan Kovil Back side, Salem Road",
                "addressLocality": "Namakkal",
                "postalCode": "637001",
                "addressCountry": "IN"
              },
              "telephone": "+917338833962",
              "email": "siragugalrehab@gmail.com",
              "openingHours": "Mo-Sa 09:30-20:00",
              "url": "https://siragugalrehab.com",
              "medicalSpecialty": ["Physiotherapy", "Occupational Therapy", "Speech Therapy", "Behavioral Therapy"]
            }),
          }}
        />
      </head>
      <body className="font-body antialiased bg-bg-light text-text-dark min-h-screen flex flex-col">
        <PageLoader />
        <ScrollProgress />
        <LenisProvider>
          <Navbar />
          <main className="flex-grow pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
