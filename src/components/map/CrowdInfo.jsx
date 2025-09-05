import React from 'react';

const crowdData = [
  { id: 1, name: 'Mahakaleshwar Temple', count: 5000, level: 'high', color: 'bg-red-500' },
  { id: 2, name: 'Ram Ghat', count: 1500, level: 'medium', color: 'bg-orange-500' },
  { id: 3, name: 'Haridwar Ghat', count: 500, level: 'low', color: 'bg-green-500' },
  { id: 4, name: 'Kumbh Mela Grounds', count: 8000, level: 'high', color: 'bg-red-500' },
  { id: 5, name: 'Kal Bhairav Temple', count: 1000, level: 'medium', color: 'bg-orange-500' },
];

const CrowdInfo = () => {
  const totalCrowd = crowdData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-text/primary">Crowd Information</h3>
      
      <div className="flex justify-between items-center border-b pb-2 mb-2 text-sm font-medium text-text/secondary">
        <span className="w-1/2">Location</span>
        <span className="w-1/4 text-center">Level</span>
        <span className="w-1/4 text-right">Count</span>
      </div>

      <div className="space-y-3">
        {crowdData.map(location => (
          <div key={location.id} className="flex justify-between items-center">
            <div className="flex items-center w-1/2">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              <span className="text-sm text-text/primary">{location.name}</span>
            </div>
            <div className="flex items-center justify-center w-1/4">
              <span className={`w-3 h-3 rounded-full mr-1 ${location.color}`}></span>
              <span className="text-xs text-text/secondary">{location.level.charAt(0).toUpperCase() + location.level.slice(1)}</span>
            </div>
            <span className="text-sm font-medium text-text/primary w-1/4 text-right">{location.count}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 mt-3 flex justify-between items-center text-base font-semibold text-text/primary">
        <span>Total Crowd:</span>
        <span>{totalCrowd}</span>
      </div>
    </div>
  );
};

export default CrowdInfo;
