import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-base/90 backdrop-blur"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative h-24 w-24 rounded-full border border-white/10 bg-white/5 shadow-glow"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          >
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink opacity-80"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
