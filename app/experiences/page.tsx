'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';
import { api } from '@/services/api';

interface Experience {
  id: number;
  name: string;
  category: string;
  description: string;
  duration: string;
  image: string;
}

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await api.getExperiences();
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1729717949948-56b52db111dd?auto=format&fit=crop&q=80"
            alt="Luxury Resort Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Experiences
          </h1>
          <p className="text-lg md:text-xl font-light italic">Curated Adventures & Wellness</p>
        </div>
      </section>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src={experience.image} 
                  alt={experience.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-sm font-medium rounded-full mb-3">
                    {experience.category}
                  </span>
                  <h3 className="text-3xl font-semibold mb-2">{experience.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiClock size={18} className="text-teal-600" />
                    <span>{experience.duration}</span>
                  </div>
                  <button className="px-6 py-2 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1723893549868-ec50d2f31f32?auto=format&fit=crop&q=80"
            alt="Tropical Beach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Ready to Begin Your Journey?
          </h2>
          <button className="px-12 py-4 bg-white text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all transform hover:scale-105">
            Book Your Experience
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;