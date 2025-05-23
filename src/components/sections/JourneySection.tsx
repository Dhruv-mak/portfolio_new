"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { School, Code, Briefcase } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';

const journeyMilestones = [
  {
    year: "2014",
    title: "First Steps in Programming",
    description: "Built my first HTML website and discovered my passion for coding. Started learning JavaScript and CSS fundamentals.",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    color: "amber"
  },
  {
    year: "2018",
    title: "B.Tech at NIT Karnataka",
    description: "Pursued Computer Science at one of India's premier technical institutes. Focused on algorithms, data structures, and web technologies.",
    icon: <School className="w-6 h-6 text-rose-400" />,
    color: "rose"
  },
  {
    year: "2022",
    title: "Strand Life Sciences",
    description: "Applied my skills at the intersection of web development and bioinformatics, building tools to visualize complex genomic data.",
    icon: <DynamicIcon name="flask-conical" className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    year: "2021",
    title: "M.S. at University of Florida",
    description: "Advanced my expertise through graduate studies in Computer Science, specializing in machine learning and data visualization.",
    icon: <School className="w-6 h-6 text-amber-400" />,
    color: "amber"
  },
  {
    year: "Present",
    title: "Sun Lab Research",
    description: "Developing cutting-edge interfaces for spatial metabolism analysis, bridging the gap between complex data and intuitive visualization.",
    icon: <Briefcase className="w-6 h-6 text-rose-400" />,
    color: "rose"
  }
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 relative">
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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The path that shaped my expertise in software development
          </motion.p>
        </motion.div>
        
        {/* Journey Timeline - New Mobile-First Approach */}
        <div className="max-w-3xl mx-auto">
          {/* Milestones */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500 via-rose-500 to-purple-500 hidden md:block"></div>
            
            {journeyMilestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Mobile timeline with left sidebar */}
                <div className="flex md:hidden items-start mb-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-4 bg-${milestone.color}-500/10 border border-${milestone.color}-500/30`}>
                    {milestone.icon}
                  </div>
                  <div>
                    <div className={`text-${milestone.color}-400 font-mono text-sm font-medium mb-1`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-white text-lg font-bold">{milestone.title}</h3>
                  </div>
                </div>
                
                {/* Mobile description */}
                <div className="md:hidden pl-20 pr-4">
                  <p className="text-gray-300 text-sm">{milestone.description}</p>
                </div>
                
                {/* Desktop timeline */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {/* Left side */}
                  {index % 2 === 0 && (
                    <div className="w-5/12 pr-8 text-right">
                      <div className={`inline-block text-${milestone.color}-400 font-mono text-sm font-medium mb-1`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  )}
                  
                  {/* Center icon */}
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 bg-gray-900 border-2 border-${milestone.color}-500`}>
                      {milestone.icon}
                    </div>
                    {/* Connector to timeline */}
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900"></div>
                  </div>
                  
                  {/* Right side */}
                  {index % 2 !== 0 && (
                    <div className="w-5/12 pl-8">
                      <div className={`inline-block text-${milestone.color}-400 font-mono text-sm font-medium mb-1`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}