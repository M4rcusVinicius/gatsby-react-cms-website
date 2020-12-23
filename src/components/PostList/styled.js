import styled from "styled-components"

export const ListWrapper = styled.section`
  margin: 4.75rem 8.7rem;
`

export const ListContent = styled.section`
  margin-top: 2rem;

  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`