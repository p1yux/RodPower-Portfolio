'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const images = [
    { src: '/community/brampton.png', alt: 'Brampton Community' },
    { src: '/community/athlete.png', alt: 'Horse Community Event' },
    { src: '/community/varcam.png', alt: 'Community Gathering' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageError = (index, src) => {
    console.log(`Image failed to load: ${src}`);
    setImageLoadErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ABOUT <span className="text-red-600">ROD POWER</span>
          </h2>
          <div className="w-24 h-1 bg-red-600"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Animated Images */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-red-100 shadow-2xl overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {!imageLoadErrors[index] ? (
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={() => handleImageError(index, image.src)}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                      <div className="text-center p-8">
                        <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-sm">Image not found</p>
                        <p className="text-gray-400 text-xs">{image.src}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg pointer-events-none"></div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Debug info - remove in production */}
            {/* <div className="mt-4 text-sm text-gray-500">
              <p>Current image: {currentImageIndex + 1} of {images.length}</p>
              <p>Image: {images[currentImageIndex].src}</p>
              {Object.keys(imageLoadErrors).length > 0 && (
                <p className="text-red-500">Failed images: {Object.keys(imageLoadErrors).join(', ')}</p>
              )}
            </div> */}
          </div>

          {/* Right Column - Content */}
          <div className="h-96 md:h-[500px] flex flex-col justify-between">
            <div className="space-y-10">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">A Proud Bramptonian</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Rod Power is a proud Bramptonian, who has called Brampton home for more than 35 years. 
                  Like for so many of you, Brampton holds a special place in his heart – not only for our 
                  proud past, but for the bright future that lies ahead.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Athletic Foundation</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Growing up in the "H" section of Bramalea, Rod was an active community member focused on sports. 
                  He was a prominent member of the Chinguacousy Soccer Club, being named to multiple All-Star teams, 
                  and the Bramalea Boxing Club where he won gold in the Provincial Championships.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Professional Excellence</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Before entering politics, Rod had a substantial career focused on workforce development and planning, 
                  particularly in the learning and development sector. He is known as an award-winning leader with a 
                  strong background in operations management, mentoring, coaching, sales, and leadership.
                </p>
              </div>

              {/* <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Entrepreneurial Spirit</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Rod has also had 4 start-up businesses in the fields of IT development and HR. This experience has 
                  equipped him with the skills necessary for strategic planning, problem-solving, and community engagement, 
                  all of which are essential for his role as a city Councillor in Brampton.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 