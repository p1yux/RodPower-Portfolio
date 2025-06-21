'use client'
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    { src: '/community/canada.png', alt: 'Canada Community' },
    { src: '/community/Cricket.png', alt: 'Cricket Community' },
    { src: '/community/ArtExhibit.png', alt: 'Art Exhibit', mirrored: true },
    { src: '/community/award.png', alt: 'Award Ceremony' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen bg-white overflow-hidden pt-16">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image.src}')`,
              backgroundPosition: 'right 20%',
              backgroundSize: 'cover',
              transform: image.mirrored ? 'scaleX(-1)' : 'none'
            }}
          />
        ))}
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Column - Text */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight drop-shadow-sm">
                  <span className="block">"THE GOLDEN AGE OF</span>
                  <span className="block text-red-600">BRAMPTON</span>
                  <span className="block text-red-600">BEGINS</span>
                  <span className="block">RIGHT NOW."</span>
                </h2>
                
                <div className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl drop-shadow-sm">
                  ROD POWER, City Councillor for Brampton
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[160px]">
                  CONTRIBUTE
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[160px]">
                  VOLUNTEER
                </button>
              </div> */}

              {/* Quote */}
              <div className="max-w-2xl">
                <blockquote className="text-base md:text-lg text-gray-700 italic border-l-4 border-red-600 pl-6 bg-white/20 backdrop-blur-sm py-4 shadow-sm">
                  "I have one life and one chance to make it count for something… My faith demands that I do whatever I can, wherever I am, whenever I can, for as long as I can with whatever I have to try to make a difference."
                </blockquote>
              </div>
            </div>

            {/* Right Column - Image space (background image handles this) */}
            <div className="hidden lg:block">
              {/* This space is handled by the background images */}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-red-600 shadow-lg scale-110' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-red-600 transition-all duration-[5000ms] ease-linear"
          style={{ 
            width: `${((currentImageIndex + 1) / images.length) * 100}%`,
            animation: 'slideProgress 5s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
