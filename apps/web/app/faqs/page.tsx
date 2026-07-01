import { getFaqs, Faq } from '@/lib/api'
import Link from 'next/link'

export default async function FaqsPage() {
  let faqs: Faq[] = []
  try {
    faqs = await getFaqs()
  } catch {
    faqs = []
  }

  const categorias = Array.from(new Set(faqs.map((f) => f.category)))

  return (
    <>
      <header className="bg-brand-800 text-cream">
        <div className="container-section pb-12">
          <Link href="/" className="text-cream/70 hover:text-cream text-sm mb-4 block">&larr; Volver al inicio</Link>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">Preguntas frecuentes</h1>
          <p className="text-cream/70 text-lg">Todas las respuestas que necesitás para tomar una decisión informada.</p>
        </div>
      </header>
      <main className="bg-cream">
        <div className="container-section">
          {categorias.map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-brand-700 mb-6">{cat}</h2>
              <div className="space-y-3 max-w-3xl">
                {faqs.filter((f) => f.category === cat).map((faq) => (
                  <details key={faq.id} className="group bg-white rounded-xl border border-brand-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer text-brand-700 font-medium hover:bg-brand-50 transition-colors list-none">
                      {faq.question}
                      <svg className="w-5 h-5 shrink-0 text-brand-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-600/80 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
