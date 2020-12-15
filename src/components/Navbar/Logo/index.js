import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoImage from '../LogoImage'

import * as S from './styled'

const Logo = () => {
  const {
    site: {
      siteMetadata: { title, company },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          company
        }
      }
    }
  `)

  return (
    <S.LogoWrapper>
      <LogoImage />
      <S.LogoLink>
        <h1>{title}</h1>
        <h2>{company}</h2>
      </S.LogoLink>
    </S.LogoWrapper>
  )
}

export default Logo