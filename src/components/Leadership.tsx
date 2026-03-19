const leaders = [
  { role: 'Président(e)', name: 'À confirmer', region: 'Washington D.C.', initials: 'P' },
  { role: 'Vice-Président(e)', name: 'À confirmer', region: 'New York, NY', initials: 'VP' },
  { role: 'Secrétaire Général(e)', name: 'À confirmer', region: 'Atlanta, GA', initials: 'SG' },
  { role: 'Trésorier(ière)', name: 'À confirmer', region: 'Houston, TX', initials: 'T' },
  { role: 'Responsable Héritiers', name: 'À confirmer', region: 'Chicago, IL', initials: 'RH' },
  { role: 'Responsable Cares', name: 'À confirmer', region: 'Los Angeles, CA', initials: 'RC' },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 bg-[#FAF7F2] relative">
      <div className="kente-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Notre équipe</div>
          <h2 className="text-4xl font-bold text-[#0F5132] mb-4 section-title">
            Le bureau <span className="italic text-[#C5A200]">exécutif</span>
          </h2>
          <p className="text-[#6B3D1E]/70 max-w-lg mx-auto">
            Des membres dévoués à travers les États-Unis qui œuvrent chaque jour pour faire vivre notre association avec intégrité et passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaders.map(({ role, name, region, initials }) => (
            <div key={role} className="card-warm rounded-2xl p-6 flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F5132] to-[#1A7A4A] flex items-center justify-center flex-shrink-0">
                <span className="text-[#C5A200] font-bold text-sm">{initials}</span>
              </div>
              <div>
                <div className="text-[#A8391C] text-xs font-bold uppercase tracking-wide mb-0.5">{role}</div>
                <div className="font-bold text-[#2C1A0E] mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>{name}</div>
                <div className="text-[#6B3D1E]/60 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {region}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#C5A200]/10 border border-[#C5A200]/20 text-[#6B3D1E] text-sm">
            <span>💡</span>
            <span>Le bureau est en cours de constitution. <a href="#contact" className="text-[#0F5132] font-semibold hover:underline">Contactez-nous</a> pour vous impliquer.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
