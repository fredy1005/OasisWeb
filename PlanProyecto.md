# Plan — Landing Page Hogar Geriátrico (Monorepo Next + Nest)

> Documento de planeación. No incluye código: define alcance, arquitectura, secciones, contenido, diseño y pasos de implementación para que cualquier dev pueda ejecutarlo.

---

## 1. Objetivo y audiencia

**Objetivo de la página:** generar confianza y conseguir que un familiar agende una visita o deje una consulta.

**Audiencia real:** no es el adulto mayor, sino sus hijos/familiares (45–65 años) que investigan y toman la decisión. Buscan tres cosas en este orden: que sea un lugar seguro y digno, que esté legalmente habilitado, y que sea cálido (no un "depósito").

**Una sola acción principal (CTA):** *Agendar una visita*. Todo lo demás (FAQ, blog, avales) existe para reducir la fricción hacia ese CTA.

---

## 2. Stack y arquitectura del monorepo

```
hogar-geriatrico/
├── package.json            # raíz con npm workspaces + scripts
├── README.md
├── apps/
│   ├── web/                # Next.js 14 (App Router) + Tailwind
│   │   ├── app/            # rutas: / , /faqs , /blog , /blog/[slug] , /contacto
│   │   ├── components/     # secciones (Hero, Espacios, Avales, FAQ, etc.)
│   │   ├── lib/            # cliente fetch a la API + tipos
│   │   └── public/         # imágenes de los espacios
│   └── api/                # NestJS
│       └── src/
│           ├── contact/        # POST formulario de contacto
│           ├── blog/           # GET experiencias / posts
│           ├── faq/            # GET preguntas frecuentes
│           └── testimonials/   # GET testimonios
```

**Decisiones:**
- **npm workspaces** Turborepo o pnpm.
- **Front:** Next.js App Router con SSR/ISR para SEO (clave en un negocio local).
- **Back:** NestJS modular por dominio. Arranca con datos semilla en memoria → migrar a PostgreSQL (Prisma o TypeORM) cuando haga falta panel de administración.
- **Comunicación:** REST. El front consume `NEXT_PUBLIC_API_URL`.

**Puertos:** web `3000`, api `3001` (prefijo `/api`).

---

## 3. Estructura de la landing (orden de scroll)

| # | Sección | Qué comunica | Fuente de datos |
|---|---------|--------------|-----------------|
| 1 | **Hero** | Propuesta de valor + CTA "Agendar visita" | estático |
| 2 | **Espacios** *(elemento signature)* | Galería de fotos de habitaciones, comedor, jardín, sala | estático / CMS |
| 3 | **Servicios y cuidados** | Enfermería 24h, médico, nutrición, kinesiología, recreación | estático |
| 4 | **Un día en el hogar** | Rutina (mañana/tarde/noche) para mostrar vida cotidiana | estático |
| 5 | **Avales legales** | Habilitaciones, normativa, certificaciones | estático |
| 6 | **Experiencias / Blog** | 3 últimas historias de residentes y familias | API `/blog` |
| 7 | **Testimonios** | Citas de familiares | API `/testimonials` |
| 8 | **Preguntas frecuentes** | Acordeón con dudas comunes | API `/faqs` |
| 9 | **Contacto** | Formulario + mapa + teléfono/WhatsApp/dirección | API `/contact` |
| 10 | **Footer** | Datos legales, redes, horarios, links | estático |

**Páginas dedicadas (además de la home):**
- `/faqs` — todas las preguntas, agrupadas por categoría.
- `/blog` y `/blog/[slug]` — listado y detalle de experiencias.
- `/contacto` — formulario ampliado + cómo llegar.

---

## 4. Sección de **Avales legales** (lo pediste explícito)

Bloque de credibilidad. Mostrar como tarjetas/insignias con ícono y, donde aplique, link al PDF o número de registro:

- **Habilitación municipal/sanitaria** vigente (número de licencia visible).
- **Registro como residencia de adultos mayores** ante el ente regulador correspondiente.
- **Cumplimiento de normativa** de protección al adulto mayor / derechos del residente.
- **Habilitación de bomberos** y plan de evacuación.
- **Seguros** de responsabilidad civil.
- **Certificaciones de calidad** o de personal de salud (enfermería matriculada).

> Nota: los nombres exactos de leyes y organismos dependen del país/ciudad. Dejar los textos como variables de contenido editables y verificar con el cliente los números de registro reales antes de publicar.

