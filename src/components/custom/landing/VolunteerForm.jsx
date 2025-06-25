'use client';
import { useState, useEffect } from 'react';

const VolunteerForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="volunteer-form" className={`bg-white p-6 shadow-2xl max-w-md border-t-4 border-red-600 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h3 className={`text-2xl font-black text-gray-900 text-center mb-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        Join the Movement
      </h3>
      <p className={`text-center text-gray-600 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        Enter your email to volunteer and help make a difference in Brampton.
      </p>
      <form className="space-y-4">
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <label htmlFor="volunteer-email" className="block text-sm font-bold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="volunteer-email"
            name="email"
            className="w-full px-3 py-2 text-gray-700 text-sm bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300"
            placeholder="example@example.com"
          />
        </div>
        <div className={`text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full"
          >
            VOLUNTEER NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm; 