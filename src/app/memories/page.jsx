'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const MemoriesPage = () => {
  const [isInView, setIsInView] = useState(false);
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const sectionRef = useRef(null);

  const memoryImages = [
    {
      src: '/community/ArtExhibit.png',
      alt: 'Art Exhibit',
      title: 'Community Art Exhibition',
      description: 'Celebrating local artists and creativity in Brampton'
    },
    {
      src: '/community/athlete.png',
      alt: 'Community Athletes',
      title: 'Athletic Excellence',
      description: 'Supporting our local sports champions'
    },
    {
      src: '/community/award.png',
      alt: 'Community Awards',
      title: 'Recognition & Awards',
      description: 'Honoring outstanding community contributions'
    },
    {
      src: '/community/brampton.png',
      alt: 'Beautiful Brampton',
      title: 'Our Beautiful City',
      description: 'Showcasing the beauty of Brampton'
    },
    {
      src: '/community/canada.png',
      alt: 'Canadian Pride',
      title: 'Canadian Heritage',
      description: 'Celebrating our Canadian identity'
    },
    {
      src: '/community/Cricket.png',
      alt: 'Cricket Community',
      title: 'Cricket in Brampton',
      description: 'Our vibrant cricket community'
    },
    {
      src: '/community/doadeed.png',
      alt: 'Do A Deed Initiative',
      title: 'Do A Deed Moments',
      description: 'Spreading kindness throughout the community'
    },
    {
      src: '/community/Horse.png',
      alt: 'Community Events',
      title: 'Community Gatherings',
      description: 'Bringing neighbors together'
    },
    {
      src: '/community/newspaper.png',
      alt: 'Media Coverage',
      title: 'In the News',
      description: 'Community stories making headlines'
    },
    {
      src: '/community/org.png',
      alt: 'Organizations',
      title: 'Community Organizations',
      description: 'Working with local groups and associations'
    },
    {
      src: '/community/varcam.png',
      alt: 'Community Meetings',
      title: 'Community Engagement',
      description: 'Meeting with residents and stakeholders'
    },
    {
      src: '/community/accessibility.png',
      alt: 'Accessibility Initiatives',
      title: 'Accessibility for All',
      description: 'Making Brampton accessible for everyone'
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

  const handleImageClick = (memory, index) => {
    setSelectedImage({ ...memory, index });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes pulseSubtle {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.02); 
            opacity: 0.9; 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        
        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .break-inside-avoid {
          break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
      
      <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            COMMUNITY <span className="text-red-600">MEMORIES</span>
          </h1>

          <div className="w-24 h-1 bg-red-600 mt-6"></div>
        </div>

        {/* Images Grid */}
        <div ref={sectionRef} className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {memoryImages.map((memory, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer break-inside-avoid mb-6 ${
                isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              } ${
                imageLoaded[index] ? 'animate-pulse-subtle' : ''
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 200}ms`
              }}
              onClick={() => handleImageClick(memory, index)}
              onKeyDown={(e) => e.key === 'Enter' && handleImageClick(memory, index)}
              tabIndex={0}
              role="button"
              aria-label={`View ${memory.title} in full size`}
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden">
                {!imageLoadErrors[index] ? (
                  <Image 
                    src={memory.src}
                    alt={memory.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={() => handleImageError(index, memory.src)}
                    onLoad={() => handleImageLoad(index)}
                    priority={index < 4}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                    <div className="text-center p-8">
                      <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 text-sm">Image not found</p>
                      <p className="text-gray-400 text-xs">{memory.src}</p>
                    </div>
                  </div>
                )}
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Enhanced Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 drop-shadow-lg">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 drop-shadow-md">
                    {memory.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-7xl max-h-[90vh] mx-4 animate-scaleIn">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-300 z-10"
                aria-label="Close image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative bg-white shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                  priority
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">
                    {selectedImage.title}
                  </h2>
                  <p className="text-lg drop-shadow-md">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex = selectedImage.index > 0 ? selectedImage.index - 1 : memoryImages.length - 1;
                  setSelectedImage({ ...memoryImages[prevIndex], index: prevIndex });
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-300 bg-black/30 rounded-full p-3 hover:bg-black/50"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex = selectedImage.index < memoryImages.length - 1 ? selectedImage.index + 1 : 0;
                  setSelectedImage({ ...memoryImages[nextIndex], index: nextIndex });
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-300 bg-black/30 rounded-full p-3 hover:bg-black/50"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-600 mb-8">
            These memories represent the heart of our community - moments of joy, achievement, and connection that make Brampton special.
          </p>

        </div>
      </div>
    </main>
    </>
  );
};


export default MemoriesPage;
