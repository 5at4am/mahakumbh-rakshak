import React from 'react';

const PoliceEmergency = () => {
  return (
    <div className="bg-background/card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-danger/10 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-text/primary">Police Emergency</h2>
      </div>
      <p className="text-text/secondary mb-4">
        For immediate police assistance during the Kumbh Mela
      </p>
      <button className="bg-danger hover:bg-danger/90 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full shadow-md">
        Call 100
      </button>
    </div>
  );
};

export default PoliceEmergency;