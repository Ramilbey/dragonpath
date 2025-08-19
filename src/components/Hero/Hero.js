// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Your Gateway to World-Class Education in China</h2>
          <p>We help students from Uzbekistan and Central Asia achieve their dreams of studying at top Chinese universities with comprehensive support and guidance.</p>
          <button className="btn" onClick={() => scrollToSection('contact')}>Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;