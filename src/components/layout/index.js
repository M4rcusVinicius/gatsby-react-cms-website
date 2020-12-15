import React from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar"

import * as S from "./styled"
import GlobalStyles from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout