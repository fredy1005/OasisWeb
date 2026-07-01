import Link from 'next/link'
import { getBlogPosts, BlogPost } from '@/lib/api'

export default async function BlogPage() {
  let posts: BlogPost[] = []
  try {
    posts = await getBlogPosts()
  } catch {
    posts = []
  }

  return (
    <>
      <header className="bg-brand-800 text-cream">
        <div className="container-section pb-12">
          <Link href="/" className="text-cream/70 hover:text-cream text-sm mb-4 block">&larr; Volver al inicio</Link>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">Blog</h1>
          <p className="text-cream/70 text-lg">Experiencias, consejos e historias de nuestro hogar.</p>
        </div>
      </header>
      <main className="bg-cream">
        <div className="container-section">
          {posts.length === 0 ? (
            <p className="text-brand-600/60">No hay publicaciones todavía.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl border border-brand-100 overflow-hidden hover:border-brand-300 transition-colors">
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-400 font-serif">
                      {post.title}
                    </div>
                    <div className="p-5">
                      <h2 className="text-lg font-serif font-semibold text-brand-700 group-hover:text-brand-500 transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-brand-600/70 mb-3">{post.excerpt}</p>
                      <span className="text-xs text-brand-400">{post.date} &middot; {post.author}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
