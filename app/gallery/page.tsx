'use client';

import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { api } from '@/services/api';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  alt: string;
  image: string;
  category: string;
}

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.getGallery();
        setGallery(response.data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-t-teal-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-reverse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F3E7]">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602455891694-02f0fc9facba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHx0cm9waWNhbCUyMGJlYWNoJTIwb2NlYW58ZW58MHx8fHwxNzYxMTAxMDQ5fDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'AimeMX, serif' }}>
            Gallery
          </h1>
          <p className="text-lg md:text-xl font-light italic">A Visual Journey Through Paradise</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {gallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative h-80 overflow-hidden rounded-lg cursor-pointer group"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Under Construction</h2>
              <p className="text-gray-600 mb-8">We&apos;re currently curating a beautiful collection of images. Please check back soon.</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={32} />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage.image}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;