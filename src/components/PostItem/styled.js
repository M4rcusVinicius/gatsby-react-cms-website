import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: black;
`

export const PostItemWrapper = styled.section`
  margin: 2rem;
  padding: 2rem;
  border: 2px solid var(--border);
  background: var(--secondaryBackground);
  transition: background 200ms;

  &:hover {
    background: var(--activeBackground);
  }
`

export const PostItemInfoContent = styled.div`
  padding: 0.4rem;
`

export const PostItemInfo = styled.p`
  margin: 0.4rem;
  font-size: 1.4rem;
  font-family: 'Courier New', Courier, monospace;
`

export const PostItemImageContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`

export const PostItemImage = styled(Img)`
`