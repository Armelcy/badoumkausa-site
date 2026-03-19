const heritageItems = [
  { icon: '👑', title: 'La Chefferie', desc: 'Badoumka est gouvernée par une chefferie traditionnelle qui incarne la sagesse ancestrale et l\'autorité coutumière transmise de génération en génération.' },
  { icon: '🥁', title: 'Musique & Danse', desc: 'Les rythmes Badoumka résonnent lors de chaque célébration. Nos danses traditionnelles racontent l\'histoire de notre peuple avec joie et fierté.' },
  { icon: '🌿', title: 'Terre & Nature', desc: 'Notre village est ancré dans une terre fertile au cœur du Cameroun. L\'agriculture et le respect de la nature sont au cœur de notre identité.' },
  { icon: '🗣️', title: 'Langue & Oralité', desc: 'La langue Badoumka est le fil conducteur de notre culture. Nos proverbes, contes et histoires orales portent la philosophie de nos ancêtres.' },
  { icon: '🍲', title: 'Gastronomie', desc: 'La cuisine Badoumka, riche en saveurs et en traditions, est une expression d\'amour et d\'hospitalité partagée lors de chaque rassemblement communautaire.' },
  { icon: '🤲', title: 'Hospitalité', desc: 'L\'hospitalité est sacrée chez les Badoumka. Accueillir l\'étranger comme un membre de la famille est une valeur fondamentale transmise à chaque génération.' },
]

export default function Heritage() {
  return (
    <section id="heritage" className="py-28 relative bg-[#FAF7F2]">
      <div className="kente-divider absolute top-0 left-0 right-0" />

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A200]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Notre héritage</div>
            <h2 className="text-4xl font-bold text-[#0F5132] leading-tight section-title">
              Les racines qui nous{' '}
              <span className="italic text-[#C5A200]">rassemblent</span>
            </h2>
          </div>
          <p className="text-[#6B3D1E]/70 leading-relaxed">
            Badoumka est plus qu'un village — c'est une âme, une histoire, une façon d'être au monde. En préservant notre culture, nous honorons ceux qui nous ont précédés et offrons un héritage vivant à nos enfants.
          </p>
        </div>

        {/* Heritage grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {heritageItems.map(({ icon, title, desc }) => (
            <div key={title} className="card-warm rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0F5132]/8 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#0F5132]/15 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0F5132] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                  <p className="text-[#6B3D1E]/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0F5132] to-[#1A5C3A] p-10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30" />
          <div className="relative text-center">
            <div className="text-[#C5A200] text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>"</div>
            <blockquote className="text-white text-xl lg:text-2xl font-medium italic max-w-2xl mx-auto leading-relaxed mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              Un arbre ne peut pas vivre sans ses racines. Notre force vient de notre unité.
            </blockquote>
            <div className="text-[#C5A200]/80 text-sm uppercase tracking-widest">— Sagesse Badoumka</div>
          </div>
        </div>
      </div>
    </section>
  )
}
