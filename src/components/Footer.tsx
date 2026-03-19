import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#0F5132] text-white">
      <div className="kente-divider" />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <Logo size={72} variant="icon" onDark={true} />
              <div>
                <div className="text-white/50 text-xs italic mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Une famille, une fierté, un avenir
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Association des Fils et Filles de Badoumka aux États-Unis d'Amérique — unie par nos racines, forte par notre solidarité.
            </p>
            <div className="flex gap-3">
              {['📘', '📸', '💬'].map((icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-lg hover:bg-[#C5A200]/20 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[#C5A200] text-sm font-bold mb-4 uppercase tracking-wide">Association</div>
            <ul className="space-y-3">
              {['À propos', 'Nos programmes', 'Notre héritage', 'Le bureau', 'Événements'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '-').replace('à-propos', 'about')}`}
                    className="text-white/60 text-sm hover:text-[#C5A200] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#C5A200] text-sm font-bold mb-4 uppercase tracking-wide">Programmes</div>
            <ul className="space-y-3">
              {['Héritiers Badoumka', 'Badoumka Cares', 'Rencontres mensuelles', 'Nous rejoindre', 'Faire un don'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-white/60 text-sm hover:text-[#C5A200] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Association des Fils et Filles de Badoumka aux États-Unis. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Site développé par{' '}
            <a href="https://uboralabs.com" target="_blank" rel="noopener"
              className="text-[#C5A200] hover:text-white transition-colors font-medium underline underline-offset-2">
              Ubora Labs
            </a>
            {' '}🇨🇲 🇺🇸
          </p>
        </div>
      </div>
    </footer>
  )
}
