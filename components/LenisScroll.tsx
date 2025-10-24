'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness (default 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional custom easing
      smoothWheel: true, // for mouse wheel
      touchMultiplier: 2, // Adjust touch sensitivity
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
