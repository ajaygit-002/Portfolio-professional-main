import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time analytics dashboard for social media metrics with beautiful data visualizations.',
      tech: ['React', 'D3.js', 'Firebase', 'Material-UI'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface and team collaboration features.',
      tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      tech: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio builder with customizable templates and hosting solution.',
      tech: ['React', 'Next.js', 'Tailwind', 'AWS'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, maps, and location-based alerts.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="project-header"
                style={{ background: project.gradient }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-number">0{index + 1}</div>
              </motion.div>
              
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo →
                  </motion.a>
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
