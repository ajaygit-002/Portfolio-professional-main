import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import { navLinks } from './data/portfolio'
import { useScrollSpy } from './hooks/useScrollSpy'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const activeId = useScrollSpy(navLinks.map((n) => n.id), 120, !isLoading)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="dark">
      <div className="relative min-h-screen overflow-hidden bg-base text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,201,255,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(155,140,255,0.18),transparent_22%),radial-gradient(circle_at_60%_80%,rgba(77,229,176,0.12),transparent_20%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:90px_90px] opacity-15" />
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-accent-blue/25 via-accent-purple/25 to-accent-pink/20 blur-3xl animate-float" />
          <div className="absolute right-[-80px] bottom-10 h-72 w-72 rounded-full bg-gradient-to-br from-accent-purple/25 via-accent-blue/20 to-accent-pink/20 blur-3xl animate-float" />
          <span className="particle absolute left-24 top-32 h-2 w-2 rounded-full animate-float" />
          <span className="particle absolute right-32 top-16 h-3 w-3 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <span className="particle absolute right-10 bottom-24 h-2 w-2 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <ScrollProgress />
        <Navbar activeId={activeId} />
        <Preloader isLoading={isLoading} />

        <main className="relative z-10 pt-10">
          <AnimatePresence mode="wait">
            {!isLoading && (
              <motion.div
                key="page"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App
