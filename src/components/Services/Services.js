// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-school',
      title: 'University Selection',
      description: 'We help you choose the right university and program based on your academic background, interests, and career goals from our network of partner institutions across China.'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Application Assistance',
      description: 'Our experts guide you through the entire application process, ensuring all documents are properly prepared and submitted on time to maximize your chances of acceptance.'
    },
    {
      icon: 'fas fa-passport',
      title: 'Visa Support',
      description: 'We provide comprehensive visa application guidance, including documentation preparation, interview coaching, and follow-up with embassies to ensure success.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Scholarship Guidance',
      description: 'We help you identify and apply for scholarships, grants, and financial aid opportunities to make your education in China more affordable.'
    },
    {
      icon: 'fas fa-home',
      title: 'Accommodation Assistance',
      description: 'We help you find safe and comfortable housing options near your university, whether on-campus dormitories or off-campus apartments.'
    },
    {
      icon: 'fas fa-language',
      title: 'Language Preparation',
      description: 'We offer Chinese language courses and cultural orientation programs to help you adapt quickly to life and studies in China.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We provide end-to-end support for your educational journey</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;