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
}) => (
  <S.PostItemWrapper>
        <S.PostItemInfo>slug: {slug}</S.PostItemInfo> 
        <S.PostItemInfo>date: {date}</S.PostItemInfo> 
        <S.PostItemInfo>tite: {title}</S.PostItemInfo>
        <S.PostItemInfo>desc: {description}</S.PostItemInfo>
        <S.PostItemInfo>cate: {category}</S.PostItemInfo>
        <S.PostItemInfo>subj: {subject}</S.PostItemInfo>
        <S.PostItemInfo>time: {timeToRead}</S.PostItemInfo>
        <S.PostItemInfo>imag: {image}</S.PostItemInfo>
        <S.PostItemInfo>note: {note}</S.PostItemInfo>
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
  timeToRead: PropTypes.string.isRequired,
}

export default PostItem