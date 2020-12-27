import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from "../components/PostList/styled"
import * as G from "../styles/GlobalComponents"

const BlogCategory = props => {
  const postCategory = props.data.allMarkdownRemark.edges    

  const {  currentPage, numCategoryPages, category } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numCategoryPages
  const prevPage = currentPage - 1 === 1 ? `/${category}/` : `/${category}/page/${currentPage - 1}`
  const nextPage = `/${category}/page/${currentPage + 1}`

  let categoryName = ''

  if (category === 'redacao') {
    categoryName = 'Redação'
  } else if (category != null) {
    categoryName = category[0].toUpperCase() + category.slice(1)
  }

  return (
    <Layout>
      <SEO
        title={`Categorias | pagina ${currentPage + 1}`}
      />
      <S.ListWrapper>

        <G.FeaturedTitle>{categoryName}</G.FeaturedTitle>
      
        <S.ListContent>
          {postCategory.map(
            ({
              node: {
                frontmatter: { category, date, description, image, title, subject, author },
                timeToRead,
                fields: { slug },
              },
            }) => {

              return (
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
            } 
          )}
        </S.ListContent>
      </S.ListWrapper>

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
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  originalImg
                  originalName
                }
              }
            }
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