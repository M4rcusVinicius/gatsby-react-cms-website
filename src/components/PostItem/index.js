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
  image,
  note,
  author,
}) => (
  <S.PostItemWrapper>
    <S.PostItemLink to={slug}>
      <S.PostItemInfo>slug: {slug}</S.PostItemInfo> 
      <S.PostItemInfo>date: {date}</S.PostItemInfo> 
      <S.PostItemInfo>title: {title}</S.PostItemInfo>
      <S.PostItemInfo>description: {description}</S.PostItemInfo>
      <S.PostItemInfo>category: {category}</S.PostItemInfo>
      <S.PostItemInfo>subject: {subject}</S.PostItemInfo>
      <S.PostItemInfo>timeToRead: {timeToRead}</S.PostItemInfo>
      <S.PostItemInfo>image: {image}</S.PostItemInfo>
      <S.PostItemInfo>note: {note}</S.PostItemInfo>
      <S.PostItemInfo>author: {author}</S.PostItemInfo>
    </S.PostItemLink>
  </S.PostItemWrapper>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subject: PropTypes.string,
  note: PropTypes.string,
  image: PropTypes.string,
  timeToRead: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
}

export default PostItem