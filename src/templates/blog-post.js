import React from "react"
import { graphql } from "gatsby"

import Comments from '../components/Comments'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  console.log(location.state)

  return (
    <>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <Comments />
    </>
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