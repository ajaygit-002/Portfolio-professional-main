import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import About from './components/About'
import Skills from './components/Skills'
import { infoStats, skills } from './data/content'

const navLinks = [
  'home',
  'about',
  'skills',
  'projects',
  'services',
  'resume',
  'testimonials',
  'contact',
]

const projects = [
  {
    title: 'Real-Time Object Detection + Tracking',
    desc: 'Live detection, tracking, and alerting with optimized pipelines.',
    stack: ['React', 'YOLO', 'OpenCV', 'WebSockets'],
  },
  {
    title: 'Night Vision Auto Enhancement CCTV AI',
    desc: 'Low-light enhancement with denoise, contrast lift, and smart alerts.',
    stack: ['Python', 'CNN', 'OpenCV', 'React'],
  },
  {
    title: 'Exam Cheating Detection System',
    desc: 'Proctoring assistant with multi-camera monitoring and triggers.',
    stack: ['YOLO', 'Tracking', 'React', 'FastAPI'],
  },
  {
    title: 'AI Assistant Voice App',
    desc: 'Voice-first assistant with context memory and clean UI.',
    stack: ['React', 'Speech', 'OpenAI', 'LangChain'],
  },
  {
    title: 'QR Code Generator Website',
    desc: 'Minimal web app to generate, style, and export QR codes.',
    stack: ['React', 'Bootstrap', 'APIs'],
  },
]

const services = [
  'AI Model Development',
  'Real-Time Object Detection Solutions',
  'Frontend Web Development',
  'Dashboard UI + Admin Panels',
  'Automation + AI Integrations',
]

const timeline = [
  { title: 'Education', detail: 'B.Tech, CS — Focus on AI/ML' },
  { title: 'Certifications', detail: 'TensorFlow Developer, Azure AI-900' },
  { title: 'Experience', detail: 'AI + Frontend Engineer (4+ years)' },
  { title: 'Internship', detail: 'Front-End Development — Hazzino Tech (1 month)' },
  { title: 'Achievements', detail: 'Hackathon wins, shipped production AI apps' },
]

const testimonials = [
  { name: 'Sara Kim', role: 'Product Lead', text: 'Polished delivery, crisp communication, and reliable execution.' },
  { name: 'Ishan Verma', role: 'CTO', text: 'Frontend is fast, responsive, and production-grade.' },
  { name: 'Priya Nair', role: 'Founder', text: 'Computer vision system performed flawlessly under load.' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ background: '#fff', color: '#000' }}>
      <header className={`navbar navbar-expand-lg navbar-light fixed-top bg-white navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container py-2">
          <a className="navbar-brand fw-bold" href="#home">Ajay</a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto gap-lg-3 text-uppercase fw-semibold small">
              {navLinks.map((link) => (
                <li className="nav-item" key={link}>
                  <a className="nav-link" href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section hero container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <div className="text-uppercase fw-semibold mb-2">Hi, I’m Ajay 👋</div>
              <h1 className="hero-title">AI + Frontend Developer</h1>
              <div className="hero-sub">React | Computer Vision | YOLO Projects</div>
              <div className="fw-semibold mb-3" style={{ color: '#111' }}>
                <Typewriter
                  options={{
                    strings: [
                      'AI Developer',
                      'Frontend Developer',
                      'Computer Vision Engineer',
                      'Real-Time Object Detection Builder',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="d-flex gap-3 mb-4">
                <a className="btn-ghost" href="#projects">View Projects</a>
                <a className="btn-ghost alt" href="#resume">Download Resume</a>
              </div>
              <div className="hero-badges">
                {['Black & White UI', 'Smooth Animations', 'Responsive Bootstrap'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="card-ghost floaty">
                  <div className="fw-bold mb-2">Crafting dependable AI + frontend products.</div>
                  <p className="mb-0" style={{ color: '#444' }}>
                    I design and build premium, responsive experiences with fast interactions, clean typography, and production-ready AI integrations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <About infoStats={infoStats} />

        <Skills skills={skills} />

        <section id="projects" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">Premium black/white cards with tech chips and CTA buttons.</p>
            <div className="row gy-4 mt-3">
              {projects.map((project, idx) => (
                <div className="col-md-6" key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="card-ghost project-card h-100"
                  >
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted">{project.desc}</p>
                    <div className="tags d-flex flex-wrap mb-3">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a className="btn-ghost" href="#">Live Demo</a>
                      <a className="btn-ghost alt" href="#">GitHub</a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <p className="section-sub">Hover invert + lift on every service card.</p>
            <div className="row gy-3 mt-3">
              {services.map((service, idx) => (
                <div className="col-md-4" key={service}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="card-ghost h-100"
                  >
                    <h5 className="fw-bold mb-2">{service}</h5>
                    <p className="text-muted mb-0">Premium, responsive delivery with smooth interactions.</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Resume / Timeline</h2>
            <p className="section-sub">Clean vertical timeline with hover interactions.</p>
            <div className="row mt-3">
              <div className="col-lg-8">
                <div className="timeline">
                  {timeline.map((item) => (
                    <div key={item.title} className="timeline-item card-ghost">
                      <h6 className="fw-bold mb-1">{item.title}</h6>
                      <p className="mb-0 text-muted">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-sub">Minimal cards with invert-on-hover.</p>
            <div className="row gy-3 mt-3">
              {testimonials.map((item, idx) => (
                <div className="col-md-4" key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="card-ghost testimonial-card h-100"
                  >
                    <p className="mb-3">“{item.text}”</p>
                    <div className="fw-bold">{item.name}</div>
                    <div className="text-muted">{item.role}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-sub">Responsive form with invert hover button.</p>
            <div className="row gy-4 mt-3 align-items-start">
              <div className="col-lg-6">
                <div className="card-ghost contact-form">
                  <div className="row g-3">
                    <div className="col-md-6"><input type="text" placeholder="Name" /></div>
                    <div className="col-md-6"><input type="email" placeholder="Email" /></div>
                    <div className="col-12"><input type="text" placeholder="Subject" /></div>
                    <div className="col-12"><textarea rows="4" placeholder="Message"></textarea></div>
                    <div className="col-12"><button className="btn-ghost w-100" type="button">Submit</button></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="d-flex flex-column gap-3">
                  {[
                    { label: 'Email', value: 'hello@ajay.dev' },
                    { label: 'Phone', value: '+1 (555) 123-4567' },
                    { label: 'GitHub', value: '@ajaygit' },
                    { label: 'LinkedIn', value: 'linkedin.com/in/ajay' },
                  ].map((item) => (
                    <div key={item.label} className="card-ghost">
                      <div className="fw-bold">{item.label}</div>
                      <div className="text-muted">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>© {new Date().getFullYear()} Ajay. All rights reserved.</div>
          <div className="d-flex gap-3">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
