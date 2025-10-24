'use client';

import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface OptimizedBackgroundProps {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fixed?: boolean;
  children?: React.ReactNode;
}

export default function OptimizedBackground({
  src,
  alt,
  priority = false,
  overlay = false,
  overlayOpacity = 0.4,
  overlayColor = 'black',
  className = '',
  style,
  fixed = false,
  children
}: OptimizedBackgroundProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <OptimizedImage
        src={src}
        alt={alt}
        priority={priority}
        fill
        sizes="100vw"
        className={`object-cover${fixed ? ' fixed!' : ''}`}
        onLoad={() => setIsLoading(false)}
      />
      {overlay && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ 
            backgroundColor: overlayColor,
            opacity: isLoading ? 0 : overlayOpacity 
          }}
        />
      )}
      {children && (
        <div className={`relative z-10 transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}>
          {children}
        </div>
      )}
    </div>
  );
}