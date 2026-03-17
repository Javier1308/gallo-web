import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.4}px`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E4033 0%, #2D5A3D 50%, #1E4033 100%)',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/PolloALaBrasa.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-verde-oscuro/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-salmon/20 border border-salmon/40 text-salmon text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span>★</span>
          <span>San Isidro, Lima · Desde 2024</span>
          <span>★</span>
        </div>

        {/* Main title */}
        <h1 className="font-display text-8xl md:text-[12rem] font-bold text-salmon leading-none drop-shadow-2xl mb-2 tracking-tight">
          GALLO
        </h1>
        <p className="text-crema/60 font-display text-lg md:text-xl tracking-[0.4em] uppercase mb-2">
          — Pollería —
        </p>
        <p className="text-crema/40 text-sm tracking-[0.6em] uppercase mb-10">
          Since 2024
        </p>

        {/* Claim */}
        <p className="text-crema text-xl md:text-2xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          El sabor del barrio que nunca olvidarás.
          <br />
          <span className="text-salmon font-semibold">Pollo a la brasa, parrilla y más.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#carta" className="btn-primary text-base px-10 py-4">
            Ver la Carta
          </a>
          <a href="#ubicacion" className="btn-outline text-base px-10 py-4 border-crema text-crema hover:bg-crema hover:text-verde-oscuro">
            ¿Cómo llegar?
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <a href="#nosotros" aria-label="Scroll">
          <svg className="w-6 h-6 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
