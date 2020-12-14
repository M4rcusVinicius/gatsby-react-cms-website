import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const LogoImage = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} title="Logo Simplesmente Estudante" alt="Desenho de um estudante" />
}

export default LogoImage