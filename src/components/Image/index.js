import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Image = ({image, slug, height, width, maxHeight, maxWidth, borderRadius, origin}) => {

  if (image?.childImageSharp?.fluid) {
    const featuredImage = image.childImageSharp.fluid
    return(<S.Image 
            fluid={featuredImage} 
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            borderRadius={borderRadius}
          />)
  } else {

    console.info(`Image not found`)
    console.info(` => slug: ${slug}`)
    console.info(` => Image: ${image}`)
    console.info(` => origin: ${origin}`)

    return(<DefaultFeaturedImage
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            borderRadius={borderRadius}
          />)
  }

}

export default Image


const DefaultFeaturedImage = ({image, slug, height, width, maxHeight, maxWidth, borderRadius}) => {
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
    return (
      <S.Image
        fluid={defaultFeaturedImage.childImageSharp.fluid}
        height={height}
        width={width}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        borderRadius={borderRadius}  
      />
    )

  } else {
    console.info('DefaultFeaturedImage image not found')
    return <div>Imagem não encontrada</div>  
  }

}