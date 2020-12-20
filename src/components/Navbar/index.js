import React from 'react'

import Logo from './Logo'
import NavLinks from './NavLinks'
import NavFunction from './NavFunction'

import * as S from "./styled"

const Navbar = () => (
  <S.NavbarWrapper>
    <Logo />
    <NavLinks />
    <NavFunction />
  </S.NavbarWrapper>
)

export default Navbar