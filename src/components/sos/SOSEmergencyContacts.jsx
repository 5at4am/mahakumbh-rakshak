import React from 'react';

const SOSEmergencyContacts = () => {
  return (
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
  );
};

export default SOSEmergencyContacts;