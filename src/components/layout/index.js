import React from "react"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <S.LayoutMain>
        <main>{children}</main>
      </S.LayoutMain>
      <Footer />
    </S.LayoutWrapper>
  )

export default Layout
