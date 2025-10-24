import React from 'react';

interface HeroSectionProps {
  resortInfo: {
    name: string;
    tagline: string;
    description: string;
    location: string;
  };
  scrollProgress: number;
  scrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ resortInfo, scrollProgress, scrollToNext }) => {
  return (
    <section className="min-h-[200dvh] w-full">
      <div className="grid grid-cols-1 text-white px-6">
        <div className="text-center space-y-6 h-dvh flex  items-center justify-center">
          <div className="sticky flex flex-col text-white z-10 top-1/4">
            <p className="text-sm tracking-[0.3em] uppercase opacity-90">{resortInfo.location}</p>
            <h1 className="text-7xl md:text-9xl font-light tracking-wider">
              {resortInfo.name}
            </h1>
            <p className="text-xl md:text-3xl font-light italic tracking-wide opacity-90">
              {resortInfo.tagline}
            </p>
          </div>
        </div>
      </div>
      <div className="text-white space-y-4 text-center mt-4 md:mt-12">
        {resortInfo.description.split('. ').map((line: string, index: number) => (
            <p 
            key={index}
            className="text-xl md:text-2xl font-light leading-relaxed animate-fade-in"
            style={{ 
                animationDelay: `${index * 0.2}s`,
                fontFamily: 'AimeMX, serif',
                fontStyle: 'italic'
            }}
            >
            {line}{index < resortInfo.description.split('. ').length - 1 ? '.' : ''}
            </p>
        ))}
        </div>

        <div className="flex justify-center w-full">
          <button 
            onClick={scrollToNext}
            className={`absolute bottom-12 animate-bounce ${scrollProgress > 0 ? 'hidden' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
    </section>
  );
};

export default HeroSection;