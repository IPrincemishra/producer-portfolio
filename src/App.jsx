import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Skill from './sections/Skill';
import Project from './sections/Project';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticlesBG from './components/ParticlesBG';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div className='relative gradient-bg text-white'>
      <CustomCursor />
      <ParticlesBG />
      <Navbar />
      <Home />
      <Skill />
      <Project />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;