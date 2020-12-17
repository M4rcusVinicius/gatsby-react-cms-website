import React from "react"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"
import Navbar from '../Navbar'

const Layout = ({ children }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <S.LayoutMain>
        <main>{children}</main>
      </S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout
