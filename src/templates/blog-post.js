import React from "react"
import { graphql } from "gatsby"
import Comments from "../components/Comments"
import SEO from "../components/seo" 
import Layout from "../components/Layout" 

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  console.log(location.state)

  return (
    <Layout>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost