'use client';

import Link from 'next/link';

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F3E7]">
      <div className="text-center px-6">
        <h1 
          className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-gray-900 font-playfair" 
          style={{ fontFamily: 'AimeMX, serif' }}
        >
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We&apos;re currently working on something amazing for you.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}