// src/components/Hero/Hero.js
import React from 'react';

import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const universityImages = [
    '/images/univerpics/uni1.jpg',
    '/images/univerpics/uni2.jpg',
    '/images/univerpics/uni3.jpg',
    '/images/univerpics/uni4.jpg',
    '/images/univerpics/uni5.jpg',
    '/images/univerpics/uni6.jpg',
    '/images/univerpics/uni7.jpg',
    '/images/univerpics/uni8.jpg',
    '/images/univerpics/uni9.jpg',
    '/images/univerpics/uni10.jpg'
  ];

  return (
    <section id="home" className="hero">
      <div className="scrolling-background">
        <div className="image-scroll">
          {universityImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-image" 
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="image-scroll">
          {universityImages.map((image, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="bg-image" 
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-overlay"></div>
      
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