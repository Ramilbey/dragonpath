// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Universities from "./components/Universities/Universities";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize Google Analytics on component mount
  useEffect(() => {
    // Track initial pageview
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-HF0CSGWKN2', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Track section navigation event
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'section_navigate', {
          event_category: 'Navigation',
          event_label: `Scrolled to: ${sectionId}`,
          value: 1
        });
      }
    }
    setMenuOpen(false);
  };

  // Track when sections become visible (optional but useful)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'universities', 'about', 'testimonials'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= position && scrollPosition < position + height) {
            if (activeSection !== section) {
              setActiveSection(section);
              
              // Track section view
              if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'section_view', {
                  event_category: 'Engagement',
                  event_label: `Viewing: ${section}`,
                  value: 1
                });
              }
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <LanguageProvider>
      <div className="App">
        <Header
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Universities />
        <About />
        <Testimonials />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </LanguageProvider>
  );
}

export default App;