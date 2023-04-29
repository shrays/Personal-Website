import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    })
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }

/* This implementation saves user's selected theme, otherwise 
defaulting to os theme */

// import { createContext, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

// const ThemeContext = createContext()

// const ThemeProvider = ({ children }) => {
//   const [themeName, setThemeName] = useState(() => {
//     const savedTheme = localStorage.getItem('themeName')
//     if (savedTheme) {
//       return savedTheme
//     }
//     const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     return darkMediaQuery.matches ? 'dark' : 'light'
//   })

//   useEffect(() => {
//     const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     const handleChange = (e) => {
//       if (!localStorage.getItem('themeName')) {
//         const updatedTheme = e.matches ? 'dark' : 'light'
//         setThemeName(updatedTheme)
//       }
//     }
//     darkMediaQuery.addEventListener('change', handleChange)
//     return () => darkMediaQuery.removeEventListener('change', handleChange)
//   }, [])

//   const toggleTheme = () => {
//     const name = themeName === 'dark' ? 'light' : 'dark'
//     localStorage.setItem('themeName', name)
//     setThemeName(name)
//   }

//   return (
//     <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export { ThemeProvider, ThemeContext }
