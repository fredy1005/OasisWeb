'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const trust = [
  {
    label: 'Enfermería 24h',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Avales legales',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: 'Atención personalizada',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
]

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-deep-green via-sage-800 to-sage-700 text-cream overflow-hidden">
      {/* Organic animated background blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-sage-400/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-deep-teal/30 rounded-full blur-3xl animate-blob [animation-delay:8s]" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green/70 via-deep-green/40 to-transparent" />
      </div>

      <div className="container-section relative min-h-[85vh] flex items-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-gold-400 font-semibold tracking-wide uppercase text-sm mb-6 bg-gold-400/10 border border-gold-400/20 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Hogar geriátrico — Oasis De Vida
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-cream"
          >
            Un hogar donde los años se viven con{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              dignidad
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/85 mb-8 max-w-2xl leading-relaxed"
          >
            Cuidado profesional las 24 horas, calidez de hogar y compromiso con la transparencia.
            Porque elegir el lugar para quien nos cuidó es la decisión más importante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#contacto"
              className="inline-block bg-gold-500 text-sage-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-200 shadow-lg shadow-gold-500/25"
            >
              Agendar una visita
            </Link>
            <Link
              href="#espacios"
              className="inline-block border-2 border-cream/60 text-cream px-8 py-3 rounded-lg font-semibold hover:bg-cream/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Conocer más
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {trust.map((t) => (
              <span
                key={t.label}
                className="flex items-center gap-2 text-sm text-cream/85 bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-gold-400">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-cream/50"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Descubrí más</span>
        <span className="w-5 h-8 rounded-full border border-cream/30 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-cream/60 animate-float" />
        </span>
      </motion.div>
    </section>
  )
}
