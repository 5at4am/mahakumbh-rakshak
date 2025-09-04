import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-8 mb-8 text-white relative overflow-hidden">
      {/* Main Background Image with Blur and Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-[2px]"
        style={{ 
          backgroundImage: "url('/img/img3.3.png')",
          zIndex: 1
        }}
      ></div>
      
      {/* Decorative Background Images */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ zIndex: 2 }}>
        <div className="absolute top-4 left-4 w-24 h-24 rounded-full overflow-hidden">
          <img 
            src="/img/img10.png" 
            alt="Decorative" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = '/img/imhq.png'; }}
          />
        </div>
        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full overflow-hidden">
          <img 
            src="/img/img11.1.png" 
            alt="Decorative" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = '/img/imhq.png'; }}
          />
        </div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full overflow-hidden">
          <img 
            src="/img/img12.png" 
            alt="Decorative" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = '/img/imhq.png'; }}
          />
        </div>
      </div> */}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl text-[#B94E2A] md:text-5xl font-bold mb-4">Ujjain Kumbh Mela</h1>
        <p className="text-xl md:text-2xl text-[#B94E2A] mb-6">A Sacred Journey of Spirituality & Divinity</p>
        <p className="text-lg mb-8 max-w-3xl text-[#B94E2A] mx-auto">
          Experience one of the world's largest spiritual gatherings at the banks of the sacred Kshipra River
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => navigate('/map')}
          >
            Explore Sacred Sites
          </button>
          <button 
            className="bg-danger hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => navigate('/sos')}
          >
            Emergency Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;