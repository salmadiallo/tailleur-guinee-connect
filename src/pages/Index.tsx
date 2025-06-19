
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedTailors from '@/components/FeaturedTailors';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTailors />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
