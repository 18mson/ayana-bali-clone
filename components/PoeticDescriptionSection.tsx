import React from 'react';

interface PoeticDescriptionSectionProps {
  description: string;
}

const PoeticDescriptionSection: React.FC<PoeticDescriptionSectionProps> = ({ description }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-teal-400/60" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-white space-y-4">
          {description.split('. ').map((line: string, index: number) => (
            <p 
              key={index}
              className="text-xl md:text-2xl font-light leading-relaxed animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                fontFamily: 'AimeMX, serif',
                fontStyle: 'italic'
              }}
            >
              {line}{index < description.split('. ').length - 1 ? '.' : ''}
            </p>
          ))}
        </div>

        {/* Decorative wave pattern */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-0.5 bg-white/60" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoeticDescriptionSection;