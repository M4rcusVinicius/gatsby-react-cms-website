import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Image = ({image, slug}) => {

  if (image?.childImageSharp?.fluid) {
    const featuredImage = image.childImageSharp.fluid
    return(<S.PostItemImage fluid={featuredImage} />)
  } else {

    console.info({
      "error": "Image not found",
      "slug": slug,
      "image": image,
    })

    return(<DefaultFeaturedImage />)
  }

}

export default Image


const DefaultFeaturedImage = () => {
  const { defaultFeaturedImage } = useStaticQuery(graphql`
    query {
      defaultFeaturedImage: file(relativePath: { eq: "default-featuredImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (defaultFeaturedImage?.childImageSharp?.fluid) {
    return <S.PostItemImage fluid={defaultFeaturedImage.childImageSharp.fluid} />

  } else {
    console.info('DefaultFeaturedImage image not found')
    return <div>Imagem não encontrada</div>  
  }

}