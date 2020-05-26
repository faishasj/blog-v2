import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import ThemeSwitch from './theme-switch'


const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return (
    <header className="siteHeader">
      <div>
        <h1
          className="siteTitle"
          style={{
            ...scale(1.15),
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link to={`/`}><span style={{color: "var(--accentColor1)"}}>string</span> me_along</Link>
        </h1>
        <div className="siteDescription">{data.site.siteMetadata.description}</div>
      </div>
      <div className="siteNavigation">
        <Link>About Me</Link>
        <Link>Projects</Link>
        <ThemeSwitch/>
      </div>
    </header>
  )
}

export default Header;