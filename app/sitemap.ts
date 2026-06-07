import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siragugalrehab.com';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/child-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/child-development/occupational-therapy`, priority: 0.8 },
    { url: `${baseUrl}/child-development/speech-therapy`, priority: 0.8 },
    { url: `${baseUrl}/child-development/special-education`, priority: 0.8 },
    { url: `${baseUrl}/child-development/behavioral-therapy`, priority: 0.8 },
    { url: `${baseUrl}/child-development/counseling-psychology`, priority: 0.8 },
    { url: `${baseUrl}/physiotherapy`, priority: 0.9 },
    { url: `${baseUrl}/physiotherapy/neck-pain`, priority: 0.7 },
    { url: `${baseUrl}/physiotherapy/back-pain`, priority: 0.7 },
    { url: `${baseUrl}/physiotherapy/shoulder-pain`, priority: 0.7 },
    { url: `${baseUrl}/physiotherapy/disc-problems`, priority: 0.7 },
    { url: `${baseUrl}/physiotherapy/stroke-rehabilitation`, priority: 0.7 },
    { url: `${baseUrl}/physiotherapy/neuropathic-pain`, priority: 0.7 },
    { url: `${baseUrl}/conditions`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
  ];
}
