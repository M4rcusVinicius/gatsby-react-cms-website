import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;


  body#grid & {
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemWrapper = styled.section`
  background-color: var(--base);
  padding: 0.5rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;
  transition: 200ms;

  &:hover {
    translate: 2px -4px;
    box-shadow: -2px 4px 5px var(--light);
  }
  
  body#grid & {
    flex-direction: column;
    justify-content: center;
    max-width: 35rem;
  }
`

export const PostItemInfo = styled.div`
  padding: 1.5rem 0.5rem 0.5rem;
`

export const PostItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  margin: 1rem 0;
  color: var(--clear);
  font-size: 1rem;
  font-weight: 600;
`