import React from 'react';

const MedicalEmergency = () => {
  return (
    <div className="bg-background/card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-danger/10 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-text/primary">Medical Emergency</h2>
      </div>
      <p className="text-text/secondary mb-4">
        For immediate medical assistance during the Kumbh Mela
      </p>
      <button className="bg-danger hover:bg-danger/90 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full shadow-md">
        Call 102
      </button>
    </div>
  );
};

export default MedicalEmergency;