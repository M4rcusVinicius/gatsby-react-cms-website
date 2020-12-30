import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostItem from '../../PostItem'

import * as S from './styled'
import * as G from "../../../styles/GlobalComponents"

const PostGroup = ({category}) => {
  const { redacao, trabalho, resumo } = useStaticQuery(graphql`
    query {
      redacao: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "redacao"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
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
          }
        }
      }
      trabalho: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "trabalho"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 10
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
          }
        }
      }
      resumo: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "resumo"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 10
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
          }
        }
      }
    }
  `)

  let categoryName = ""
  let postGroup = {}

  if (category === "resumo") {
    categoryName = "Resumos"
    postGroup = resumo.edges
  } else if (category === "trabalho") {
    categoryName = "Trabalhos"
    postGroup = trabalho.edges
  } else if (category === "redacao") {
    categoryName = "Redações"
    postGroup = redacao.edges
  } else {
    categoryName = "Categoria não encontrada"
    postGroup = redacao.edges
  }

  return ( 
  <S.PostGroupWrapper>
    <G.Blockquote> 
      <G.BlockquoteBorder />
      <G.BlockquoteText>{categoryName}</G.BlockquoteText>
      <G.BlockquoteLink to={category}>Ver Mais</G.BlockquoteLink>
    </G.Blockquote>

    <S.PostGroupContent>
    {postGroup.map(
      ({
        node: {
          frontmatter: { category, date, description, image, title, subject, author },
          timeToRead,
          fields: { slug },
        },
      }) => {

        return (
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
      } 
    )}
    </S.PostGroupContent>
  </S.PostGroupWrapper>
  )
}

export default PostGroup
