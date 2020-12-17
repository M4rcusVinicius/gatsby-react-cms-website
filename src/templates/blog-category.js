import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

const BlogCategory = props => {
  const postCategory = props.data.allMarkdownRemark.edges    

  const {  currentPage, numCategoryPages, category } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numCategoryPages
  const prevPage = currentPage - 1 === 1 ? `/${category}/` : `/${category}/page/${currentPage - 1}`
  const nextPage = `/${category}/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      {postCategory.map(
        ({
          node: {
            frontmatter: { category, date, description, image, title, subject, author },
            timeToRead,
            fields: { slug },
          },
        }) => ( 
          <PostItem 
            origin={{class: 'category', filter: category}}
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
      
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numCategoryPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      
    </Layout>
  )
}

export const query = graphql`
  query CategoryList($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {frontmatter: {category: {eq: $category }}}
      limit: $limit
      skip: $skip
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

export default BlogCategory