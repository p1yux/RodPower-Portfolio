'use client'
import { useState, useEffect, useRef } from 'react';

const DoADeedForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    background: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks for submitting! We\'ll be in touch soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        background: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-6">
            PUT A SMILE ON
            <span className="text-red-600"> SOMEONE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below, if you know someone who can use a smile
          </p>
        </div>

        {/* Form */}
        <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
            
            {/* Success Message */}
            {submitMessage && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 text-gray-900"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 text-gray-900"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 text-gray-900"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 text-gray-900"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Background Field */}
              <div>
                <label htmlFor="background" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Give us the background *
                </label>
                <textarea
                  id="background"
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 text-gray-900 resize-vertical"
                  placeholder="Tell us about the person or situation that could use some kindness. The more details you provide, the better we can help make a difference."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 px-12 text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:shadow-md"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Send'
                  )}
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Disclaimer:</strong> Please note that this platform does not facilitate any monetary 
                transactions or transfers, and we do not hold any goods or products. We are not liable for 
                any financial or product-related transactions conducted outside of our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className={`mt-20 transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('/community/award.png')`,
                backgroundPosition: 'center 40%'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
                Community Impact
              </span>
              <h3 className="text-2xl font-bold mt-2">Making Brampton Brighter</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoADeedForm; 