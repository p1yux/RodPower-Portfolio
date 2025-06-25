'use client'
import { useState, useEffect, useRef } from 'react';

const DoADeedHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform values based on scroll
  const scale = 1 + scrollY * 0.002; // Scale up as we scroll
  const opacity = Math.max(0, 1 - scrollY * 0.003); // Fade out as we scroll

  return (
    <section ref={sectionRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10">
      {/* Background Image with Scroll Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url('/community/doadeed.png')`,
          backgroundPosition: 'center center',
          transform: `scale(${scale})`,
          opacity: opacity
        }}
      />
    </section>
  );
};

export default DoADeedHero; 