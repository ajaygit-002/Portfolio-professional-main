import { motion } from 'framer-motion'
import { quickInfo, focusAreas } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="absolute inset-0 rounded-[32px] bg-white/5 blur-3xl" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative grid gap-10 rounded-[24px] border border-white/5 bg-white/5 p-10 shadow-soft backdrop-blur lg:grid-cols-3"
      >
        <div className="lg:col-span-2 space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">About</p>
          <h2 className="font-display text-3xl font-bold text-white">Crafting dependable AI + frontend products.</h2>
          <p className="text-white/70">
            I blend product thinking, AI expertise, and frontend engineering to ship experiences that feel premium and run fast. From chatbots and CV pipelines to design systems and dashboards, I partner with teams to deliver high-impact solutions.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {quickInfo.map((item) => (
              <div key={item.title} className="card-glow rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-white/60">{item.title}</p>
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="text-xs text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">My Focus Areas</h3>
          <div className="grid gap-3">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="card-glow rounded-xl border border-white/5 bg-white/5 p-4"
              >
                <p className="font-semibold text-white">{area.title}</p>
                <p className="text-sm text-white/70">{area.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
