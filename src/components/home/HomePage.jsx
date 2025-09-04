import React from 'react';
import Gallery from '../gallery/Gallery';
import HeroSection from '../hero/HeroSection';
import KeyInformationCards from './KeyInformationCards';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
  return (
    <main id="main-content" className="pt-6 pb-24 md:pt-24 px-4 max-w-6xl mx-auto w-full">
      <HeroSection />
      <KeyInformationCards />
      <AboutSection />
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <Gallery />
      </div>
      <ServicesSection />
    </main>
  );
};

export default HomePage;