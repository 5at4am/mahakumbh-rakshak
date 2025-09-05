import React, { useState } from 'react';

const SlidingPanel = ({ onShowRoute }) => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleGetMyLocation = () => {
    setStartLocation('23.1793, 75.7857 (Ujjain)');
  };

  const handleGetDirections = () => {
    if (onShowRoute && startLocation && destination) {
      const dummyRoute = [
        [23.1793, 75.7857],
        [23.1800, 75.7860],
        [23.1810, 75.7870],
        [23.1820, 75.7880],
        [23.1830, 75.7890]
      ];
      onShowRoute(dummyRoute);
    }
  };

  return (
    <div 
      className="bg-white shadow-lg"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700">Your Location</label>
            <input 
              type="text" 
              id="start" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Getting your location..." 
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
            <button 
              onClick={handleGetMyLocation} 
              className="mt-2 w-full bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 text-sm"
            >
              Get My Location
            </button>
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <input 
              type="text" 
              id="destination" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Enter destination" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <button 
            onClick={handleGetDirections} 
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          >
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidingPanel;
