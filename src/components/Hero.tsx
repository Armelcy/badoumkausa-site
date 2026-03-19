import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm earthy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F5132] via-[#1A5C3A] to-[#0D3D24]" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-60" />

      {/* Bottom kente strip */}
      <div className="absolute bottom-0 left-0 right-0 kente-divider" />

      {/* Warm light overlay top-right */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#A8391C]/10 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#C5A200]/20 float" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-[#C5A200]/10 float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-[#C5A200]/5 blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A200]/40 bg-[#C5A200]/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C5A200]" />
              <span className="text-[#E8C84A] text-xs font-medium tracking-wide uppercase">Association · Diaspora · Cameroun</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Une famille,<br />
              <span className="text-[#C5A200] italic">une fierté,</span><br />
              un avenir
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              Association des Fils et Filles de Badoumka aux États-Unis — unissant notre communauté, préservant notre héritage, et construisant ensemble un avenir commun.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C5A200] text-[#2C1A0E] font-bold hover:bg-[#E8C84A] transition-all duration-200 hover:shadow-lg hover:shadow-[#C5A200]/30">
                Découvrir notre mission
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:border-white/60 hover:bg-white/5 transition-all duration-200">
                Nous rejoindre
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { value: '🌍', label: 'Diaspora unie' },
                { value: '🏡', label: 'Village Badoumka' },
                { value: '🤝', label: 'Solidarité active' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl mb-1">{value}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Village visual card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-[#FFFDF8] rounded-3xl p-7 shadow-2xl border border-[#C5A200]/20 float">
                {/* Chefferie SVG Illustration */}
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 relative">
                  <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Sky gradient */}
                    <defs>
                      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#87CEEB"/>
                        <stop offset="100%" stopColor="#C8E6C9"/>
                      </linearGradient>
                      <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5D4037"/>
                        <stop offset="100%" stopColor="#3E2723"/>
                      </linearGradient>
                      <linearGradient id="roof1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B6914"/>
                        <stop offset="100%" stopColor="#5D4E1A"/>
                      </linearGradient>
                      <linearGradient id="roof2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A0522D"/>
                        <stop offset="100%" stopColor="#6D3A1E"/>
                      </linearGradient>
                      <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D2A679"/>
                        <stop offset="100%" stopColor="#B8864E"/>
                      </linearGradient>
                    </defs>

                    {/* Sky */}
                    <rect width="380" height="210" fill="url(#sky)"/>

                    {/* Sun */}
                    <circle cx="320" cy="35" r="22" fill="#FFD700" opacity="0.9"/>
                    <circle cx="320" cy="35" r="28" fill="#FFD700" opacity="0.2"/>

                    {/* Background hills */}
                    <ellipse cx="60" cy="155" rx="90" ry="40" fill="#2E7D32" opacity="0.4"/>
                    <ellipse cx="320" cy="160" rx="100" ry="35" fill="#388E3C" opacity="0.35"/>

                    {/* Ground */}
                    <rect x="0" y="165" width="380" height="45" fill="#6B4C11"/>
                    <rect x="0" y="172" width="380" height="38" fill="#5D4037" opacity="0.6"/>

                    {/* Grass strip */}
                    <rect x="0" y="162" width="380" height="8" fill="#388E3C"/>

                    {/* === LEFT SMALL HUT === */}
                    {/* Wall */}
                    <rect x="28" y="130" width="52" height="38" rx="2" fill="url(#wall)"/>
                    {/* Door */}
                    <rect x="46" y="148" width="16" height="20" rx="2" fill="#4A2C0A"/>
                    {/* Conical roof */}
                    <polygon points="54,68 14,132 94,132" fill="url(#roof1)"/>
                    <polygon points="54,68 16,132 32,132" fill="#6B4C11" opacity="0.3"/>
                    {/* Roof tip decoration */}
                    <circle cx="54" cy="66" r="4" fill="#C5A200"/>
                    <line x1="54" y1="58" x2="54" y2="66" stroke="#C5A200" strokeWidth="2"/>

                    {/* === CENTRE MAIN CHEFFERIE === */}
                    {/* Main wall - wider */}
                    <rect x="120" y="110" width="140" height="58" rx="3" fill="url(#wall)"/>
                    {/* Decorative band */}
                    <rect x="120" y="120" width="140" height="6" fill="#A0522D" opacity="0.5"/>
                    {/* Carved pillars */}
                    {[130, 155, 180, 205, 230, 245].map((x, i) => (
                      <rect key={i} x={x} y="110" width="6" height="58" rx="2" fill="#8B6914" opacity="0.35"/>
                    ))}
                    {/* Central door — tall arched */}
                    <rect x="172" y="128" width="36" height="40" rx="18" fill="#3E2001"/>
                    <rect x="178" y="134" width="24" height="34" rx="12" fill="#2C1500" opacity="0.8"/>
                    {/* Windows */}
                    <rect x="134" y="122" width="18" height="14" rx="3" fill="#3E2001" opacity="0.7"/>
                    <rect x="228" y="122" width="18" height="14" rx="3" fill="#3E2001" opacity="0.7"/>
                    {/* Large conical roof */}
                    <polygon points="190,28 108,114 272,114" fill="url(#roof1)"/>
                    <polygon points="190,28 110,114 135,114" fill="#5D3A0A" opacity="0.25"/>
                    {/* Roof layers (thatch lines) */}
                    {[50, 68, 85, 100].map((y, i) => {
                      const spread = (y - 28) * 0.82
                      return <line key={i} x1={190 - spread} y1={y} x2={190 + spread} y2={y}
                        stroke="#4A2C00" strokeWidth="1.5" opacity="0.25"/>
                    })}
                    {/* Roof tip */}
                    <circle cx="190" cy="26" r="6" fill="#C5A200"/>
                    <line x1="190" y1="14" x2="190" y2="26" stroke="#C5A200" strokeWidth="2.5"/>
                    <circle cx="190" cy="12" r="3" fill="#C5A200"/>
                    {/* Decorative fence/steps */}
                    <rect x="145" y="165" width="90" height="5" rx="1" fill="#8B6914"/>
                    {[148,162,176,190,204,218,228].map((x,i) => (
                      <rect key={i} x={x} y="158" width="5" height="12" rx="1" fill="#8B6914"/>
                    ))}

                    {/* === RIGHT SMALL HUT === */}
                    <rect x="300" y="133" width="50" height="35" rx="2" fill="url(#wall)"/>
                    <rect x="315" y="150" width="14" height="18" rx="2" fill="#4A2C0A"/>
                    <polygon points="325,72 288,135 362,135" fill="url(#roof2)"/>
                    <polygon points="325,72 290,135 305,135" fill="#6B4C11" opacity="0.25"/>
                    <circle cx="325" cy="70" r="4" fill="#C5A200"/>
                    <line x1="325" y1="62" x2="325" y2="70" stroke="#C5A200" strokeWidth="2"/>

                    {/* Trees */}
                    {/* Left tree */}
                    <rect x="88" y="115" width="5" height="50" fill="#4A2C0A"/>
                    <ellipse cx="90" cy="105" rx="20" ry="22" fill="#1B5E20"/>
                    <ellipse cx="82" cy="112" rx="14" ry="15" fill="#2E7D32"/>
                    <ellipse cx="98" cy="110" rx="12" ry="14" fill="#388E3C"/>
                    {/* Right tree */}
                    <rect x="280" y="118" width="5" height="47" fill="#4A2C0A"/>
                    <ellipse cx="282" cy="108" rx="18" ry="20" fill="#1B5E20"/>
                    <ellipse cx="274" cy="115" rx="13" ry="14" fill="#2E7D32"/>

                    {/* Path */}
                    <polygon points="175,168 205,168 220,210 160,210" fill="#A0785A" opacity="0.6"/>

                    {/* Caption band */}
                    <rect x="0" y="182" width="380" height="28" fill="#0F5132" opacity="0.85"/>
                    <text x="190" y="200" textAnchor="middle" fill="#C5A200"
                      fontSize="11" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="600">
                      Chefferie de Badoumka — Cameroun 🇨🇲
                    </text>
                  </svg>
                </div>

                <div className="flex items-center justify-center mb-3">
                  <Logo size={90} variant="full" onDark={false} />
                </div>
                <div className="text-[#6B3D1E]/70 text-sm mb-5 leading-relaxed text-center">
                  Relier notre communauté dispersée à travers les États-Unis au cœur de notre village d'origine.
                </div>

                {/* 3 pillars mini */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: '🎓', label: 'Héritiers' },
                    { icon: '❤️', label: 'Cares' },
                    { icon: '🗓️', label: 'Rencontres' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="bg-[#FAF7F2] rounded-xl p-3 text-center border border-[#C5A200]/10">
                      <div className="text-xl mb-1">{icon}</div>
                      <div className="text-[#0F5132] text-xs font-semibold">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#0F5132] text-white rounded-2xl px-4 py-2 shadow-lg border border-[#C5A200]/30">
                <div className="text-[#C5A200] text-xs font-bold uppercase tracking-wide">Fondée 2024</div>
                <div className="text-white/70 text-xs">États-Unis 🇺🇸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
