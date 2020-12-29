import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const NewPostItemLink = styled(Link)`
  text-decoration: none;


  body#grid & {
    flex-direction: column;
    justify-content: center;
  }
`

export const NewPostItemWrapper = styled.section`
  background-color: var(--base);
  padding: 0.5rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;

  body#grid & {
    flex-direction: column;
    justify-content: center;
    max-width: 35rem;
  }
  
  &:hover {
  }
`

export const NewPostItemInfo = styled.div`
  padding: 1.5rem 0.5rem 0.5rem;
`

export const NewPostItemDescription = styled.p`
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

export const NewPostItemImage = styled(Img)`
  border-radius: 10px;
  max-height: 14rem;
`

export const NewPostItemImageNotFound = styled(Img)`
  border-radius: 10px;
  height: 14rem;
  background-color: var(--light);
`
export const NewPostWrapper = styled.section`
  margin: 4.75rem 8.7rem;
`

export const NewNewPostItemWrapper = styled.div`
  margin: 4.75rem 8.7rem;
`