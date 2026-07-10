'use client'

import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const momentos = [
  {
    momento: 'Mañana',
    hora: '7:00 — 12:00',
    icon: '🌅',
    accent: 'text-amber-600',
    ring: 'ring-amber-200',
    bg: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    actividades: [
      'Despertar y asistencia personalizada',
      'Desayuno comunitario',
      'Toma de medicamentos',
      'Actividades de estimulación cognitiva',
      'A media mañana',
      'Terapia física / kinesiología',
    ],
  },
  {
    momento: 'Tarde',
    hora: '12:00 — 18:00',
    icon: '☀️',
    accent: 'text-sky-600',
    ring: 'ring-sky-200',
    bg: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    actividades: [
      'Almuerzo con menú personalizado',
      'Toma de medicamentos',
      'Siesta o descanso',
      'Onces',
      'Talleres recreativos (música, jardinería, lectura)',
      'Merienda y visita de familiares',
    ],
  },
  {
    momento: 'Noche',
    hora: '18:00 — 22:00',
    icon: '🌙',
    accent: 'text-indigo-600',
    ring: 'ring-indigo-200',
    bg: 'from-indigo-50 to-purple-50',
    border: 'border-indigo-200',
    actividades: [
      'Cena liviana',
      'Tiempo libre en sala de estar',
      'Preparación para dormir',
      'Ronda de medicación y buena noche',
    ],
  },
]

function MomentCard({ m }: { m: (typeof momentos)[number] }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-b ${m.bg} border ${m.border} p-6 md:p-7 relative overflow-hidden card-hover`}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className={`text-xl font-serif font-bold text-sage-800`}>{m.momento}</h3>
        <span className="text-sm font-medium text-sage-500/80 bg-white/70 px-3 py-1 rounded-full">{m.hora}</span>
      </div>
      <ul className="space-y-3">
        {m.actividades.map((act, j) => (
          <li key={j} className="flex items-start gap-3 text-sage-700">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${m.accent} bg-current shrink-0`} />
            <span className="text-[16px] leading-relaxed">{act}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function UnDia() {
  return (
    <section id="undia" className="bg-cream relative overflow-hidden">
      <div className="container-section">
        <Reveal className="text-center mb-14">
          <p className="eyebrow justify-center">Rutina y bienestar</p>
          <h2 className="section-title">Un día en el hogar</h2>
          <p className="section-subtitle mx-auto">La vida cotidiana es nuestra mejor carta de presentación.</p>
        </Reveal>

        {/* Mobile: simple stacked timeline */}
        <div className="md:hidden relative pl-10">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-300 via-sky-300 to-indigo-300"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {momentos.map((m, i) => (
              <Reveal key={m.momento} delay={i * 0.12}>
                <div className="relative">
                  <span
                    className={`absolute -left-10 top-0 w-8 h-8 rounded-full bg-white ring-4 ${m.ring} flex items-center justify-center text-base shadow-sm`}
                    aria-hidden="true"
                  >
                    {m.icon}
                  </span>
                  <MomentCard m={m} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Desktop: zigzag timeline with connecting spine */}
        <div className="hidden md:block relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-amber-300 via-sky-300 to-indigo-300"
            aria-hidden="true"
          />
          <div className="space-y-6">
            {momentos.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={m.momento} className="grid grid-cols-[1fr_4rem_1fr] items-center gap-2">
                  <div className={isLeft ? '' : 'invisible'}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <MomentCard m={m} />
                      </motion.div>
                    )}
                  </div>

                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className={`relative z-10 mx-auto w-16 h-16 rounded-full bg-white ring-4 ${m.ring} shadow-md flex items-center justify-center text-3xl`}
                    aria-hidden="true"
                  >
                    {m.icon}
                  </motion.span>

                  <div className={!isLeft ? '' : 'invisible'}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <MomentCard m={m} />
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
