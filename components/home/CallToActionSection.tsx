import React from 'react';
import Link from 'next/link';

interface CallToActionSectionProps {
  resortInfo: {
    name: string;
    tagline: string;
    location: string;
  };
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ resortInfo }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1729717949782-f40c4a07e3c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative text-center text-white px-6">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 opacity-90">{resortInfo.location}</p>
        <h2 className="text-6xl md:text-8xl font-light tracking-wider mb-8" style={{ fontFamily: 'AimeMX, serif' }}>
          {resortInfo.name}
        </h2>
        <p className="text-xl md:text-2xl font-light italic mb-12">{resortInfo.tagline}</p>
        
        <Link 
          href="/reserve"
          className="inline-block px-12 py-4 bg-white text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Reserve Now
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;