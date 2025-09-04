import React from 'react';

const MapLegend = () => {
  return (
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
  );
};

export default MapLegend;
