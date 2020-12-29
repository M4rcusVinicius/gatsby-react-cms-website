import styled from "styled-components"

export const PostGroupWrapper = styled.section`
  padding: 4rem 10rem;
`

export const PostGroupContent = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-area: posts;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
`