const WA_BASE = 'https://wa.me/51986056159?text='

const opciones = [
  {
    emoji: '🍗',
    titulo: 'Almuerzo o Cena',
    desc: 'Reserva tu mesa para disfrutar el mejor pollo a la brasa con tu gente.',
    mensaje: 'Hola Gallo, quiero reservar una mesa para almuerzo/cena 🍗',
  },
  {
    emoji: '🥩',
    titulo: 'Noche de Parrilla',
    desc: 'Anticuchos, bife, chuleta... La parrilla que mereces con buena compañía.',
    mensaje: 'Hola Gallo, quiero reservar para una noche de parrilla 🥩',
  },
  {
    emoji: '🎉',
    titulo: 'Celebración o Grupo',
    desc: 'Cumpleaños, reuniones, eventos. Cuéntanos y lo organizamos juntos.',
    mensaje: 'Hola Gallo, quiero reservar para una celebración/grupo 🎉',
  },
]

export default function Reservas() {
  return (
    <section id="reservas" className="bg-crema py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-salmon font-bold tracking-widest uppercase text-sm">Reservas</span>
          <h2 className="section-title mt-2 mb-4">Reserva tu mesa</h2>
          <p className="text-verde-medio text-lg max-w-xl mx-auto">
            Sin formularios, sin complicaciones. Escríbenos por WhatsApp y en minutos
            tienes tu mesa lista.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {opciones.map((op) => (
            <a
              key={op.titulo}
              href={`${WA_BASE}${encodeURIComponent(op.mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-transparent hover:border-salmon rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <span className="text-5xl block mb-4">{op.emoji}</span>
              <h3 className="font-bold text-verde-oscuro text-lg mb-2 group-hover:text-salmon transition-colors">
                {op.titulo}
              </h3>
              <p className="text-verde-medio text-sm leading-relaxed mb-5">{op.desc}</p>
              <span className="inline-flex items-center gap-2 text-[#25D366] font-bold text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reservar por WhatsApp
              </span>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div className="bg-verde-oscuro rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-salmon font-bold uppercase tracking-widest text-xs mb-2">¿Tienes dudas?</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-crema mb-2">
              Escríbenos directamente
            </h3>
            <p className="text-crema/60 text-sm">
              Atendemos por WhatsApp de lunes a domingo.
              Te respondemos rápido.
            </p>
          </div>
          <a
            href={`${WA_BASE}${encodeURIComponent('Hola Gallo, tengo una consulta 👋')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir al +51 986 056 159
          </a>
        </div>
      </div>
    </section>
  )
}
