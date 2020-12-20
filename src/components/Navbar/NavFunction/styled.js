import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: row;
`


export const MenuBarLink = styled(Link)`
`

export const MenuBarItem = styled.span`
  display: block;
  height: 3.75rem;
  position: relative;
  width: 3.75rem;
  &.light {
    &:hover {
    }
  }
  &:hover {
  }
`