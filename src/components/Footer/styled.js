import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--base);
  justify-content: space-around;
  padding: 2rem;
`

export const FooterList = styled.ul`
`

export const FooterItem = styled.li`
  margin: 0.4rem 0;
`

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--clear);
  transition: 200ms;

  &:hover {
    color: var(--blue);
  }
`

export const FooterText = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--clear);
`

export const FooterTitle = styled.h3`
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--soft);
  transition: color 400ms;
  margin: 0.7em 0;

  &:hover {
    color: var(--blue);
  }

`