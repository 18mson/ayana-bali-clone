"use client";

import React from 'react';
import { resortProperties } from '@/data/mockData';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1646667634703-a6a58c89a301?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGJlYWNoJTIwb2NlYW58ZW58MHx8fHwxNzYxMTAxMDQ5fDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Resort Map
          </h1>
          <p className="text-lg md:text-xl font-light italic">Explore Our 90-Hectare Paradise</p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Discover AYANA Bali</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            RIMBA by AYANA is part of an integrated resort destination spanning 90 hectares of spectacular clifftop and beachfront. 
            Explore four unique properties interconnected by seamless pathways, offering unparalleled access to world-class facilities.
          </p>

          {/* Map Container */}
          <div className="relative w-full h-[600px] bg-teal-100 rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1664876080601-acf03b40c5e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}
            />

            {/* Property markers */}
            {resortProperties.map((property, index) => (
              <div
                key={index}
                className="absolute transition-all duration-300 hover:scale-125 cursor-pointer z-10"
                style={property.position}
              >
                <div className="relative group">
                  <div className="w-4 h-4 bg-teal-600 rounded-full shadow-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-teal-600/20 rounded-full animate-ping" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-gray-900 text-sm font-medium">{property.name}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 200,100 Q 400,200 400,400" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,5" />
              <path d="M 600,150 Q 500,300 450,450" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,5" />
              <path d="M 300,400 L 450,450" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>

        {/* Property List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resortProperties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-3 h-3 bg-teal-600 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.name}</h3>
              <p className="text-sm text-gray-600">{property.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;