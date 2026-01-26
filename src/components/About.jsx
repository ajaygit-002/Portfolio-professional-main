import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="about" id="about">
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          
          <div className="about-content">
            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-container">
                <motion.div
                  className="image-placeholder"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="url(#gradient)" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="profile-icon">👨‍💻</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div className="about-text" variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                I'm a passionate Full Stack Developer with expertise in creating 
                beautiful and functional web applications. With a keen eye for design 
                and a love for clean code, I bring ideas to life through innovative 
                digital solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                My journey in web development started with a curiosity about how 
                websites work, and has evolved into a deep passion for creating 
                engaging user experiences that make a difference.
              </motion.p>
              
              <motion.div
                className="stats"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <div className="stat-item">
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    5+
                  </motion.h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    50+
                  </motion.h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    30+
                  </motion.h3>
                  <p>Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
