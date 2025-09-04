import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Sacred Ujjain Kumbh Mela</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 mb-4 text-lg">
            The Ujjain Kumbh Mela is one of Hinduism's four sacred gatherings, held every 12 years at the banks of the Kshipra River in Ujjain, Madhya Pradesh.
          </p>
          <p className="text-gray-700 mb-4">
            This ancient spiritual congregation attracts millions of devotees, sadhus, and tourists from around the world. Ujjain is considered one of the seven sacred cities (Sapta Puri) in Hinduism and is home to the Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas dedicated to Lord Shiva.
          </p>
          <div className="bg-background rounded-lg p-4 mt-6">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
              Spiritual Significance
            </h3>
            <p className="text-gray-700">
              The Kumbh Mela in Ujjain holds special significance as it occurs when Jupiter enters Leo (Simha Rashi), making it one of the most auspicious Kumbh Melas.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-2xl w-full h-80 overflow-hidden shadow-lg">
            <img 
              src="/img/img1.png" 
              alt="Ujjain Kumbh Mela" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;