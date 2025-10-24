import React from 'react';

interface ResortMapSectionProps {
  resortProperties: Array<{ name: string; position: { top: string; left: string } }>;
}
interface MapLocation {
  id: string;
  name: string;
  x: string;
  y: string;
}
const ResortMapSection: React.FC<ResortMapSectionProps> = () => {

const locations: MapLocation[] = [
  { id: 'kubu-beach', name: 'KUBU BEACH', x: '33%', y: '12%' },
  { id: 'villas', name: 'VILLAS', x: '45%', y: '24%' },
  { id: 'resort', name: 'RESORT', x: '62%', y: '28%' },
  { id: 'spa', name: 'SPA', x: '54%', y: '35%' },
  { id: 'segara', name: 'SEGARA', x: '68%', y: '38%' },
  { id: 'garden', name: 'GARDEN', x: '58%', y: '52%' },
  { id: 'wana', name: 'WANA', x: '47%', y: '57%' },
  { id: 'rimba', name: 'RIMBA', x: '39%', y: '65%' },
];
  return (
    <section className="relative min-h-[120vh] w-full">
      <div className="absolute inset-0 pointer-events-none">
        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute pointer-events-auto"
            style={{
              left: location.x,
              top: location.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative flex flex-col items-center cursor-pointer group">
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-lg transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
              </div>

              <div
                className={`mt-2 text-white font-light tracking-[0.2em] text-xs transition-all duration-300 whitespace-nowrap`}
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}
              >
                {location.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResortMapSection;