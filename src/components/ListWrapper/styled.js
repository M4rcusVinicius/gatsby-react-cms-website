import styled from 'styled-components'

export const ListWrapper = styled.section`

`

export const ListContent = styled.section`
  display: grid;
  grid-area: posts;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
`

