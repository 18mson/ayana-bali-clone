'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <Footer 
      className={isHomePage ? "bg-gray-900 relative z-10" : "bg-gray-900"}
    />
  );
}