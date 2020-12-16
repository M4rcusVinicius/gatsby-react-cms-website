import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import PostItem from '../PostItem'

const RecommendPosts = () => {

  return (
    <Layout>
      {postList.map(
        ({
          node: {
            frontmatter: { category, date, description, image, title, subject, author },
            timeToRead,
            fields: { slug },
          },
        }) => ( 
          <PostItem 
            origin={{class: 'home', filter: null}}
            slug={slug}
            date={date}
            title={title}
            description={description}
            category={category}
            subject={subject}
            timeToRead={timeToRead}
            image={image}
            note="note"
            author={author}
          />
        )
      )}
      
    </Layout>
  )
}

export const query = graphql`
    query PostList {
      allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      ) {
      edges {
        node {
          fields {
            slug
          }
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
`

export default RecommendPosts