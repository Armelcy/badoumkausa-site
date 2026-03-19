import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles'
import Logo from '../components/Logo'

const CATEGORIES = ['Tous', 'Actualités', 'Héritage & Culture', 'Diaspora Pratique']

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Actualités & Blog — Badoumka USA'
  }, [])

  const filtered = activeCategory === 'Tous'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navbar */}
      <nav className="bg-[#0F5132] py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={44} variant="icon" />
            <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Badoumka USA
            </span>
          </Link>
          <Link to="/#contact"
            className="px-4 py-2 bg-[#C5A200] text-[#2C1A0E] rounded-lg text-sm font-semibold hover:bg-[#D4AF00] transition-colors">
            Nous rejoindre
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-[#0F5132] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A200' fill-opacity='1'%3E%3Crect x='0' y='0' width='30' height='30'/%3E%3Crect x='30' y='30' width='30' height='30'/%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#C5A200]/20 text-[#C5A200] mb-4">
            Blog communautaire
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Actualités & Culture Badoumka
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Vie de l'association, héritage culturel de Badoumka (Cameroun), et ressources pratiques pour notre diaspora aux États-Unis.
          </p>
        </div>
        {/* Kente strip */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {['#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C'].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0F5132] text-white shadow-md'
                  : 'bg-white border border-[#C5A200]/30 text-[#2C1A0E]/70 hover:border-[#C5A200] hover:text-[#0F5132]'
              }`}>
              {cat} {cat === 'Tous' ? `(${ARTICLES.length})` : `(${ARTICLES.filter(a => a.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link key={article.id} to={`/actualites/${article.slug}`}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C5A200]/15 hover:-translate-y-1 bg-white">
              <div className={`${article.colorBg} px-5 py-4 flex items-start justify-between`}>
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-white/20 text-white font-medium mb-2">
                    {article.category}
                  </span>
                  <h2 className={`font-bold text-base leading-snug ${article.colorText}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {article.title}
                  </h2>
                </div>
                <span className="text-2xl ml-3 flex-shrink-0">{article.icon}</span>
              </div>
              <div className="px-5 py-4">
                <p className="text-[#2C1A0E]/65 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#2C1A0E]/40">{article.date} · {article.readTime}</span>
                  <span className="text-[#0F5132] text-xs font-semibold group-hover:underline flex items-center gap-1">
                    Lire
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-12 pt-8 border-t border-[#C5A200]/20">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0F5132] font-medium hover:underline text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
