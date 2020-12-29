import styled from "styled-components"
import { Link } from "gatsby"

export const SubjectLinksWrapper = styled.section`
  margin: 4rem 6rem;

`

export const SubjectLinksList = styled.ul`
  display: grid;
  grid-area: home;
  grid-gap: 2rem 6rem;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
`

export const SubjectLinksItem = styled.li`
  background-color: var(--base);
  padding: 0.5rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;
  

`

export const SubjectLinksLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`