'use client';

import Link from 'next/link';
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiYoutube, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from 'react-icons/fi';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "bg-gray-900" }: FooterProps) => {
  return (
    <footer className={`${className} text-white relative z-10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AYANA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience unparalleled luxury in the heart of Bali&apos;s lush tropical forest. RIMBA by AYANA offers a serene escape for families and travelers seeking tranquility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/rooms" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link href="/dining" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Dining</Link></li>
              <li><Link href="/spa" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Spa & Wellness</Link></li>
              <li><Link href="/experiences" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Experiences</Link></li>
              <li><Link href="/offers" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Special Offers</Link></li>
            </ul>
          </div>

          {/* Resort Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resort Information</h4>
            <ul className="space-y-3">
              <li><Link href="/map" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Resort Map</Link></li>
              <li><Link href="/weddings" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Weddings</Link></li>
              <li><Link href="/meetings" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Meetings & Events</Link></li>
              <li><Link href="/access" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Getting Here</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <FiMapPin size={18} className="mt-1 shrink-0" />
                <span>Jalan Karang Mas Sejahtera, Jimbaran, Bali 80364, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <FiPhone size={18} className="shrink-0" />
                <span>+62 361 702222</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <FiMail size={18} className="shrink-0" />
                <span>info@ayana.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} AYANA Hospitality. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-teal-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;