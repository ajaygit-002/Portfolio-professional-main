import { motion } from 'framer-motion'
import { quickInfo, focusAreas } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="absolute inset-0 rounded-[32px] bg-white/5 blur-3xl" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative grid grid-cols-1 gap-8 rounded-[24px] border border-white/5 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-8 lg:grid-cols-3 lg:gap-10 lg:p-10"
      >
        <div className="space-y-5 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE] sm:text-sm">About</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Crafting dependable AI + frontend products.</h2>
          <p className="text-sm text-[#94A3B8] sm:text-base">
            I blend product thinking, AI expertise, and frontend engineering to build fast, reliable experiences. From chatbots and computer vision pipelines to dashboards and design systems, I ship polished solutions that scale.
          </p>

          <div className="space-y-2 text-sm text-[#CBD5E1] sm:text-base">
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              <span>React + Vite</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>JavaScript</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              <span>OpenAI API</span>
              <span>•</span>
              <span>LangChain</span>
              <span>•</span>
              <span>Pinecone</span>
              <span>•</span>
              <span>RAG</span>
              <span>•</span>
              <span>YOLO / OpenCV</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickInfo.map((item) => (
              <div key={item.title} className="card-neo card-glow rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-white/70">{item.title}</p>
                <p className="text-xl font-semibold text-white">{item.value}</p>
                {item.detail ? <p className="text-xs text-[#94A3B8]">{item.detail}</p> : null}
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
                className="card-neo card-glow rounded-xl border border-white/5 bg-white/5 p-4"
              >
                <p className="font-semibold text-white">{area.title}</p>
                <p className="text-sm text-[#94A3B8]">{area.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
