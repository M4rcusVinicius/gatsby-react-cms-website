import React from "react"

import links from "./content"
import Logo from '../Logo'
import Myself from '../Myself'

import * as S from "./styled"

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterList>
      <S.FooterLogo>
      <Logo />
      <Myself />
      <S.FooterText>© 2020, Todos os Direitos Reservados </S.FooterText>
      </S.FooterLogo>
    </S.FooterList>
    <S.FooterList>
      <S.FooterTitle>Paginas</S.FooterTitle>
      {links.pages.map((link, i) => (
        <S.FooterItem key={i}>
          <S.FooterLink to={link.url} activeClassName="active">
            {link.label}
          </S.FooterLink>
        </S.FooterItem>
      ))}
    </S.FooterList>
    <S.FooterList>
      <S.FooterTitle>Termos de uso</S.FooterTitle>
      {links.terms.map((link, i) => (
        <S.FooterItem key={i}>
          <S.FooterLink to={link.url} activeClassName="active">
            {link.label}
          </S.FooterLink>
        </S.FooterItem>
      ))}
    </S.FooterList>
    <S.FooterList>
      <S.FooterTitle>Redes sociais</S.FooterTitle>
      {links.social.map((link, i) => (
        <S.FooterItem key={i}>
          <S.FooterLink to={link.url} activeClassName="active">
            {link.label}
          </S.FooterLink>
        </S.FooterItem>
      ))}
    </S.FooterList>
  </S.FooterWrapper>
)

export default Footer