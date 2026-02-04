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
import Loading from "./components/Loading"; // <-- import the loading screen
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // <-- add loading state
  const [isScrolled, setIsScrolled] = useState(false); // 1. ADD THIS STATE

  // 2. ADD THIS SCROLL LISTENER
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Fake loading timeout (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Google Analytics on component mount
  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-HF0CSGWKN2", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "section_navigate", {
          event_category: "Navigation",
          event_label: `Scrolled to: ${sectionId}`,
          value: 1,
        });
      }
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "universities",
        "about",
        "testimonials",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= position &&
            scrollPosition < position + height
          ) {
            if (activeSection !== section) {
              setActiveSection(section);

              if (typeof window.gtag !== "undefined") {
                window.gtag("event", "section_view", {
                  event_category: "Engagement",
                  event_label: `Viewing: ${section}`,
                  value: 1,
                });
              }
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <LanguageProvider>
      <div className="App">
        {loading ? (
          <Loading /> // <-- show dragon loading screen
        ) : (
          <>
            <Header
              scrollToSection={scrollToSection}
              activeSection={activeSection}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isScrolled={isScrolled}
            />
            <Hero scrollToSection={scrollToSection} />
            <Services />
            <Universities />
            <About />
            <Testimonials />
            <Footer scrollToSection={scrollToSection} />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
