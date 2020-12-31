import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const LoginImage = () => {
  const { loginImage } = useStaticQuery(graphql`
    query {
      loginImage: file(relativePath: { eq: "defout-profile-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!loginImage?.childImageSharp?.fluid) {
    console.log('Logo image not found')
    return <div>Imagem não encontrada</div>
  }

  return <S.LoginImageWrapper fluid={loginImage.childImageSharp.fluid} />
}

export default LoginImage
