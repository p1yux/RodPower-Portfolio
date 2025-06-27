'use client'

import { useState, useEffect, useRef } from 'react';

const SupportSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const supportItems = [
    {
      title: "Community Advocacy",
      description: "Fighting for residents' voices in city council decisions, ensuring community concerns are heard and addressed effectively.",
      backgroundImage: "/community/brampton.png"
    },
    {
      title: "Resident Services",
      description: "Providing direct assistance with municipal issues, from permit applications to bylaw concerns and city service inquiries.",
      backgroundImage: "/community/athlete.png"
    },
    {
      title: "Neighborhood Safety",
      description: "Working with law enforcement and community groups to enhance public safety through strategic initiatives and partnerships.",
      backgroundImage: "/community/varcam.png"
    },
    {
      title: "Youth & Family Programs",
      description: "Supporting families through community programs, youth initiatives, and recreational opportunities that strengthen our neighborhoods.",
      backgroundImage: "/community/ArtExhibit.png",
      featured: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light text-white mb-4 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Community <span className=" text-red-400">Support</span>
          </h2>
          <div className={`w-24 h-1 bg-red-600 mx-auto mb-6 transition-all duration-1000 ease-out delay-200 ${isInView ? 'scale-x-100' : 'scale-x-0'}`}></div>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive support services to strengthen our community and build a better Brampton for everyone.
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportItems.map((item, index) => (
            <div 
              key={index}
              className={`group ${item.featured ? 'md:col-span-2 lg:col-span-1' : ''} transition-all duration-800 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${400 + (index * 150)}ms` 
              }}
            >
              <div className={`relative h-80 overflow-hidden shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 ${
                item.featured ? 'transform rotate-6 group-hover:rotate-3' : ''
              }`}>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.backgroundImage}')`
                  }}
                ></div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  item.featured 
                    ? 'bg-red-600/80 group-hover:bg-red-600/95' 
                    : 'bg-black/40 group-hover:bg-black/80'
                }`}></div>
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                  {/* Title - Visible by default, hidden on hover */}
                  <h3 className={`text-2xl font-bold leading-tight transition-all duration-500 transform ${
                    item.featured ? 'text-white' : 'text-white'
                  } group-hover:opacity-0 group-hover:-translate-y-4`}>
                    {item.title}
                  </h3>
                  
                  {/* Description - Hidden by default, visible on hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className={`text-white leading-relaxed text-center ${
                      item.featured ? 'text-white' : 'text-white'
                    }`}>
                      {item.description}
                    </p>
                    
                    {/* Featured Card Button */}
                    {/* {item.featured && (
                      <div className="mt-6">
                        <button className="border-2 border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        {/* <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ease-out delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">35+</div>
            <div className="text-white/70">Years in Brampton</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
            <div className="text-white/70">Residents Helped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-white/70">Community Support</div>
          </div>
        </div> */}

        {/* Bottom Call-to-Action */}
        <div className="text-center">
          <div className={`mb-8 transition-all duration-1000 ease-out delay-1200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/80 text-xl max-w-5xl mx-auto leading-relaxed">
              "Together, we can build a stronger, safer, and more prosperous Brampton. 
              Every voice matters, every concern is valid, and every resident deserves dedicated support."
            </p>
            <p className="text-red-400 font-medium mt-4">- Rod Power, City Councillor</p>
          </div>
          
          {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-1300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              Contact Rod
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 