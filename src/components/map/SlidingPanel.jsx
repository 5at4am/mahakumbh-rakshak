import React from 'react';

const SlidingPanel = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ width: '300px' }}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700">Your Location</label>
            <input type="text" id="start" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Getting your location..." />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <input type="text" id="destination" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter destination" />
          </div>
          <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidingPanel;
