'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiClock, FiCoffee } from 'react-icons/fi';
import { api } from '@/services/api';

interface DiningVenue {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  hours: string;
  image: string;
}

const DiningPage = () => {
  const [dining, setDining] = useState<DiningVenue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDining = async () => {
      try {
        const response = await api.getDining();
        setDining(response.data);
      } catch (error) {
        console.error('Error fetching dining:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDining();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1664876080601-acf03b40c5e3?auto=format&fit=crop&q=80"
            alt="Luxury Dining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'var(--font-aimemx)' }}>
            Dining
          </h1>
          <p className="text-lg md:text-xl font-light italic">Culinary Excellence in Paradise</p>
        </div>
      </section>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xl text-gray-600 leading-relaxed">
          Indulge in a diverse array of culinary experiences, from international cuisine to authentic Indonesian flavors. 
          Each venue offers a unique ambiance and exceptional dining moments.
        </p>
      </div>

      {/* Dining Venues */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="space-y-12">
          {dining.map((venue, index) => (
            <div 
              key={venue.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-[#F6F3E7] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="lg:w-1/2 h-96 relative overflow-hidden group">
                <Image 
                  src={venue.image} 
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                  {venue.cuisine}
                </span>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">{venue.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{venue.description}</p>
                
                <div className="flex items-center space-x-6 mb-8 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FiClock size={20} className="text-teal-600" />
                    <span className="text-sm">{venue.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCoffee size={20} className="text-teal-600" />
                    <span className="text-sm">{venue.cuisine}</span>
                  </div>
                </div>

                <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 transition-colors">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation CTA */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-aimemx)' }}>
            Reserve Your Table
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience world-class dining in an unforgettable setting
          </p>
          <button className="px-12 py-4 bg-white text-teal-600 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;