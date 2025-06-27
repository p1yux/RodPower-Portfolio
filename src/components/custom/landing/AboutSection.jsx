'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const cards = [
    { 
      src: '/community/brampton.png', 
      alt: 'Brampton Community',
      title: 'A Proud Bramptonian',
      description: 'Rod Power is a proud Bramptonian, who has called Brampton home for more than 35 years. Like for so many of you, Brampton holds a special place in his heart – not only for our proud past, but for the bright future that lies ahead.'
    },
    { 
      src: '/community/athlete.png', 
      alt: 'Athletic Foundation',
      title: 'Athletic Foundation',
      description: 'Growing up in the "H" section of Bramalea, Rod was an active community member focused on sports. He was a prominent member of the Chinguacousy Soccer Club, being named to multiple All-Star teams, and the Bramalea Boxing Club where he won gold in the Provincial Championships.'
    },
    { 
      src: '/community/varcam.png', 
      alt: 'Professional Excellence',
      title: 'Professional Excellence',
      description: 'Before entering politics, Rod had a substantial career focused on workforce development and planning, particularly in the learning and development sector. He is known as an award-winning leader with a strong background in operations management, mentoring, coaching, sales, and leadership.'
    }
  ];

  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

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
            threshold: 0.1
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

  const handleImageError = (index, src) => {
    console.log(`Image failed to load: ${src}`);
    setImageLoadErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section ref={sectionRef} className="pb-20 pt-20 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center-aligned title */}
        <div className={` mb-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ABOUT <span className="text-red-600">ROD POWER</span>
          </h2>
          <div className={`w-24 h-1 bg-red-600 transition-all duration-1000 ease-out delay-200 ${isInView ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Three vertical cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                {!imageLoadErrors[index] ? (
                  <Image 
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => handleImageError(index, card.src)}
                    priority={index === 0}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <div className="text-center p-8">
                      <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 text-sm">Image not found</p>
                      <p className="text-gray-400 text-xs">{card.src}</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Text content that appears on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 