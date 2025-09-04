import React from 'react';

const crowdData = [
  { id: 1, name: 'Mahakaleshwar Temple', count: 5000, level: 'high', color: 'bg-red-500' },
  { id: 2, name: 'Ram Ghat', count: 1500, level: 'medium', color: 'bg-orange-500' },
  { id: 3, name: 'Haridwar Ghat', count: 500, level: 'low', color: 'bg-green-500' },
  { id: 4, name: 'Kumbh Mela Grounds', count: 8000, level: 'high', color: 'bg-red-500' },
  { id: 5, name: 'Kal Bhairav Temple', count: 1000, level: 'medium', color: 'bg-orange-500' },
];

const CrowdInfo = () => {
  return (
    <div className="absolute top-20 left-4 bg-white p-4 rounded-lg shadow-lg z-10 w-64">
      <h3 className="text-lg font-semibold mb-3">Crowd Information</h3>
      <div className="space-y-2">
        {crowdData.map(location => (
          <div key={location.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${location.color}`}></span>
              <span className="text-sm text-gray-700">{location.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{location.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrowdInfo;
