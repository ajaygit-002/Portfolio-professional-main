import { experiences } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Experience</p>
        <h2 className="font-display text-3xl font-bold text-white">Timeline of impact.</h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" aria-hidden />
        <div className="space-y-8">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative ml-10 card-glow rounded-2xl border border-white/5 bg-white/5 p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            >
              <div className="absolute -left-9 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-base text-sm font-semibold text-white shadow-soft">
                {item.year}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
