import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoImage from './LogoImage'

const Logo = () => {
  const {
    site: {
      siteMetadata: { title, company },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          company
        }
      }
    }
  `)

  return (
    <div className="LogoWrapper">
      <LogoImage />
      <h1>{title}</h1>
      <h2>{company}</h2>
    </div>
  )
}

export default Logo