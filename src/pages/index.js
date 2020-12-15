import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            image
            title
            subject
            author
          }
          timeToRead
        }
      }
    }
  }
`)

const postList = allMarkdownRemark.edges
    

return (
  <Layout>
    <SEO title="Home" />
    {postList.map(
      ({
        node: {
          frontmatter: { category, date, description, image, title, subject },
          timeToRead,
        },
      }) => ( 
        <PostItem 
          slug="/slug/"
          date={date}
          title={title}
          description={description}
          category={category}
          subject={subject}
          timeToRead={timeToRead}
          image={image}
          note="note"
          note={author}
          />
        )
      )}
    </Layout>
  )
}
export default IndexPage
