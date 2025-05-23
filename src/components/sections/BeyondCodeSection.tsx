"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

// Add your own interests and hobbies here
const interests = [
  {
    name: "Photography",
    icon: "📸",
    description: "Capturing landscapes and street photography during my travels",
    images: ["/interests/photo1.jpg", "/interests/photo2.jpg"]
  },
  {
    name: "Mountain Hiking",
    icon: "🏔️",
    description: "Exploring trails and reaching summits whenever I can",
    images: ["/interests/hiking1.jpg", "/interests/hiking2.jpg"]
  },
  {
    name: "Reading",
    icon: "📚",
    description: "Science fiction and technology books - currently reading 'Project Hail Mary'",
    images: []
  },
  {
    name: "Coffee Brewing",
    icon: "☕",
    description: "Experimenting with different brewing methods and single-origin beans",
    images: ["/interests/coffee.jpg"]
  }
];

export default function BeyondCodeSection() {
  return (
    <section className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beyond <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">Code</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            When I'm not coding, you can find me exploring these passions
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all h-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {interest.images?.length > 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={interest.images[0]}
                    alt={interest.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {interest.icon}
                  </div>
                </div>
              )}
              
              <div className={`p-5 ${!interest.images?.length && 'pt-6'}`}>
                {!interest.images?.length && (
                  <div className="text-4xl mb-3">{interest.icon}</div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{interest.name}</h3>
                <p className="text-gray-300 text-sm">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Personal quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl italic text-gray-300 max-w-3xl mx-auto">
            "I believe the best developers are those who bring their whole selves to their work — creativity from hobbies and problem-solving approaches from diverse interests enrich how we build software."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}