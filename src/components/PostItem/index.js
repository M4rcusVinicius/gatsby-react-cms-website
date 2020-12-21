import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

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
  console.log(featuredImage)

  return(
  
  <S.PostItemWrapper>
    <S.PostItemLink to={slug} state={{origin: origin}} >
  
      <S.PostItemInfo>slug: {slug}</S.PostItemInfo> 
      <S.PostItemInfo>date: {date}</S.PostItemInfo> 
      <S.PostItemInfo>title: {title}</S.PostItemInfo>
      <S.PostItemInfo>description: {description}</S.PostItemInfo>
      <S.PostItemInfo>category: {category}</S.PostItemInfo>
      <S.PostItemInfo>subject: {subject}</S.PostItemInfo>
      <S.PostItemInfo>timeToRead: {timeToRead}</S.PostItemInfo>
      <S.PostItemInfo>note: {note}</S.PostItemInfo>
      <S.PostItemInfo>author: {author}</S.PostItemInfo>
      <S.PostItemInfo>origin(class): {origin.class}</S.PostItemInfo> 
      <S.PostItemInfo>origin(filter): {origin.filter}</S.PostItemInfo> 

      <S.PostItemImageContent>
        <S.PostItemImage fluid={featuredImage} />
        <S.PostItemImageInfo>
          <S.PostItemInfo>sizes: {featuredImage.sizes}</S.PostItemInfo>
          <S.PostItemInfo>source: {featuredImage.src}</S.PostItemInfo>
          <S.PostItemInfo>sourceSet: {featuredImage.srcSet}</S.PostItemInfo>
        </S.PostItemImageInfo>
      </S.PostItemImageContent>

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