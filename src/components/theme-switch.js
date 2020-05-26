import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const ThemeSwitch = () => {
  return (
    <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div
        className="themeToggler"
        onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? (
          <>🌚</>
        ) : (
          <>🌞</>
        )}
      </div>
    )}
    </ThemeToggler>
  )
}

export default ThemeSwitch;