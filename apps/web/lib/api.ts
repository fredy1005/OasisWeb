const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export interface Faq {
  id: number
  question: string
  answer: string
  category: string
  order: number
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
}

export interface Testimonial {
  id: number
  name: string
  relationship: string
  content: string
  rating: number
  date: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  preferredTime?: string
}

async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 60 },
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  if (!res.ok) throw new Error(`API error: ${res.statusText}`)
  return res.json()
}

export function getFaqs() {
  return fetchApi<Faq[]>('/faqs')
}

export function getFaqCategories() {
  return fetchApi<string[]>('/faqs/categorias')
}

export function getFaqsByCategory(category: string) {
  return fetchApi<Faq[]>(`/faqs/${encodeURIComponent(category)}`)
}

export function getBlogPosts() {
  return fetchApi<BlogPost[]>('/blog')
}

export function getBlogPost(slug: string) {
  return fetchApi<BlogPost>(`/blog/${slug}`)
}

export function getTestimonials(limit?: number) {
  const query = limit ? `?limit=${limit}` : ''
  return fetchApi<Testimonial[]>(`/testimonials${query}`)
}

export function sendContact(data: ContactForm) {
  return fetchApi<{ id: number }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
