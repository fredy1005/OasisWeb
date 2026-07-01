'use client'

import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-sage-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
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

        <ul
          className={`${open ? 'flex' : 'hidden'} sm:flex absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-cream sm:bg-transparent flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-0 border-b sm:border-0 border-sage-100 shadow-lg sm:shadow-none`}
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
        </ul>
      </nav>
    </header>
  )
}