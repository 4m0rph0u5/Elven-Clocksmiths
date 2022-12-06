import React from 'react';
import WatchShowcase from './WatchShowcase';
import WatchCatalog from './WatchCatalog';

const Main = () => {
  return (
    <main>
      <WatchShowcase />
      <WatchCatalog />
      <WatchShowcase />
      <WatchCatalog />
    </main>
  );
};

export default Main;
