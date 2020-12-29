import React from "react"
import PropTypes from "prop-types"

import Image from '../Image' 
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
  image,
  note,
  author,
  origin,
}) => {

  let categoryName = '' 
  let subjectName = '' 
  
  if (category === 'redacao') {
    categoryName = 'Redação'
  } else if (category != null) {
    categoryName = category[0].toUpperCase() + category.slice(1)
  }

  if (subject === 'redacao') {
    subjectName = 'Redação'
  } else if (subject != null) {
    subjectName = subject[0].toUpperCase() + subject.slice(1)
  }  
  
    return(
  
  <S.PostItemWrapper>
    <S.PostItemLink to={slug} state={{origin: origin}} >

      <Image image={image} slug={slug} />
    
      <S.PostItemInfo>
        <G.Title>{title}</G.Title>
        <G.Info>{categoryName} • {subjectName} • {timeToRead} min</G.Info>
        <S.PostItemDescription>{description}</S.PostItemDescription>
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