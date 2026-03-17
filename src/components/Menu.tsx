import { useState } from 'react'

type MenuItem = {
  name: string
  desc: string
  price: string | { [key: string]: string }
  star?: boolean
  note?: string
}

type Category = {
  id: string
  label: string
  emoji: string
  items: MenuItem[]
}

const categories: Category[] = [
  {
    id: 'pollo',
    label: 'Pollo a la Brasa',
    emoji: '🍗',
    items: [
      {
        name: '1 Pollo a la Brasa',
        desc: 'Jugoso, dorado y crocante, con marinaje secreto. Viene con papas, ensalada y ají casero.',
        price: { 'Entero': 'S/. 78.90' },
        star: true,
      },
      {
        name: '½ Pollo a la Brasa',
        desc: 'La mitad perfecta. Con papas, ensalada y ají casero.',
        price: { 'Media': 'S/. 46.90' },
      },
      {
        name: '¼ Pollo a la Brasa',
        desc: 'Elige tu parte favorita: pecho o pierna.',
        price: { 'Pecho': 'S/. 25.90', 'Pierna': 'S/. 22.90' },
      },
    ],
  },
  {
    id: 'parrilla',
    label: 'A la Parrilla',
    emoji: '🥩',
    items: [
      {
        name: 'Anticuchos',
        desc: 'El alma de la noche: corazón con ajípanca, papita huayro y choclito, como de carretilla.',
        price: { '2 Palitos + Chinch. + Rachi': 'S/. 33.90', '2 Palitos': 'S/. 28.90', 'Chinch. + Rachi': 'S/. 22.90' },
        star: true,
      },
      {
        name: 'Bife Angosto / Bife Ancho',
        desc: 'Sabores intensos, fuego lento y sazón casera. Cortes generosos al carbón con papas fritas.',
        price: 'S/. 54.90',
        star: true,
      },
      {
        name: 'Entraña',
        desc: 'Tierna y sabrosa. Asada al punto con ese toque ahumado que solo da el carbón.',
        price: 'S/. 51.90',
      },
      {
        name: 'Filete de Pollo a la Parrilla',
        desc: 'Jugoso y tierno, cocinado al carbón y bañado en chimichurri de la casa. Con papas y ensalada.',
        price: 'S/. 31.90',
        star: true,
      },
      {
        name: 'Filete de Pollo a la BBQ',
        desc: 'Filete bañado en salsa BBQ casera. Dulce, ahumado y con mucho sabor. Con papas fritas.',
        price: 'S/. 31.90',
      },
      {
        name: 'Chuleta de Cerdo',
        desc: 'Sazonada al estilo tradicional y cocida lentamente. Jugosa por dentro.',
        price: 'S/. 34.90',
      },
      {
        name: 'Parrilla para Cuatro',
        desc: '½ Pollo brasa + 2 anticuchos + 350g chuleta + 250g bife + 1 chorizo + 1 morcilla. Con papas, chimichurri y ají.',
        price: 'S/. 149.90',
        note: 'Perfecta para compartir',
      },
    ],
  },
  {
    id: 'alitas',
    label: 'Alitas y Tequeños',
    emoji: '🍢',
    items: [
      {
        name: 'Alitas Acevichadas',
        desc: 'Con ese toque ácido, fresco y atrevido del ceviche. Una fusión inesperada… y brutal.',
        price: { 'x6': 'S/. 24.90', 'x12': 'S/. 35.90' },
      },
      {
        name: 'Alitas BBQ',
        desc: 'Jugosas y bañadas en salsa BBQ casera. Perfectas para compartir o disfrutar solo.',
        price: { 'x6': 'S/. 24.90', 'x12': 'S/. 35.90' },
        star: true,
      },
      {
        name: 'Alitas Broaster',
        desc: 'Crujientes y doradas. Con ese rebozado callejero que no se olvida.',
        price: { 'x6': 'S/. 24.90', 'x12': 'S/. 35.90' },
      },
      {
        name: 'Tequeños',
        desc: 'Rellenos de pollo a la brasa, calientitos y acompañados de la salsa del Gallo.',
        price: { 'x6': 'S/. 14.90', 'x12': 'S/. 24.90' },
        star: true,
      },
    ],
  },
  {
    id: 'favoritos',
    label: 'Los Favoritos',
    emoji: '❤️',
    items: [
      {
        name: 'Salchipollo',
        desc: 'Pollo a la brasa, salchicha, papas crocantes y salsas de la casa. El favorito de todos.',
        price: 'S/. 31.90',
        star: true,
      },
      {
        name: 'Salchipapa',
        desc: 'Salchicha, papas crocantes y salsas de la casa. Simple, sabroso e inolvidable.',
        price: 'S/. 25.90',
      },
      {
        name: 'Pollada Criolla',
        desc: 'Receta casera, espíritu popular. Medio pollo marinado, papas, ensalada y su ají. Como el sábado con cumbia.',
        price: 'S/. 35.90',
      },
      {
        name: 'Mostrito',
        desc: 'Fusión con alma criolla: arroz chaufa, papas crocantes y pollo a la brasa en un solo plato.',
        price: { 'Pierna': 'S/. 31.90', 'Pecho': 'S/. 33.90' },
      },
      {
        name: 'Gallo Crunch',
        desc: 'Pan suave, pollo broaster con sazón peruana, ensalada de col y salsa gallo. Contundente y rico.',
        price: 'S/. 24.90',
        star: true,
      },
      {
        name: 'Lomo Saltado',
        desc: 'Clásico criollo con alma callejera. Trozos jugosos salteados al wok con papas y arroz.',
        price: 'S/. 51.90',
        star: true,
      },
    ],
  },
  {
    id: 'entradas',
    label: 'Ensaladas y Sopas',
    emoji: '🥗',
    items: [
      { name: 'Ensalada Fresca', desc: 'Lechuga, tomate, pepino, zanahoria, palta y vinagreta.', price: 'S/. 19.00' },
      { name: 'Ensalada Cocida', desc: 'Brócoli, beterraga, zanahoria, choclo y vinagreta.', price: 'S/. 19.00' },
      { name: 'Ensalada César + Parrilla', desc: 'Lechuga romana, crutones, parmesano, pechuga y aderezo César.', price: 'S/. 32.00' },
      { name: 'Aguadito', desc: 'Sopita casera y reconfortante. Hecha con arverjita, zanahoria, choclo, pollo y aderezo verde.', price: 'S/. 25.90', star: true },
      { name: 'Sopa de Dieta', desc: 'Ligera, sabrosa y reconfortante. Con cubos de pechuga de pollo.', price: 'S/. 22.90' },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    emoji: '🍰',
    items: [
      { name: 'Picarones', desc: 'Dulces, dorados. Masa de zapallo y camote, frita al momento, bañada con miel de chancaca. x4 unidades.', price: 'S/. 15.00', star: true },
      { name: 'Torta de Chocolate', desc: 'Húmeda y esponjosa. Para los que no pueden resistir el chocolate.', price: 'S/. 15.90', star: true },
      { name: 'Torta de Tres Leches', desc: 'Esponjosa y empapada. Un clásico que nunca falla.', price: 'S/. 15.90' },
      { name: 'Crema Volteada', desc: 'El postre de siempre, hecho con amor. Caramelito en cada cucharada.', price: 'S/. 12.90' },
      { name: 'Pie de Limón', desc: 'Cremoso, ácido y con la base perfecta. Equilibrio en cada bocado.', price: 'S/. 14.90' },
      { name: 'Arroz con Leche', desc: 'El sabor de la abuela. Reconfortante y bien hecho.', price: 'S/. 9.90' },
      { name: 'Mazamorra Morada', desc: 'Tradición peruana en cada sorbo. Cremosa y bien preparada.', price: 'S/. 9.90' },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas y Cócteles',
    emoji: '🍹',
    items: [
      { name: 'Pisco Sour', desc: 'El clásico peruano. Clásico o Maracuyá.', price: 'S/. 24.90', star: true },
      { name: 'Chilcano', desc: 'Refrescante y equilibrado. Clásico o Maracuyá.', price: 'S/. 19.90' },
      { name: 'Mojito', desc: 'Clásico, Maracuyá o Frutos Rojos.', price: 'S/. 19.90' },
      { name: 'Cuba Libre', desc: 'Simple y directo. El clásico de siempre.', price: 'S/. 19.90' },
      { name: 'Aperol Spritz', desc: 'Ligero, naranja y perfecto para el verano.', price: 'S/. 19.90' },
      { name: 'Piña Colada', desc: 'Tropical y cremosa.', price: 'S/. 24.90' },
      { name: 'Sangría de la Casa (Jarra)', desc: 'Nuestra sangría especial para compartir.', price: 'S/. 24.90' },
      { name: 'Chicha Morada / Maracuyá', desc: 'Caseras y naturales. Vaso o jarra de 1L.', price: { 'Vaso': 'S/. 5.90', 'Jarra 1L': 'S/. 15.90' } },
      { name: 'Cervezas', desc: 'Stella Artois, Corona, Cusqueña Variedades, Pilsen Callao.', price: { 'Pilsen': 'S/. 12', 'Cusqueña': 'S/. 13', 'Corona/Stella': 'S/. 14' } },
    ],
  },
]

function PriceDisplay({ price }: { price: string | { [key: string]: string } }) {
  if (typeof price === 'string') {
    return <span className="text-salmon font-bold text-lg">{price}</span>
  }
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {Object.entries(price).map(([label, val]) => (
        <span key={label} className="text-xs bg-crema px-2 py-1 rounded-lg text-verde-oscuro font-semibold">
          {label}: <span className="text-salmon">{val}</span>
        </span>
      ))}
    </div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('pollo')

  const current = categories.find((c) => c.id === active)!

  return (
    <section id="carta" className="bg-verde-oscuro py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-salmon font-bold tracking-widest uppercase text-sm">Nuestra Carta</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-crema uppercase tracking-wide mt-2 mb-4">
            Elige tu favorito
          </h2>
          <p className="text-crema/60 max-w-xl mx-auto">
            Todo lo que necesitas para una comida perfecta está aquí. Acompaña tu plato con ensalada parrillera por solo <span className="text-salmon font-bold">+S/.9.90 ★</span>
          </p>

          {/* PDF link */}
          <a
            href="/CartaDigitalGallo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-crema/10 hover:bg-crema/20 border border-crema/30 hover:border-salmon text-crema hover:text-salmon font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Ver carta en PDF
          </a>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === cat.id
                  ? 'bg-salmon text-white shadow-lg scale-105'
                  : 'bg-verde-medio/30 text-crema hover:bg-verde-medio/60'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="bg-verde-medio/35 border border-salmon/30 rounded-2xl p-5 shadow-lg shadow-black/30 hover:bg-verde-medio/50 hover:border-salmon/70 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-crema text-base group-hover:text-salmon transition-colors leading-snug">
                  {item.name}
                  {item.star && <span className="text-salmon ml-1.5">★</span>}
                </h3>
              </div>
              <p className="text-crema/50 text-xs leading-relaxed mb-3">{item.desc}</p>
              {item.note && (
                <span className="inline-block bg-salmon/20 text-salmon text-xs px-2 py-0.5 rounded-full mb-2">
                  {item.note}
                </span>
              )}
              <PriceDisplay price={item.price} />
            </div>
          ))}
        </div>

        {/* Adicionales */}
        <div className="mt-12 bg-verde-medio/20 border border-verde-medio/40 rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-salmon mb-4">Adicionales</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'Papa parrillera', price: 'S/. 7.90' },
              { name: 'Papas fritas', price: 'S/. 10.90' },
              { name: 'Arroz con choclo', price: 'S/. 10.90' },
              { name: 'Arroz chaufa', price: 'S/. 11.90' },
              { name: 'Pechuga plancha', price: 'S/. 14.90' },
              { name: 'Palta', price: 'S/. 9.90' },
            ].map((a) => (
              <div key={a.name} className="text-center bg-verde-oscuro/40 rounded-xl p-3">
                <p className="text-crema text-xs font-semibold leading-snug">{a.name}</p>
                <p className="text-salmon font-bold mt-1">{a.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
