import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const focusLines = ['AI Chatbots • RAG Systems', 'Computer Vision • YOLO', 'React UI • Vite • Tailwind', 'FastAPI • Flask • APIs']

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % focusLines.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,201,255,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(155,140,255,0.25),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(77,229,176,0.15),transparent_20%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:80px_80px] opacity-20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue"
          >
            AI Developer • Frontend Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            I build smart AI applications and cinematic web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-base text-white/70 md:text-lg"
          >
            From RAG copilots to production-grade dashboards, I design, architect, and ship polished products with delightful motion and reliable backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1 text-white">AI Chatbots</span>
              <span className="rounded-full bg-white/5 px-3 py-1">RAG • Vision</span>
              <span className="rounded-full bg-white/5 px-3 py-1">React • Vite • FastAPI</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="btn-premium rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink px-5 py-3 text-sm font-semibold text-white shadow-glow hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-premium rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 hover:border-white/40 hover:text-white active:scale-95"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="btn-premium rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 hover:border-white/30 hover:text-white active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 text-sm text-white/70"
          >
            <div className="h-2 w-2 rounded-full bg-accent-blue shadow-glow" />
            <span className="font-medium text-white">Live focus:</span>
            <span className="font-semibold text-white/90">{focusLines[currentLine]}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative flex-1"
        >
          <div className="relative mx-auto flex h-[360px] w-[320px] max-w-full items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-6 shadow-soft backdrop-blur">
            <div className="absolute inset-6 rounded-[26px] bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-pink/20 blur-3xl" aria-hidden />
            <div className="relative z-10 space-y-3 text-center">
              <div className="mx-auto h-28 w-28 rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink p-[2px] shadow-glow">
                <div className="h-full w-full rounded-[18px] bg-base/90 backdrop-blur" />
              </div>
              <p className="text-lg font-semibold text-white">Ajay • AI Engineer</p>
              <p className="text-sm text-white/70">Shipping performant AI products with modern frontend craft.</p>
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for projects
              </div>
            </div>
            <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-accent-blue/30 blur-2xl" aria-hidden />
            <div className="absolute -right-12 bottom-6 h-24 w-24 rounded-full bg-accent-purple/30 blur-2xl" aria-hidden />
            <motion.div
              className="pointer-events-none absolute inset-6 rounded-[26px] border border-white/5"
              animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.01, 0.99, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
