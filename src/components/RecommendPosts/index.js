import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostItem from "../PostItem"

const RecommendPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query RecommendPostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  `)

  const postList = allMarkdownRemark.edges

  return (
    <>
      {postList.map(
        ({
          node: {
            frontmatter: { category, date, description, image, title, subject, author },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            origin={{class: 'recomended', filter: 'null'}}
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
    </>
  )
}

export default RecommendPosts