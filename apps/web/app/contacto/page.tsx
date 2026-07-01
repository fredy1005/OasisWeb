import Link from 'next/link'
import { Contacto } from '@/components/Contacto'

export default function ContactoPage() {
  return (
    <>
      <header className="bg-brand-800 text-cream">
        <div className="container-section pb-12">
          <Link href="/" className="text-cream/70 hover:text-cream text-sm mb-4 block">&larr; Volver al inicio</Link>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">Contacto</h1>
          <p className="text-cream/70 text-lg">Estamos para ayudarte. Agendá una visita o consultanos lo que necesites.</p>
        </div>
      </header>
      <main>
        <Contacto />
      </main>
    </>
  )
}
