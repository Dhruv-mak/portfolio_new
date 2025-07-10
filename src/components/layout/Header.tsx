"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, MessageSquare, Menu, X, Download } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';

export default function Header({ activeSection }: { activeSection: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navItems = [
    { id: 'intro', label: 'Home', icon: <User size={16} /> },
    { id: 'journey', label: 'My Journey', icon: <Briefcase size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'skills', label: 'Skills', icon: <MessageSquare size={16} /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare size={16} /> }
  ];

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      
      // Get document height to prevent over-scrolling
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // Ensure we don't scroll past the document
      const finalPosition = Math.min(offsetPosition, maxScroll);

      // Use native smooth scrolling for more natural feel
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
      {/* Header content */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">
            DMakwana.us
          </span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navItems.map(item => (
              <NavLink 
                key={item.id}
                href={`#${item.id}`}
                isActive={activeSection === item.id}
                icon={item.icon}
                label={item.label}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              />
            ))}
          </nav>
          
          {/* Resume Link */}
          <motion.a
            href="https://drive.google.com/file/d/1PS50d-vBBglU4RDM8HnDRRjX-E1LTThj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map(item => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-800 rounded-md transition-colors ${activeSection === item.id ? 'text-amber-400 bg-gray-800/50' : 'text-gray-300'}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
              
              {/* Mobile Resume Link */}
              <motion.a
                href="https://drive.google.com/file/d/1PS50d-vBBglU4RDM8HnDRRjX-E1LTThj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-md font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}