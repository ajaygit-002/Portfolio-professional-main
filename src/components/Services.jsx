import { services } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Services</p>
        <h2 className="font-display text-3xl font-bold text-white">What I offer.</h2>
        <p className="max-w-2xl text-white/70">AI-first builds, polished interfaces, and reliable delivery.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group card-glow rounded-2xl border border-white/5 bg-white/5 p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
              <span>{service.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-sm text-white/70">{service.description}</p>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-500 group-hover:w-24" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
