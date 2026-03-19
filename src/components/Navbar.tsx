import Logo from './Logo'

interface NavbarProps { scrolled: boolean }

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#C5A200]/20 py-3'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — real PNG, white on hero, natural on light bg */}
        <a href="#" className="flex items-center">
          <Logo size={52} variant="icon" onDark={!scrolled} />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'À propos', href: '#about' },
            { label: 'Programmes', href: '#programmes' },
            { label: 'Héritage', href: '#heritage' },
            { label: 'Événements', href: '#evenements' },
            { label: 'Actualités', href: '#actualites' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#C5A200] underline-offset-4 decoration-[#C5A200] ${
                scrolled ? 'text-[#2C1A0E]/70 hover:underline' : 'text-white/85 hover:text-white'
              }`}>
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            scrolled
              ? 'bg-[#0F5132] text-[#FAF7F2] hover:bg-[#1A7A4A]'
              : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
          }`}>
          Nous rejoindre
        </a>

        {/* Mobile */}
        <button className={`md:hidden transition-colors ${scrolled ? 'text-[#0F5132]' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
