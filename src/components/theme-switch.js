import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const ThemeSwitch = () => {
  return (
    <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className="themeSwitch">
        <input
          type="checkbox"
          id="darkmode"
          aria-label="darkmode"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        <div className="emoji"/>
        <label htmlFor="darkmode" className="themeSwitchLabel"/>
      </div>
    )}
    </ThemeToggler>
  )
}

export default ThemeSwitch;