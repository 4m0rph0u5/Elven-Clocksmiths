import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import WatchShowcase from './components/WatchShowcase';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WatchShowcase />
      {/* <WatchCatalog />
      <WatchShowcase />
      <WatchCatalog /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
