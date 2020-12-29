import styled from 'styled-components'
import { Link } from  'gatsby'

export const FeaturedTitle = styled.h1`
  font-weight: 900;
  color: var(--blueStrDark);
  font-size: 3.5rem;
`

export const Title = styled.h2`
  font-weight: 800;
  color: var(--blueStrDark);
  font-size: 1.5rem;
`


export const Info = styled.p`
  margin: 0.8rem 0;
  color: var(--blueStrClear);
  font-size: 1.05rem;
  font-weight: 600;

`

export const Text = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--soft);
`

export const TextBold = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
  color: #1b203a;
`

export const DisplayFlex = styled.h1`
  display: flex;
  align-items: center;
`

export const Blockquote = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
export const BlockquoteBorder = styled.div`
  width: 0.4rem;
  height: 2.2rem;
  border-radius: 1rem;
  background-color: #cee3ff;
  margin-right: 1rem;
`
export const BlockquoteText = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: var(--blueStrDark);
  
`

export const BlockquoteLink = styled(Link)`
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--blueStrDark);
  margin-left: auto;
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  background-color: #cee3ff;
  border-radius: 10px;
  transition: 200ms;

  &:hover {
    translate: 2px -4px;
    background-color: #bbd8ff;
  }
`