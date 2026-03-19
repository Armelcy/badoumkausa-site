import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles'

const CATEGORIES = ['Tous', 'Actualités', 'Héritage & Culture', 'Diaspora Pratique']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <section id="actualites" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A200' fill-opacity='1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#0F5132]/10 text-[#0F5132] mb-4">
            Actualités & Culture
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Notre blog communautaire
          </h2>
          <p className="text-[#2C1A0E]/65 max-w-xl mx-auto leading-relaxed">
            Vie de l'association, héritage culturel Badoumka, et ressources pratiques pour la diaspora.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0F5132] text-white shadow-md'
                  : 'bg-white border border-[#C5A200]/30 text-[#2C1A0E]/70 hover:border-[#C5A200] hover:text-[#0F5132]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid — first article spans full width */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((article, idx) => (
            <Link key={article.id} to={`/actualites/${article.slug}`}
              className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C5A200]/15 hover:-translate-y-1 ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}>
              <div className={`${article.colorBg} px-6 py-5 flex items-start justify-between`}>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-white/20 text-white font-medium mb-2">
                    {article.category}
                  </span>
                  <h3 className={`font-bold leading-snug group-hover:underline decoration-white/50 ${
                    idx === 0 ? 'text-xl' : 'text-base'
                  } ${article.colorText}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {article.title}
                  </h3>
                </div>
                <span className="text-3xl ml-4 flex-shrink-0">{article.icon}</span>
              </div>
              <div className="bg-white px-6 py-5">
                <p className="text-[#2C1A0E]/70 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#2C1A0E]/45">
                    <span>{article.date}</span><span>·</span><span>{article.readTime} de lecture</span>
                  </div>
                  <span className="text-[#0F5132] text-sm font-semibold flex items-center gap-1 group-hover:underline">
                    Lire l'article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full blog */}
        <div className="text-center mt-10">
          <Link to="/actualites"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F5132] text-white rounded-xl text-sm font-semibold hover:bg-[#1A7A4A] transition-colors shadow-md">
            Voir tous les articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 h-2 rounded-full overflow-hidden flex">
          {['#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C','#0F5132','#C5A200','#A8391C'].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </section>
  )
}
