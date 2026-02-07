import React from 'react';
import Hero from '../components/Hero';
import OurTour from '../components/OurTour';
import TopRating from '../components/TopRating';
import OurView from '../components/OurView';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      {/* 1. The Main Banner */}
      <Hero />
      <OurView />
      {/* 2. Popular Tours Section */}
      <OurTour />
      <About />    
      {/* 3. Ratings or Features */}
      <TopRating />
      
      {/* 4. Gallery or Additional Views */}
      
    </div>
  )
}

export default Home;