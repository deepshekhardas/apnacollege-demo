import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import WhyMetaverse from './components/WhyMetaverse';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Features />
      <Showcase />
      <WhyMetaverse />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;