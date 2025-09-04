import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'map', label: 'Map' },
    { id: 'sos', label: 'SOS' },
    { id: 'lost', label: 'Missing' },
  ];

  const handleNavigation = (tab) => {
    switch(tab) {
      case 'home':
        navigate('/');
        break;
      case 'map':
        navigate('/map');
        break;
      case 'sos':
        navigate('/sos');
        break;
      case 'lost':
        navigate('/missing');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-background shadow-md py-4 px-6 mx-0 mt-0 w-full">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-primary">Ujjain Kumbh</div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeTab === item.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text/secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/card border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center justify-center py-3 px-2 ${
                activeTab === item.id
                  ? 'text-primary font-semibold'
                  : 'text-text/tertiary hover:text-primary'
              }`}
            >
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;