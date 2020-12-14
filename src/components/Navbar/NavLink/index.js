import React from "react"

import links from "./content"

import * as S from "./styled"

const NavLinks = () => (
  <S.NavLinkWrapper>
    <S.NavLinkList>
      {links.map((link, i) => (
        <S.NavLinkItem key={i}>
          <S.NavLinkLink to={link.url} activeClassName="active">
            {link.label}
          </S.NavLinkLink>
        </S.NavLinkItem>
      ))}
    </S.NavLinkList>
  </S.NavLinkWrapper>
)

export default NavLinks