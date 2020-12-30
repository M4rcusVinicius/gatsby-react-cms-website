import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const MyPhoto = () => {
  const { myPhoto } = useStaticQuery(graphql`
    query {
      myPhoto: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!myPhoto?.childImageSharp?.fluid) {
    console.log('Logo image not found')
    return <div>Imagem não encontrada</div>
  }

  return <S.MyPhotoWrapper fluid={myPhoto.childImageSharp.fluid} />
}

export default MyPhoto
