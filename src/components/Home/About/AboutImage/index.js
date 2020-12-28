import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const AboutImage = () => {
  const { aboutImage } = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "aboutImage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!aboutImage?.childImageSharp?.fluid) {
    console.log('About image not found')
    return <div>Imagem não encontrada</div>
  }

  return <S.AboutImageWrapper fluid={aboutImage.childImageSharp.fluid} />
}

export default AboutImage
