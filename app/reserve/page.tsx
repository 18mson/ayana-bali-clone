"use client";

import React, { useState } from 'react';
import { FiCalendar, FiUsers, FiHome } from 'react-icons/fi';
import { useToast } from '@/hooks/use-toast';
import { rooms } from '@/data/mockData';

const ReservePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: 2,
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - will be replaced with API call
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    console.log('Reservation data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F6F3E7]">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1729717949782-f40c4a07e3c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDB8fHx8MTc2MTEwMTAzNHww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4" style={{ fontFamily: 'AimeMX, serif' }}>
            Reserve Your Stay
          </h1>
          <p className="text-lg md:text-xl font-light italic">Begin Your Journey to Tranquility</p>
        </div>
      </section>

      {/* Reservation Form */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Booking Information</h2>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          {/* Stay Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Check-In Date *
              </label>
              <input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Check-Out Date *
              </label>
              <input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiHome className="inline mr-2" />
                Room Type *
              </label>
              <select
                name="roomType"
                required
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="">Select a room type</option>
                {rooms.map(room => (
                  <option key={room.id} value={room.name}>{room.name} - ${room.price}/night</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUsers className="inline mr-2" />
                Number of Guests *
              </label>
              <select
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder="Any special requests or requirements?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-teal-600 text-white font-medium text-lg rounded-lg hover:bg-teal-700 transition-all transform hover:scale-[1.02]"
          >
            Complete Reservation
          </button>

          <p className="text-sm text-gray-500 text-center mt-6">
            By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ReservePage;