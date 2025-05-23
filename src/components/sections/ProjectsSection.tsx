"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "CipherTalk - Real-Time Secure Chat Application",
    description: "A modern, secure, and feature-rich chat application focusing on real-time communication and user experience.",
    longDescription: "I built CipherTalk to explore real-time messaging with a strong emphasis on security. This project involved implementing JWT-based authentication, secure password hashing, and HTTP-only cookies. I leveraged FastAPI for the backend, React with TailwindCSS for a modern UI, and Socket.IO for seamless real-time chat functionalities, including one-on-one and group conversations.",
    tags: ["FastAPI", "React", "MongoDB", "TailwindCSS", "Socket.io", "JWT", "Bcrypt"],
    image: "/images/projects/ciphertalk.png",
    links: {
      live: "https://chat.dmakwana.us/login",
      github: "https://github.com/Dhruv-mak/CipherTalk"
    },
    color: "teal"
  },
  {
    title: "Go Distributed Store",
    description: "A high-performance, secure, and scalable peer-to-peer distributed file storage system built in Go.",
    longDescription: "This project was an exploration into distributed systems and secure file storage using Go. I focused on building a content-addressable storage (CAS) system with AES-256 encryption. Key challenges included designing a custom P2P network layer with TCP transport, ensuring data integrity with SHA-1, and optimizing for performance and scalability.",
    tags: ["Go", "P2P", "AES-256", "SHA-1", "TCP", "Content-Addressable Storage"],
    image: "/images/projects/godistore.png",
    links: {
      github: "https://github.com/Dhruv-mak/godiststore"
    },
    color: "green"
  },
  {
    title: "MetaVision",
    description: "An advanced neuroimaging data analysis and visualization platform for processing and visualizing complex biochemical data.",
    longDescription: "MetaVision was developed to provide an intuitive web-based interface for neuroimaging research. I implemented a data processing pipeline including molecule normalization, spatial alignment, and imputation. The core of the project involved creating interactive 3D visualizations and animations from raw data using Dash and Plotly, and enabling export to NIfTI format.",
    tags: ["Dash", "Plotly", "Python", "Flask", "NumPy", "Pandas", "SciPy", "NIBabel"],
    image: "/images/projects/metavision.png",
    links: {
      // live: "https://yourproject.com",
      github: "https://github.com/Dhruv-mak/metavision" // As per README
    },
    color: "purple"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-24 bg-gray-900/30">
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
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of work that showcases my skills and passion for building exceptional digital experiences
          </motion.p>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div 
                className="md:w-1/2 rounded-xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.image || "/placeholder-project.jpg"}
                  alt={project.title}
                  className="w-full object-cover h-64 md:h-80"
                  initial={{ filter: "grayscale(80%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    {project.links.github && (
                      <motion.a 
                        href={project.links.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a 
                        href={project.links.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500/80 p-3 rounded-full hover:bg-amber-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
              
              {/* Project Info */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} className={`bg-${project.color}-500/20 text-${project.color}-400 hover:bg-${project.color}-500/30`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Expandable project details */}
                <div className="mt-6">
                  {selectedProject === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-400 mb-4"
                    >
                      <p className="italic">{project.longDescription}</p>
                      <Button
                        variant="ghost" 
                        className="text-gray-400 hover:text-white mt-2 p-0"
                        onClick={() => setSelectedProject(null)}
                      >
                        Show less
                      </Button>
                    </motion.div>
                  ) : (
                    <Button
                      variant="ghost" 
                      className="text-amber-400 hover:text-amber-300 p-0"
                      onClick={() => setSelectedProject(index)}
                    >
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}