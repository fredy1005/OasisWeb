'use client'

import { useState, FormEvent } from 'react'
import { sendContact } from '@/lib/api'

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
    <section id="contacto" className="bg-cream">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle mx-auto">Agendá una visita o consultanos lo que necesites.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <form id="form" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1">Nombre completo</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-1">Teléfono</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1">Mensaje</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-sage-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent" />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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

          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-semibold text-sage-800 mb-3 text-lg">Visitanos</h3>
              <p className="text-sage-600/80">Calle 122 N° 51/22</p>
              <a
                href="https://www.google.com/maps?q=calle+122+51/22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-500 hover:text-sage-600 text-sm font-medium inline-flex items-center gap-1 mt-1"
              >
                Ver en Google Maps
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-sage-800 mb-3 text-lg">Llamanos</h3>
              <a href="tel:+573208518632" className="text-sage-600/80 hover:text-sage-500 transition-colors block text-lg">
                320 851 8632
              </a>
              <a href="tel:+573245992003" className="text-sage-600/80 hover:text-sage-500 transition-colors block text-lg">
                324 599 2003
              </a>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-sage-800 mb-3 text-lg">Escribinos</h3>
              <a
                href="https://wa.me/573208518632?text=Hola%2C%20quiero%20agendar%20una%20visita%20en%20Oasis%20De%20Vida."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors font-medium inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chateá por WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-sage-800 mb-3 text-lg">Horarios de atención</h3>
              <p className="text-sage-600/80">Lunes a domingo de 9 a 18 h</p>
              <p className="text-sm text-sage-500/70 mt-1">Visitas fuera de horario: coordinación previa</p>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-sage-200">
              <iframe
                src="https://www.google.com/maps?q=calle+122+51/22&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Oasis De Vida"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}