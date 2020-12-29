import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const SubjectImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/subject/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const ImagesData = data.allFile.edges

  const Image = ImagesData.find( image => image.node.childImageSharp.fluid.originalName === props.icon );

  console.log(Image)  

  return <S.SubjectImageWrapper fluid={Image.node.childImageSharp.fluid}></S.SubjectImageWrapper>
}

export default SubjectImage
