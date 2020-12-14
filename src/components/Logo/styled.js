import styled from "styled-components"
import { Link } from "gatsby"

export const LogoWrapper = styled.section`
  color: var(--title);
  display: flex;
`

export const LogoLink = styled(Link)`
  color: var(--title);
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #1fa1f2;
  }
`

export const LogoTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
`

export const LogoCompany = styled.small`
  font-size: 1.2rem;
  font-weight: 300;
`