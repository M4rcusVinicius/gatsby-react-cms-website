import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Img fluid={avatarImage.childImageSharp.fluid} className="foo" />
}

export default Avatar