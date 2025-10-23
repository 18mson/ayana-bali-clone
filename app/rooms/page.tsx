'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUsers, FiMaximize, FiHome } from 'react-icons/fi';
import { rooms } from '@/data/mockData';

const RoomsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'One Bedroom', 'Two Bedroom', 'Villa'];

  const filteredRooms = useMemo(() => {
    return filter === 'All' 
      ? rooms 
      : rooms.filter(room => room.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070"
            alt="Luxury Resort Room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Rooms & Suites
          </h1>
          <p className="text-lg md:text-xl font-light italic">Discover Your Perfect Sanctuary</p>
        </div>
      </section>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map(room => (
            <div 
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={room.images[0].url} 
                  alt={room.images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-teal-600 font-semibold">${room.price}</span>
                  <span className="text-gray-600 text-sm"> /night</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
                    {room.type}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{room.description}</p>
                
                {/* Room Info */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FiMaximize className="text-teal-600" />
                    <span>{room.size} m²</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiUsers className="text-teal-600" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiHome className="text-teal-600" />
                    <span>{room.bedType}</span>
                  </div>
                </div>

                {/* Featured Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link 
                    href={`/rooms/${room.id}`}
                    className="flex-1 text-center px-6 py-3 bg-white border border-teal-600 text-teal-600 font-medium rounded hover:bg-teal-50 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="/reserve"
                    className="flex-1 text-center px-6 py-3 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
