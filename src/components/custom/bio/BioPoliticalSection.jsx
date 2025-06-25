'use client'
import { useState, useEffect, useRef } from 'react';

const BioPoliticalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const politicalPriorities = [
    {
      title: 'Public Safety',
      description: 'Strengthening public safety through collaboration with law enforcement and community groups to create safer neighborhoods for all residents.',
      backgroundImage: '/community/newspaper.png',
      delay: 200
    },
    {
      title: 'Youth Programs',
      description: 'Supporting youth programs through community hubs and recreation, ensuring young people have access to extracurricular activities.',
      backgroundImage: '/community/athlete.png',
      delay: 400
    },
    {
      title: 'Transparent Communication',
      description: 'Continuously improving communication with residents to ensure transparency in decision-making processes and government accountability.',
      backgroundImage: '/community/varcam.png',
      delay: 600
    },
    {
      title: 'Community Engagement',
      description: 'Increasing efforts to engage diverse community groups, including marginalized and underrepresented populations.',
      backgroundImage: '/community/Horse.png',
      featured: true,
      delay: 800
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">

          <h2 className={`text-4xl md:text-6xl font-black text-gray-900 mt-6 mb-4 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            SERVING BRAMPTON'S
            <span className="text-white block">FUTURE</span>
          </h2>
          <p className={`text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            As a Brampton City Councillor, Rod continues to focus on the priorities that matter most 
            to our community - building a safer, more connected, and prosperous Brampton for all.
          </p>
        </div>

        {/* Political Priorities - Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-900 p-10 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Large Geometric Shapes */}
              <div className="absolute top-8 left-8 w-20 h-20 border-4 border-white rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute top-16 right-12 w-12 h-12 border-3 border-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-16 w-16 h-16 border-4 border-white animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-8 right-20 w-10 h-10 bg-red-400 opacity-70 rotate-45 animate-bounce" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-14 h-14 border-3 border-white rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
              <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white opacity-60 animate-pulse" style={{animationDelay: '5s'}}></div>
              
              {/* Complex Dotted Pattern */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="complexDots" patternUnits="userSpaceOnUse" width="80" height="80">
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.7"/>
                    <circle cx="40" cy="20" r="1.5" fill="red" opacity="0.5"/>
                    <circle cx="60" cy="20" r="2.5" fill="white" opacity="0.6"/>
                    <circle cx="20" cy="40" r="1.5" fill="red" opacity="0.5"/>
                    <circle cx="40" cy="40" r="3" fill="white" opacity="0.8"/>
                    <circle cx="60" cy="40" r="1.5" fill="red" opacity="0.5"/>
                    <circle cx="20" cy="60" r="2" fill="white" opacity="0.7"/>
                    <circle cx="40" cy="60" r="1.5" fill="red" opacity="0.5"/>
                    <circle cx="60" cy="60" r="2.5" fill="white" opacity="0.6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#complexDots)" className="animate-pulse" />
              </svg>
              
              {/* Dynamic Dotted Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="25%" x2="100%" y2="25%" stroke="white" strokeWidth="3" strokeDasharray="8,12" opacity="0.6" className="animate-pulse"/>
                <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="red" strokeWidth="3" strokeDasharray="6,10" opacity="0.5" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <line x1="25%" y1="0%" x2="25%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="5,15" opacity="0.5" className="animate-pulse" style={{animationDelay: '2s'}}/>
                <line x1="75%" y1="0%" x2="75%" y2="100%" stroke="red" strokeWidth="2" strokeDasharray="4,8" opacity="0.4" className="animate-pulse" style={{animationDelay: '3s'}}/>
              </svg>
              
              {/* Large Moving Circles */}
              <div className="absolute top-1/4 right-1/4 w-24 h-24 border-3 border-white rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-18 h-18 border-3 border-red-400 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
            </div>
          </div>
          {/* Priority Image */}
          <div className={`relative transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-96 overflow-hidden shadow-2xl border-2 border-gray-200">
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('/community/Cricket.png')`,
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-wide">
                  Community Unity
                </span>
              </div>
            </div>
          </div>

          {/* Priority Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-black text-white">
              PRIORITIES FOR
              <span className="text-red-600 block">BRAMPTON'S FUTURE</span>
            </h3>
            
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                <strong>Public Safety:</strong> Strengthening public safety through collaboration with law enforcement 
                and community groups to create safer neighborhoods for all residents.
              </p>
              
              <p>
                <strong>Youth Programs:</strong> Supporting youth programs through community hubs and recreation, 
                ensuring young people have access to extracurricular activities.
              </p>

              <p>
                <strong>Transparent Communication:</strong> Continuously improving communication with residents 
                to ensure transparency in decision-making processes and government accountability.
              </p>
            </div>
          </div>
        </div>

        {/* Political Impact Quote */}
        <div className={`mt-10 text-center transition-all duration-1000 ease-out delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-lg md:text-xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            "Rod will continue to focus on strengthening public safety, supporting youth programs, 
            ensuring transparent communication, and engaging all community groups to make sure 
            <span className="text-white">every voice is heard</span> in our diverse Brampton community."
          </blockquote>
          <cite className="block text-white text-base mt-4">- Rod Power, City Councillor</cite>
        </div>
      </div>
    </section>
  );
};

export default BioPoliticalSection; 