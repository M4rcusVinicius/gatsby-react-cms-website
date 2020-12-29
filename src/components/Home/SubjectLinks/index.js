import React from "react"

import links from "./content"
import SubjectImage from "./SubjectImage"

import * as S from "./styled"
import * as G from "../../../styles/GlobalComponents"

const SubjectLinks = () => (
  <S.SubjectLinksWrapper>
    <G.Blockquote> 
      <G.BlockquoteBorder />
      <G.BlockquoteText>Filtre as postagens por materia</G.BlockquoteText>
    </G.Blockquote>
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