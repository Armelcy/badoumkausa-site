import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Heritage from './components/Heritage'
import Events from './components/Events'
import Blog from './components/Blog'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ActualitesPage from './pages/ActualitesPage'
import ArticlePage from './pages/ArticlePage'
import './index.css'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1A0E] overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Programs />
      <Heritage />
      <Events />
      <Blog />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/actualites/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
