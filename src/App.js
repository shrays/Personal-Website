import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Lightbulb from './components/Lightbulb/Lightbulb'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Lightbulb />
        <Skills />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
