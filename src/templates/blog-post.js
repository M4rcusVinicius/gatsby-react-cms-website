import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostWrapper>

        <S.PostArticle>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          
          <S.PostContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.PostContent>
        </S.PostArticle>

      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subject
        author
      }
      timeToRead
      html
    }
  }
`

export default BlogPost