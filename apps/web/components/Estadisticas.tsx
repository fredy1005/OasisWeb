'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Familias que confían en nosotros' },
  { value: 24, suffix: '/7', label: 'Enfermería permanente' },
  { value: 100, suffix: '%', label: 'Transparencia y avales legales' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export function Estadisticas() {
  return (
    <section className="relative bg-deep-green text-cream py-14 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] bg-dot-pattern [background-size:22px_22px]"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-serif font-bold text-gold-400 mb-1">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm md:text-base text-cream/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
