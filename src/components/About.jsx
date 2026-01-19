import { motion } from 'framer-motion'

export default function About({ infoStats }) {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-sub">
          I blend product thinking, AI expertise, and frontend engineering to build fast, reliable experiences. I keep interfaces minimal, legible, and animated with micro-interactions.
        </p>
        <div className="row gy-3 info-grid mt-4">
          {infoStats.map((item, idx) => (
            <div className="col-6 col-lg-3" key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-ghost h-100"
              >
                <p className="mb-1 text-uppercase small">{item.label}</p>
                <h4 className="fw-bold mb-0">{item.value}</h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
