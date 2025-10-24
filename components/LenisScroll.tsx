'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, 
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true, 
      touchMultiplier: 1.5, 
      syncTouch: true, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
