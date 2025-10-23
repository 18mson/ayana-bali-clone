"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiUsers, FiMaximize, FiHome } from 'react-icons/fi';
import { rooms } from '@/data/mockData';

interface RoomDetailContentProps {
  slug: string;
}

const RoomDetailContent = ({ slug }: RoomDetailContentProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const room = rooms.find(r => r.id === slug);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Room Not Found</h2>
          <p className="text-gray-600 mb-8">The room you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link
            href="/rooms"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        {/* Main Image */}
        <div className="relative h-full">
          <Image
            src={room.images[selectedImage].url}
            alt={room.images[selectedImage].alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Image Gallery Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-4 overflow-x-auto">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-32 h-24 shrink-0 transition-all ${
                    selectedImage === index ? 'ring-2 ring-teal-500' : ''
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Information */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {room.type}
              <span className="block text-3xl text-gray-600">{room.name}</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-12">
              <div className="flex items-center space-x-2">
                <FiMaximize className="text-teal-600" />
                <span className="text-gray-600">{room.size}㎡</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiUsers className="text-teal-600" />
                <span className="text-gray-600">Up to {room.maxGuests} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiHome className="text-teal-600" />
                <span className="text-gray-600">{room.bedType}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-teal-600" />
                <span className="text-gray-600">Available</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {room.longDescription}
            </p>

            {/* Amenities */}
            <div className="space-y-8">
              {room.amenities.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Services & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {room.services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-semibold mb-4">Booking Details</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price per night</span>
                  <span className="text-2xl font-semibold">${room.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Check-in</span>
                  <span>{room.checkIn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Check-out</span>
                  <span>{room.checkOut}</span>
                </div>
              </div>

              <Link
                href="/reserve"
                className="block w-full px-6 py-3 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                Reserve Now
              </Link>

              <div className="mt-6 text-sm text-gray-500">
                <p>• Free cancellation up to 24 hours before check-in</p>
                <p>• Special rates for extended stays</p>
                <p>• Breakfast included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailContent;