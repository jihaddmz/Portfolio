import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ParallaxContainer from '../components/ui/ParallaxContainer';

export default function Home() {
  return (
    <ParallaxContainer speed={0.05}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ParallaxContainer>
  );
}