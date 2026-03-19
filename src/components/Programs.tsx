const programs = [
  {
    icon: '🎓',
    color: '#0F5132',
    accent: '#1A7A4A',
    tag: 'Jeunesse & Avenir',
    title: 'Héritiers Badoumka',
    description: 'Un programme de mentorat et de développement dédié à la jeune génération de la diaspora Badoumka. Nous connectons les jeunes avec des mentors, des bourses, et des opportunités professionnelles.',
    features: ['Mentorat personnalisé', 'Bourses d\'études', 'Ateliers de leadership', 'Réseau professionnel'],
  },
  {
    icon: '❤️',
    color: '#A8391C',
    accent: '#C0451E',
    tag: 'Entraide & Solidarité',
    title: 'Badoumka Cares',
    description: 'Notre fonds de solidarité communautaire pour venir en aide aux membres dans le besoin — qu\'il s\'agisse de situations d\'urgence, de soutien médical, ou d\'aide aux familles au Cameroun.',
    features: ['Fonds d\'urgence', 'Soutien médical', 'Aide aux familles', 'Projets au village'],
  },
  {
    icon: '🗓️',
    color: '#6B3D1E',
    accent: '#8B4E28',
    tag: 'Communauté & Liens',
    title: 'Rencontres Mensuelles',
    description: 'Des réunions régulières en ligne et en présentiel pour maintenir les liens, partager les nouvelles du village, planifier des initiatives communes, et célébrer notre culture ensemble.',
    features: ['Réunions mensuelles', 'Événements culturels', 'Nouvelles du village', 'Projets communs'],
  },
]

export default function Programs() {
  return (
    <section id="programmes" className="py-28 relative bg-[#F0EBE0]">
      <div className="absolute inset-0 pattern-overlay" />
      <div className="kente-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Nos programmes</div>
          <h2 className="text-4xl font-bold text-[#0F5132] mb-4 section-title">
            Trois piliers,{' '}
            <span className="italic text-[#C5A200] gold-underline">une vision</span>
          </h2>
          <p className="text-[#6B3D1E]/70 max-w-xl mx-auto leading-relaxed">
            Chaque programme est conçu pour renforcer notre communauté, honorer nos racines, et bâtir un avenir solide pour tous les Fils et Filles de Badoumka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {programs.map((program) => (
            <div key={program.title} className="card-warm rounded-3xl overflow-hidden">
              {/* Top color bar */}
              <div className="h-2" style={{ background: `linear-gradient(90deg, ${program.color}, ${program.accent})` }} />

              <div className="p-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
                  style={{ background: `${program.color}15`, border: `1px solid ${program.color}25` }}>
                  <span className="text-lg">{program.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: program.color }}>{program.tag}</span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: program.color }}>
                  {program.title}
                </h3>
                <p className="text-[#6B3D1E]/70 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                <ul className="space-y-2">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#2C1A0E]/70">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: program.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  className="mt-7 w-full py-2.5 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors"
                  style={{ background: `${program.color}10`, color: program.color, border: `1px solid ${program.color}25` }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${program.color}20`
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${program.color}10`
                  }}>
                  En savoir plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
