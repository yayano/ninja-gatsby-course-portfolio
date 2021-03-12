import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>ww{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
