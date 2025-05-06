import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import SoftSkills from './components/sections/SoftSkills'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ui/ParticleBackground'

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <AnimatePresence>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <SoftSkills />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App