"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, MessageSquare, Menu, X } from 'lucide-react';
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
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <NavLink 
              key={item.id}
              href={`#${item.id}`}
              isActive={activeSection === item.id}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
        
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
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}