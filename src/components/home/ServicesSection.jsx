import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Our Services</h2>
      <p className="text-gray-600 text-center mb-8">Your one-stop solution for all Ujjain Kumbh Mela related services</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-primary text-primary-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Map Services</h3>
          <p className="text-gray-600 mb-4">
            Navigate through the religious sites and event locations in Ujjain with our interactive map.
          </p>
          <button 
            className="bg-primary hover:bg-accent text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={() => navigate('/map')}
          >
            View Map
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-danger text-danger-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency SOS</h3>
          <p className="text-gray-600 mb-4">
            Quick access to emergency services during the event. Immediate assistance when you need it most.
          </p>
          <button 
            className="bg-danger hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={() => navigate('/sos')}
          >
            Call for Help
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-success text-success-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Missing Persons</h3>
          <p className="text-gray-600 mb-4">
            Report missing persons or find information about missing individuals during the Kumbh Mela.
          </p>
          <button 
            className="bg-success hover:bg-green-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={() => navigate('/missing')}
          >
            Report Missing Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
