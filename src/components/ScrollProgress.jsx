import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const value = docHeight ? (scrollTop / docHeight) * 100 : 0
      setProgress(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div className="fixed left-0 right-0 top-0 z-40 h-1 bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink"
        style={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
    </motion.div>
  )
}
