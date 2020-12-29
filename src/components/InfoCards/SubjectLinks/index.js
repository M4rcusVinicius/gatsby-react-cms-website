import React from "react"

import links from "./content"
import SubjectImage from "./SubjectImage"

import * as S from "./styled"

const SubjectLinks = () => (
  <S.SubjectLinksWrapper>
    <S.SubjectLinksList>
      {links.map((link, i) => (
        <S.SubjectLinksItem key={i}>
          <S.SubjectLinksLink to={`/${link.url}/`}>
            <SubjectImage icon={link.icon} />
            {link.subject}
          </S.SubjectLinksLink>
        </S.SubjectLinksItem>
      ))}
    </S.SubjectLinksList>
  </S.SubjectLinksWrapper>
)

export default SubjectLinks