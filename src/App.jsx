import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapPage from './components/MapPage';
import SOSPage from './components/SOSPage';
import LostAndFoundPage from './components/LostAndFoundPage';
import HomePage from './components/home/HomePage';
import { useActiveTab } from './hooks/useActiveTab';

const NavbarWithRouting = () => {
  const activeTab = useActiveTab();
  const navigate = useNavigate();
  
  const setActiveTab = (tab) => {
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
  
  return <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />;
};

function App() {
  return (
    <div className="min-h-screen w-full bg-background pb-16 md:pb-0">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavbarWithRouting />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/sos" element={<SOSPage />} />
        <Route path="/missing" element={<LostAndFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;