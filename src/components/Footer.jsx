import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-10 pt-6 text-sm text-white/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">A</div>
          <span>Ajay.dev</span>
        </div>
        <button
          onClick={toTop}
          className="btn-premium flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 active:scale-95"
        >
          <FiArrowUp /> Top
        </button>
      </div>
      <div className="h-px bg-white/5" />
      <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
        <span>© {new Date().getFullYear()} Ajay</span>
        <span className="text-white/40">Premium AI + Frontend Portfolio</span>
      </div>
    </footer>
  )
}
