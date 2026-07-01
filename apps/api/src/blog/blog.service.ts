import { Injectable, NotFoundException } from '@nestjs/common'
import { BlogPost } from './blog.model'

@Injectable()
export class BlogService {
  private readonly posts: BlogPost[] = [
    {
      id: 1,
      slug: 'huerto-cuidado-residentes',
      title: 'El huerto que cuidan nuestros residentes',
      excerpt: 'La jardinería como terapia: cómo el contacto con la naturaleza transforma los días en nuestro hogar.',
      content:
        'Cada mañana, un grupo de residentes se reúne en el huerto. Con sus manos —algunas firmes, otras temblorosas— riegan, plantan y cosechan. No es solo una actividad: es un motivo para levantarse. La terapia hortícola ha demostrado reducir la ansiedad, mejorar el estado de ánimo y mantener la motricidad fina. Aquí, el huerto es el corazón del hogar.\n\nLos tomates que crecen en primavera se convierten en salsa para los fideos de los viernes. Las flores decoran el comedor. Y las historias que se cuentan entre surco y surco son el verdadero fruto.',
      image: '/images/huerto.jpg',
      author: 'Lic. María García',
      date: '2025-11-15',
      published: true,
    },
    {
      id: 2,
      slug: 'como-elegir-hogar-para-padres',
      title: 'Cómo elegir un hogar para tu padre o madre',
      excerpt: 'Guía práctica con los puntos clave a revisar antes de tomar la decisión: habilitaciones, personal, calidez y transparencia.',
      content:
        'Elegir un hogar para un ser querido es una de las decisiones más difíciles. Aquí te compartimos los cinco aspectos fundamentales que debes evaluar:\n\n1. **Habilitaciones legales**: Verifica que cuente con habilitación municipal y sanitaria vigente.\n2. **Personal**: ¿Hay enfermería 24 h? ¿Qué formación tiene el equipo?\n3. **Calidez**: ¿El trato es respetuoso y personalizado?\n4. **Transparencia**: ¿Te muestran las instalaciones sin restricciones?\n5. **Actividades**: ¿Hay estimulación cognitiva y recreación?\n\nVisitar sin previo aviso y charlar con los residentes y sus familias es la mejor manera de conocer la realidad del lugar.',
      image: '/images/elegir-hogar.jpg',
      author: 'Lic. María García',
      date: '2025-10-28',
      published: true,
    },
    {
      id: 3,
      slug: 'tarde-musica-miercoles',
      title: 'La tarde de música de los miércoles',
      excerpt: 'Cada miércoles la música llena los pasillos. Te contamos cómo una tradición sencilla se volvió el momento más esperado de la semana.',
      content:
        'Los miércoles a las 16 h, el pasillo del primer piso se convierte en sala de conciertos. A veces es un voluntario con guitarra, otras un residente que cuenta anécdotas de cuando cantaba en una orquesta.\n\nLa música despierta recuerdos, invita al movimiento, conecta. Ver a don Roberto marcando el compás con su bastón o a doña Elena tarareando letras que creía olvidadas nos recuerda que la música es más que entretenimiento: es memoria y alegría.',
      image: '/images/musica.jpg',
      author: 'Equipo Oasis',
      date: '2025-10-10',
      published: true,
    },
  ]

  findAll(): BlogPost[] {
    return this.posts.filter((p) => p.published)
  }

  findBySlug(slug: string): BlogPost {
    const post = this.posts.find((p) => p.slug === slug && p.published)
    if (!post) throw new NotFoundException(`Post "${slug}" not found`)
    return post
  }
}
