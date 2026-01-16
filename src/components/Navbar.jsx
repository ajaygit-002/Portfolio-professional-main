import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolio'

export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-white/10 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 shadow-soft animate-glow">
            <span className="bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Ajay
            </span>
          </div>
          <span className="text-sm text-white/70">AI + Frontend</span>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`group relative overflow-hidden rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out will-change-transform ${
                activeId === link.id
                  ? 'bg-white/10 text-white shadow-glow'
                  : 'text-white/70 hover:text-cyan-300'
              } hover:scale-105`}
            >
              {link.label}
              <span
                className={`pointer-events-none absolute inset-x-2 -bottom-[6px] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent-blue to-accent-purple transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  activeId === link.id ? 'scale-x-100' : ''
                }`}
              />
              <span
                className={`pointer-events-none absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-blue transition-all duration-300 ${
                  activeId === link.id ? 'opacity-100 translate-y-0 animate-pulseSlow' : 'opacity-0 translate-y-1'
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-1 border-t border-white/5 bg-base/95 px-6 pb-6 pt-2 backdrop-blur">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    activeId === link.id ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white'
                  } hover:translate-x-1`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
