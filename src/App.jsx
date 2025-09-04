import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapPage from './components/MapPage';
import SOSPage from './components/SOSPage';
import LostAndFoundPage from './components/LostAndFoundPage';
import { useActiveTab } from './hooks/useActiveTab';

// Home page component
const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <main id="main-content" className="pt-6 pb-24 md:pt-24 px-4 max-w-6xl mx-auto w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-8 mb-8 text-white relative overflow-hidden">
        {/* Decorative Background Images */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl text-[#B94E2A] md:text-5xl font-bold mb-4">Ujjain Kumbh Mela</h1>
          <p className="text-xl md:text-2xl  text-[#B94E2A] mb-6">A Sacred Journey of Spirituality & Divinity</p>
          <p className="text-lg mb-8 max-w-3xl  text-[#B94E2A] mx-auto">
            Experience one of the world's largest spiritual gatherings at the banks of the sacred Kshipra River
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/map')}
            >
              Explore Sacred Sites
            </button>
            <button 
              className="bg-danger hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/sos')}
            >
              Emergency Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Key Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-primary">
          <div className="flex items-center mb-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Important Dates</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-600">Next Kumbh Mela</span>
              <span className="font-semibold text-primary">2028</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-600">Shahi Snan</span>
              <span className="font-semibold text-primary">TBA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold text-primary">45 Days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-success">
          <div className="flex items-center mb-4">
            <div className="bg-success bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Key Attractions</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Mahakaleshwar Jyotirlinga</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Harihara Kund</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Ram Ghat Ceremonies</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-warning">
          <div className="flex items-center mb-4">
            <div className="bg-warning bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Visitor Tips</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Carry valid ID proof</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Stay hydrated</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Follow local guidelines</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* About Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Sacred Ujjain Kumbh Mela</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4 text-lg">
              The Ujjain Kumbh Mela is one of Hinduism's four sacred gatherings, held every 12 years at the banks of the Kshipra River in Ujjain, Madhya Pradesh.
            </p>
            <p className="text-gray-700 mb-4">
              This ancient spiritual congregation attracts millions of devotees, sadhus, and tourists from around the world. Ujjain is considered one of the seven sacred cities (Sapta Puri) in Hinduism and is home to the Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas dedicated to Lord Shiva.
            </p>
            <div className="bg-background rounded-lg p-4 mt-6">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg>
                Spiritual Significance
              </h3>
              <p className="text-gray-700">
                The Kumbh Mela in Ujjain holds special significance as it occurs when Jupiter enters Leo (Simha Rashi), making it one of the most auspicious Kumbh Melas.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl w-full h-80 overflow-hidden shadow-lg">
              <img 
                src="/img/img1.png" 
                alt="Ujjain Kumbh Mela" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/img/imhq.png'; }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Ujjain Kumbh Mela Gallery</h2>
        <p className="text-gray-600 text-center mb-8">Experience the divine atmosphere of the world's largest spiritual gathering</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img1.png" 
              alt="Kumbh Mela Devotees" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img2.png" 
              alt="Sacred Kshipra River" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img3.png" 
              alt="Mahakaleshwar Temple" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img4.png" 
              alt="Devotees taking Holy Dip" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img5.png" 
              alt="Sadhus at Kumbh Mela" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img6.png" 
              alt="Kumbh Mela Ceremonies" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img7.png" 
              alt="Ujjain Cityscape" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/img/img9.png" 
              alt="Kumbh Mela Activities" 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = '/img/imhq.png'; }}
            />
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Our Services</h2>
        <p className="text-gray-600 text-center mb-8">Your one-stop solution for all Ujjain Kumbh Mela related services</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Map Services</h3>
            <p className="text-gray-600 mb-4">
              Navigate through the religious sites and event locations in Ujjain with our interactive map.
            </p>
            <button 
              className="bg-primary hover:bg-accent text-white font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={() => navigate('/map')}
            >
              View Map
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-danger text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency SOS</h3>
            <p className="text-gray-600 mb-4">
              Quick access to emergency services during the event. Immediate assistance when you need it most.
            </p>
            <button 
              className="bg-danger hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={() => navigate('/sos')}
            >
              Call for Help
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-success text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Missing Persons</h3>
            <p className="text-gray-600 mb-4">
              Report missing persons or find information about missing individuals during the Kumbh Mela.
            </p>
            <button 
              className="bg-success hover:bg-green-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={() => navigate('/missing')}
            >
              Report Missing Person
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// Navbar component with routing
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
