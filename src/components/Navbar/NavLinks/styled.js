import styled from "styled-components"
import { Link } from "gatsby"

export const NavLinksWrapper = styled.nav``

export const NavLinksList = styled.ul`
  font-size: 1.2rem;
  display: flex;
`

export const NavLinksItem = styled.li`
  padding: 0 0.8rem;
`

export const NavLinksLink = styled(Link)`
  text-decoration: none;
`