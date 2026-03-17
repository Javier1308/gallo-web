import { useState, useEffect, useRef } from 'react'

const platos = Array.from({ length: 11 }, (_, i) => `/Plato${i + 1}.png`)

function Carrusel() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!auto) return
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % platos.length)
    }, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [auto])

  const goTo = (index: number) => {
    setAuto(false)
    if (timerRef.current) clearInterval(timerRef.current)
    setCurrent((index + platos.length) % platos.length)
  }

  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-full h-full bg-salmon/20 rounded-2xl" />
      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
        {platos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Plato ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Prev */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-verde-oscuro/70 hover:bg-verde-oscuro text-crema rounded-full w-9 h-9 flex items-center justify-center transition-colors"
          aria-label="Anterior"
        >
          ‹
        </button>
        {/* Next */}
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-verde-oscuro/70 hover:bg-verde-oscuro text-crema rounded-full w-9 h-9 flex items-center justify-center transition-colors"
          aria-label="Siguiente"
        >
          ›
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {platos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-salmon' : 'bg-crema/50'}`}
              aria-label={`Ir a plato ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -bottom-6 -right-6 bg-verde-oscuro text-crema rounded-2xl p-5 shadow-xl text-center z-10">
        <p className="font-display text-4xl font-bold text-salmon">2024</p>
        <p className="text-xs text-crema/60 uppercase tracking-wider mt-1">Since</p>
      </div>
    </div>
  )
}

const values = [
  {
    icon: '🔥',
    title: 'Sabor de verdad',
    desc: 'Marinaje secreto, carbón de la buena y recetas que saben a barrio. Sin atajos.',
  },
  {
    icon: '🐓',
    title: 'El mejor pollo',
    desc: 'Jugoso por dentro, crocante por fuera. El pollo a la brasa que Lima merece.',
  },
  {
    icon: '🏘️',
    title: 'Espíritu de barrio',
    desc: 'Somos una pollería con alma. Cercanos, directos, sin pretensiones. Come como en casa.',
  },
  {
    icon: '⭐',
    title: 'Favoritos del público',
    desc: 'Anticuchos, lomo saltado, alitas BBQ. La carta que siempre quisiste tener cerca.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-crema py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-salmon font-bold tracking-widest uppercase text-sm">Quiénes somos</span>
          <h2 className="section-title mt-2 mb-6">El papá de<br />los pollitos</h2>
          <p className="text-verde-medio text-lg max-w-2xl mx-auto leading-relaxed">
            Gallo nació en 2024 con una misión simple: traer el mejor pollo a la brasa
            a San Isidro. Sin rodeos. Con sabor, con carácter y con ese toque de barrio
            que hace que quieras volver siempre.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Carrusel */}
          <Carrusel />

          {/* Text */}
          <div className="space-y-6">
            <p className="text-verde-oscuro text-lg leading-relaxed">
              En <span className="font-bold text-salmon">Gallo</span>, creemos que comer bien
              no tiene que ser complicado. Por eso hacemos las cosas con honestidad:
              buena brasa, buena carne, buenos acompañamientos.
            </p>
            <p className="text-verde-medio leading-relaxed">
              Nuestro pollo a la brasa tiene un marinaje secreto que lo hace único.
              Nuestra parrilla habla sola. Y nuestros anticuchos son, simplemente,
              el alma de la noche.
            </p>
            <p className="text-verde-medio leading-relaxed">
              Estamos en el corazón de San Isidro, pero tenemos el corazón del barrio.
              Ven con la familia, con amigos, o solo con las ganas de comer rico.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-crema group"
            >
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="font-bold text-verde-oscuro text-lg mb-2 group-hover:text-salmon transition-colors">
                {v.title}
              </h3>
              <p className="text-verde-medio text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Horario strip */}
        <div className="mt-16 bg-verde-oscuro rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-crema">
          <div>
            <p className="text-salmon font-bold uppercase tracking-widest text-sm mb-1">Horario de atención</p>
            <p className="text-2xl font-display font-bold">Lunes a Viernes</p>
            <p className="text-crema/70">12:00 pm – 10:00 pm</p>
          </div>
          <div className="w-px h-16 bg-crema/20 hidden md:block" />
          <div>
            <p className="text-2xl font-display font-bold">Sábado y Domingo</p>
            <p className="text-crema/70">12:00 pm – 10:30 pm</p>
          </div>
          <div className="w-px h-16 bg-crema/20 hidden md:block" />
          <a href="#ubicacion" className="btn-primary whitespace-nowrap">
            Ver cómo llegar →
          </a>
        </div>
      </div>
    </section>
  )
}
