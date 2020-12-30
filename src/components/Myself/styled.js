import styled from 'styled-components'
import { Link } from "gatsby"

export const MyselfWrapper = styled.div`
`

export const MyselfLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const MyselfTextContent = styled.div`
 margin-left: 0.4rem
`

export const MyselfText = styled.h1`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--blueDark);
`

export const MyselfCompany = styled.h3`
  font-weight:600;
  font-size: 1rem;
  margin-top: 0.2rem;
  color: #132e57;
`