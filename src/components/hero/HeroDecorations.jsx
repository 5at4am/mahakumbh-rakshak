import React from 'react';

const HeroDecorations = () => {
  return (
    
    <div className="absolute top-0 left-0 w-full h-full opacity-100">
      
      <div className="absolute top-4 left-4 w-24 h-24 rounded-full overflow-hidden">
        <img 
          src="/img/img10.png" 
          alt="Decorative" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = '/img/imhq.png'; }}
        />
      </div>
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full overflow-hidden">
        <img 
          src="/img/img11.1.png" 
          alt="Decorative" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = '/img/imhq.png'; }}
        />
      </div>
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full overflow-hidden">
        <img 
          src="/img/img12.png" 
          alt="Decorative" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = '/img/imhq.png'; }}
        />
      </div>
    </div>
  );
};

export default HeroDecorations;