---

## 5. Contenido sugerido (copy de arranque)

- **Hero título:** "Un hogar donde los años se viven acompañados."
- **Hero subtítulo:** Cuidado profesional 24 horas, calidez de casa y total transparencia para tu familia.
- **Servicios:** Enfermería 24h · Atención médica · Nutrición personalizada · Kinesiología · Actividades recreativas · Acompañamiento emocional.
- **FAQ semilla:** requisitos de ingreso, atención médica permanente, estadías temporales/centro de día, dietas especiales, régimen de visitas, qué incluye la mensualidad.
- **Blog semilla:** "El huerto que cuidan nuestros residentes", "Cómo elegir un hogar para tu padre o madre", "La tarde de música de los miércoles".

---

## 6. Endpoints de la API (Nest)

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/faqs` | Lista de preguntas frecuentes |
| `GET` | `/api/blog` | Lista de experiencias/posts |
| `GET` | `/api/blog/:slug` | Detalle de un post |
| `GET` | `/api/testimonials` | Testimonios de familiares |
| `POST` | `/api/contact` | Recibe consulta del formulario (valida con class-validator; en prod envía email con Resend/Nodemailer o guarda en DB) |

Validación con `ValidationPipe` global, CORS limitado al origen del front.

---

## 7. Dirección de diseño

Evitar el look genérico "crema + serif + terracota". Para un hogar geriátrico conviene **calidez seria**, no clínica fría ni dulzona.

- **Paleta:** verde salvia / verde profundo como base, crema cálido de fondo, y un **dorado tenue** como acento (sensación de cuidado, naturaleza, luz). Buen contraste y legible.
- **Tipografía:** una serif humanista cálida para títulos (cercanía + seriedad) + una sans muy legible para cuerpo. **Tamaños grandes** y alto contraste pensando en que algunos visitantes son mayores.
- **Elemento signature:** "**Un día en el hogar**" — la galería de espacios organizada por momento del día (mañana / tarde / noche), de modo que las fotos no sean decorativas sino que cuenten la vida cotidiana del lugar.
- **Accesibilidad (no negociable aquí):** foco visible por teclado, contraste AA, texto base ≥18px, `prefers-reduced-motion` respetado, botón de WhatsApp flotante.

---

## 8. Extras que suman (mi recomendación)

- **Botón flotante de WhatsApp** y clic-para-llamar en móvil.
- **Mapa embebido** + sección "Cómo llegar".
- **SEO local:** metadatos, Open Graph, datos estructurados `LocalBusiness` (schema.org) → aparecer mejor en búsquedas de la zona.
- **Tour fotográfico** o video corto del hogar en el Hero.
- **Sello de transparencia de costos:** qué incluye la mensualidad (reduce la duda #1 de las familias).
- **Formulario corto** (nombre, teléfono, email, mensaje) — mientras menos campos, más consultas.
- **Consentimiento de cookies/privacidad** si se usan analytics.

---

## 9. Pasos de implementación

1. Inicializar monorepo con npm workspaces (`package.json` raíz + scripts `dev`, `build`).
2. Scaffolding `apps/api` con NestJS CLI; crear módulos `contact`, `faq`, `blog`, `testimonials` con datos semilla en memoria.
3. Habilitar CORS y `ValidationPipe`; probar endpoints.
4. Scaffolding `apps/web` con Next.js + Tailwind; definir tokens de color y tipografía del plan.
5. Construir componentes por sección (Hero → Footer) con datos estáticos primero.
6. Conectar FAQ, Blog, Testimonios y Contacto a la API vía `lib/api`.
7. Cargar imágenes reales de los espacios en `public/`.
8. Verificar accesibilidad, responsive y SEO.
9. (Producción) Migrar datos a PostgreSQL, conectar envío de emails, desplegar web (Vercel) y api (Railway/Render).

---

## 10. Checklist de "listo para publicar"

- [ ] Números de registro y avales legales **verificados** con el cliente.
- [ ] Fotos reales y con autorización de uso.
- [ ] Formulario probado (llega el email / se guarda la consulta).
- [ ] Responsive en móvil y tablet.
- [ ] Contraste y foco de teclado revisados.
- [ ] Metadatos SEO y datos estructurados `LocalBusiness`.
- [ ] WhatsApp, teléfono y dirección correctos.