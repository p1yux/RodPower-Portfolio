'use client'

import Image from 'next/image';

const PlatformSection = () => {
  const platformItems = [
    {
      title: "PUBLIC SAFETY",
      description: "Collaborating with law enforcement and community groups to create safer neighborhoods for all residents."
    },
    {
      title: "YOUTH PROGRAMS",
      description: "Supporting community hubs and recreation to ensure young people have access to activities that contribute to their development and future success."
    },
    {
      title: "TRANSPARENT COMMUNICATION",
      description: "Continuously improving communication with residents to ensure transparency in decision-making processes."
    },
    {
      title: "COMMUNITY ENGAGEMENT",
      description: "Increasing efforts to engage diverse community groups, including marginalized and underrepresented populations to ensure all voices are heard."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ROD'S <span className="text-red-600">PLATFORM</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Rod will continue to focus on the issues that matter most to Brampton residents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {platformItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-6">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Newspaper Image Section */}
        <div className="mt-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[1000px]">
              <Image 
                src="/community/newspaper.png"
                alt="Community Newspaper Coverage"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                onError={(e) => {
                  console.log('Failed to load newspaper image');
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

export default PlatformSection; 