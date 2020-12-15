import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const LogoImage = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!logoImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <S.LogoImageWrapper fluid={logoImage.childImageSharp.fluid} />
}

export default LogoImage
