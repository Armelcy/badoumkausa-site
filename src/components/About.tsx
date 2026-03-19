export default function About() {
  return (
    <section id="about" className="py-28 relative bg-[#FAF7F2]">
      <div className="kente-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Qui sommes-nous</div>
            <h2 className="text-4xl font-bold leading-tight mb-6 text-[#0F5132] section-title">
              Enracinés dans la tradition,<br />
              <span className="italic text-[#C5A200]">tournés vers l'avenir</span>
            </h2>
            <p className="text-[#6B3D1E]/80 leading-relaxed mb-5">
              L'Association des Fils et Filles de Badoumka aux États-Unis est née d'un désir profond de maintenir les liens avec notre village natal tout en construisant une communauté forte et solidaire en Amérique.
            </p>
            <p className="text-[#6B3D1E]/80 leading-relaxed mb-8">
              Nous rassemblons les membres de la diaspora Badoumka pour célébrer notre culture, soutenir nos familles au Cameroun, et investir dans la prochaine génération à travers nos programmes éducatifs et sociaux.
            </p>

            {/* Motto */}
            <blockquote className="border-l-4 border-[#C5A200] pl-6 mb-8 italic text-[#6B3D1E] text-lg font-medium">
              "Servir avec honneur, unir avec sagesse, transmettre avec amour."
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a href="#programmes"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F5132] text-white text-sm font-semibold hover:bg-[#1A7A4A] transition-colors">
                Nos programmes
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#0F5132]/30 text-[#0F5132] text-sm font-medium hover:bg-[#0F5132]/5 transition-colors">
                Nous contacter
              </a>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🤝', title: 'Unité', desc: 'Renforcer les liens fraternels et créer un sentiment d\'appartenance commune au sein de la diaspora Badoumka' },
              { icon: '✨', title: 'Intégrité', desc: 'Agir avec honnêteté, transparence et respect des valeurs fondamentales dans toutes nos actions' },
              { icon: '🤝', title: 'Solidarité', desc: 'S\'entraider mutuellement et soutenir les initiatives collectives pour le bien-être de notre communauté' },
              { icon: '🏺', title: 'Héritage', desc: 'Préserver et transmettre les traditions, la culture et les valeurs de Badoumka aux générations futures' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-warm rounded-2xl p-5">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-bold text-[#0F5132] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</div>
                <div className="text-[#6B3D1E]/70 text-sm leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
