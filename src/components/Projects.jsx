import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'

const filters = ['All', 'AI', 'Frontend', 'Full Stack', 'Computer Vision']

export default function Projects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Projects</p>
        <h2 className="font-display text-3xl font-bold text-white">Flagship builds.</h2>
        <p className="max-w-2xl text-white/70">Selected work spanning AI agents, computer vision, and production-grade SaaS frontends.</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`btn-premium rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? 'border-white/20 bg-white/10 text-white shadow-glow'
                : 'border-white/10 bg-white/5 text-white/70 hover:text-white'
            } hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] active:scale-95`}
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ delay: idx * 0.05 }}
              className="group card-glow relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{project.category}</span>
                </div>
                <p className="text-sm text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-cyan-400/10 hover:text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 text-sm transition duration-300 group-hover:-translate-y-1">
                  <a
                    href={project.demo}
                    className="btn-premium rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-2 text-white shadow-glow hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-95"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    className="btn-premium rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/40 hover:text-white active:scale-95"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 blur-2xl" />
                <div className="absolute inset-0 rounded-2xl bg-black/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  )
}
