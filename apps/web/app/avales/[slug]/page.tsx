import Link from 'next/link'
import { notFound } from 'next/navigation'
import { avalesSections } from '@/lib/avales-data'

export function generateStaticParams() {
  return avalesSections.map((s) => ({ slug: s.slug }))
}

export default function AvalDetailPage({ params }: { params: { slug: string } }) {
  const section = avalesSections.find((s) => s.slug === params.slug)
  if (!section) notFound()

  return (
    <>
      <header className="bg-white border-b border-sage-200">
        <div className="container-section py-6">
          <Link
            href="/#avales"
            className="inline-flex items-center gap-1.5 text-sage-500 hover:text-sage-700 transition-colors text-sm mb-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a avales legales
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center shrink-0">
              {section.icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-sage-800">{section.title}</h1>
              <p className="text-sage-500 text-sm mt-0.5">{section.desc}</p>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-cream min-h-[60vh]">
        <div className="container-section py-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-sage-100 p-6 md:p-10 shadow-sm">
            {section.content}
          </div>
        </div>
      </main>
    </>
  )
}
