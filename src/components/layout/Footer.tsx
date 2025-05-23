"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">
              DMakwana.us
            </span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              © {new Date().getFullYear()} Dhruv Makwana
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}