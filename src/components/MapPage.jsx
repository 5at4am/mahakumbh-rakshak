import React, { useState } from 'react';
import MapView from './map/MapView';
import MapLegend from './map/MapLegend';
import SlidingPanel from './map/SlidingPanel'; // Import SlidingPanel
import CrowdInfo from './map/CrowdInfo';     // Import CrowdInfo

const MapPage = () => {
  // Default center position for Ujjain
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState([23.1793, 75.7857]); // Ujjain coordinates
  // eslint-disable-next-line no-unused-vars
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: [23.1793, 75.7857],
      title: 'Mahakaleshwar Jyotirlinga',
      description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva'
    },
    {
      id: 2,
      position: [23.1789, 75.7862],
      title: 'Haridwar Ghat',
      description: 'Sacred ghat on the banks of the Kshipra River'
    },
    {
      id: 3,
      position: [23.1775, 75.7880],
      title: 'Ram Ghat',
      description: 'Important ghat where devotees take holy dips'
    },
    {
      id: 4,
      position: [23.1801, 75.7845],
      title: 'Gauri Shankar Temple',
      description: 'Ancient temple dedicated to Lord Shiva and Goddess Parvati'
    },
    {
      id: 5,
      position: [23.1765, 75.7890],
      title: 'Kal Bhairav Temple',
      description: 'Temple of Lord Kal Bhairav, the fierce form of Shiva'
    },
    {
      id: 6,
      position: [23.1810, 75.7830],
      title: 'Chintaman Ganesh Temple',
      description: 'Temple of Lord Ganesha, believed to fulfill wishes'
    },
    {
      id: 7,
      position: [23.1750, 75.7900],
      title: 'Siddh Nath Temple',
      description: 'Ancient temple dedicated to Lord Shiva'
    },
    {
      id: 8,
      position: [23.1780, 75.7870],
      title: 'Kumbh Mela Grounds',
      description: 'Main area for Kumbh Mela activities and gatherings'
    },
    {
      id: 9,
      position: [23.1790, 75.7840],
      title: 'Missing Person: John Doe',
      description: 'Last seen near Mahakaleshwar Temple. Elderly man in white kurta.'
    },
    {
      id: 10,
      position: [23.1770, 75.7885],
      title: 'Missing Person: Jane Smith',
      description: 'Young girl in red dress. Last seen at Ram Ghat.'
    }
  ]);

  const [isPanelOpen, setIsPanelOpen] = useState(false); // State for sliding panel

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="flex flex-col h-screen relative"> {/* Added relative for absolute positioning of panel/crowdinfo */}
      <div className="p-4 bg-background/card shadow-md z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center"> {/* Added flex and justify-between */}
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Ujjain Religious Places Map</h1>
            <p className="text-text/secondary">Explore the main religious sites and locations in Ujjain</p>
          </div>
          {/* Button to open sliding panel */}
          <button 
            onClick={togglePanel} 
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          >
            Navigation
          </button>
        </div>
      </div>
      
      <div className="flex-grow">
        <MapView position={position} markers={markers} />
      </div>
      
      <MapLegend />

      {/* Render SlidingPanel */}
      <SlidingPanel isOpen={isPanelOpen} onClose={togglePanel} />

      {/* Render CrowdInfo */}
      <CrowdInfo />
    </div>
  );
};

export default MapPage;
