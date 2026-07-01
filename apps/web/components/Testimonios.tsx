import { getTestimonials, Testimonial } from '@/lib/api'
import { Reveal } from './Reveal'

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
    <section id="testimonios" className="relative bg-deep-green text-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] bg-dot-pattern [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="container-section relative">
        <Reveal className="text-center mb-12">
          <p className="eyebrow justify-center">Confianza real</p>
          <h2 className="section-title text-cream">Lo que dicen las familias</h2>
          <p className="section-subtitle text-cream/70 mx-auto">La opinión de quienes confiaron en nosotros.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {display.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.12}>
              <blockquote className="glass-card h-full p-6 md:p-8 rounded-xl relative hover:bg-white/[0.14] transition-colors duration-300">
                <svg className="w-8 h-8 text-gold-400/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <div className="flex gap-0.5 mb-4" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 0 0-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 0 0-1.176 0l-3.368 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 0 0-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69l1.285-3.958z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream/90 mb-5 text-[16px] leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-sage-500 flex items-center justify-center text-sage-900 font-serif font-bold shrink-0">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <strong className="text-gold-400 block">{t.name}</strong>
                    <span className="text-sm text-cream/50">{t.relationship}</span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}