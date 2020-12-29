import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const NewPostWrapper = styled.section`
  width: 100%;
  padding: 4rem 10rem;
`

export const NewPostItemWrapper = styled.div`
  background-color: var(--base);
  padding: 0.5rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;
  margin: 2rem 0;
  height: 20rem;

`

export const NewPostItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

export const NewPostItemNew = styled.div`
  padding: 2rem;
  background: red;  
`

export const NewPostItemInfoContainer = styled.div`
  padding: 2rem;
  width: 60%;
`

export const NewPostItemTitle = styled.div`
  margin: 1rem 0;
  color: var(--blueStrDark);
  font-size: 2rem;
  font-weight: 800;
`

export const NewPostItemInfo = styled.div`
  margin: 1rem 0;
  color: var(--blue);
  font-size: 1.4rem;
  font-weight: 800;
`

export const NewPostItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  margin: 1rem 0;
  color: var(--clear);
  font-size: 1.2rem;
  font-weight: 600;
`

