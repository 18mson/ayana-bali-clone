'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  onClick?: () => void;
  onLoad?: () => void;
  heightClass?: string;
  aspect?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  onClick,
  heightClass,
  aspect,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determine wrapper sizing
  const wrapperClasses = fill
    ? `relative w-full overflow-hidden rounded-lg ${
        aspect
          ? `aspect-${aspect}`
          : heightClass
          ? heightClass
          : 'h-64 md:h-80'
      }`
    : ''

  return (
    <div className={wrapperClasses}>
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={85}
        onClick={onClick}
        onLoad={() => setIsLoading(false)}
        className={`${className} object-cover transition-all duration-300 ${
          isLoading
            ? 'scale-110 blur-lg grayscale'
            : 'scale-100 blur-0 grayscale-0'
        }`}
      />
    </div>
  );
}