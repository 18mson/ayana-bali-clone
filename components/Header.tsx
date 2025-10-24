'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { useReserveSidebar } from '@/hooks/use-reserve-sidebar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { open } = useReserveSidebar()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'BALI', path: '/' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Spa', path: '/spa' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'Meetings', path: '/meetings' },
    { name: 'Offers', path: '/offers' },
    { name: 'Resort Map', path: '/map' },
    { name: 'Access', path: '/access' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-[#F6F3E7]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className={`text-2xl font-bold tracking-wider transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                AYANA
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-all hover:opacity-70 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  } ${
                    pathname === link.path ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                } rounded`}
                onClick={open}
              >
                Reserve
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        {pathname === '/' && (
          <div className="border-t border-white/20">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
              <div className={`flex items-center space-x-2 py-3 text-sm ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <span className="hover:opacity-70 cursor-pointer">Hotels</span>
                <span>›</span>
                <span className="font-medium">AYANA BALI | RIMBA</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 right-0 w-64 bg-white h-[calc(100vh-5rem)] overflow-y-auto shadow-xl">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  open();
                }}
                className="bg-teal-600 text-white px-6 py-3 rounded text-center font-medium hover:bg-teal-700 transition-colors"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
