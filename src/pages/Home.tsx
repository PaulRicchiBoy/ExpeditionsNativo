import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Tours } from '../components/tours';
import {Tribes } from '../components/Tribes';
import { TiktokGallery } from '../components/Schedule';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
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
      <Pricing />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};