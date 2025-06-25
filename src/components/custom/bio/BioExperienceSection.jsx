'use client'
import { useState, useEffect, useRef } from 'react';

const BioExperienceSection = () => {
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

  const experienceAreas = [
    {
      title: 'Workforce Development',
      description: 'Substantial career focused on workforce development and planning, with deep expertise in building effective teams and organizational structures.',
      backgroundImage: '/community/org.png',
      delay: 200
    },
    {
      title: 'Learning & Development',
      description: 'Specializing in the learning and development sector, creating programs that empower individuals and organizations to reach their potential.',
      backgroundImage: '/community/award.png',
      delay: 400
    },
    {
      title: 'Operations Management',
      description: 'Strong background in operations management, optimizing processes and leading teams to achieve exceptional results.',
      backgroundImage: '/community/brampton.png',
      delay: 600
    },
    {
      title: 'Leadership & Coaching',
      description: 'Award-winning leader with extensive experience in mentoring, coaching, and developing the next generation of professionals.',
      backgroundImage: '/community/athlete.png',
      featured: true,
      delay: 800
    }
  ];

  const startupAchievements = [
    {
      field: 'IT Development',
      companies: '2 Companies',
      focus: 'Technology Solutions',
      delay: 1000
    },
    {
      field: 'Human Resources',
      companies: '2 Companies',
      focus: 'People & Talent',
      delay: 1200
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-light text-white mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Professional <span className=" text-red-400">Experience</span>
          </h2>
          <div className={`w-24 h-1 bg-red-600 mx-auto mb-6 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Building businesses, developing talent, and creating value through strategic leadership 
            and entrepreneurial vision across multiple industries.
          </p>
        </div>

        {/* Experience Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experienceAreas.map((area, index) => (
            <div 
              key={index}
              className={`group ${area.featured ? 'md:col-span-2 lg:col-span-1' : ''} transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${400 + (index * 150)}ms` 
              }}
            >
              <div className={`relative h-80 overflow-hidden shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 ${
                area.featured ? 'transform rotate-6 group-hover:rotate-3' : ''
              }`}>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${area.backgroundImage}')`
                  }}
                ></div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  area.featured 
                    ? 'bg-red-600/80 group-hover:bg-red-600/95' 
                    : 'bg-black/40 group-hover:bg-black/80'
                }`}></div>
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                  {/* Title - Visible by default, hidden on hover */}
                  <h3 className={`text-2xl font-bold leading-tight transition-all duration-500 transform ${
                    area.featured ? 'text-white' : 'text-white'
                  } group-hover:opacity-0 group-hover:-translate-y-4`}>
                    {area.title}
                  </h3>
                  
                  {/* Description - Hidden by default, visible on hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className={`text-white leading-relaxed text-center ${
                      area.featured ? 'text-white' : 'text-white'
                    }`}>
                      {area.description}
                    </p>
                    
                    {/* Featured Card Button */}
                    {area.featured && (
                      <div className="mt-6">
                        <button className="border-2 border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Entrepreneurship Section */}
        {/* <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-lg p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className={`text-3xl md:text-4xl font-black mb-6 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              ENTREPRENEURIAL SPIRIT
            </h3>
            <p className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Rod's entrepreneurial journey spans four start-up businesses across IT development 
              and HR sectors, demonstrating his ability to identify opportunities, build teams, 
              and create value in competitive markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupAchievements.map((startup, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${startup.delay}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold">{startup.field}</h4>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {startup.companies}
                  </span>
                </div>
                <p className="text-white/80">{startup.focus}</p>
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 transition-all duration-1000 ease-out delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">4</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Start-up Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">2</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">Award</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Winning Leader</div>
            </div>
          </div>
        </div> */}

        {/* Bottom Call-to-Action */}
        <div className="text-center">
          <div className={`mb-8 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              "My extensive business experience has equipped me with essential skills for 
              effective governance: strategic planning, problem-solving, and community engagement 
              that translate directly to public service."
            </p>
            <p className="text-red-400 font-medium mt-4">- Rod Power, Award-Winning Leader</p>
          </div>
          
          {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BioExperienceSection; 