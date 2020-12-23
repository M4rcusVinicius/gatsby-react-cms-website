import React, { useState, useEffect } from "react"

import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { Brightness } from "@styled-icons/boxicons-regular/Brightness"
import { Moon } from "@styled-icons/boxicons-regular/Moon"


import * as S from "./styled"

const MenuFunction = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuFunctionWrapper>
        <S.MenuFunctionItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          {isDarkMode ? <Brightness /> : <Moon />}
        </S.MenuFunctionItem>
        <S.MenuFunctionItem title="Mudar visualização">
          <Grid />
        </S.MenuFunctionItem>
        <S.MenuFunctionLink to="/pesquisa/" title="Pesquisar">
          <S.MenuFunctionItem>
            <Search />
          </S.MenuFunctionItem>
        </S.MenuFunctionLink>
    </S.MenuFunctionWrapper>
  )
}

export default MenuFunction
