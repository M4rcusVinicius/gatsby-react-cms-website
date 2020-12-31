import styled from "styled-components"

export const Button = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 8px;
  background: var(--blue);
  border: none;
  color: var(--base);
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 80ms;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  margin-left: 1.5rem;
  margin-right: 0.1rem;

  &:hover {
    padding: 0.45rem 1.1rem;
    margin-left: 1.4rem;
    margin-right: 0rem;
    background: var(--blueStrClear);
  }
`
