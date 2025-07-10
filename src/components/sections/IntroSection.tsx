"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, floatingAnimation } from '@/lib/animations';

export default function IntroSection() {
  // Smooth scroll handler
  const handleSmoothScroll = (targetId: string) => {
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

      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-medium text-amber-400 mb-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Software Engineer | AI & Full-Stack Developer
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">intelligent and performant</span> software solutions
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I leverage my expertise in software engineering, machine learning, and full-stack development to build robust and scalable applications. My work involves creating efficient systems, developing AI-driven tools, engineering distributed storage solutions, and optimizing data pipelines and web performance. Passionate about solving complex problems and showcasing my skills through innovative projects.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => handleSmoothScroll('projects')}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium cursor-pointer"
              >
                See My Work
              </Button>
              <Button
                onClick={() => handleSmoothScroll('contact')}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white cursor-pointer"
              >
                Get In Touch
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
              <div className="rounded-xl overflow-hidden border-4 border-amber-500/20 mx-auto w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/hero-image.png"
                  alt="Dhruv Makwana"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 bg-amber-500 rounded-full p-2"
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <Code size={24} className="text-gray-900" />
              </motion.div>
              {/* Probably will add more floating elements */}
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
            className="w-1 h-1 bg-amber-400 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}