import { useLocation } from 'react-router-dom';

export const useActiveTab = () => {
  const location = useLocation();
  
  const getActiveTab = () => {
    switch(location.pathname) {
      case '/':
        return 'home';
      case '/map':
        return 'map';
      case '/sos':
        return 'sos';
      case '/missing':
        return 'lost';
      default:
        return 'home';
    }
  };
  
  return getActiveTab();
};