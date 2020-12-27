import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as S from '../components/Post/styled'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostContent>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.PostContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost