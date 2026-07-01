import { Injectable } from '@nestjs/common'
import { Testimonial } from './testimonial.model'

@Injectable()
export class TestimonialsService {
  private readonly testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Laura Méndez',
      relationship: 'Hija de residente',
      content: 'Desde que mi mamá está en Oasis, volví a dormir tranquila. Saber que está cuidada 24 horas, bien alimentada y acompañada no tiene precio. El cariño del equipo es genuino.',
      rating: 5,
      date: '2025-09-15',
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      relationship: 'Hijo de residente',
      content: 'Al principio sentí culpa, pero después de varias visitas sin avisar y ver a papá contento, entendí que tomamos la mejor decisión. Las instalaciones son hermosas y el personal, excepcional.',
      rating: 5,
      date: '2025-08-22',
    },
    {
      id: 3,
      name: 'Ana Lucía Gómez',
      relationship: 'Familiar de residente',
      content: 'Lo que más valoro es la transparencia. Siempre nos informan de todo, nos invitan a participar y sentimos que mi tía está en familia. Recomiendo Oasis sin dudar.',
      rating: 5,
      date: '2025-07-10',
    },
  ]

  findAll(): Testimonial[] {
    return this.testimonials
  }

  findRecent(limit: number): Testimonial[] {
    return this.testimonials.slice(0, limit)
  }
}
