"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Code,
  Briefcase,
  User,
  MessageSquare
} from 'lucide-react';

// Shadcn/ui components
// import { 
//   Button,
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Separator,
//   Badge,
// } from '@/components/ui';

import {Button} from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  
  // Data for portfolio sections
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      image: "/api/placeholder/600/400"
    },
    {
      title: "AI Content Generator",
      description: "Web app that uses AI to generate various types of content",
      tags: ["Next.js", "OpenAI API", "Vercel", "TypeScript"],
      link: "#",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for tracking workouts and nutrition",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      link: "#",
      image: "/api/placeholder/600/400"
    }
  ];
  
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"] },
    { name: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
    { name: "Soft Skills", items: ["Problem Solving", "Communication", "Team Leadership", "Agile Methodology"] }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Floating animation
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              John.dev
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'intro', label: 'Home', icon: <User size={16} /> },
              { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
              { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
              { id: 'contact', label: 'Contact', icon: <MessageSquare size={16} /> }
            ].map(item => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-1 hover:text-blue-400 transition-colors ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * item.id.length }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    layoutId="nav-underline"
                  />
                )}
              </motion.a>
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
                {[
                  { id: 'intro', label: 'Home', icon: <User size={16} /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
                  { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
                  { id: 'contact', label: 'Contact', icon: <MessageSquare size={16} /> }
                ].map(item => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-800 rounded-md transition-colors ${activeSection === item.id ? 'text-blue-400 bg-gray-800/50' : 'text-gray-300'}`}
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
      
      {/* Main Content */}
      <main className="pt-16 relative z-10">
        {/* Intro Section */}
        <section id="intro" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <motion.span 
                  className="inline-block text-sm font-medium text-blue-400 mb-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Frontend Developer & UI/UX Designer
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">digital experiences</span> that matter
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-300 mb-8 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  I build modern, responsive web applications with a focus on user experience and clean, maintainable code.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    // whileHover={{ scale: 1.05 }}
                    // whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-700 hover:bg-gray-800 text-white"
                    // whileHover={{ scale: 1.05 }}
                    // whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden md:block"
              >
                <motion.div 
                  className="relative"
                  animate={floatingAnimation}
                >
                  <div className="rounded-full overflow-hidden border-4 border-blue-500/20 mx-auto w-64 h-64 md:w-80 md:h-80">
                    <img 
                      src="/api/placeholder/400/400" 
                      alt="Developer Portrait" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Animated tech icons floating around the portrait */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-2"
                    animate={{ 
                      rotate: 360,
                      transition: { duration: 20, repeat: Infinity, ease: "linear" } 
                    }}
                  >
                    <Code size={24} />
                  </motion.div>
                  <motion.div 
                    className="absolute top-1/2 -left-8 bg-purple-600 rounded-full p-2"
                    animate={{ 
                      rotate: -360,
                      transition: { duration: 15, repeat: Infinity, ease: "linear" } 
                    }}
                  >
                    <Briefcase size={24} />
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 right-8 bg-cyan-600 rounded-full p-2"
                    animate={{ 
                      rotate: 360,
                      transition: { duration: 18, repeat: Infinity, ease: "linear" } 
                    }}
                  >
                    <MessageSquare size={24} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-1 bg-blue-400 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>
      
        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-900/30">
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
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 max-w-2xl mx-auto"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A selection of my recent work showcasing my skills and expertise in web development and design.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={projectVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all overflow-hidden">
                    <div className="overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                        View Project →
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-blue-600/80 hover:bg-blue-700 text-white">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </section>
      
        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
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
                Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 max-w-2xl mx-auto"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My technical toolkit and areas of expertise that I bring to every project.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.map((category, index) => (
                <motion.div 
                  key={index}
                  variants={skillVariants}
                >
                  <Card className="h-full bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                      <Separator className="bg-gray-700" />
                    </CardHeader>
                    <CardContent>
                      <motion.ul className="space-y-2">
                        {category.items.map((skill, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {skill}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div className="text-center mb-12">
                <motion.h2 
                  className="text-3xl md:text-5xl font-bold mb-4"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
                </motion.h2>
                <motion.p 
                  className="text-gray-300"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Have a project in mind or want to collaborate? I'd love to hear from you!
                </motion.p>
              </motion.div>
              
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-gray-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-md p-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-md p-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-md p-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-gray-300">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-md p-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <motion.div 
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
              
              <motion.div 
                className="flex justify-center space-x-6 mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { icon: <Github size={24} />, href: "#", label: "GitHub" },
                  { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
                  { icon: <Mail size={24} />, href: "#", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                John.dev
              </span>
            </motion.div>
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              © {new Date().getFullYear()} John Developer. All rights reserved.
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;