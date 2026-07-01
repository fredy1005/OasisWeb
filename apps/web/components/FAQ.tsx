'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

const defaultFaqs = [
  {
    id: 1,
    question: '¿Qué requisitos debo cumplir para ingresar a un familiar?',
    answer: 'Solicitamos historia clínica actualizada, DNI del residente y del familiar responsable, y una entrevista previa para conocer sus necesidades. No es necesario un diagnóstico específico; evaluamos cada caso de manera personalizada.',
  },
  {
    id: 2,
    question: '¿Puedo visitar a mi familiar en cualquier momento?',
    answer: 'Sí. Las visitas son libres dentro del horario de 9 a 18 h. Fuera de ese horario coordinamos previamente. Creemos que la presencia de la familia es parte fundamental del bienestar.',
  },
  {
    id: 3,
    question: '¿Qué tipo de atención médica reciben los residentes?',
    answer: 'Contamos con enfermería permanente las 24 horas, médico geriatra con visitas semanales, y guardia pasiva. Además, coordinamos con especialistas externos cuando es necesario.',
  },
  {
    id: 4,
    question: '¿Cómo aseguran la seguridad del edificio?',
    answer: 'El hogar cuenta con plan de evacuación aprobado por bomberos, simulacros trimestrales, cámaras de seguridad en áreas comunes, botoneras de llamada en cada habitación y personal capacitado en primeros auxilios.',
  },
  {
    id: 5,
    question: '¿Pueden los residentes llevar sus propias pertenencias?',
    answer: 'Por supuesto. Fomentamos que cada residente personalice su espacio con fotos, objetos personales y muebles pequeños. Que su habitación se sienta como su hogar es parte de nuestra filosofía.',
  },
  {
    id: 6,
    question: '¿Ofrecen prueba o período de adaptación?',
    answer: 'Sí. Ofrecemos un período de adaptación de una semana para que el residente y la familia conozcan el hogar, el equipo y la rutina diaria antes de formalizar el ingreso.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="bg-white">
      <div className="container-section">
        <Reveal className="text-center mb-12">
          <p className="eyebrow justify-center">Resolvemos tus dudas</p>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle mx-auto">Las dudas más comunes de las familias que nos visitan.</p>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-3">
          {defaultFaqs.map((faq, i) => {
            const isOpen = openId === faq.id
            return (
              <Reveal key={faq.id} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  className={`bg-cream rounded-xl border overflow-hidden transition-colors ${
                    isOpen ? 'border-sage-300 shadow-sm' : 'border-sage-100'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="flex items-center justify-between w-full p-5 text-left text-sage-800 font-medium hover:bg-sage-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-sage-600 text-white' : 'bg-sage-100 text-sage-500'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sage-600/80 leading-relaxed text-[16px]">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
