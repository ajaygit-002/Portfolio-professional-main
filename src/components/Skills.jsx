import { motion } from 'framer-motion'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Black-and-white cards with hover invert and slight rotate.</p>
        <div className="row gy-3 mt-3">
          {Object.entries(skills).map(([group, list], idx) => (
            <div className="col-md-4" key={group}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-ghost h-100"
              >
                <h5 className="fw-bold mb-3">{group}</h5>
                <div className="d-flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
