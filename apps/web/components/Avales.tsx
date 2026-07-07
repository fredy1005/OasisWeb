import Link from 'next/link'
import { Reveal } from './Reveal'
import { avalesSections } from '@/lib/avales-data'

export function Avales() {
  return (
    <section id="avales" className="bg-white">
      <div className="container-section">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow">Cumplimiento normativo</p>
            <h2 className="section-title mb-2">Avales legales</h2>
            <p className="text-lg md:text-xl text-sage-600/80 max-w-2xl">
              Toda la información institucional, normativa y reglamentaria de nuestro hogar.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-sage-50 border border-sage-200 rounded-2xl px-5 py-4 shrink-0">
            <svg className="w-9 h-9 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <div>
              <p className="font-semibold text-sage-800 leading-tight">100% habilitados</p>
              <p className="text-sm text-sage-600/70">Verificado y auditado</p>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {avalesSections.map((a, i) => (
            <Reveal key={a.slug} delay={Math.min(i * 0.07, 0.35)}>
              <Link
                href={`/avales/${a.slug}`}
                className="group relative flex items-start gap-4 bg-cream p-5 rounded-xl border border-sage-100 hover:border-sage-300 card-hover h-full"
              >
                <div className="text-sage-500 shrink-0 mt-0.5 group-hover:text-gold-600 transition-colors">
                  {a.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">{a.title}</h3>
                  <p className="text-sm text-sage-600/70">{a.desc}</p>
                </div>
                <svg className="w-5 h-5 text-sage-300 group-hover:text-gold-500 absolute top-4 right-4 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
