# Ujjain Kumbh Mela App - Routing Documentation

## Available Routes

1. **Home Page**: `/`
   - Main dashboard with navigation to all services

2. **Map Page**: `/map`
   - Interactive map showing religious sites and missing persons locations

3. **SOS Page**: `/sos`
   - Emergency contact information and quick dial options

4. **Missing Persons Page**: `/missing`
   - Report missing persons and view information about missing individuals

## Navigation Features

- **Back Button**: Each page includes a back button for easy navigation
- **Navbar**: Consistent navigation across all pages
- **Browser History**: Full support for browser back/forward buttons
- **Direct URL Access**: Users can navigate directly to any page via URL

## Components

- **BackButton**: Reusable component for consistent back navigation
- **Navbar**: Responsive navigation that works on both desktop and mobile
- **Custom Hooks**: `useActiveTab` for managing active navigation state

## Technical Implementation

- Uses React Router DOM for client-side routing
- Responsive design that works on all device sizes
- Proper integration with browser history API