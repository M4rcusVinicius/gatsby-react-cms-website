import styled from 'styled-components'
import { Link } from "gatsby"

export const LogoWrapper = styled.div`
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const LogoTextContent = styled.div`
 margin-left: 0.4rem
`

export const LogoText = styled.h1`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--blueDark);
`

export const LogoCompany = styled.h3`
  font-weight:600;
  font-size: 1rem;
  margin-top: 0.2rem;
  color: #132e57;
`