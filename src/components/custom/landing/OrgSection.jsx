'use client'
import Image from 'next/image';

const OrgSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            COMMUNITY <span className="text-red-600">ORGANIZATIONS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Rod Power's involvement with various community organizations demonstrates his commitment to serving Brampton
          </p>
        </div> */}

        {/* Organization Image Section */}
        <div>
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[200px] overflow-hidden">
              <Image 
                src="/community/org.png"
                alt="Community Organizations"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                onError={(e) => {
                  console.log('Failed to load organization image');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgSection; 