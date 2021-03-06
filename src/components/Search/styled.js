import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
  }
  .ais-SearchBox-input {
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 90%;
    &::placeholder {
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`