'use client'

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); // Small delay to ensure styles apply
    return () => clearTimeout(timer);
  }, []);

  const handleVolunteerClick = () => {
    const volunteerForm = document.getElementById('volunteer-form');
    const emailInput = document.getElementById('volunteer-email');
    
    if (volunteerForm) {
      volunteerForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Focus the email input after scrolling
      setTimeout(() => {
        if (emailInput) {
          emailInput.focus();
        }
      }, 800); // Delay to allow scroll animation to complete
    }
  };

  return (
    <section className="relative h-[100vh] bg-white overflow-hidden pt-16">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/community/ArtExhibit.png')`,
            backgroundPosition: 'right 20% center 60%',
            backgroundSize: 'cover',
            transform: 'scaleX(-1)'
          }}
        />
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full ml-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Column - Text */}
            <div className="space-y-6 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-0">
              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className={`text-4xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-sm transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className={`block text-gray-900 transition-all duration-1000 ease-out delay-100 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>THE GOLDEN AGE OF</span>
                  <span className={`block text-red-600 transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>BRAMPTON</span>
                  <span className={`block text-red-600 transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>BEGINS</span>
                  <span className={`block text-gray-900 transition-all duration-1000 ease-out delay-400 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>RIGHT NOW.</span>
                </h2>
                
                <div className={`text-lg md:text-xl font-bold text-gray-700 max-w-2xl drop-shadow-sm transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  ROD POWER, City Councillor for Brampton
                </div>
              </div>

              {/* Quote */}
              <div className="max-w-2xl">
                <p className={`text-base md:text-lg text-white bg-red-600 backdrop-blur-sm italic border-l-4 border-blue-600 pl-6 py-4 shadow-lg transition-all duration-1000 ease-out delay-700 ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                  "I have one life and one chance to make it count for something… My faith demands that I do whatever I can, wherever I am, whenever I can, for as long as I can with whatever I have to try to make a difference."
                </p>
              </div>
            </div>

            {/* Right Column - Semi-Circle Action Buttons */}
            <div className="relative h-full flex flex-col justify-center">
              {/* CONTRIBUTE Button */}
              <div className="absolute right-0 top-1/2 transform -translate-y-16 z-30">
                <button className="group bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 text-lg transition-all duration-500 shadow-lg hover:shadow-xl rounded-l-full border-r-0 translate-x-8 hover:translate-x-0 flex items-center min-w-[200px] justify-start">
                  <span className="mr-4 whitespace-nowrap">CONTRIBUTE</span>
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* VOLUNTEER Button */}
              <div className="absolute right-0 top-1/2 transform translate-y-4 z-30">
                <button className="group bg-blue-700 hover:bg-blue-800 text-white font-bold py-6 px-12 text-lg transition-all duration-500 shadow-lg hover:shadow-xl rounded-l-full border-r-0 translate-x-8 hover:translate-x-0 flex items-center min-w-[200px] justify-start" onClick={handleVolunteerClick}>
                  <span className="mr-4 whitespace-nowrap">VOLUNTEER</span>
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Mobile Action Buttons (fallback for small screens) */}
              <div className="lg:hidden flex flex-col gap-4 mt-8">
                <button className="group bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span className="mr-3">CONTRIBUTE</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="group bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span className="mr-3">VOLUNTEER</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
