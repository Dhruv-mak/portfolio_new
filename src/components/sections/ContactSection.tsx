"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call Later on find out how to handle
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">Touch</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Let&apos;s connect</h3>
                <p className="text-gray-300 mb-8">
                  I&apos;m passionate about tackling new challenges and discussing innovative ideas. 
                  Whether you have a question about my work, want to explore a collaboration, or just want to connect, I&apos;ll do my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.a 
                  href="mailto:dhruv.makwana5004@gmail.com"
                  className="flex items-center space-x-4 text-gray-300 hover:text-amber-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Mail size={20} className="text-amber-400" />
                  </div>
                  <span>dhruv.makwana5004@gmail.com</span>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-amber-400"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+1 (352) 256-5844</span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-amber-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Gainesville, FL</span>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow me</h4> {/* Changed from "Follow me on" for slight variation */}
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={20} />, url: "https://github.com/Dhruv-mak", name: "GitHub" },
                    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/makwana-dhruv", name: "LinkedIn" },
                    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername", name: "Twitter" } // Placeholder for Twitter
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-gray-900 transition-colors"
                      whileHover={{ y: -5 }}
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  {/* Changed label from "Dhruv Makwana" to "Your Name" */}
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                    placeholder="Hello, I&apos;d like to talk about..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center
                    ${isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600'}
                    text-white transition-all duration-300 disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* Form submission status */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm mt-2 flex items-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 text-sm mt-2 flex items-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-16 text-gray-900/5"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}