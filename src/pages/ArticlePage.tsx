import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getArticleBySlug, ARTICLES } from '../data/articles'
import Logo from '../components/Logo'

function renderContent(content: string) {
  return content.split('\n\n').map((para, i) => {
    // Section heading: **text**
    if (/^\*\*[^*]+\*\*$/.test(para.trim())) {
      return (
        <h2 key={i} className="text-xl font-bold text-[#0F5132] mt-8 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {para.replace(/\*\*/g, '')}
        </h2>
      )
    }
    // Inline bold + italic
    const parts = para.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    return (
      <p key={i} className="text-[#2C1A0E]/80 leading-relaxed text-base mb-0">
        {parts.map((part, j) => {
          if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={j} className="text-[#0F5132] font-semibold">{part.replace(/\*\*/g, '')}</strong>
          if (/^\*[^*]+\*$/.test(part)) return <em key={j} className="italic">{part.replace(/\*/g, '')}</em>
          return part
        })}
      </p>
    )
  })
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0)
      document.title = `${article.title} — Badoumka USA`

      // Inject Article JSON-LD
      const existing = document.getElementById('article-schema')
      if (existing) existing.remove()
      const script = document.createElement('script')
      script.id = 'article-schema'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.metaDescription,
        "datePublished": article.dateISO,
        "author": { "@type": "Organization", "name": "Badoumka USA" },
        "publisher": {
          "@type": "Organization",
          "name": "Badoumka USA",
          "url": "https://www.badoumka.org"
        },
        "url": `https://www.badoumka.org/actualites/${article.slug}`,
        "keywords": article.keywords.join(', '),
        "inLanguage": "fr",
        "mainEntityOfPage": `https://www.badoumka.org/actualites/${article.slug}`
      })
      document.head.appendChild(script)

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', article.metaDescription)
    }
    return () => {
      const s = document.getElementById('article-schema')
      if (s) s.remove()
    }
  }, [article])

  if (!article) return <Navigate to="/actualites" replace />

  const relatedArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 2)

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
          <div className="flex items-center gap-4">
            <Link to="/actualites" className="text-white/70 hover:text-white text-sm transition-colors">
              ← Blog
            </Link>
            <Link to="/#contact"
              className="px-4 py-2 bg-[#C5A200] text-[#2C1A0E] rounded-lg text-sm font-semibold hover:bg-[#D4AF00] transition-colors">
              Nous rejoindre
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <nav className="flex items-center gap-2 text-xs text-[#2C1A0E]/45">
          <Link to="/" className="hover:text-[#0F5132] transition-colors">Accueil</Link>
          <span>›</span>
          <Link to="/actualites" className="hover:text-[#0F5132] transition-colors">Actualités</Link>
          <span>›</span>
          <span className="text-[#2C1A0E]/70 truncate max-w-xs">{article.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        {/* Header */}
        <header className={`${article.colorBg} rounded-2xl p-8 mt-4 mb-8`}>
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-white/20 text-white font-semibold mb-3">
            {article.category}
          </span>
          <h1 className={`text-2xl md:text-3xl font-bold leading-snug mb-4 ${article.colorText}`}
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {article.title}
          </h1>
          <div className={`flex items-center gap-3 text-sm ${article.colorText} opacity-70`}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} de lecture</span>
            <span>·</span>
            <span>Badoumka USA</span>
          </div>
        </header>

        {/* Excerpt callout */}
        <blockquote className="border-l-4 border-[#C5A200] pl-5 mb-8 italic text-[#2C1A0E]/70 text-base leading-relaxed">
          {article.excerpt}
        </blockquote>

        {/* Body */}
        <div className="space-y-4" style={{ fontFamily: "'Lato', sans-serif" }}>
          {renderContent(article.content)}
        </div>

        {/* Keywords (SEO-friendly, visible as tags) */}
        <div className="mt-10 pt-6 border-t border-[#C5A200]/20">
          <p className="text-xs text-[#2C1A0E]/40 mb-2 uppercase tracking-wide font-semibold">Mots-clés</p>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map(kw => (
              <span key={kw} className="px-3 py-1 bg-[#0F5132]/8 text-[#0F5132] rounded-full text-xs font-medium border border-[#0F5132]/15">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#0F5132] rounded-2xl p-7 text-white text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rejoignez Badoumka USA
          </p>
          <p className="text-white/70 text-sm mb-5">
            Ensemble, préservons notre héritage et construisons notre avenir.
          </p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A200] text-[#2C1A0E] rounded-xl text-sm font-bold hover:bg-[#D4AF00] transition-colors">
            Nous rejoindre
          </Link>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#0F5132] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              À lire aussi
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedArticles.map(rel => (
                <Link key={rel.id} to={`/actualites/${rel.slug}`}
                  className="group rounded-xl overflow-hidden border border-[#C5A200]/15 hover:shadow-md transition-all bg-white">
                  <div className={`${rel.colorBg} px-4 py-3`}>
                    <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{rel.category}</span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-[#0F5132] group-hover:underline leading-snug mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {rel.title}
                    </p>
                    <p className="text-xs text-[#2C1A0E]/45">{rel.date} · {rel.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link to="/actualites" className="inline-flex items-center gap-2 text-[#0F5132] font-medium hover:underline text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tous les articles
          </Link>
        </div>
      </article>
    </div>
  )
}
