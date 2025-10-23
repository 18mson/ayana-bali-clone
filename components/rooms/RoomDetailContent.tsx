"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiUsers, FiMaximize, FiHome } from 'react-icons/fi';
import { rooms } from '@/data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { useReserveSidebar } from '@/hooks/use-reserve-sidebar';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

interface RoomDetailContentProps {
  slug: string;
}

const RoomDetailContent = ({ slug }: RoomDetailContentProps) => {
  const [cursorPosition, setCursorPosition] = useState<'left' | 'right' | 'center'>('center');
  const swiperRef = useRef<typeof Swiper | null>(null);
  const room = rooms.find((r) => r.id === slug);
  const { open } = useReserveSidebar();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < width / 3) {
      setCursorPosition('left');
    } else if (x > (width * 2) / 3) {
      setCursorPosition('right');
    } else {
      setCursorPosition('center');
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    console.log('Click detected! Position:', x, 'Width:', width);
    const swiperInstance = (swiperRef.current as SwiperRef | null)?.swiper;
    console.log('Swiper instance:', swiperInstance);

    if (x < width / 3 && swiperInstance) {
      console.log('Going to previous slide');
      swiperInstance.slidePrev();
    } else if (x > (width * 2) / 3 && swiperInstance) {
      console.log('Going to next slide');
      swiperInstance.slideNext();
    } else {
      console.log('Click in center area - no action');
    }
  };

  const createCursorDataUrl = (icon: 'left' | 'right') => {
    const svg = icon === 'left'
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 46 46" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 46 46" fill="white"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
  
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 64 64, auto`;
  };

  
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F3E7]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Invalid Room ID</h2>
          <p className="text-gray-600 mb-8">No room identifier was provided.</p>
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

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F3E7]">
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
    <div className="min-h-screen bg-[#F6F3E7] scroll-smooth">
      <section 
        className="relative h-[70vh] overflow-hidden bg-gray-400 cursor-pointer"
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
        style={{
          cursor: cursorPosition === 'left' ? createCursorDataUrl('left') :
                     cursorPosition === 'right' ? createCursorDataUrl('right') :
                     'default'
        }}
      >
        <Swiper
          ref={swiperRef as unknown as React.RefObject<SwiperRef>}
          modules={[Autoplay, Navigation, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={false}
          className="h-full expo-slider"
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
        >
          {room.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Slide Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="transform translate-y-4 opacity-0 transition-all duration-500 hover:translate-y-0 hover:opacity-100">
                    <h3 className="text-2xl font-light mb-2" style={{ fontFamily: 'AimeMX, serif' }}>
                      {room.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      Experience luxury and comfort in our premium accommodations
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Room Information */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-light mb-4 text text-[#7E7D7B]">
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
                <div className="grid items-start grid-cols-2 gap-8" key={index}>
                  <h3 className="text-xl font-semibold mb-4 text-[#7E7D7B] flex-1 sticky top-24 z-10 py-2 border-t-2 border-[#7E7D7B]">{category.category}</h3>
                  <ul className="grid grid-cols-1 gap-4 border-t-2 pt-4 border-dashed border-[#7E7D7B]">
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
              <h3 className="text-2xl font-semibold mb-6 text-[#7E7D7B]">Services & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {room.services.map((service, index) => (
                  <div key={index} className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2 text-[#7E7D7B]">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#F7F7F7] rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-semibold mb-4 text-[#7E7D7B]">Booking Details</h3>
              <div className="space-y-4 mb-6 text-[#7E7D7B]">
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

              <button
                className="block w-full px-6 py-3 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition-colors"
                onClick={() => open()}
              >
                Reserve Now
              </button>

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