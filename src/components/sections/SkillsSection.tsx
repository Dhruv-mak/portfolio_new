"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython, SiCplusplus, 
  SiGo, SiFastapi, SiDjango, SiFlask, SiHtml5, SiCss3, 
  SiTailwindcss, SiRedux, SiDocker, SiKubernetes, SiJenkins, SiGit, 
  SiPrometheus, SiGrafana, SiElasticsearch, SiAmazonwebservices, SiMysql, SiPostgresql, 
  SiMongodb, SiFirebase, SiJira, SiConfluence, SiLinux, SiGnubash,
  SiSocketdotio, SiWebrtc, SiOpenai, SiPytorch, SiScikitlearn, SiNumpy, 
  SiPandas, SiOpencv, SiHuggingface
} from 'react-icons/si';
import {FaJava} from "react-icons/fa6";
import { FaRobot, FaServer, FaDatabase, FaTools, FaCloud, FaMicrochip } from 'react-icons/fa';

const techCategories = [
  {
    name: "Languages & Frameworks",
    icon: <FaServer className="text-3xl" />,
    techs: [
      { name: "React", icon: <SiReact />, url: "https://reactjs.org" },
      { name: "Next.js", icon: <SiNextdotjs />, url: "https://nextjs.org" },
      { name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org" },
      { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", icon: <SiPython />, url: "https://www.python.org" },
      { name: "C/C++", icon: <SiCplusplus />, url: "https://isocpp.org" },
      { name: "Golang", icon: <SiGo />, url: "https://golang.org" },
      { name: "Java", icon: <FaJava />, url: "https://www.java.com" },
      { name: "FastAPI", icon: <SiFastapi />, url: "https://fastapi.tiangolo.com" },
      { name: "Django", icon: <SiDjango />, url: "https://www.djangoproject.com" },
      { name: "Flask", icon: <SiFlask />, url: "https://flask.palletsprojects.com" },
      { name: "HTML5", icon: <SiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: <SiCss3 />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, url: "https://tailwindcss.com" },
      { name: "Redux", icon: <SiRedux />, url: "https://redux.js.org" }
    ]
  },
  {
    name: "Machine Learning & AI",
    icon: <FaMicrochip className="text-3xl" />,
    techs: [
      { name: "PyTorch", icon: <SiPytorch />, url: "https://pytorch.org" },
      { name: "Scikit-Learn", icon: <SiScikitlearn />, url: "https://scikit-learn.org" },
      { name: "NumPy", icon: <SiNumpy />, url: "https://numpy.org" },
      { name: "Pandas", icon: <SiPandas />, url: "https://pandas.pydata.org" },
      { name: "OpenCV", icon: <SiOpencv />, url: "https://opencv.org" },
      { name: "HuggingFace", icon: <SiHuggingface />, url: "https://huggingface.co" },
      { name: "OpenAI", icon: <SiOpenai />, url: "https://openai.com" },
      { name: "LLM", icon: <FaRobot />, url: "https://openai.com/research/language-models" }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <FaCloud className="text-3xl" />,
    techs: [
      { name: "Docker", icon: <SiDocker />, url: "https://www.docker.com" },
      { name: "Kubernetes", icon: <SiKubernetes />, url: "https://kubernetes.io" },
      { name: "Jenkins", icon: <SiJenkins />, url: "https://www.jenkins.io" },
      { name: "Git", icon: <SiGit />, url: "https://git-scm.com" },
      { name: "Prometheus", icon: <SiPrometheus />, url: "https://prometheus.io" },
      { name: "Grafana", icon: <SiGrafana />, url: "https://grafana.com" },
      { name: "Elasticsearch", icon: <SiElasticsearch />, url: "https://www.elastic.co" },
      { name: "AWS", icon: <SiAmazonwebservices />, url: "https://aws.amazon.com" },
      { name: "Linux", icon: <SiLinux />, url: "https://www.linux.org" },
      { name: "Bash", icon: <SiGnubash />, url: "https://www.gnu.org/software/bash" }
    ]
  },
  {
    name: "Databases & Tools",
    icon: <FaDatabase className="text-3xl" />,
    techs: [
      { name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com" },
      { name: "PostgreSQL", icon: <SiPostgresql />, url: "https://www.postgresql.org" },
      { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com" },
      { name: "Firebase", icon: <SiFirebase />, url: "https://firebase.google.com" },
      { name: "Jira", icon: <SiJira />, url: "https://www.atlassian.com/software/jira" },
      { name: "Confluence", icon: <SiConfluence />, url: "https://www.atlassian.com/software/confluence" },
      { name: "Socket.IO", icon: <SiSocketdotio />, url: "https://socket.io" },
      { name: "WebRTC", icon: <SiWebrtc />, url: "https://webrtc.org" }
    ]
  }
];

export default function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<{ cat: number, tech: number } | null>(null);
  
  return (
    <section id="skills" className="py-24">
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
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-600">Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies I work with to build exceptional digital experiences
          </motion.p>
        </motion.div>
        
        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-8">
                <div className="text-amber-400 dark:text-amber-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white inline-block relative">
                  {category.name}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </h3>
              </div>
              
              {/* Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
                {category.techs.map((tech, techIndex) => (
                  <motion.a
                    key={techIndex}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/30 dark:bg-gray-800/30 border border-gray-700 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.03 }}
                    onMouseEnter={() => setHoveredTech({ cat: catIndex, tech: techIndex })}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="text-3xl mb-2 text-gray-300 dark:text-gray-300 group-hover:text-amber-400 dark:group-hover:text-amber-400 transition-colors">
                      {tech.icon}
                    </div>
                    
                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {hoveredTech?.cat === catIndex && hoveredTech?.tech === techIndex && (
                        <motion.div 
                          className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-900 text-white dark:text-white text-sm rounded whitespace-nowrap z-10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech.name}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-900 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}