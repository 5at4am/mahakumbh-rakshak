import React from 'react';
import MedicalEmergency from './sos/MedicalEmergency';
import PoliceEmergency from './sos/PoliceEmergency';
import SOSEmergencyContacts from './sos/SOSEmergencyContacts';
import SOSFAB from './sos/SOSFAB';

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
          <MedicalEmergency />
          <PoliceEmergency />
        </div>
        
        <SOSEmergencyContacts />
      </div>
      
      <SOSFAB />
    </div>
  );
};

export default SOSPage;