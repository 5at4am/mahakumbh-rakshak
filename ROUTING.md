# Ujjain Kumbh Mela App - Routing Documentation

## Available Routes

1. **Home Page**: `/`
   - Main dashboard with navigation to all services
   - Features the hero section, key information cards, about section, gallery, and services section

2. **Map Page**: `/map`
   - Interactive map showing religious sites and event locations in Ujjain

3. **SOS Page**: `/sos`
   - Emergency contact information and quick dial options

4. **Missing Persons Page**: `/missing`
   - Report missing persons and view information about missing individuals

## Navigation Features

- **Back Button**: Each page includes a back button for easy navigation
- **Navbar**: Consistent navigation across all pages with active tab highlighting
- **Browser History**: Full support for browser back/forward buttons
- **Direct URL Access**: Users can navigate directly to any page via URL
- **Programmatic Navigation**: Buttons throughout the app that programmatically navigate to different routes

## Components

- **BackButton**: Reusable component for consistent back navigation
- **Navbar**: Responsive navigation that works on both desktop and mobile
- **Custom Hooks**: `useActiveTab` for managing active navigation state

## Technical Implementation

- Uses React Router DOM v6 for client-side routing
- Responsive design that works on all device sizes
- Proper integration with browser history API
- Route-based code splitting for optimal performance

## Component Structure

The application is organized into the following component directories:

### Gallery Components (`/src/components/gallery`)
- `Gallery.jsx`: Main gallery component displaying images in a responsive grid
- `Gallery.css`: Gallery-specific styles

### Hero Components (`/src/components/hero`)
- `HeroSection.jsx`: Main hero section with call-to-action buttons
- `HeroDecorations.jsx`: Decorative elements for the hero section

### Home Components (`/src/components/home`)
- `HomePage.jsx`: Main home page component that orchestrates all home page sections

### Page Components (`/src/components`)
- `MapPage.jsx`: Interactive map page
- `SOSPage.jsx`: Emergency services page
- `LostAndFoundPage.jsx`: Missing persons reporting page
- `Navbar.jsx`: Navigation component
- `BackButton.jsx`: Back navigation component