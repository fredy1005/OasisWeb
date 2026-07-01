import Link from 'next/link'
import { getBlogPosts, BlogPost } from '@/lib/api'

const defaultPosts: { title: string; excerpt: string; slug: string }[] = [
  {
    title: 'Cómo elegir un hogar geriátrico',
    excerpt: 'Guía práctica para familias que buscan un lugar seguro y cálido para sus seres queridos.',
    slug: 'como-elegir-hogar-geriatrico',
  },
  {
    title: 'Los beneficios de la estimulación cognitiva',
    excerpt: 'Actividades diarias que mantienen la mente activa y mejoran la calidad de vida.',
    slug: 'beneficios-estimulacion-cognitiva',
  },
  {
    title: 'El rol de la nutrición en la tercera edad',
    excerpt: 'Cómo una alimentación personalizada contribuye al bienestar y la salud integral.',
    slug: 'nutricion-tercera-edad',
  },
]

export async function Experiencias() {
  let posts: BlogPost[] = []
  try {
    posts = await getBlogPosts()
  } catch {
    posts = []
  }

  const displayPosts = posts.length > 0 ? posts.slice(0, 3) : defaultPosts

  return (
    <section id="experiencias" className="bg-cream">
      <div className="container-section">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title mb-0">Experiencias</h2>
            <p className="section-subtitle mb-0">Historias y recursos que acompañan tu decisión.</p>
          </div>
          <Link href="/blog" className="btn-secondary text-sm py-2 px-5 shrink-0">
            Ver todas
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Link key={post.slug || (post as BlogPost).id} href={`/blog/${post.slug}`} className="group">
              <article>
                <div className="aspect-[16/9] bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl mb-4 flex items-center justify-center text-sage-400 font-serif text-lg overflow-hidden">
                  <div className="p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-2 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-sage-800 group-hover:text-sage-500 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-[16px] text-sage-600/80 mb-3 leading-relaxed">{post.excerpt}</p>
                <span className="text-sm text-sage-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}