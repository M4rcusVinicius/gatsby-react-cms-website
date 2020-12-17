import React from 'react'
import PropTypes from "prop-types" 
import { Disqus } from 'gatsby-plugin-disqus';
import * as S from "./styled" 

const Comments = ({ url, title }) => {
  const completeURL = `https://simple-studant.netlify.app/${url}`

  return (
    <S.CommentsWrapper>
      <Disqus
        url={completeURL}
        identifier={completeURL}
        title={title}
      />
    </S.CommentsWrapper>
  )

}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments