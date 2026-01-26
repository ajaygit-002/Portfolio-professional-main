import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'CSS/SASS', level: 92, icon: '🎨' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Git', level: 87, icon: '📦' },
    { name: 'Python', level: 83, icon: '🐍' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" 
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="progress-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <motion.span
                    className="progress-percentage"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            I'm constantly learning and expanding my skill set to stay current 
            with the latest technologies and best practices in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
