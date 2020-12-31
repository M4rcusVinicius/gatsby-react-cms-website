import React, { useState, useEffect } from "react"

import { Moon } from "@styled-icons/boxicons-regular/Moon"
import { Brightness } from "@styled-icons/boxicons-regular/Brightness"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"

import Login from '../Login'

import * as S from "./styled"

const MenuFunction = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuFunctionWrapper>
      <S.MenuFunctionGroup>

        <S.MenuFunctionItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          {isDarkMode ? <Brightness /> : <Moon />}
        </S.MenuFunctionItem>

        <S.MenuFunctionItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuFunctionItem>

        <S.MenuFunctionLink to="/pesquisa/" title="Pesquisar">
          <S.MenuFunctionItem>
            <Search />
          </S.MenuFunctionItem>
        </S.MenuFunctionLink>

      </S.MenuFunctionGroup>
      
      <Login />
    
    </S.MenuFunctionWrapper>
  )
}

export default MenuFunction
