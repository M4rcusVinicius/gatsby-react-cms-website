import styled from "styled-components"
import { Link } from "gatsby"

export const NewPostWrapper = styled.section`
  width: 100%;
  padding: 4rem 10rem;
`

export const NewPostItemWrapper = styled.div`
  margin: 3rem 0;
  transition: 200ms;

  &:hover {
    translate: 2px -4px;
  }
`

export const NewPostItemCardContent = styled.div`
  display: flex;
  justify-content: ${props => props.reverse ? "flex-start" : "flex-end"};
  position: relative;
  top: -1.2rem;
  left: ${props => props.reverse ? "-1.5rem" : "1.5rem"};
`

export const NewPostItemCard = styled.div`
  text-align: center;
  background: #6B66F9;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--base);
  position: absolute;
  transform: ${props => props.reverse ? "rotate(-15deg)" : "rotate(15deg)"};
  padding: 1rem 2rem;
`

export const NewPostItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  background-color: var(--base);
  padding: 0.5rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;
  height: 20rem;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  transition: 200ms;

  &:hover {
    box-shadow: -2px 4px 5px var(--light);
  }
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
  font-size: 1.3rem;
  font-weight: 600;
`

