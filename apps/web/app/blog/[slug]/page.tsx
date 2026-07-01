import Link from 'next/link'
import { getBlogPost } from '@/lib/api'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = await getBlogPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <>
      <header className="bg-brand-800 text-cream">
        <div className="container-section pb-12">
          <Link href="/blog" className="text-cream/70 hover:text-cream text-sm mb-4 block">&larr; Volver al blog</Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-cream/60">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>
        </div>
      </header>
      <main className="bg-cream">
        <div className="container-section">
          <article className="max-w-3xl mx-auto">
            <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl mb-8 flex items-center justify-center text-brand-400 font-serif text-lg">
              {post.title}
            </div>
            <div className="prose prose-brand max-w-none text-brand-700 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
