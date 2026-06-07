import { Metadata } from 'next';

const BASE_URL = 'https://siragugalrehab.com';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function getMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/images/og-default.jpg',
}: MetadataProps): Metadata {
  const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;
  const fullTitle = `${title} | Siragugal Child Development & Physiotherapy Center`;

  const defaultKeywords = [
    'Siragugal Clinic',
    'Child Development Namakkal',
    'Physiotherapy Namakkal',
    'Occupational Therapy Namakkal',
    'Speech Therapy Namakkal',
    'Special Education Namakkal',
    'Behavioral Therapy Namakkal',
    'Counseling Psychology Namakkal',
    'Autism treatment Namakkal',
    'Back pain relief Namakkal',
    'Namakkal rehabilitation center',
  ];

  return {
    title: fullTitle,
    description: description,
    keywords: defaultKeywords.concat(keywords).filter((item, index, self) => self.indexOf(item) === index),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      siteName: 'Siragugal Child Development & Physiotherapy Center',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [ogImage],
    },
  };
}
