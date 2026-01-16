import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data/portfolio'

const categories = Object.keys(skills)

export default function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Skills</p>
        <h2 className="font-display text-3xl font-bold text-white">Full-stack capable with AI depth.</h2>
        <p className="max-w-2xl text-white/70">
          Pragmatic engineering with product intuition—frontends that delight, backends that scale, and AI systems that stay grounded.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`btn-premium rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === cat
                ? 'border-white/20 bg-white/10 text-white shadow-glow'
                : 'border-white/10 bg-white/5 text-white/70 hover:text-white'
            } hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] active:scale-95`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {skills[active].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group card-glow rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <div className="mb-3 flex items-center justify-between text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/80 transition group-hover:rotate-6 group-hover:scale-110">
                    {skill.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-white">{skill.name}</span>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
