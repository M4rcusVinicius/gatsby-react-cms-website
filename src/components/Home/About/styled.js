import styled from 'styled-components'
import { Link } from "gatsby"

export const AboutWrapper = styled(Link)`
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
  align-items: center;

  color: var(--blueStrDark);
  background-color: var(--base);
  padding: 2rem 4rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 5px var(--light); 
  text-decoration: none;
  transition: 200ms;

  &:hover {
    translate: 2px -5px;
  }

`

export const AboutInfo = styled.div`
  max-width: 35rem;
`

export const AboutTitle = styled.h1`
  font-weight: 900;
  color: var(--blueStrDark);
  font-size: 3.5rem;
  margin-top: 1rem;
`
export const AboutCompany = styled.h3`
  font-weight: 800;
  color: var(--blue);
  font-size: 2rem;
  margin-top: 1rem;
`
export const AboutDescription = styled.p`
  font-weight: 600;
  color: var(--blueStrSoft);
  font-size: 1.2rem;
  margin-top: 3rem;
`