import React from "react"
import LogoImage from './LogoImage'
import { useStaticQuery, graphql } from "gatsby" 

import * as S from "./styled"

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
    <S.LogoLink to='/' >
      <LogoImage />
      <S.LogoText>
        <S.LogoTitle>{title}</S.LogoTitle>
        <S.LogoCompany>{company}</S.LogoCompany>
      </S.LogoText>
    </S.LogoLink>
  </S.LogoWrapper>
  )
}

export default Logo