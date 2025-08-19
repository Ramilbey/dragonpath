// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Your trusted partner in educational journey to China</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Bridging Cultures Through Education</h3>
            <p>DragonPath was founded with a mission to strengthen educational ties between China and Uzbekistan. Our team consists of education experts who have studied in China themselves and understand the challenges international students face.</p>
            <p>With offices in Tashkent and Beijing, we provide localized support throughout your educational journey. We maintain strong relationships with top Chinese universities to ensure our students receive the best opportunities.</p>
            <p>Our services don't stop at admission - we offer pre-departure orientation, accommodation assistance, and ongoing support throughout your studies in China.</p>
            
            <div className="stats-grid">
              <div className="stat">
                <h4>500+</h4>
                <p>Students Helped</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>Partner Universities</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>Success Rate</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-users"></i>
              <p>DragonPath Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;