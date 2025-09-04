import React from 'react';

const SOSPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-background shadow-md">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Emergency SOS</h1>
            <p className="text-text/secondary">Quick access to emergency services in Ujjain</p>
          </div>
        </div>
      </div>
      
      <div id="main-content" className="flex-grow p-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        
        <div className="bg-background/card rounded-xl shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-text/primary mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-background/light transition-colors">
              <div>
                <h3 className="font-medium text-text/primary">Kumbh Mela Organizer</h3>
                <p className="text-sm text-text/secondary">General inquiries</p>
              </div>
              <button className="text-primary hover:text-accent font-medium">Call 1800-123-4567</button>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-background/light transition-colors">
              <div>
                <h3 className="font-medium text-text/primary">Missing Persons</h3>
                <p className="text-sm text-text/secondary">Report missing individuals</p>
              </div>
              <button className="text-primary hover:text-accent font-medium">Call 1800-234-5678</button>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-background/light transition-colors">
              <div>
                <h3 className="font-medium text-text/primary">First Aid Stations</h3>
                <p className="text-sm text-text/secondary">Locations and services</p>
              </div>
              <button className="text-primary hover:text-accent font-medium" onClick={() => window.history.pushState({}, '', '#map')}>View Map</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* SOS FAB Button */}
      <button 
        className="sos-fab"
        aria-label="Emergency SOS"
        title="Emergency SOS"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
};

export default SOSPage;