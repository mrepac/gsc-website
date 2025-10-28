'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`w-full bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16 md:h-20">
          {/* Logo - Centered */}
          <a href="/" className="flex items-center">
            <Image
              src="https://gscljubljana.org/assets/images/image14.jpg?v=8d89fc03"
              alt="Global Shapers Ljubljana"
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
