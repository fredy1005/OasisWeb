const momentos = [
  {
    momento: 'Mañana',
    hora: '7:00 — 12:00',
    icon: '🌅',
    bg: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    actividades: [
      'Despertar y asistencia personalizada',
      'Desayuno comunitario',
      'Actividades de estimulación cognitiva',
      'Terapia física / kinesiología',
    ],
  },
  {
    momento: 'Tarde',
    hora: '12:00 — 18:00',
    icon: '☀️',
    bg: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    actividades: [
      'Almuerzo con menú personalizado',
      'Siesta o descanso',
      'Talleres recreativos (música, jardinería, lectura)',
      'Merienda y visita de familiares',
    ],
  },
  {
    momento: 'Noche',
    hora: '18:00 — 22:00',
    icon: '🌙',
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

export function UnDia() {
  return (
    <section id="undia" className="bg-cream">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Un día en el hogar</h2>
          <p className="section-subtitle mx-auto">La vida cotidiana es nuestra mejor carta de presentación.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {momentos.map((m) => (
            <div
              key={m.momento}
              className={`rounded-2xl bg-gradient-to-b ${m.bg} border ${m.border} p-6 md:p-8 relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{m.icon}</span>
                  <h3 className="text-xl font-serif font-bold text-sage-800">{m.momento}</h3>
                </div>
                <span className="text-sm font-medium text-sage-500/80 bg-white/60 px-3 py-1 rounded-full">
                  {m.hora}
                </span>
              </div>
              <ul className="space-y-3">
                {m.actividades.map((act, i) => (
                  <li key={i} className="flex items-start gap-3 text-sage-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sage-400 shrink-0" />
                    <span className="text-[16px] leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}