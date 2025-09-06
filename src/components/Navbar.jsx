import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = ({ activeTab, setActiveTab }) => {
  void setActiveTab;
  const navigate = useNavigate();
  const { session, signOut } = useAuth();
  
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'map', label: 'Map', path: '/map' },
    { id: 'sos', label: 'SOS', path: '/sos' },
    { id: 'lost', label: 'Missing', path: '/missing' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav className="hidden md:flex bg-background shadow-md py-4 px-6 mx-0 mt-0 w-full">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/img/img11.1.png" alt="Mahakumbh Logo" className="h-10 w-10 rounded-full object-contain" />
            <div className="text-2xl font-bold text-primary">Ujjain Mahakumbh</div>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeTab === item.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text/secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            {session ? (
              <button onClick={signOut} className="px-3 py-2 rounded-lg transition-all duration-200 font-medium text-text/secondary hover:text-primary">
                Logout
              </button>
            ) : (
              <>
                <button onClick={() => navigate('/login')} className="px-3 py-2 rounded-lg transition-all duration-200 font-medium text-text/secondary hover:text-primary">
                  Login
                </button>
                <button onClick={() => navigate('/register')} className="px-3 py-2 rounded-lg transition-all duration-200 font-medium bg-primary text-white hover:bg-primary/90">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/card border-t border-gray-200 shadow-lg z-[1001]">
        <div className="grid grid-cols-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`flex flex-col items-center justify-center py-3 px-2 ${
                activeTab === item.id
                  ? 'text-primary font-semibold'
                  : 'text-text/tertiary hover:text-primary'
              }`}
            >
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
           {session ? (
              <button onClick={signOut} className="flex flex-col items-center justify-center py-3 px-2 text-text/tertiary hover:text-primary">
                <span className="text-sm">Logout</span>
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="flex flex-col items-center justify-center py-3 px-2 text-text/tertiary hover:text-primary">
                <span className="text-sm">Login</span>
              </button>
            )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
