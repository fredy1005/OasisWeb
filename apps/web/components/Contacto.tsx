'use client'

import { useState, FormEvent } from 'react'
import { sendContact } from '@/lib/api'
import { Reveal } from './Reveal'

export function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await sendContact({
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
        message: data.get('message') as string,
      })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-cream relative overflow-hidden">
      <div className="container-section relative">
        <Reveal className="text-center mb-12">
          <p className="eyebrow justify-center">Estamos para ayudarte</p>
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle mx-auto">Agendá una visita o consultanos lo que necesites.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <form
              id="form"
              onSubmit={handleSubmit}
              className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-sage-100 shadow-sm"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1">Nombre completo</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-1">Teléfono</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1">Mensaje</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow" />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
              </button>
              {status === 'success' && (
                <p className="text-green-700 font-medium bg-green-50 p-3 rounded-lg">¡Consulta enviada! Te contactaremos pronto.</p>
              )}
              {status === 'error' && (
                <p className="text-red-700 font-medium bg-red-50 p-3 rounded-lg">Hubo un error. Por favor intentá de nuevo.</p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-sage-100 card-hover">
                <span className="icon-badge w-11 h-11 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 mb-1 text-lg">Visitanos</h3>
                  <p className="text-sage-600/80 text-sm">Calle 122 N° 51/22</p>
                  <a
                    href="https://www.google.com/maps?q=calle+122+51/22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-500 hover:text-sage-600 text-sm font-medium inline-flex items-center gap-1 mt-1"
                  >
                    Ver en mapa
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-sage-100 card-hover">
                <span className="icon-badge w-11 h-11 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 mb-1 text-lg">Llamanos</h3>
                  <a href="tel:+573208518632" className="text-sage-600/80 hover:text-sage-500 transition-colors block text-sm">
                    320 851 8632
                  </a>
                  <a href="tel:+573245992003" className="text-sage-600/80 hover:text-sage-500 transition-colors block text-sm">
                    324 599 2003
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-sage-100 card-hover">
                <span className="icon-badge w-11 h-11 shrink-0 from-green-100 to-green-50 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 mb-1 text-lg">Escribinos</h3>
                  <a
                    href="https://wa.me/573208518632?text=Hola%2C%20quiero%20agendar%20una%20visita%20en%20Oasis%20De%20Vida."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-medium text-sm inline-flex items-center gap-1"
                  >
                    Chateá por WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-sage-100 card-hover">
                <span className="icon-badge w-11 h-11 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 mb-1 text-lg">Horarios</h3>
                  <p className="text-sage-600/80 text-sm">Lunes a domingo de 9 a 18 h</p>
                  <p className="text-xs text-sage-500/70 mt-1">Fuera de horario: coordinación previa</p>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-sage-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=calle+122+51/22&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Oasis De Vida - Sede 1"
              />
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  )
}