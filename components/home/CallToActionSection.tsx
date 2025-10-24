import React, { useEffect, useRef, useState } from 'react';
import ShinyText from '../ShinyText';
import { useReserveSidebar } from '@/hooks/use-reserve-sidebar';

interface CallToActionSectionProps {
  resortInfo: {
    name: string;
    tagline: string;
    location: string;
  };
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ resortInfo }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animationDisabled, setAnimationDisabled] = useState(false);
    const { open } = useReserveSidebar()

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationDisabled(true); 
        }
      },
      { threshold: 0.5 } 
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1729717949782-f40c4a07e3c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative text-center text-white px-6 flex flex-col items-center">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 opacity-90">
          {resortInfo.location}
        </p>
        <ShinyText
          text={resortInfo.name}
          disabled={animationDisabled} // Disable animation when in view
          speed={3}
          className="text-6xl md:text-8xl font-light tracking-wider mb-8 font-sans"
        />
        <ShinyText
          text={resortInfo.tagline}
          disabled={animationDisabled} // Disable animation when in view
          speed={3}
          className="text-xl md:text-2xl font-light italic mb-12"
        />
        <button
          onClick={() => open()}
          className="inline-block px-12 py-4 bg-[#F7F7F7] text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Reserve Now
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;