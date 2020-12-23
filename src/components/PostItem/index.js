import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import * as G from "../../styles/GlobalComponents"

const PostItem = ({
  slug,
  date,
  title,
  description,
  category,
  subject,
  timeToRead,
  featuredImage,
  note,
  author,
  origin,
}) => {
  console.log(PostItem)

  return(
  
  <S.PostItemWrapper>
    <S.PostItemLink to={slug} state={{origin: origin}} >
      
      <S.PostItemImage fluid={featuredImage} />

      <S.PostItemInfo>
        <G.Title>{title}</G.Title>
        <G.Info>{category} • {subject} • {timeToRead} min</G.Info>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <G.Text>note: {note}</G.Text>
        <G.Text>author: {author}</G.Text>
      </S.PostItemInfo>

    </S.PostItemLink>
  </S.PostItemWrapper>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subject: PropTypes.string,
  note: PropTypes.string,
  timeToRead: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  origin: PropTypes.string,
}

export default PostItem