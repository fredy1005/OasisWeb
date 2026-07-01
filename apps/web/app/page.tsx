import { Hero } from '@/components/Hero'
import { Espacios } from '@/components/Espacios'
import { Servicios } from '@/components/Servicios'
import { UnDia } from '@/components/UnDia'
import { Avales } from '@/components/Avales'
import { Experiencias } from '@/components/Experiencias'
import { Testimonios } from '@/components/Testimonios'
import { FAQ } from '@/components/FAQ'
import { Contacto } from '@/components/Contacto'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Espacios />
        <Servicios />
        <UnDia />
        <Avales />
        <Experiencias />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
