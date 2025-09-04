import React from 'react';
import ReportMissingPerson from './lostfound/ReportMissingPerson';
import MissingPersonsList from './lostfound/MissingPersonsList';
import LostFoundEmergencyContacts from './lostfound/LostFoundEmergencyContacts';

const LostAndFoundPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-background/card shadow-md">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Missing Persons in Ujjain</h1>
            <p className="text-text/secondary">Report missing persons or find information about missing individuals during Kumbh Mela</p>
          </div>
        </div>
      </div>
      
      <div id="main-content" className="flex-grow p-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportMissingPerson />
          <div>
            <MissingPersonsList />
            <LostFoundEmergencyContacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundPage;