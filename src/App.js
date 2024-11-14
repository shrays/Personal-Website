import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Lightbulb from './components/Lightbulb/Lightbulb'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner';
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  // Set background color for unsafe areas (ie notched devices)
  useEffect(() => {
    const rootElement = document.getElementById('top');
    if (rootElement) {
      const style = window.getComputedStyle(rootElement);
      const bgColor = style.getPropertyValue('--clr-bg').trim();

      const metaThemeColor = document.querySelector('meta[name=theme-color]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', bgColor);
      }
    }
  }, [themeName]); // Re-run the effect when themeName changes

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
      <Banner />
    </div>
  )
}

export default App
