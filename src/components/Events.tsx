const events = [
  {
    date: { day: '29', month: 'Mar', year: '2026' },
    title: 'Rencontre Mensuelle — Mars 2026',
    type: 'Réunion communautaire',
    location: 'En ligne (Zoom)',
    desc: 'Mise à jour sur les projets en cours, nouvelles du village, et planification des prochaines initiatives.',
    color: '#0F5132',
  },
  {
    date: { day: '19', month: 'Avr', year: '2026' },
    title: 'Assemblée Générale Semestrielle',
    type: 'Assemblée officielle',
    location: 'Washington D.C.',
    desc: 'Rapport financier, élection du bureau, et présentation des projets pour le second semestre 2026.',
    color: '#A8391C',
  },
  {
    date: { day: '07', month: 'Jun', year: '2026' },
    title: 'Journée Culturelle Badoumka',
    type: 'Célébration culturelle',
    location: 'Atlanta, GA',
    desc: 'Une journée de musique, cuisine, et danses traditionnelles pour célébrer notre culture et renforcer les liens communautaires.',
    color: '#C5A200',
  },
]

export default function Events() {
  return (
    <section id="evenements" className="py-28 bg-[#F0EBE0] relative">
      <div className="kente-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 pattern-overlay opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Agenda</div>
          <h2 className="text-4xl font-bold text-[#0F5132] mb-4 section-title">
            Prochains <span className="italic text-[#C5A200]">événements</span>
          </h2>
          <p className="text-[#6B3D1E]/70 max-w-lg mx-auto">
            Rejoignez-nous lors de nos prochains rassemblements — chaque rencontre est une occasion de renforcer nos liens.
          </p>
        </div>

        <div className="space-y-5">
          {events.map((event) => (
            <div key={event.title} className="card-warm rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Date badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)` }}>
                <span className="text-2xl font-bold leading-none">{event.date.day}</span>
                <span className="text-xs uppercase tracking-wider opacity-80">{event.date.month}</span>
                <span className="text-xs opacity-60">{event.date.year}</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{ background: `${event.color}15`, color: event.color }}>
                    {event.type}
                  </span>
                  <span className="text-[#6B3D1E]/50 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                <h3 className="font-bold text-[#0F5132] text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {event.title}
                </h3>
                <p className="text-[#6B3D1E]/70 text-sm">{event.desc}</p>
              </div>

              {/* CTA */}
              <a href="#contact"
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors whitespace-nowrap"
                style={{ color: event.color, borderColor: `${event.color}30`, background: `${event.color}08` }}>
                S'inscrire →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact"
            className="inline-flex items-center gap-2 text-[#0F5132] font-medium hover:text-[#A8391C] transition-colors text-sm underline underline-offset-4 decoration-[#C5A200]">
            Voir tous les événements
          </a>
        </div>
      </div>
    </section>
  )
}
