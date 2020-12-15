import React from "react"

import links from "./content"

import * as S from "./styled"

const NavLinks = () => (
  <S.NavLinksWrapper>
    <S.NavLinksList>
      {links.map((link, i) => (
        <S.NavLinksItem key={i}>
          <S.NavLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.NavLinksLink>
        </S.NavLinksItem>
      ))}
    </S.NavLinksList>
  </S.NavLinksWrapper>
)

export default NavLinks