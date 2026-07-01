import { getTestimonials, Testimonial } from '@/lib/api'

const defaultTestimonios = [
  {
    id: 1,
    name: 'María Elena González',
    relationship: 'Hija de residente',
    content: 'Desde el primer día sentí que mi mamá estaba en un lugar seguro. El cariño del equipo y la transparencia con la que manejan todo me dan una tranquilidad que no había encontrado en otros lugares.',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    relationship: 'Hijo de residente',
    content: 'Lo que más valoro es que mi papá volvió a sonreír. Las actividades, el jardín, el compañerismo... Encontró una segunda familia. Y para nosotros, la paz de saber que está bien cuidado.',
  },
  {
    id: 3,
    name: 'Laura Suárez',
    relationship: 'Familiar de residente',
    content: 'Investigué muchas residencias antes de elegir Oasis De Vida. Los avales legales, la calidez y el profesionalismo del personal marcan la diferencia. Recomiendo venir a conocerlo.',
  },
]

export async function Testimonios() {
  let testimonios: Testimonial[] = []
  try {
    testimonios = await getTestimonials(3)
  } catch {
    testimonios = []
  }

  const display = testimonios.length > 0 ? testimonios : defaultTestimonios

  return (
    <section id="testimonios" className="bg-deep-green text-cream">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title text-cream">Lo que dicen las familias</h2>
          <p className="section-subtitle text-cream/70 mx-auto">La opinión de quienes confiaron en nosotros.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {display.map((t) => (
            <blockquote key={t.id} className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 relative">
              <svg className="w-8 h-8 text-gold-400/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="text-cream/90 mb-5 text-[16px] leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              <footer>
                <strong className="text-gold-400 block">{t.name}</strong>
                <span className="text-sm text-cream/50">{t.relationship}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}