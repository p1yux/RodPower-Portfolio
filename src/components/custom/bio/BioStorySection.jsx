'use client'
import { useState, useEffect, useRef } from 'react';

const BioStorySection = () => {
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

  const storyItems = [
    {
      icon: '🏠',
      title: 'Bramalea Roots',
      description: 'Growing up in the "H" section of Bramalea, Rod developed deep connections to his community and neighbors that last to this day.',
      delay: 200
    },
    {
      icon: '⚽',
      title: 'Soccer Excellence',
      description: 'As a prominent member of the Chinguacousy Soccer Club, Rod was named to multiple All-Star teams, showcasing his dedication and talent.',
      delay: 400
    },
    {
      icon: '🥊',
      title: 'Boxing Champion',
      description: 'At the Bramalea Boxing Club, Rod won gold in the Provincial Championships, demonstrating his competitive spirit and determination.',
      delay: 600
    },
    {
      icon: '🏈',
      title: 'Multi-Sport Athlete',
      description: 'Throughout middle school and high school, Rod excelled in wrestling and football, understanding the value of teamwork and perseverance.',
      delay: 800
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-blue-600 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide">
              Early Life & Athletics
            </span>
          </div>
          <h2 className={`text-xl md:text-6xl font-black text-gray-900 mt-6 mb-4 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            BUILDING CHARACTER THROUGH
            <span className="text-white block">COMMUNITY & SPORT</span>
          </h2>
          <p className={`text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Rod's formative years in Bramalea shaped his understanding of community, competition, 
            and the power of sport to bring people together and build character.
          </p>
        </div>

        {/* Story Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {storyItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div> */}

        {/* Family Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-900 p-10 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Large Animated Dots */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-20 left-32 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-32 left-16 w-6 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-16 right-20 w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-40 right-10 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-20 left-20 w-5 h-5 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
              <div className="absolute bottom-32 right-32 w-6 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              <div className="absolute bottom-10 right-16 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-white rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
              <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '4.5s'}}></div>
              
              {/* Dotted Lines Pattern */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dottedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.6"/>
                    <circle cx="30" cy="10" r="1" fill="red" opacity="0.4"/>
                    <circle cx="50" cy="10" r="1.5" fill="white" opacity="0.6"/>
                    <circle cx="10" cy="30" r="1" fill="red" opacity="0.4"/>
                    <circle cx="30" cy="30" r="2" fill="white" opacity="0.7"/>
                    <circle cx="50" cy="30" r="1" fill="red" opacity="0.4"/>
                    <circle cx="10" cy="50" r="1.5" fill="white" opacity="0.6"/>
                    <circle cx="30" cy="50" r="1" fill="red" opacity="0.4"/>
                    <circle cx="50" cy="50" r="1.5" fill="white" opacity="0.6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dottedGrid)" className="animate-pulse" />
              </svg>
              
              {/* Connecting Dotted Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="white" strokeWidth="2" strokeDasharray="4,8" opacity="0.5" className="animate-pulse"/>
                <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="red" strokeWidth="2" strokeDasharray="6,6" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <line x1="20%" y1="10%" x2="80%" y2="90%" stroke="white" strokeWidth="1.5" strokeDasharray="3,9" opacity="0.6" className="animate-pulse" style={{animationDelay: '2s'}}/>
              </svg>
            </div>
          </div>
          {/* Family Image */}
          <div className={`relative transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-96 overflow-hidden shadow-2xl border-2 border-gray-200 ">
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('/community/canada.png')`,
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-wide">
                  Family Values
                </span>
              </div>
            </div>
          </div>

          {/* Family Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-black text-white">
              BUILDING A FAMILY IN
              <span className="text-red-600 block">BRAMPTON</span>
            </h3>
            
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                Rod met his wife here in Brampton, cementing his connection to the community 
                in the most personal way possible. Together, they raised three children, all 
                of whom were born at Peel Memorial Hospital.
              </p>
              
              <p>
                This experience as a father and husband deepened Rod's understanding of what 
                families need from their community - quality healthcare, safe neighborhoods, 
                recreational opportunities, and excellent schools.
              </p>
            </div>

            {/* Family Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-black text-red-600 mb-1">3</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Children</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-red-600 mb-1">1</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Hospital</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-red-600 mb-1">35+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Years Together</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Sports Impact Quote */}
        <div className={`mt-10 text-center transition-all duration-1000 ease-out delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-lg md:text-xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            "It is not lost on me the value of sport growing up and the many past and current 
            residents who have put <span className="text-white">Brampton on the map globally</span> through sport."
          </blockquote>
          <cite className="block text-white text-base mt-4">- Rod Power</cite>
        </div>
      </div>
    </section>
  );
};

export default BioStorySection; 