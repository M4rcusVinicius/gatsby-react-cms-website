import styled from "styled-components"
import { Link } from "gatsby"

export const NavLinkWrapper = styled.nav``

export const NavLinkList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  display: flax;
    
`

export const NavLinkItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--textActive);
  }
`

export const NavLinkLink = styled(Link)`
  color: var(--title);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--textActive);
  }
`