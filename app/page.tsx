'use client';

import { useEffect, useState } from 'react';
import { api } from '../services/api';
import BackgroundContainer from '@/components/home/BackgroundContainer';
import HeroSection from '@/components/home/HeroSection';
import ResortMapSection from '@/components/home/ResortMapSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import FourJourneysSection from '@/components/home/FourJourneysSection';
import { lenisInstance } from '@/components/LenisScroll';

export default function Home() {
  const [resortInfo, setResortInfo] = useState({
    name: "RIMBA",
    tagline: "Enveloped in Forest Tranquility",
    description: "In the heart of Bali's forest green, RIMBA: a serene dream. An oasis where water and lushness blend, nature's embrace, a peaceful friend. Blooming flowers grace the dining space, at the pool bar time slows its pace. With dances that tell of culture's grace, embark on a journey, find your place.", 
    location: "AYANA BALI"
  });
  const [resortProperties, setResortProperties] = useState<Array<{ name: string; position: { top: string; left: string } }>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoRes, propsRes] = await Promise.all([
          api.getResortInfo(),
          api.getResortProperties()
        ]);
        setResortInfo(infoRes.data);
        setResortProperties(propsRes.data);
      } catch (error) {
        console.error('Error fetching resort data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const height = window.innerHeight;
          const progress = Math.min(scrollY / height, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToNext = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(window.innerHeight); 
  }
};


  return (
    <div>
      <BackgroundContainer scrollProgress={scrollProgress} />
      <HeroSection resortInfo={resortInfo} scrollProgress={scrollProgress} scrollToNext={scrollToNext} />
      <ResortMapSection resortProperties={resortProperties} />
      <FourJourneysSection />
      <CallToActionSection resortInfo={resortInfo} />
    </div>
  );
}
