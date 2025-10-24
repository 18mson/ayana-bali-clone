"use client";

import { IoMdArrowDown } from "react-icons/io";
import { LuBuilding, LuLeaf, LuTreePine, LuWaves } from "react-icons/lu";
import OptimizedImage from "../OptimizedImage";
import React from "react";
import { lenisInstance } from '../LenisScroll';
import Link from "next/link";

export default function FourJourneysSection() {
  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    
    const element = document.getElementById(sectionId);
    console.log('element', element);
    
    if (element && lenisInstance) {
      lenisInstance.scrollTo(element);
    }
  };
  
  const chapters = [
    {
      id: "chapter-01",
      number: "01",
      title: `Lured by whispers<br />through the trees`,
      subtitle: "1-1 / 1-2 / 1-3",
      label: "Chapter",
    },
    {
      id: "chapter-02",
      number: "02",
      title: `An oasis greets<br /> your eyes`,
      subtitle: "2-1 / 2-2 / 2-3",
      label: "Chapter",
    },
    {
      id: "chapter-03",
      number: "03",
      title: "The forest's heart<br /> beats in the breeze",
      subtitle: "3-1 / 3-2 / 3-3",
      label: "Chapter",
    },
    {
      id: "chapter-rooms",
      number: "",
      title: "Amidst lush<br /> green, water lies",
      subtitle: "Room List",
      label: "Rooms",
    },
  ];

  const renderChapterCard = (chapter) => (
    <div className="space-y-6" key={chapter.number || chapter.title}>
      <div className="w-full h-px bg-stone-300"></div>
      <div>
        <div className="text-sm text-stone-500 mb-4 font-light tracking-wider">
          {chapter.label} {chapter.number && <span className="text-2xl font-light text-stone-700">{chapter.number}</span>}
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-6 leading-relaxed">
          {chapter.title.split('<br />').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < chapter.title.split('<br />').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <div className="flex items-center justify-between">
          <div className="text-sm text-stone-500 font-light tracking-wide">
            {chapter.subtitle}
          </div>
          <button className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-200" onClick={() => scrollToSection(chapter.id)}>
            <IoMdArrowDown className="w-5 h-5 text-stone-600" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative w-full flex items-center justify-center">
        <div className="min-h-screen bg-stone-100 w-full py-16 px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <div className="text-sm tracking-[0.2em] text-stone-600 mb-6 font-light">
              AYANA BALI &nbsp;&nbsp;&nbsp; RIMBA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6 tracking-wide">
              FOUR JOURNEYS
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 font-light tracking-wider max-w-3xl mx-auto leading-relaxed">
              ENVELOPED BY MYSTICAL<br className="hidden sm:block" />
              FOREST AND WATER
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {chapters.map((chapter) => renderChapterCard(chapter))}
          </div>
        </div>
      </section>
      {/* Chapter 01 Section */}
      <section id="chapter-01" className="bg-white relative w-full flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <LuLeaf className="w-8 h-8 text-emerald-600" />
                <div className="text-sm text-stone-500 font-light tracking-wider">
                  Chapter <span className="text-2xl font-light text-stone-700">01</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                Lured by whispers<br />
                through the trees
              </h2>
              
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p className="text-lg">
                  Step into a world where ancient trees tell stories of centuries past. 
                  The forest beckons with its mysterious allure, where dappled sunlight 
                  filters through emerald canopies and every rustling leaf carries secrets.
                </p>
                
                <p>
                  Here, nature&apos;s symphony plays in perfect harmony - the gentle whisper 
                  of wind through branches, the distant call of exotic birds, and the 
                  soft crunch of leaves beneath your feet as you embark on this mystical journey.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">1-1</div>
                  <div className="text-sm text-stone-500 font-light">Forest Walk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">1-2</div>
                  <div className="text-sm text-stone-500 font-light">Tree Canopy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">1-3</div>
                  <div className="text-sm text-stone-500 font-light">Sacred Grove</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-4/5 bg-linear-to-br from-emerald-100 to-green-200 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mystical forest path"
                  className="w-full h-full object-cover"
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02 Section */}
      <section id="chapter-02" className="py-20 bg-stone-50 relative w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/5 bg-linear-to-br from-blue-100 to-cyan-200 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Mystical forest path"
                  className="w-full h-full object-cover"
                  layout="responsive"
                  fill
                  aspect="4/5"
                />
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <LuWaves className="w-8 h-8 text-blue-600" />
                <div className="text-sm text-stone-500 font-light tracking-wider">
                  Chapter <span className="text-2xl font-light text-stone-700">02</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                An oasis greets<br />
                your eyes
              </h2>
              
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p className="text-lg">
                  Emerge from the forest depths to discover a breathtaking oasis where 
                  crystal-clear waters reflect the azure sky. This sanctuary offers 
                  respite and renewal, a place where time seems to stand still.
                </p>
                
                <p>
                  The gentle lapping of water against natural stone creates a meditative 
                  rhythm, while tropical blooms add splashes of vibrant color to this 
                  serene paradise. Here, tranquility finds its perfect expression.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">2-1</div>
                  <div className="text-sm text-stone-500 font-light">Water Garden</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">2-2</div>
                  <div className="text-sm text-stone-500 font-light">Reflection Pool</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">2-3</div>
                  <div className="text-sm text-stone-500 font-light">Lotus Pond</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 03 Section */}
      <section id="chapter-03" className="py-20 bg-white relative w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <LuTreePine className="w-8 h-8 text-green-700" />
                <div className="text-sm text-stone-500 font-light tracking-wider">
                  Chapter <span className="text-2xl font-light text-stone-700">03</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                The forest&apos;s heart<br />
                beats in the breeze
              </h2>
              
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p className="text-lg">
                  Deep within the forest&apos;s embrace lies its beating heart - a place where 
                  ancient wisdom flows through every branch and leaf. Feel the pulse of 
                  nature as gentle breezes carry the essence of life itself.
                </p>
                
                <p>
                  This sacred space connects you to the primal rhythms of the earth, 
                  where meditation comes naturally and the soul finds its center. 
                  Here, the forest reveals its deepest secrets to those who listen.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">3-1</div>
                  <div className="text-sm text-stone-500 font-light">Heart Grove</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">3-2</div>
                  <div className="text-sm text-stone-500 font-light">Wind Whispers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-stone-700 mb-2">3-3</div>
                  <div className="text-sm text-stone-500 font-light">Ancient Wisdom</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-4/5 bg-linear-to-br from-green-100 to-emerald-200 rounded-lg overflow-hidden">
                <OptimizedImage 
                  src="https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Forest heart with sunbeams"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="chapter-rooms" className="py-20 bg-stone-50 relative w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/5 bg-linear-to-br from-stone-100 to-amber-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury resort rooms surrounded by nature"
                  fill
                  aspect="4/5"
                  className="rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <LuBuilding className="w-8 h-8 text-amber-600" />
                <div className="text-sm text-stone-500 font-light tracking-wider">
                  Rooms
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                Amidst lush<br />
                green, water lies
              </h2>
              
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p className="text-lg">
                  Discover accommodations that seamlessly blend luxury with nature&apos;s 
                  raw beauty. Each room is a sanctuary where modern comfort meets 
                  the timeless elegance of the natural world.
                </p>
                
                <p>
                  Wake to the gentle sounds of flowing water and rustling leaves, 
                  where floor-to-ceiling windows frame living artwork that changes 
                  with each passing moment. This is hospitality in perfect harmony with nature.
                </p>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-700 font-light">Forest Villa</span>
                  <span className="text-stone-500 text-sm">From $450/night</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-700 font-light">Water Pavilion</span>
                  <span className="text-stone-500 text-sm">From $650/night</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-700 font-light">Canopy Suite</span>
                  <span className="text-stone-500 text-sm">From $850/night</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/rooms" className="mt-12 text-center border border-[#4D4B49] items-center flex justify-center px-8 py-4 bg-[#4D4B49] text-[#FAFAF9] hover:text-[#4D4B49] font-medium text-2xl tracking-wider hover:bg-[#FAFAF9] transition-all transform hover:scale-105 w-full h-28" >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
