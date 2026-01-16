import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/portfolio'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Testimonials</p>
        <h2 className="font-display text-3xl font-bold text-white">Words from collaborators.</h2>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft card-glow transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <p className="text-lg font-semibold text-white">{testimonials[index].name}</p>
            <p className="text-sm text-accent-blue">{testimonials[index].role}</p>
            <p className="text-base text-white/80">“{testimonials[index].feedback}”</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between text-sm text-white/60">
          <span>
            {index + 1} / {testimonials.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="btn-premium rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:border-white/30 active:scale-95"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="btn-premium rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white hover:border-white/30 active:scale-95"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
