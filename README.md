# Ujjain Kumbh Mela Guide App

A comprehensive guide and assistance application for visitors to the Ujjain Kumbh Mela, one of Hinduism's most sacred gatherings.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Ujjain Kumbh Mela Guide App provides essential information and services for visitors attending the Kumbh Mela in Ujjain, Madhya Pradesh. This ancient spiritual congregation attracts millions of devotees, sadhus, and tourists from around the world.

The app offers interactive maps, emergency services, missing person reporting, and detailed information about the event, making it easier for visitors to navigate and enjoy this sacred gathering safely.

## Features

- **Interactive Map**: Navigate through religious sites and event locations in Ujjain
- **Emergency SOS**: Quick access to emergency services during the event
- **Missing Persons**: Report missing individuals or search for information about missing persons
- **Event Information**: Detailed information about the Kumbh Mela, important dates, and attractions
- **Visitor Tips**: Essential advice for visitors to ensure a safe and enjoyable experience
- **Photo Gallery**: Visual documentation of the Kumbh Mela experience

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Declarative routing for React applications
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Leaflet](https://leafletjs.com/) - Open-source JavaScript library for mobile-friendly interactive maps
- [ESLint](https://eslint.org/) - JavaScript linting utility

## Project Structure

```
src/
├── components/
│   ├── gallery/                 # Gallery-related components
│   │   ├── Gallery.jsx
│   │   └── Gallery.css
│   ├── hero/                    # Hero section components
│   │   ├── HeroSection.jsx
│   │   └── HeroDecorations.jsx
│   ├── home/                    # Home page components
│   │   ├── HomePage.jsx
│   │   ├── KeyInformationCards.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   ├── lostfound/               # Lost and found page components
│   │   ├── ReportMissingPerson.jsx
│   │   ├── MissingPersonsList.jsx
│   │   └── EmergencyContacts.jsx
│   ├── map/                     # Map page components
│   │   ├── MapView.jsx
│   │   └── MapLegend.jsx
│   ├── sos/                     # SOS page components
│   │   ├── MedicalEmergency.jsx
│   │   ├── PoliceEmergency.jsx
│   │   ├── EmergencyContacts.jsx
│   │   └── SOSFAB.jsx
│   ├── shared/                  # Shared components
│   │   └── BackButton.jsx
│   ├── LostAndFoundPage.jsx
│   ├── MapPage.jsx
│   ├── Navbar.jsx
│   └── SOSPage.jsx
├── hooks/                       # Custom React hooks
│   └── useActiveTab.js
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
├── global.css                   # Global utility classes
└── index.css                    # Base styles

public/
├── img/                         # Image assets
└── vite.svg                    # Vite logo
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd mahakumbh-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Development

### Component Organization

The application is organized into the following component categories:

1. **Gallery Components** (`src/components/gallery/`)
   - Gallery display component with image grid
   - Gallery-specific styling

2. **Hero Components** (`src/components/hero/`)
   - Main hero section with call-to-action buttons
   - Decorative elements for the hero section

3. **Home Page Components** (`src/components/home/`)
   - HomePage component that orchestrates the home page layout
   - Individual sections like Key Information Cards, About Section, and Services Section

4. **Lost and Found Components** (`src/components/lostfound/`)
   - Components for reporting and viewing missing persons
   - Emergency contact information

5. **Map Components** (`src/components/map/`)
   - Interactive map view
   - Map legend for understanding markers

6. **SOS Components** (`src/components/sos/`)
   - Emergency service buttons
   - Emergency contact information
   - Floating action button for quick access

7. **Shared Components** (`src/components/shared/`)
   - Reusable components like BackButton

8. **Page Components** (`src/components/`)
   - Individual page components for Map, SOS, and Lost & Found functionality
   - Navigation and utility components

### Styling

- Global styles are defined in `src/global.css` and `src/index.css`
- Component-specific styles are in respective CSS files
- Tailwind CSS classes are used for responsive design and utility styling

### Routing

The application uses React Router for navigation between different sections:
- `/` - Home page
- `/map` - Interactive map
- `/sos` - Emergency services
- `/missing` - Lost and found services

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Experience the spiritual journey of the Ujjain Kumbh Mela with this comprehensive guide and assistance application.*