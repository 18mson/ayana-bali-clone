'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-gray-900 font-playfair">
          Something went wrong
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. Our team has been notified.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-[#F6F3E7] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}