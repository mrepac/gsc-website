'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    {
      src: 'https://gscljubljana.org/assets/images/gallery01/486d1e88.png?v=8d89fc03',
      alt: 'Impact Hub Ljubljana',
      url: 'https://slovenia.impacthub.net/ih-ljubljana/',
    },
    {
      src: 'https://gscljubljana.org/assets/images/gallery01/cd3ef466.png?v=8d89fc03',
      alt: 'YES',
      url: 'https://www.yes.si/',
    },
    {
      src: 'https://gscljubljana.org/assets/images/gallery01/0bd940c0.png?v=8d89fc03',
      alt: 'Akrapovič',
      url: 'https://www.akrapovic.com/sl',
    },
    {
      src: 'https://gscljubljana.org/assets/images/gallery01/33b4f878.png?v=8d89fc03',
      alt: 'XOD Agency',
      url: 'https://xodagency.com/',
    },
    {
      src: 'https://www.tp-lj.si/images/logos/tp-logo.png',
      alt: 'TP Ljubljana',
      url: 'https://www.tp-lj.si/sl',
    },
  ];

  // Duplicate partners for seamless loop on desktop
  const doubledPartners = [...partners, ...partners];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Infinite scroll for desktop
  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame
    
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardWidth = 200 + 32; // 200px card width + 32px gap (gap-8)
        const maxScroll = cardWidth * partners.length;
        
        if (prev >= maxScroll) {
          return 0; // Reset to beginning for seamless loop
        }
        return prev + scrollSpeed;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [partners.length]);

  // Move-stop-move for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Move to next partner
        const nextIndex = prev + 1;
        // Reset when we've shown all partners
        if (nextIndex >= partners.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Naši partnerji
        </h2>
        
        {/* Desktop Carousel - Infinite Scroll */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8"
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'none'
              }}
            >
              {doubledPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[200px] h-32 bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition border border-gray-200 p-4"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={180}
                    height={100}
                    className="object-contain max-h-24"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Carousel - Move-Stop-Move */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(calc(50% - 100px - ${currentIndex * (200 + 32)}px))`
              }}
            >
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[200px] h-32 bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition border border-gray-200 p-4"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={180}
                    height={100}
                    className="object-contain max-h-24"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
