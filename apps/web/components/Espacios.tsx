'use client'

import { useState } from 'react'

type Momento = 'mañana' | 'tarde' | 'noche'

const momentos: { id: Momento; label: string; icon: string }[] = [
  { id: 'mañana', label: 'Mañana', icon: '🌅' },
  { id: 'tarde', label: 'Tarde', icon: '☀️' },
  { id: 'noche', label: 'Noche', icon: '🌙' },
]

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

export function Espacios() {
  const [activo, setActivo] = useState<Momento>('mañana')

  return (
    <section id="espacios" className="bg-white">
      <div className="container-section">
        <h2 className="section-title">Nuestros espacios</h2>
        <p className="section-subtitle">Cada rincón cambia con la luz del día. Conocé el hogar en cada momento.</p>

        <div className="flex gap-2 mb-10" role="tablist">
          {momentos.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={activo === m.id}
              onClick={() => setActivo(m.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors ${
                activo === m.id
                  ? 'bg-sage-600 text-white shadow-md'
                  : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
              }`}
            >
              <span aria-hidden="true">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6" role="tabpanel">
          {galeria[activo].map((esp) => (
            <article key={esp.title} className="group">
              <div className={`aspect-[4/3] bg-gradient-to-br ${esp.gradient} rounded-xl mb-4 overflow-hidden relative`}>
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-sage-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {esp.time}
                </div>
                <div className="w-full h-full flex items-center justify-center text-sage-500 font-serif text-lg">
                  {esp.title}
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">{esp.title}</h3>
              <p className="text-sage-600/80 text-[16px] leading-relaxed">{esp.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}