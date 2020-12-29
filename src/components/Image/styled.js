import styled from "styled-components"
import Img from "gatsby-image"

export const Image = styled(Img)`
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  height: ${props => props.height};
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
`

export const ImageNotFound = styled(Img)`
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  height: ${props => props.height};
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxHWdth};
  background-color: var(--light);
`