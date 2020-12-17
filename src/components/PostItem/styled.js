import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: black;
`

export const PostItemWrapper = styled.section`
  margin: 1rem;
  border: 2px solid #38444d;
  background: #eee;
  transition: background 200ms;

  &:hover {
    background: #cbe7f0;
  }
`

export const PostItemInfo = styled.div`
  margin: 0.4rem;
  font-size: 1.4rem;
  font-family: 'Courier New', Courier, monospace;
`