import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapPage = () => {
  // Default center position for Ujjain
  const [position, setPosition] = useState([23.1793, 75.7857]); // Ujjain coordinates
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

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-background/card shadow-md z-10">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Ujjain Religious Places Map</h1>
            <p className="text-text/secondary">Explore the main religious sites and locations in Ujjain</p>
          </div>
        </div>
      </div>
      
      <div id="main-content" className="flex-grow map-wrapper">
        <MapContainer 
          center={position} 
          zoom={16} 
          className="map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map(marker => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                <div className="font-semibold text-text/primary">{marker.title}</div>
                <div className="text-sm text-text/secondary">{marker.description}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="p-4 bg-background/card border-t border-gray-200 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold text-text/primary mb-2">Map Legend</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-primary rounded-full mr-2" aria-hidden="true"></div>
              <span className="text-sm text-text/secondary">Religious Sites</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-success rounded-full mr-2" aria-hidden="true"></div>
              <span className="text-sm text-text/secondary">Ghats</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-danger rounded-full mr-2" aria-hidden="true"></div>
              <span className="text-sm text-text/secondary">Kumbh Mela Area</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-warning rounded-full mr-2" aria-hidden="true"></div>
              <span className="text-sm text-text/secondary">Missing Persons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;