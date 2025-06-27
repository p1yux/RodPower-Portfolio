'use client'
import { useState, useEffect, useRef } from 'react';

const MoreInfo = () => {
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

  const infoCards = [
    {
      title: "Community Engagement",
      description: "Rod Power is dedicated to public safety, community programs, and engaging with residents. Working for a stronger, safer, and more connected Brampton."
    },
    {
      title: "Do A Deed Initiative",
      description: "Spreading kindness and putting smiles on faces in Brampton. Submit a request for someone who could use a pick-me-up or special experience."
    },
    {
      title: "Proven Leadership",
      description: "Award-winning leader with extensive experience in operations management, mentoring, coaching, and community development. Ready to serve Brampton."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 border-2  p-10 gap-12">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
