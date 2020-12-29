import styled from 'styled-components'
import { Link } from "gatsby"

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--base);
  padding: 0rem 5rem;
  height: calc(100vh - 5rem);
  border-bottom: 2px solid var(--light)
`

export const AboutInfo = styled.div`
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 3.2rem;
`

export const ButtonPrimary = styled(Link)`
  padding: 1rem;
  border-radius: 10px;
  background: var(--blue);
  border: 2px solid var(--blue);
  color: var(--base);
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 10rem;
  transition: 200ms;

  &:hover {
    background: var(--blueStrClear);
    translate: 2px -4px;
    border: 2px solid var(--blueStrClear);
  }
`

export const Button = styled(Link)`
  padding: 1rem;
  border-radius: 10px;
  color: var(--blue);
  border: 2px solid var(--blue);
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 10rem;
  transition: 200ms;

  &:hover {
    background: #d6e8ff;
    border: 2px solid var(--blueStrClear);
    translate: 2px -4px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  margin-top: 2.5rem;
`