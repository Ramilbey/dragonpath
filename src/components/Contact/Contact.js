// src/components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch to start your educational journey</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Our Office</h3>
                <p>123 Education Street, Tashkent, Uzbekistan</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+998 71 123 4567</p>
                <p>+998 90 123 4567 (WhatsApp)</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@dragonpath.com</p>
                <p>applications@dragonpath.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3>Working Hours</h3>
                <p>Monday-Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone" 
                value={formData.phone}
                onChange={handleChange}
              />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Service</option>
                <option value="University Admission">University Admission</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Language Program">Language Program</option>
                <option value="Scholarship Guidance">Scholarship Guidance</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
              <textarea 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;