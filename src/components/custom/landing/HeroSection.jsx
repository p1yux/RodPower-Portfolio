'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

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

  const handleContributeClick = () => {
    router.push('/DoADeed');
  };

  return (
    <section className="group relative h-[100vh] bg-white overflow-hidden pt-16">
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
      
      {/* Rod Power Reveal - Appears on hero hover */}
      <div className="absolute top-40 left-30 z-20">
        {/* Rod Power heading that appears on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 drop-shadow-lg">
            ROD <span className="text-red-600">POWER</span>
          </h3>
          <p className="text-lg text-gray-700 font-semibold mt-2 drop-shadow-sm">
            City Councillor
          </p>
        </div>
        
        {/* Arrow pointing to the person */}
        <div className="absolute top-8 left-80 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-200 transform scale-75 group-hover:scale-100">
          <div className="flex items-center">
            <div className="w-70 h-0.5 bg-white mr-2"></div>
            <svg className="w-8 h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
          <p className="text-sm text-white font-medium mt-1 text-right">
            Meet Rod
          </p>
        </div>
      </div>

      {/* Left Bottom - Text Content */}
      <div className="absolute bottom-16 left-0 z-10 max-w-3xl ml-5 pl-4 sm:pl-6 lg:pl-8">
        <div className="space-y-4">
          <h2 className={`text-4xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-sm transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className={`block text-gray-900 transition-all duration-1000 ease-out delay-100 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>THE GOLDEN AGE OF</span>
            <span className={`block text-red-600 transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>BRAMPTON</span>
            <span className={`block text-red-600 transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>BEGINS</span>
            <span className={`block text-gray-900 transition-all duration-1000 ease-out delay-400 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>RIGHT NOW.</span>
          </h2>
        </div>
      </div>

      {/* Right Top - Action Buttons */}
      <div className="absolute top-32 right-0 z-10">
        {/* CONTRIBUTE Button */}
        <div className="mb-4">
          <button className="group bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 text-lg transition-all duration-500 shadow-lg hover:shadow-xl rounded-l-full border-r-0 translate-x-8 hover:translate-x-0 flex items-center min-w-[200px] justify-start" onClick={handleContributeClick}>
            <span className="mr-4 whitespace-nowrap">CONTRIBUTE</span>
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* VOLUNTEER Button */}
        <div>
          <button className="group bg-blue-700 hover:bg-blue-800 text-white font-bold py-6 px-12 text-lg transition-all duration-500 shadow-lg hover:shadow-xl rounded-l-full border-r-0 translate-x-8 hover:translate-x-0 flex items-center min-w-[200px] justify-start" onClick={handleVolunteerClick}>
            <span className="mr-4 whitespace-nowrap">VOLUNTEER</span>
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Action Buttons (fallback for small screens) */}
      <div className="lg:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col gap-4">
          <button className="group bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center" onClick={handleContributeClick}>
            <span className="mr-3">CONTRIBUTE</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="group bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center" onClick={handleVolunteerClick}>
            <span className="mr-3">VOLUNTEER</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
