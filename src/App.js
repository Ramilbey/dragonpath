// src/App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Loading from "./components/Loading"; // Dragon loading screen
import "./App.css";

// Lazy load non-critical components
const Services = lazy(() => import("./components/Services/Services"));
const Universities = lazy(() => import("./components/Universities/Universities"));
const About = lazy(() => import("./components/About/About"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for header style
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Fake loading timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Reduced slightly for better perceived performance
    return () => clearTimeout(timer);
  }, []);

  // Initialize Google Analytics
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

  // Active section tracker
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
      <ThemeProvider>
        <div className="App">
          {loading ? (
            <Loading />
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

              <Suspense fallback={<div className="section-loader">Loading...</div>}>
                <Services />
                <Universities />
                <About />
                <Testimonials />
                <Footer scrollToSection={scrollToSection} />
              </Suspense>
            </>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
