import React from "react"

import links from "./content"
import SubjectImage from "./SubjectImage"

import * as S from "./styled"

const SubjectLinks = () => (
  <S.SubjectLinksWrapper>
    <S.SubjectLinksBlockquote> 
      <S.SubjectLinksBlockquoteBorder></S.SubjectLinksBlockquoteBorder>
      <S.SubjectLinksBlockquoteText>Filtre as postagens por materia</S.SubjectLinksBlockquoteText>
    </S.SubjectLinksBlockquote>
    <S.SubjectLinksList>
      {links.map((link, i) => (
        <S.SubjectLinksItem key={i}>
          <S.SubjectLinksLink to={`/${link.url}/`}>
            <SubjectImage icon={link.icon} />
            <S.SubjectLinksText>{link.subject}</S.SubjectLinksText>
          </S.SubjectLinksLink>
        </S.SubjectLinksItem>
      ))}
    </S.SubjectLinksList>
  </S.SubjectLinksWrapper>
)

export default SubjectLinks