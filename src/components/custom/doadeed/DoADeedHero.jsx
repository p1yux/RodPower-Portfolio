'use client'
import { useState, useEffect, useRef } from 'react';

const DoADeedHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide hero when scrolled down significantly (after 80vh)
      // Show hero when scrolling back up or at top
      if (currentScrollY > window.innerHeight * 0.8) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide hero completely
          setIsVisible(false);
        } else {
          // Scrolling up - show hero
          setIsVisible(true);
        }
      } else {
        // Near top - always show hero
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Calculate transform values based on scroll
  const scale = 1 + scrollY * 0.002; // Scale up as we scroll
  const baseOpacity = Math.max(0, 1 - scrollY * 0.001); // Fade out as we scroll
  
  // Combine base opacity with visibility state
  const finalOpacity = isVisible ? baseOpacity : 0;
  const zIndex = isVisible ? 10 : -1; // Move behind content when not visible

  return (
    <section 
      ref={sectionRef} 
      className={`fixed top-0 left-0 w-full h-screen overflow-hidden transition-all duration-300 ease-out ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ zIndex }}
    >
      {/* Background Image with Scroll Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-out"
        style={{
          backgroundImage: `url('/community/doadeed.png')`,
          backgroundPosition: 'center center',
          transform: `scale(${scale})`,
          opacity: finalOpacity,
          visibility: finalOpacity <= 0 ? 'hidden' : 'visible'
        }}
      />
    </section>
  );
};

export default DoADeedHero; 