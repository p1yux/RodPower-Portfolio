'use client'
import { useState, useEffect } from 'react';

const BioHeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100vh] bg-white overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/community/brampton.png')`,
            backgroundPosition: 'center 65%',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/30 to-blue-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full ml-4 sm:ml-6 lg:ml-10">
          <div className="max-w-4xl">
            {/* Main Content */}
            <div className="space-y-8 pl-4 sm:pl-6 lg:pl-8">
              {/* Badge */}
              <div className={`inline-block transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="bg-red-600 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide">
                  Biography
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-lg transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  A PROUD
                  <br />
                  <span className="text-red-400">BRAMPTONIAN</span>
                </h1>
                
                <div className={`text-xl md:text-2xl font-bold text-white/90 max-w-3xl drop-shadow-sm transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Rod Power has called Brampton home for more than 35 years, building a life, 
                  career, and family in the community he loves.
                </div>
              </div>

              {/* Key Stats */}
              {/* <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl transition-all duration-1000 ease-out delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-black text-red-400 mb-1">35+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">Years in Brampton</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-black text-red-400 mb-1">4</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">Start-up Businesses</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-black text-red-400 mb-1">3</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">Children Born Here</div>
                </div>
              </div> */}

              {/* Quote */}
              {/* <div className={`max-w-3xl transition-all duration-1000 ease-out delay-900 ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                <blockquote className="text-lg md:text-xl text-white/90 italic border-l-4 border-red-400 pl-6 bg-white/10 backdrop-blur-sm py-6 shadow-lg">
                  "Brampton holds a special place in my heart – not only for our proud past, 
                  but for the bright future that lies ahead."
                </blockquote>
                <cite className="block text-white/70 text-sm mt-3 ml-6">- Rod Power</cite>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wide mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default BioHeroSection; 