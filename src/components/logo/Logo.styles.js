import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledLogoWrapper = styled.div`
  display: ${props => props.display ? "none" : "block"};
  width: 100px;
  @media only screen and (${minDevices.lg}) {
    display: block;
  }
`