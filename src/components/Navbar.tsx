import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Carta', href: '#carta' },
  { label: 'Consultas', href: '#consultas' },
  { label: 'Visítanos', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-verde-oscuro shadow-xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-salmon tracking-widest drop-shadow">
            ★ GALLO ★
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-crema hover:text-salmon font-semibold tracking-wide transition-colors duration-200 text-sm uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#ubicacion"
          className="hidden md:inline-block btn-primary text-sm"
        >
          Ir al local
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-crema focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-verde-oscuro border-t border-verde-medio px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-crema hover:text-salmon py-3 font-semibold uppercase tracking-wide border-b border-verde-medio/30 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a href="#ubicacion" className="btn-primary inline-block mt-4 text-sm text-center w-full">
            Ir al local
          </a>
        </div>
      )}
    </nav>
  )
}
