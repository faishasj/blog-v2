import React from "react"
import { rhythm } from "../utils/typography"

import Header from './header'
import ParticleBackground from "./particle-background"


const Layout = ({ children }) => {
  return (
    <>
    <ParticleBackground/>
      <div
        className="siteContainer"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <Header/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
    </>
  )
}

export default Layout;
