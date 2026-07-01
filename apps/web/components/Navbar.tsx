'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#espacios', label: 'Espacios' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#undia', label: 'Un día' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-sage-200 shadow-sm'
          : 'bg-cream/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-sage-500 to-gold-500 flex items-center justify-center text-cream font-serif text-lg shadow-sm group-hover:scale-105 transition-transform">
            O
          </span>
          <span className="text-xl font-serif font-bold text-sage-800">Oasis De Vida</span>
        </Link>

        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menú de navegación"
        >
          <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sage-700 hover:text-sage-500 transition-colors font-medium group py-2"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gold-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contacto" className="btn-primary text-sm py-2 px-5">
              Agendar visita
            </Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="sm:hidden flex flex-col items-center gap-4 p-6 bg-cream border-b border-sage-100 shadow-lg overflow-hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sage-700 hover:text-sage-500 transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contacto" className="btn-primary text-sm py-2 px-5" onClick={() => setOpen(false)}>
                Agendar visita
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
