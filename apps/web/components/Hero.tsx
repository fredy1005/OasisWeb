import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-deep-green via-sage-800 to-sage-700 text-cream overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green/80 to-sage-800/40" />
      </div>
      <div className="container-section relative min-h-[80vh] flex items-center">
        <div className="max-w-3xl">
          <p className="text-gold-400 font-semibold tracking-wide uppercase text-sm mb-4">
            Hogar geriátrico — Oasis De Vida
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-cream">
            Un hogar donde los años se viven con dignidad.
          </h1>
          <p className="text-lg md:text-xl text-cream/85 mb-8 max-w-2xl leading-relaxed">
            Cuidado profesional las 24 horas, calidez de hogar y compromiso con la transparencia.
            Porque elegir el lugar para quien nos cuidó es la decisión más importante.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="inline-block bg-gold-500 text-sage-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 shadow-lg shadow-gold-500/25"
            >
              Agendar una visita
            </Link>
            <Link
              href="#espacios"
              className="inline-block border-2 border-cream/60 text-cream px-8 py-3 rounded-lg font-semibold hover:bg-cream/10 transition-colors duration-200"
            >
              Conocer más
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Enfermería 24h
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Avales legales
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Atención personalizada
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}