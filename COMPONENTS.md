# Component Structure Documentation

## Overview

This document outlines the component structure of the Ujjain Kumbh Mela Guide App, detailing the purpose and functionality of each component.

## Component Hierarchy

```
App.jsx
├── NavbarWithRouting
└── Routes
    ├── HomePage (/)
    │   ├── HeroSection
    │   │   └── HeroDecorations
    │   ├── KeyInformationCards
    │   ├── AboutSection
    │   ├── Gallery
    │   └── ServicesSection
    ├── MapPage (/map)
    │   ├── MapView
    │   ├── MapLegend
    │   └── BackButton
    ├── SOSPage (/sos)
    │   ├── MedicalEmergency
    │   ├── PoliceEmergency
    │   ├── EmergencyContacts
    │   ├── SOSFAB
    │   └── BackButton
    └── LostAndFoundPage (/missing)
        ├── ReportMissingPerson
        ├── MissingPersonsList
        ├── EmergencyContacts
        └── BackButton
```

## Detailed Component Descriptions

### App.jsx
The main application component that sets up routing and global layout.

### NavbarWithRouting
Navigation component with integrated routing functionality that highlights the active tab.

### HomePage (/)
The main landing page that provides an overview of the Kumbh Mela and links to all services.

#### HeroSection
The main hero section of the homepage featuring:
- Gradient background with decorative images
- Main heading and descriptive text
- Call-to-action buttons for key services

#### HeroDecorations
Decorative image elements that enhance the visual appeal of the hero section.

#### KeyInformationCards
A grid of three cards displaying:
- Important dates for the Kumbh Mela
- Key attractions in Ujjain
- Visitor tips for a safe experience

#### AboutSection
Detailed information about the Ujjain Kumbh Mela including:
- Historical and spiritual significance
- Information about the sacred Kshipra River
- Details about Mahakaleshwar Jyotirlinga

#### Gallery
Image gallery showcasing the Kumbh Mela experience with:
- Grid layout of Kumbh Mela photos
- Captions describing each image
- Responsive design for all screen sizes

#### ServicesSection
Overview of the main services provided by the app:
- Map services for navigating Ujjain
- Emergency SOS for immediate assistance
- Missing persons reporting and search

### MapPage (/map)
Interactive map page showing:
- Religious sites in Ujjain
- Event locations
- Density indicators for crowd levels
- Back button for navigation

#### MapView
The interactive map component using Leaflet.js to display:
- Markers for religious sites
- Markers for missing persons
- Popups with detailed information

#### MapLegend
Legend component explaining the meaning of different marker colors:
- Religious sites (primary color)
- Ghats (success color)
- Kumbh Mela area (danger color)
- Missing persons (warning color)

### SOSPage (/sos)
Emergency services page featuring:
- Quick dial buttons for emergency services
- Contact information for local authorities
- Location sharing capability
- Back button for navigation

#### MedicalEmergency
Component for quick access to medical emergency services:
- Clear call-to-action button
- Emergency number (102) for medical assistance

#### PoliceEmergency
Component for quick access to police emergency services:
- Clear call-to-action button
- Emergency number (100) for police assistance

#### EmergencyContacts
List of additional emergency contacts:
- Kumbh Mela Organizer
- Missing Persons hotline
- First Aid Stations with map link

#### SOSFAB
Floating Action Button for quick access to emergency services:
- Prominently displayed button
- Accessible from any page
- Consistent design across the application

### LostAndFoundPage (/missing)
Missing persons reporting and search page with:
- Form for reporting missing individuals
- Search functionality for finding missing persons
- Contact information for relevant authorities
- Back button for navigation

#### ReportMissingPerson
Form component for reporting missing persons:
- Fields for person's name, age, description
- Contact information input
- Submit button with validation

#### MissingPersonsList
Component displaying a list of reported missing persons:
- Card layout for each missing person
- Name, age, location, and description
- Mark as found button

#### EmergencyContacts
List of emergency contacts specific to missing persons:
- Emergency helpline
- Nearest police station with map link

### BackButton
Reusable component for consistent back navigation throughout the app.

### Custom Hooks

#### useActiveTab
Custom hook for managing the active tab state in the navigation bar.