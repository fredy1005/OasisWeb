'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

type Momento = 'mañana' | 'tarde' | 'noche'

const momentos: { id: Momento; label: string; icon: string; caption: string }[] = [
  { id: 'mañana', label: 'Mañana', icon: '🌅', caption: 'Así despierta el hogar cada mañana.' },
  { id: 'tarde', label: 'Tarde', icon: '☀️', caption: 'El sol alto acompaña la vida en comunidad.' },
  { id: 'noche', label: 'Noche', icon: '🌙', caption: 'El hogar se recoge en calma y compañía.' },
]

const ambient: Record<Momento, string> = {
  mañana: 'from-amber-50/70 via-cream to-cream',
  tarde: 'from-sky-50/70 via-cream to-cream',
  noche: 'from-indigo-50/70 via-cream to-cream',
}

const galeria: Record<Momento, { title: string; desc: string; gradient: string; time: string }[]> = {
  mañana: [
    { title: 'Habitaciones', desc: 'La luz natural entra por las ventanas. Las camas se preparan con ropa fresca para empezar el día.', gradient: 'from-amber-100 to-yellow-50', time: '8:00 am' },
    { title: 'Comedor', desc: 'Huele a café y pan tostado. El desayuno comunitario es el primer encuentro del día.', gradient: 'from-amber-100 to-orange-50', time: '8:30 am' },
    { title: 'Jardín', desc: 'El rocío brilla sobre el césped. Los primeros rayos invitan a caminar entre las flores.', gradient: 'from-green-100 to-emerald-50', time: '9:00 am' },
    { title: 'Sala de estar', desc: 'La mañana empieza con lectura de diarios, música suave y mate compartido.', gradient: 'from-yellow-100 to-amber-50', time: '10:00 am' },
  ],
  tarde: [
    { title: 'Habitaciones', desc: 'Cortinas entreabiertas para la siesta. La habitación invita al descanso de media tarde.', gradient: 'from-sky-100 to-blue-50', time: '2:00 pm' },
    { title: 'Comedor', desc: 'Mesas preparadas para el almuerzo. El menú del día huele a comida casera.', gradient: 'from-sky-100 to-indigo-50', time: '12:30 pm' },
    { title: 'Jardín', desc: 'El sol alto ilumina los senderos. Es la hora de la caminata y el aire libre.', gradient: 'from-blue-100 to-sky-50', time: '3:00 pm' },
    { title: 'Sala de estar', desc: 'Talleres de música y memoria. La tarde se llena de risas y actividades.', gradient: 'from-indigo-100 to-blue-50', time: '4:00 pm' },
  ],
  noche: [
    { title: 'Habitaciones', desc: 'Luz tenue y ropa de cama lista. Cada detalle preparado para una noche tranquila.', gradient: 'from-indigo-200 to-purple-100', time: '9:00 pm' },
    { title: 'Comedor', desc: 'Cena liviana en un ambiente íntimo. Las velas decoran las mesas.', gradient: 'from-indigo-200 to-slate-100', time: '7:30 pm' },
    { title: 'Jardín', desc: 'El jardín se ilumina con faroles. La brisa nocturna invita a la tertulia al aire libre.', gradient: 'from-indigo-300 to-slate-200', time: '8:00 pm' },
    { title: 'Sala de estar', desc: 'Película o serie compartida. El hogar se recoge en calma antes de dormir.', gradient: 'from-purple-200 to-indigo-100', time: '9:30 pm' },
  ],
}

const iconos: Record<string, JSX.Element> = {
  Habitaciones: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h6a2 2 0 0 1 2 2v3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2" />
    </svg>
  ),
  Comedor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v2M11 4v2" />
    </svg>
  ),
  Jardín: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c0-8 5-15 15-15 0 10-7 15-15 15Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c3-3 6-6 9-11" />
    </svg>
  ),
  'Sala de estar': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 18v2M19 18v2" />
    </svg>
  ),
}

export function Espacios() {
  const [activo, setActivo] = useState<Momento>('mañana')
  const [seleccion, setSeleccion] = useState(0)
  const momentoActual = momentos.find((m) => m.id === activo)!
  const espacios = galeria[activo]
  const destacado = espacios[seleccion]

  useEffect(() => {
    setSeleccion(0)
  }, [activo])

  return (
    <section id="espacios" className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <AnimatePresence>
          <motion.div
            key={activo}
            className={`absolute inset-0 bg-gradient-to-b ${ambient[activo]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </AnimatePresence>
      </div>

      <div className="container-section">
        <Reveal>
          <p className="eyebrow">Nuestro hogar</p>
          <h2 className="section-title">Nuestros espacios</h2>
          <p className="section-subtitle">Cada rincón cambia con la luz del día. Conocé el hogar en cada momento.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-2 relative mb-2" role="tablist">
            {momentos.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={activo === m.id}
                onClick={() => setActivo(m.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors z-10 ${
                  activo === m.id ? 'text-white' : 'text-sage-700 hover:text-sage-900'
                }`}
              >
                {activo === m.id && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-sage-600 rounded-lg shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {activo !== m.id && <span className="absolute inset-0 bg-sage-100 rounded-lg -z-10" />}
                <span aria-hidden="true">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>
          <div className="h-6 mb-8 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={activo}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="absolute text-sage-500/80 italic text-[16px]"
              >
                {momentoActual.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid lg:grid-cols-5 gap-6 items-stretch" role="tabpanel">
            {/* Featured panel */}
            <div className="lg:col-span-3 relative min-h-[22rem] lg:min-h-[26rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activo}-${destacado.title}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${destacado.gradient} rounded-3xl border border-white/60 overflow-hidden flex flex-col justify-end p-8 md:p-10`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06] bg-dot-pattern [background-size:18px_18px] text-sage-900"
                    aria-hidden="true"
                  />
                  <div className="absolute top-6 right-6 bg-white/85 backdrop-blur-sm text-sage-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">
                    {destacado.time}
                  </div>
                  <span className="w-16 h-16 mb-6 text-sage-600/90" aria-hidden="true">
                    {iconos[destacado.title]}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-sage-800 mb-3">
                    {destacado.title}
                  </h3>
                  <p className="text-sage-700/85 text-[17px] leading-relaxed max-w-md">{destacado.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Selector list */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {espacios.map((esp, i) => {
                const active = i === seleccion
                return (
                  <button
                    key={esp.title}
                    onClick={() => setSeleccion(i)}
                    aria-pressed={active}
                    className={`group flex items-center gap-4 text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                      active
                        ? 'bg-sage-600 border-sage-600 shadow-md'
                        : 'bg-white border-sage-100 hover:border-sage-300 hover:bg-sage-50'
                    }`}
                  >
                    <span
                      className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                        active ? 'bg-white/15 text-white' : 'bg-sage-100 text-sage-600 group-hover:bg-sage-200'
                      }`}
                    >
                      <span className="w-5 h-5 block">{iconos[esp.title]}</span>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className={`block font-serif font-semibold ${active ? 'text-white' : 'text-sage-800'}`}>
                        {esp.title}
                      </span>
                      <span className={`block text-sm truncate ${active ? 'text-white/70' : 'text-sage-500/80'}`}>
                        {esp.time}
                      </span>
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        active ? 'text-white translate-x-0.5' : 'text-sage-300 group-hover:translate-x-0.5'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
