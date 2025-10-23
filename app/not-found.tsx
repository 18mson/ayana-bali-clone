import Link from 'next/link'
import OptimizedBackground from '../components/OptimizedBackground'

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <OptimizedBackground
        src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
        alt="404 Background"
        overlay
        overlayColor="bg-black/60"
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-6xl md:text-8xl font-light mb-4">404</h2>
        <p className="text-xl md:text-2xl font-light mb-8">Page Not Found</p>
        <p className="text-lg mb-12 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}