import React from 'react';

interface BackgroundContainerProps {
  scrollProgress: number;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed inset-0 w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1664876080601-acf03b40c5e3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: '100dvh',
        }}
      />
      <div
        className="absolute inset-0 transition-all duration-300 ease-out h-[120vh]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMask: scrollProgress >= 1
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)'
            : `linear-gradient(to bottom, 
                rgba(0,0,0,1) ${Math.max(0, 100 - scrollProgress * 100)}%, 
                rgba(0,0,0,0) ${Math.max(0, 130 - scrollProgress * 100)}%
              )`,
          mask: scrollProgress >= 1
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)'
            : `linear-gradient(to bottom, 
                rgba(0,0,0,1) ${Math.max(0, 100 - scrollProgress * 100)}%, 
                rgba(0,0,0,0) ${Math.max(0, 130 - scrollProgress * 100)}%
              )`,
          transition: "transform 0.2s linear",
          transform: `translateY(${scrollProgress * 50}px)`
        }}
      />
    </div>
  );
};

export default BackgroundContainer;