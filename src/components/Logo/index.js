import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoImage from './LogoImage'

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
      <S.LogoLink to="/">
        <LogoImage />
        <S.LogoTextContent>
          <S.LogoText>{title}</S.LogoText>
          <S.LogoCompany>Por {company}</S.LogoCompany>
        </S.LogoTextContent>
      </S.LogoLink>
    </S.LogoWrapper>
  )
}

export default Logo