"use client";
import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import IntroSection from './sections/IntroSection';
import JourneySection from './sections/JourneySection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import BeyondCodeSection from './sections/BeyondCodeSection';
import ContactSection from './sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('intro');
  
  // Navbar highlight effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <Header activeSection={activeSection} />
        
        <main className="pt-16 relative z-10">
          <IntroSection />
          <JourneySection />
          <ProjectsSection />
          <SkillsSection />
          {/* <BeyondCodeSection /> */}
          <ContactSection />
        </main>
        
        <Footer />
      </div>
  );
};

export default Portfolio;