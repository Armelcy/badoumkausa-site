export default function Contact() {
  return (
    <section id="contact" className="py-28 relative bg-[#F0EBE0]">
      <div className="kente-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 pattern-overlay opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="text-[#A8391C] text-sm font-bold uppercase tracking-widest mb-4">Contact</div>
            <h2 className="text-4xl font-bold text-[#0F5132] mb-6 leading-tight section-title">
              Rejoignez la famille<br />
              <span className="italic text-[#C5A200]">Badoumka</span>
            </h2>
            <p className="text-[#6B3D1E]/70 leading-relaxed mb-10">
              Que vous soyez un fils ou une fille de Badoumka aux États-Unis, ou simplement quelqu'un qui souhaite en savoir plus sur notre association, nous serions ravis de vous entendre.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'badoumkausa@gmail.com',
                  href: 'mailto:badoumkausa@gmail.com',
                },
                {
                  icon: '🌐',
                  label: 'Site web',
                  value: 'badoumka.org',
                  href: 'https://badoumka.org',
                },
                {
                  icon: '📍',
                  label: 'Basée aux',
                  value: 'États-Unis d\'Amérique',
                  href: '#',
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0F5132]/10 flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[#6B3D1E]/50 text-xs uppercase tracking-wide">{label}</div>
                    <a href={href} className="text-[#0F5132] text-sm font-semibold hover:text-[#A8391C] transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <div className="text-[#6B3D1E]/50 text-xs uppercase tracking-wide mb-4">Suivez-nous</div>
              <div className="flex gap-3">
                {[
                  { icon: '📘', label: 'Facebook', href: '#' },
                  { icon: '📸', label: 'Instagram', href: '#' },
                  { icon: '💬', label: 'WhatsApp', href: '#' },
                ].map(({ icon, label, href }) => (
                  <a key={label} href={href}
                    className="w-10 h-10 rounded-xl bg-[#0F5132]/8 border border-[#0F5132]/15 flex items-center justify-center text-lg hover:bg-[#0F5132]/15 transition-colors"
                    title={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-warm rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0F5132] text-xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Envoyez-nous un message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B3D1E]/60 text-xs mb-2 uppercase tracking-wide">Prénom</label>
                  <input type="text" placeholder="Jean"
                    className="w-full bg-[#FAF7F2] border border-[#C5A200]/20 rounded-xl px-4 py-3 text-[#2C1A0E] text-sm placeholder-[#6B3D1E]/30 focus:outline-none focus:border-[#0F5132]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[#6B3D1E]/60 text-xs mb-2 uppercase tracking-wide">Nom</label>
                  <input type="text" placeholder="Kamga"
                    className="w-full bg-[#FAF7F2] border border-[#C5A200]/20 rounded-xl px-4 py-3 text-[#2C1A0E] text-sm placeholder-[#6B3D1E]/30 focus:outline-none focus:border-[#0F5132]/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[#6B3D1E]/60 text-xs mb-2 uppercase tracking-wide">Email</label>
                <input type="email" placeholder="vous@exemple.com"
                  className="w-full bg-[#FAF7F2] border border-[#C5A200]/20 rounded-xl px-4 py-3 text-[#2C1A0E] text-sm placeholder-[#6B3D1E]/30 focus:outline-none focus:border-[#0F5132]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-[#6B3D1E]/60 text-xs mb-2 uppercase tracking-wide">Objet</label>
                <select className="w-full bg-[#FAF7F2] border border-[#C5A200]/20 rounded-xl px-4 py-3 text-[#6B3D1E]/70 text-sm focus:outline-none focus:border-[#0F5132]/50 transition-colors appearance-none">
                  <option>Devenir membre</option>
                  <option>Programme Héritiers Badoumka</option>
                  <option>Programme Badoumka Cares</option>
                  <option>Participer aux rencontres</option>
                  <option>Partenariat ou don</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-[#6B3D1E]/60 text-xs mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} placeholder="Votre message..."
                  className="w-full bg-[#FAF7F2] border border-[#C5A200]/20 rounded-xl px-4 py-3 text-[#2C1A0E] text-sm placeholder-[#6B3D1E]/30 focus:outline-none focus:border-[#0F5132]/50 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-3 rounded-xl bg-[#0F5132] text-white font-bold hover:bg-[#1A7A4A] transition-all duration-200 hover:shadow-lg hover:shadow-[#0F5132]/20">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
