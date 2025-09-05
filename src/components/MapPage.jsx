import React, { useState } from 'react';
import MapView from './map/MapView';
import MapLegend from './map/MapLegend';
import SlidingPanel from './map/SlidingPanel';
import CrowdInfo from './map/CrowdInfo';

const MapPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState([23.1793, 75.7857]);
  // eslint-disable-next-line no-unused-vars
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: [23.1828, 75.7683],
      title: 'Mahakaleshwar Jyotirlinga',
      description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva',
      type: 'religious'
    },
    {
      id: 2,
      position: [23.1793, 75.7849],
      title: 'Kal Bhairav Temple',
      description: 'Dedicated to Kal Bhairav, considered the guardian deity of Ujjain',
      type: 'religious'
    },
    {
      id: 3,
      position: [23.1832, 75.7720],
      title: 'Ram Ghat',
      description: 'Main ghat on the Shipra River where devotees take holy dip during Simhastha',
      type: 'ghat'
    },
    {
      id: 4,
      position: [23.1837, 75.7696],
      title: 'Harsiddhi Temple',
      description: 'One of the 51 Shakti Peethas, dedicated to Goddess Harsiddhi',
      type: 'religious'
    },
    {
      id: 5,
      position: [23.1740, 75.7911],
      title: 'Arji Wale Hanuman Mandir',
      description: 'Famous Hanuman temple where devotees submit petitions (arji) for blessings',
      type: 'religious'
    },
    {
      id: 6,
      position: [23.1825, 75.7729],
      title: 'Gopal Mandir',
      description: 'Krishna temple located in the heart of Ujjain city',
      type: 'religious'
    },
    {
      id: 7,
      position: [23.2091, 75.7732],
      title: 'Siddhwat Temple',
      description: 'Located on the banks of Shipra, believed to fulfill wishes related to child, wealth, and ancestors',
      type: 'religious'
    },
    {
      id: 8,
      position: [23.1648, 75.8186],
      title: 'Kaliadeh Palace',
      description: 'Historic riverside palace on the banks of the Shipra River',
      type: 'heritage'
    },
    {
      id: 9,
      position: [23.1765, 75.7774],
      title: 'Jantar Mantar (Vedh Shala)',
      description: 'Astronomical observatory built by Maharaja Jai Singh II, symbol of Ujjain’s cosmic significance',
      type: 'heritage'
    },
    {
      id: 10,
      position: [23.1770, 75.7885],
      title: 'Missing Person: Jane Smith',
      description: 'Young girl in red dress. Last seen at Ram Ghat.',
      type: 'missing_person'
    }
  ]);

  const [route, setRoute] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Re-introduce state for panel

  const handleShowRoute = (newRoute) => {
    setRoute(newRoute);
  };

  const togglePanel = () => { // Re-introduce toggle function
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    
    <div className="flex flex-col h-screen"> {/* Main container, flex-col */}
      {/* Header spanning full width */}
      <div className="p-4 bg-background/card shadow-md z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Ujjain Religious Places Map</h1>
            <p className="text-text/secondary">Explore the main religious sites and locations in Ujjain</p>
          </div>
          {/* Button to open bottom sheet */}
          <button 
            onClick={togglePanel} 
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark md:hidden" // Only show on small screens
          >
            Details
          </button>
        </div>
      </div>

      {/* Map fills remaining space */}
      <div className="flex-grow h-96 md:h-[calc(100vh-200px)]"> {/* Map container */}
        <MapView position={position} markers={markers} />
      </div>
      
      {/* Bottom Sheet / Up-slider */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isPanelOpen ? 'translate-y-0' : 'translate-y-full'} md:hidden`}> {/* Only show on small screens */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Navigation & Info</h2>
            <button onClick={togglePanel} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <SlidingPanel onShowRoute={handleShowRoute} />
          <CrowdInfo />
          <MapLegend />
        </div>
      </div>

      {/* Side Panel for larger screens (re-introduce if needed) */}
      <div className="hidden md:flex flex-col p-4"> {/* Only show on medium and larger screens */}
        <SlidingPanel onShowRoute={handleShowRoute} />
        <CrowdInfo />
        <MapLegend />
      </div>
    </div>
  );
};

export default MapPage;