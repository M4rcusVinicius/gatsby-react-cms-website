import React from "react"

import Logo from "./Logo"
import NavLinks from "./NavLinks"

import * as S from "./styled"

const Navbar = () => (
  <S.NavbarWrapper>
    <Logo />
    <NavLinks />
  </S.NavbarWrapper>
)

export default Navbar