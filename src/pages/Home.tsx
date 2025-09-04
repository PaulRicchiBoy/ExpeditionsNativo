import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Tours } from '../components/tours';
import {Tribes } from '../components/Tribes';
import { TiktokGallery } from '../components/tiktok';
import { Gallery } from '../components/Gallery';
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <Tours />
      <Tribes />
      <TiktokGallery />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};