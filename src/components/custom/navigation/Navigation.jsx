'use client'
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-black text-blue-400 ">ROD</span>
              <span className="text-2xl font-black text-blue-400 ml-1">POWER</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                tabIndex="0"
                aria-label="Home"
              >
                Home
              </a>
              <a 
                href="/bio" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                tabIndex="0"
                aria-label="Biography"
              >
                Bio
              </a>
              <a 
                href="/DoADeed" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                tabIndex="0"
                aria-label="Do A Deed"
              >
                Do A Deed
              </a>
              <a 
                href="/memories" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                tabIndex="0"
                aria-label="Memories"
              >
                Memories
              </a>
              <a 
                href="/contact" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                tabIndex="0"
                aria-label="Contact"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Support Button & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/rodpowerbrampton/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                tabIndex="0"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/rodpowerbrampton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                tabIndex="0"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/RodPower7_8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                tabIndex="0"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 text-sm transition-all duration-300 transform hover:scale-105 shadow-md">
              SUPPORT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a 
            href="/" 
            className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-bold uppercase tracking-wide"
            onClick={handleMenuItemClick}
            tabIndex="0"
            aria-label="Home"
          >
            Home
          </a>
          <a 
            href="/bio" 
            className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-bold uppercase tracking-wide"
            onClick={handleMenuItemClick}
            tabIndex="0"
            aria-label="Biography"
          >
            Bio
          </a>
          <a 
            href="/DoADeed" 
            className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-bold uppercase tracking-wide"
            onClick={handleMenuItemClick}
            tabIndex="0"
            aria-label="Do A Deed"
          >
            Do A Deed
          </a>
          <a 
            href="/memories" 
            className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-bold uppercase tracking-wide"
            onClick={handleMenuItemClick}
            tabIndex="0"
            aria-label="Memories"
          >
            Memories
          </a>
          <a 
            href="/contact" 
            className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-bold uppercase tracking-wide"
            onClick={handleMenuItemClick}
            tabIndex="0"
            aria-label="Contact"
          >
            Contact
          </a>
          <div className="px-3 py-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300">
              SUPPORT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 