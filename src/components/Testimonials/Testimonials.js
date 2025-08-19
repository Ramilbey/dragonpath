// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      initials: 'AZ',
      name: 'Azizbek Nurmatov',
      program: 'Computer Science, Tsinghua University',
      text: '"DragonPath helped me get into Tsinghua University for my master\'s degree. Their guidance through the application process was invaluable. I couldn\'t have done it without them!"',
      rating: 5
    },
    {
      initials: 'ND',
      name: 'Nigora Davletova',
      program: 'Medicine, Peking University',
      text: '"The visa process was complicated, but the team walked me through every step. Now I\'m studying medicine at Peking University and loving the experience!"',
      rating: 5
    },
    {
      initials: 'SJ',
      name: 'Sanjar Jumanov',
      program: 'Business Administration, Fudan University',
      text: '"I received acceptance letters from three top universities with DragonPath\'s help. Their knowledge of the Chinese education system made all the difference in my applications."',
      rating: 5
    },
    {
      initials: 'FK',
      name: 'Farida Karimova',
      program: 'Engineering, Zhejiang University',
      text: '"The scholarship guidance I received was exceptional. DragonPath helped me secure a full scholarship that made studying in China possible for me."',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>Hear from our students who achieved their dreams</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;