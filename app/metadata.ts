import { Metadata, Viewport } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

const defaultOpenGraph: OpenGraph = {
  type: 'website',
  siteName: 'AYANA BALI | RIMBA',
  title: 'AYANA BALI | RIMBA - Luxury Resort in Bali',
  description: 'Experience luxury and tranquility at AYANA BALI | RIMBA. Our resort offers world-class accommodations, dining, and amenities in a stunning tropical setting.',
  images: [{
    url: 'https://images.unsplash.com/photo-1602455891694-02f0fc9facba',
    width: 1200,
    height: 630,
    alt: 'AYANA BALI | RIMBA',
  }],
};

export const defaultMetadata: Metadata = {
  title: {
    default: 'AYANA BALI | RIMBA - Luxury Resort in Bali',
    template: '%s | AYANA BALI | RIMBA',
  },
  description: 'Experience luxury and tranquility at AYANA BALI | RIMBA. Our resort offers world-class accommodations, dining, and amenities in a stunning tropical setting.',
  applicationName: 'AYANA BALI | RIMBA',
  authors: [{ name: 'AYANA BALI' }],
  generator: 'Next.js',
  keywords: ['luxury resort', 'bali resort', 'ayana bali', 'rimba', 'luxury hotel', 'bali luxury accommodation'],
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: defaultOpenGraph,
  twitter: {
    card: 'summary_large_image',
    title: 'AYANA BALI | RIMBA - Luxury Resort in Bali',
    description: 'Experience luxury and tranquility at AYANA BALI | RIMBA',
    images: ['https://images.unsplash.com/photo-1602455891694-02f0fc9facba'],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#115e59', // teal-800
  colorScheme: 'light',
};

export function generateMetadata(title: string, description?: string): Metadata {
  return {
    ...defaultMetadata,
    title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultOpenGraph,
      title,
      description: description || defaultOpenGraph.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description || defaultMetadata.twitter?.description,
    },
  };
}