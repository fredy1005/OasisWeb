import { ReactNode } from 'react'

export interface AvalSection {
  slug: string
  title: string
  desc: string
  icon: ReactNode
  content: ReactNode
}

export const avalesSections: AvalSection[] = [
  {
    slug: 'quienes-somos',
    title: 'Quiénes Somos',
    desc: 'Conoce nuestra institución, nuestro equipo y nuestra filosofía de cuidado.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <p>
          EL HOGAR GERONTOLÓGICO &ldquo;OASIS DE VIDA&rdquo;, es una Institución ubicada en la ciudad de Bogotá, que busca, dentro de su enfoque gerontológico, satisfacer muchas de las necesidades de los adultos mayores, tales como: Valoración médica mensual para el seguimiento permanente de su evolución y tratamiento; Valoración nutricional para que su alimentación corresponda a una dieta balanceada y personalizada, acorde con sus condiciones y requerimientos dietarios; Atención psicológica; Terapias ocupacionales que le permitan mantener en la mejor forma sus funcionalidades motoras; Atención de enfermería y servicio de cuidadoras durante las veinticuatro horas, lo cual incluye una administración apropiada de los medicamentos prescritos por el Médico tratante; Terapia musical para la integración y esparcimiento de la persona mayor y su interacción con los demás residentes. Además, el Hogar busca mantener informados integralmente a los familiares de todo lo que acontece durante la estancia del adulto mayor en nuestra Institución, en procura de lograr su mejor condición de bienestar general, dentro de sus propias limitaciones de orden físico y de salud.
        </p>
        <p>
          Para el cumplimiento de su objetivo principal, la Institución cuenta con un amplio y capacitado equipo interdisciplinario, dispuesto siempre al mejor cuidado y seguimiento de todos los adultos mayores confiados a nuestro servicio.
        </p>
        <div className="italic font-medium text-sage-700 border-l-4 border-gold-400 pl-4 py-3 bg-sage-50 rounded-r-lg">
          <p>Nuestro lema: &ldquo;La idea de buscar un árbol que me dé cobijo, o simplemente para ver el mundo desde otro punto, es seguramente tan antigua como el propio ser humano. Al final de la jornada, quiero un árbol que me dé cobijo&rdquo;, obedece a una filosofía propia cuyo objetivo principal es proporcionar las ayudas necesarias que requieren los adultos mayores en esta etapa de su vida, lo cual no sustituye en ningún caso las obligaciones familiares, pero que sí se convierten en un apoyo indispensable e invaluable.</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'mision',
    title: 'Misión',
    desc: 'Nuestro compromiso con la excelencia en el servicio a los adultos mayores.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.833.166-3.695 3.695M5.924 5.166 9.62 8.86M8.25 12h1.5m3 0h1.5m-6 0h.008v.008H9V12Zm3 0h.008v.008H12V12Z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <p>
          Ser líderes en la prestación de servicios de atención a los adultos mayores. Para ello, procuraremos siempre satisfacer las necesidades de nuestros clientes, superando sus expectativas y brindándoles una atención de calidad con excelencia en el servicio.
        </p>
        <p>
          El Hogar Gerontológico &ldquo;Oasis de Vida&rdquo; tendrá siempre como objetivo fundamental el crecimiento sostenido de la institución y el desarrollo profesional de sus colaboradores.
        </p>
      </div>
    ),
  },
  {
    slug: 'vision',
    title: 'Visión',
    desc: 'Nuestra proyección como institución moderna, confiable y de alto nivel.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <p>
          Ser reconocidos como una institución moderna, de alto nivel y comprometida con el cambio, caracterizada por su elevada credibilidad y por generar la confianza de las familias que nos entregan a sus seres queridos para recibir un cuidado especial.
        </p>
        <p>
          Nuestro propósito es que cada residente sea tratado como una persona que requiere una atención integral, rodeada de un ambiente agradable, amable y de compañía. Por ello, priorizamos una relación cercana y cordial con las personas mayores y sus familias, promoviendo el buen trato y fortaleciendo su autoestima.
        </p>
        <p>
          Nuestro personal es altamente calificado, motivado, comprometido y eficiente, desempeñándose en un entorno colaborativo donde se comparte información, experiencia y conocimiento.
        </p>
      </div>
    ),
  },
  {
    slug: 'valores',
    title: 'Valores',
    desc: 'Los principios que guían nuestra labor diaria con los residentes y sus familias.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">HONESTIDAD</h3>
          <p>Actuamos con rectitud e integridad, manteniendo siempre un trato digno, respetuoso y equitativo con todos nuestros clientes y colaboradores.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">LEALTAD</h3>
          <p>Formamos parte de una gran familia institucional, actuando de acuerdo con los valores, principios y objetivos que nos hemos trazado.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">RESPETO</h3>
          <p>Guardamos la debida consideración y respeto hacia nuestros semejantes, guiándonos siempre por la dignidad humana y el respeto por su entorno.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">RESPONSABILIDAD</h3>
          <p>Cumplimos de manera seria y responsable con los compromisos y obligaciones derivados de nuestra relación contractual y profesional.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">CONFIANZA</h3>
          <p>Nos desempeñamos con exactitud, puntualidad, cordialidad y buen trato, procurando un ambiente de sano esparcimiento que contribuya al bienestar integral de nuestros adultos mayores y fortalezca la confianza de sus familiares.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">RESERVA</h3>
          <p>Mantenemos absoluta confidencialidad sobre toda la información que lleguemos a conocer con motivo de la vinculación con nuestra institución, tanto de los familiares como de los adultos mayores residentes.</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'politica-de-calidad',
    title: 'Política de Calidad',
    desc: 'Nuestro compromiso con la mejora continua y la satisfacción de residentes y familias.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <p>
          El Hogar Gerontológico &ldquo;Oasis de Vida&rdquo; está comprometido con la prestación de servicios de atención integral para los adultos mayores que lo requieran, dentro del marco de la normatividad vigente aplicable a este tipo de instituciones.
        </p>
        <p>
          Trabajamos permanentemente para satisfacer las necesidades y expectativas de nuestros residentes y sus familias, contando con un equipo humano altamente calificado, experimentado y comprometido con la calidad del servicio y el mejoramiento continuo.
        </p>
      </div>
    ),
  },
  {
    slug: 'informacion-general',
    title: 'Información General',
    desc: 'Datos de contacto, ubicación y clasificación de riesgo de nuestra institución.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    content: (
      <div className="overflow-hidden rounded-xl border border-sage-200">
        <table className="w-full text-sm text-sage-600/80">
          <tbody>
            <tr className="border-b border-sage-100 bg-sage-50/50">
              <td className="px-5 py-3 font-semibold text-sage-700 w-44">Centro de Trabajo</td>
              <td className="px-5 py-3">Administrativo</td>
            </tr>
            <tr className="border-b border-sage-100">
              <td className="px-5 py-3 font-semibold text-sage-700">Dirección</td>
              <td className="px-5 py-3">Calle 122 # 51-22</td>
            </tr>
            <tr className="border-b border-sage-100 bg-sage-50/50">
              <td className="px-5 py-3 font-semibold text-sage-700">Teléfono</td>
              <td className="px-5 py-3">8073079</td>
            </tr>
            <tr className="border-b border-sage-100">
              <td className="px-5 py-3 font-semibold text-sage-700">Clase de Riesgo</td>
              <td className="px-5 py-3">1</td>
            </tr>
            <tr className="bg-sage-50/50">
              <td className="px-5 py-3 font-semibold text-sage-700">ARL</td>
              <td className="px-5 py-3">SURA</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    slug: 'actividad-economica',
    title: 'Actividad Económica',
    desc: 'Clasificación según el Decreto 1607 de 2002 del Ministerio de Trabajo.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    content: (
      <div className="space-y-5 text-sage-600/80 leading-relaxed">
        <div>
          <h3 className="font-semibold text-sage-800 mb-2">Código de la actividad económica</h3>
          <p>Según el Decreto 1607 del 31 de julio de 2002 del Ministerio de Trabajo y Seguridad Social, mediante el cual se adopta la tabla de clasificación de actividades económicas para el Sistema General de Riesgos Laborales:</p>
          <p className="mt-3 font-medium text-sage-700 bg-sage-50 rounded-lg p-3 border border-sage-100">Empresas dedicadas a actividades de apoyo terapéutico.</p>
        </div>
        <div>
          <h3 className="font-semibold text-sage-800 mb-2">Descripción de la actividad económica</h3>
          <p>Según el Decreto 1607 de 2002, la institución desarrolla actividades correspondientes a:</p>
          <p className="mt-3 font-medium text-sage-700 bg-sage-50 rounded-lg p-3 border border-sage-100">Empresas dedicadas a servicios sociales con alojamiento, incluyendo establecimientos para personas en condición de discapacidad, asilos y hogares para adultos mayores.</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'reglamento-seguridad-salud',
    title: 'Reglamento de Seguridad',
    desc: 'Disposiciones para la prevención de accidentes de trabajo y enfermedades laborales.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    content: (
      <div className="space-y-5 text-sage-600/80 leading-relaxed">
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">Artículo 1</h3>
          <p>La empresa se compromete a dar cumplimiento a las disposiciones legales vigentes, orientadas a garantizar los mecanismos necesarios para la prevención oportuna y adecuada de los accidentes de trabajo y las enfermedades laborales.</p>
          <p className="mt-2">Lo anterior, de conformidad con las normas vigentes, entre ellas el Código Sustantivo del Trabajo, la Ley 9 de 1979, la Resolución 2400 de 1979, el Decreto 614 de 1984, la Resolución 2013 de 1986, la Resolución 1016 de 1989, el Decreto 1295 de 1994, la Ley 776 de 2002, la Ley 1010 de 2006, la Resolución 1401 de 2007, la Resolución 3673 de 2008, la Resolución 2646 de 2008, la Resolución 736 de 2009, la Resolución 1956 de 2008, la Resolución 2566 de 2009, la Resolución 2346 de 2007, la Resolución 1918 de 2009, la Resolución 1409 de 2012, la Resolución 652 de 2012, la Resolución 1356 de 2012, la Ley 1562 de 2012, el Decreto 1072 de 2015, el Decreto 1477 de 2014 y demás normas que las modifiquen, adicionen o sustituyan.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">Artículo 2</h3>
          <p>La empresa promoverá y garantizará la constitución y el funcionamiento del Comité Paritario de Seguridad y Salud en el Trabajo (COPASST), de conformidad con lo establecido en el Decreto 614 de 1984, la Resolución 2013 de 1986, la Resolución 1016 de 1989, el Decreto 1295 de 1994, la Ley 776 de 2002, la Resolución 1401 de 2007, el Decreto 1072 de 2015 y las demás normas que regulen la materia.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">Artículo 3</h3>
          <p>La empresa se compromete a destinar los recursos financieros, técnicos y humanos necesarios para el diseño, implementación, revisión, evaluación y mejora continua del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), elaborado de acuerdo con lo establecido en el Decreto 614 de 1984, la Resolución 1016 de 1989 y el Decreto 1072 de 2015.</p>
        </div>
        <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
          <h3 className="font-semibold text-sage-800 mb-1">Artículo 4</h3>
          <p>Los factores de riesgo existentes en la empresa corresponden a la exposición derivada de los procesos y actividades desarrolladas en la institución.</p>
          <p className="mt-2">Estos factores de riesgo están determinados de acuerdo con la naturaleza de las labores que se realizan y serán identificados, evaluados y controlados mediante el Sistema de Gestión de Seguridad y Salud en el Trabajo.</p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
            <span className="font-semibold">Parágrafo: </span>
            Con el fin de evitar que los factores de riesgo contemplados en el presente artículo se traduzcan en accidentes de trabajo o enfermedades laborales, la empresa implementará las medidas preventivas y correctivas necesarias, de conformidad con la legislación vigente.
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'sg-sst',
    title: 'SG-SST',
    desc: 'Política del Sistema de Gestión de Seguridad y Salud en el Trabajo.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.54 3.291m0 0-3.32 3.32" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-sage-600/80 leading-relaxed">
        <p>
          El Hogar Gerontológico Oasis de Vida se compromete con la protección, promoción y preservación de la salud de sus trabajadores, procurando su integridad física mediante la identificación, evaluación y control de los riesgos, el mejoramiento continuo de los procesos y la protección del medio ambiente.
        </p>
        <p>
          Todos los niveles directivos asumen la responsabilidad de promover un ambiente de trabajo seguro y saludable, garantizando el cumplimiento de los requisitos legales aplicables, involucrando a todas las partes interesadas en el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) y destinando los recursos humanos, físicos, técnicos y financieros necesarios para su adecuada implementación y mantenimiento.
        </p>
        <p>
          Los programas desarrollados por el Hogar Gerontológico Oasis de Vida estarán orientados al fortalecimiento de una cultura preventiva y del autocuidado, a la identificación e intervención de las condiciones de trabajo que puedan ocasionar accidentes o enfermedades laborales, al control del ausentismo y a la preparación y respuesta ante emergencias.
        </p>
        <p>
          Todos los empleados, contratistas y personal temporal serán responsables de cumplir las normas y procedimientos de seguridad establecidos por la institución, con el propósito de desarrollar un trabajo seguro, eficiente y productivo. Asimismo, deberán reportar oportunamente cualquier condición, acto o situación que pueda generar riesgos, incidentes o contingencias para los trabajadores, los residentes o la organización.
        </p>
      </div>
    ),
  },
  {
    slug: 'derechos-deberes',
    title: 'Derechos y Deberes',
    desc: 'Derechos y compromisos de los residentes y sus familias en nuestra institución.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    content: (
      <div className="space-y-5 text-sage-600/80 leading-relaxed">
        <div>
          <h3 className="font-semibold text-sage-800 text-lg mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Derechos
          </h3>
          <p className="mb-3">Todo adulto mayor residente en el Hogar Gerontológico Oasis de Vida tiene derecho a:</p>
          <ul className="space-y-2">
            {[
              'Recibir un trato digno, respetuoso y acorde con sus creencias, valores y costumbres.',
              'Mantener una comunicación clara, oportuna y permanente con el equipo interdisciplinario del hogar.',
              'Que se garantice la confidencialidad y protección de su historia clínica y de su información personal.',
              'Presentar reclamaciones, sugerencias o propuestas de mejora relacionadas con la prestación del servicio.',
              'Aceptar o rechazar el apoyo espiritual, religioso o moral que se le ofrezca, respetando siempre su voluntad.',
              'Recibir atención en condiciones que garanticen su privacidad e intimidad.',
              'Vivir y, llegado el momento, morir con dignidad, respeto y acompañamiento humanizado.',
              'Conocer de manera clara y oportuna los costos, tarifas y condiciones del servicio prestado por la institución.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-sage-200 pt-4">
          <h3 className="font-semibold text-sage-800 text-lg mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            Deberes
          </h3>
          <p className="mb-3">Todo adulto mayor residente y su familia se comprometen a:</p>
          <ul className="space-y-2">
            {[
              'Identificarse de manera veraz y suministrar toda la información necesaria para garantizar una adecuada atención, sin ocultar datos relevantes para su cuidado.',
              'Respetar la dignidad, los derechos y la convivencia de los demás adultos mayores residentes, sus familiares y el personal de la institución.',
              'Brindar un trato amable, digno, respetuoso y humano a todo el personal que presta sus servicios en el hogar.',
              'Participar activamente en el cuidado de su propia salud mediante el autocuidado, de acuerdo con sus capacidades y posibilidades.',
              'Seguir las recomendaciones e indicaciones del equipo interdisciplinario durante su permanencia en la institución y cumplir las normas sanitarias y de convivencia establecidas.',
              'Cumplir con los requisitos, reglamentos y recomendaciones institucionales establecidos por el hogar.',
              'Cuidar y hacer un uso adecuado de los muebles, equipos, elementos e instalaciones de la institución.',
              'Cumplir oportunamente con el pago de los servicios contratados, de acuerdo con las tarifas vigentes y las condiciones establecidas.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-sage-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
]
