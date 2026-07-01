import { Injectable } from '@nestjs/common'
import { Faq } from './faq.model'

@Injectable()
export class FaqService {
  private readonly faqs: Faq[] = [
    {
      id: 1,
      question: '¿Cuáles son los requisitos de ingreso?',
      answer: 'Solicitar una entrevista informativa, presentar historia clínica actualizada, DNI del residente y del familiar responsable, y realizar una evaluación médica previa.',
      category: 'Ingreso',
      order: 1,
    },
    {
      id: 2,
      question: '¿Cuentan con atención médica permanente?',
      answer: 'Sí, contamos con personal de enfermería las 24 horas y un médico geriatra que realiza visitas programadas semanales, más atención ante cualquier eventualidad.',
      category: 'Cuidados',
      order: 2,
    },
    {
      id: 3,
      question: '¿Ofrecen estadías temporales o centro de día?',
      answer: 'Sí, aceptamos estadías temporales por días o semanas, y también contamos con un servicio de centro de día para quienes necesitan cuidado solo durante algunas horas.',
      category: 'Servicios',
      order: 3,
    },
    {
      id: 4,
      question: '¿Cómo son las dietas? ¿Se adaptan a necesidades especiales?',
      answer: 'Contamos con una nutricionista que diseña menús personalizados según cada residente, incluyendo dietas para diabetes, hipertensión, celiaquía y texturas modificadas.',
      category: 'Alimentación',
      order: 4,
    },
    {
      id: 5,
      question: '¿Cuál es el régimen de visitas?',
      answer: 'Las visitas pueden realizarse todos los días en el horario de 10 a 20 h. No se requiere aviso previo, aunque recomendamos avisar para coordinar mejor.',
      category: 'Visitas',
      order: 5,
    },
    {
      id: 6,
      question: '¿Qué incluye la mensualidad?',
      answer: 'Incluye alojamiento, alimentación completa, enfermería 24 h, médicos, kinesiología, actividades recreativas, lavandería y limpieza. No incluyen pañales ni medicamentos.',
      category: 'Costos',
      order: 6,
    },
  ]

  findAll(): Faq[] {
    return this.faqs.sort((a, b) => a.order - b.order)
  }

  findByCategory(category: string): Faq[] {
    return this.faqs
      .filter((f) => f.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => a.order - b.order)
  }

  getCategories(): string[] {
    return [...new Set(this.faqs.map((f) => f.category))]
  }
}
