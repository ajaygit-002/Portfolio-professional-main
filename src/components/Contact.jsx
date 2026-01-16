import { useState } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiInstagram, FiSend } from 'react-icons/fi'
import { socials, contactCards } from '../data/portfolio'

const iconMap = {
  in: FiLinkedin,
  gh: FiGithub,
  mail: FiMail,
  ig: FiInstagram,
}

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setTimeout(() => setSent(false), 2000)
    }, 900)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">Contact</p>
        <h2 className="font-display text-3xl font-bold text-white">Let’s build together.</h2>
        <p className="max-w-2xl text-white/70">Reach out for collaborations, freelance projects, or product help.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={onSubmit}
          className="card-glow rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Name</label>
              <input
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40 focus:outline-none"
              placeholder="Tell me about the project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="btn-premium mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 font-semibold text-white shadow-glow hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
            <FiSend />
          </button>
        </form>

        <div className="space-y-4">
          <div className="card-glow rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <h3 className="text-lg font-semibold text-white">Quick Contacts</h3>
            <div className="mt-3 space-y-3 text-sm text-white/70">
              {contactCards.map((card) => (
                <div key={card.label} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:bg-white/10">
                  <span className="font-semibold text-white">{card.label}</span>
                  <span>{card.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glow rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <h3 className="text-lg font-semibold text-white">Socials</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="btn-premium flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:border-white/30 hover:text-white active:scale-95"
                  >
                    {Icon && <Icon />}
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
