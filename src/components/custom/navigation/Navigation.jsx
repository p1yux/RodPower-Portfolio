'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-lg">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side - Menu icon and navigation */}
            <div className="flex items-center space-x-8">
              {/* Menu icon */}
              <button
                onClick={handleToggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 text-gray-700 hover:text-red-600 hover:bg-gray-100"
                tabIndex="0"
                aria-label="Main menu"
                aria-expanded={isMenuOpen}
              >
                <svg 
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation items */}
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="/bio" 
                  className="text-gray-900 hover:text-red-600 px-4 py-3 text-base uppercase tracking-wide transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Biography"
                >
                  Bio
                </a>
                <a 
                  href="/DoADeed" 
                  className="text-gray-900 hover:text-red-600 px-4 py-3 text-base uppercase tracking-wide transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Do A Deed"
                >
                  Do A Deed
                </a>
                {/* <a 
                  href="/memories" 
                  className="text-gray-900 hover:text-red-600 px-4 py-3 text-base uppercase tracking-wide transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Memories"
                >
                  Memories
                </a> */}
              </div>
            </div>

            {/* Center - Logo/Brand */}
            <div className="flex-shrink-0 mr-40 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex items-center cursor-pointer">
                <span className="text-2xl font-semibold text-gray-700">ROD</span>
                <span className="text-2xl font-semibold ml-1 text-gray-700">POWER</span>
              </div>
            </div>

            {/* Right side - Support Button & Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/rodpowerbrampton/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/rodpowerbrampton" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/RodPower7_8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-base transition-all duration-300 transform hover:scale-105 shadow-md">
                SUPPORT
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-out menu with proper animation */}
      <div className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-20 left-0 z-50 w-80 h-[calc(100vh-5rem)] bg-white shadow-xl transform transition-transform duration-300 ease-in-out`}>
            {/* Menu items */}
            <div className="py-6">
              <a 
                href="/" 
                className="block px-6 py-4 text-lg font-bold uppercase tracking-wide text-red-600 hover:text-red-700 hover:bg-gray-50 transition-colors duration-300"
                onClick={handleMenuItemClick}
                tabIndex="0"
                aria-label="Home"
              >
                Home
              </a>
              <a 
                href="/bio" 
                className="block px-6 py-4 text-lg font-bold uppercase tracking-wide text-gray-900 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={handleMenuItemClick}
                tabIndex="0"
                aria-label="Biography"
              >
                Bio
              </a>
              <a 
                href="/DoADeed" 
                className="block px-6 py-4 text-lg font-bold uppercase tracking-wide text-gray-900 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={handleMenuItemClick}
                tabIndex="0"
                aria-label="Do A Deed"
              >
                Do A Deed
              </a>
              <a 
                href="/memories" 
                className="block px-6 py-4 text-lg font-bold uppercase tracking-wide text-gray-900 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={handleMenuItemClick}
                tabIndex="0"
                aria-label="Memories"
              >
                Memories
              </a>
              {/* <a 
                href="/contact" 
                className="block px-6 py-4 text-lg font-bold uppercase tracking-wide text-gray-900 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={handleMenuItemClick}
                tabIndex="0"
                aria-label="Contact"
              >
                Contact
              </a> */}
            </div>

            {/* Mobile social links and support button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 text-base transition-all duration-300 mb-4" onClick={() => router.push('/DoADeed')}>
                SUPPORT
              </button>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/rodpowerbrampton/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/rodpowerbrampton" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/RodPower7_8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  tabIndex="0"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )
};

export default Navigation; 