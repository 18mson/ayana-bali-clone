'use client';

import { useEffect, useState } from 'react';
import { api } from '../services/api';
import BackgroundContainer from '@/components/BackgroundContainer';
import HeroSection from '@/components/HeroSection';
import ResortMapSection from '@/components/ResortMapSection';
import PoeticDescriptionSection from '@/components/PoeticDescriptionSection';
import CallToActionSection from '@/components/CallToActionSection';

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
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };


  return (
    <div>
      <BackgroundContainer scrollProgress={scrollProgress} />
      <HeroSection resortInfo={resortInfo} scrollProgress={scrollProgress} scrollToNext={scrollToNext} />
      <ResortMapSection resortProperties={resortProperties} />
      <PoeticDescriptionSection description={resortInfo.description} />
      <CallToActionSection resortInfo={resortInfo} />
    </div>
  );
}
