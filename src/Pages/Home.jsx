import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  );
};

export default Home;
