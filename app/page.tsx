'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { api } from '../services/api';
import { useReserveSidebar } from "@/hooks/use-reserve-sidebar";
import clsx from "clsx";

export default function Home() {
  const [resortInfo, setResortInfo] = useState({
    name: "RIMBA",
    tagline: "Enveloped in Forest Tranquility",
    description: "In the heart of Bali's forest green, RIMBA: a serene dream. An oasis where water and lushness blend, nature's embrace, a peaceful friend. Blooming flowers grace the dining space, at the pool bar time slows its pace. With dances that tell of culture's grace, embark on a journey, find your place.", 
    location: "AYANA BALI"
  });
  const [resortProperties, setResortProperties] = useState<Array<{ name: string; position: { top: string; left: string } }>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { open } = useReserveSidebar();

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      // limit value between 0–1
      const progress = Math.min(scrollY / height, 1);
      setScrollProgress(progress);
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
      {/* Background Container */}
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
            WebkitMask: scrollProgress >= 1 ? 
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)' : 
              `linear-gradient(to bottom, 
                rgba(0,0,0,1) ${Math.max(0, 100 - scrollProgress * 100)}%, 
                rgba(0,0,0,0) ${Math.max(0, 130 - scrollProgress * 100)}%
              )`,
            mask: scrollProgress >= 1 ? 
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)' : 
              `linear-gradient(to bottom, 
                rgba(0,0,0,1) ${Math.max(0, 100 - scrollProgress * 100)}%, 
                rgba(0,0,0,0) ${Math.max(0, 130 - scrollProgress * 100)}%
              )`,
            transition: "transform 0.2s linear",
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        />
      </div>
      <section className="min-h-[200dvh] w-full">
        <div className="grid grid-cols-1 text-white px-6 min-h-screen">
          <div className="h-[30dvh]"></div>
          <div className="sticky flex flex-col items-center justify-center text-white z-10 top-1/4 mb-48">
            <div className="text-center space-y-6">
              <p className="text-sm tracking-[0.3em] uppercase opacity-90">{resortInfo.location}</p>
              <h1 className="text-7xl md:text-9xl font-light tracking-wider">
                {resortInfo.name}
              </h1>
              <p className="text-xl md:text-3xl font-light italic tracking-wide opacity-90">
                {resortInfo.tagline}
              </p>
            </div>
          </div>
          <div className="mt-[100dvh] text-white px-6">
            <div className="text-white space-y-4 text-center">
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
          </div>

          <div className="flex justify-center w-full">
            <button 
              onClick={scrollToNext}
              className={clsx("absolute bottom-12 animate-bounce",
                scrollProgress > 0 ? 'hidden' : ''
              )}
              >
              <FiChevronDown size={32} className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Resort Map Section */}
      <section className="relative min-h-[120vh] w-full">
        <div className="relative h-full flex items-center justify-center py-20">
          <div className="relative w-full max-w-6xl h-[600px]">
            {/* Animated connecting lines - decorative */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <path
                d="M 200,100 Q 400,200 300,400"
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                className="animate-pulse"
              />
              <path
                d="M 600,150 Q 500,300 450,450"
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                className="animate-pulse"
              />
            </svg>

            {/* Property markers */}
            {resortProperties.map((property, index) => (
              <div
                key={index}
                className="absolute transition-all duration-300 hover:scale-110 cursor-pointer"
                style={property.position}
              >
                <div className="relative group">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full animate-ping" />
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-xs font-medium tracking-wider">
                    {property.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetic Description Section */}
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

      {/* Call to Action Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1729717949782-f40c4a07e3c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative text-center text-white px-6">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 opacity-90">{resortInfo.location}</p>
          <h2 className="text-6xl md:text-8xl font-light tracking-wider mb-8" style={{ fontFamily: 'AimeMX, serif' }}>
            {resortInfo.name}
          </h2>
          <p className="text-xl md:text-2xl font-light italic mb-12">{resortInfo.tagline}</p>
          
          <Link 
            href="/reserve"
            className="inline-block px-12 py-4 bg-white text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Reserve Now
          </Link>
        </div>
      </section>
      {/* <section className="relative w-full flex items-center justify-center">
        <div className="absolute bottom-32 left-0 right-0 w-full flex justify-center items-center space-x-12 bg-black h-screen">
          <Link href="/" className="text-[#7E7D7B] text-sm border-b-2 border-white pb-1">Overview</Link>
          <Link href="/rooms" className="text-[#7E7D7B]/70 hover:text-[#7E7D7B] text-sm transition-colors">Rooms</Link>
          <button className="text-[#7E7D7B]/70 hover:text-white text-sm transition-colors" onClick={open}>Reserve RIMBA</button>
        </div>
      </section> */}
    </div>
  );
}
