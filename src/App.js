// src/App.js
import React, { useState } from "react";
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

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

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
        {/* <Contact /> */}
        <Footer scrollToSection={scrollToSection} />
      </div>
    </LanguageProvider>
  );
}

export default App;
