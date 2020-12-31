import styled from "styled-components"
import { Link } from "gatsby"

export const MenuFunctionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

export const MenuFunctionGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 8rem;
  justify-content: space-between;
`


export const MenuFunctionLink = styled(Link)`
`

export const MenuFunctionItem = styled.span`
  cursor: pointer;
  display: block;
  height: 1.4rem;
  position: relative;
  width: 1.4rem;
  color: var(--clear);
  transition: color 200ms;

  &.light {
    &:hover {
    }
  }
  &:hover {
    color: var(--blue);
  }
`