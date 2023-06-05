import { minDevices } from '../breakpoints/Breakpoints'
import { styled } from 'styled-components'

export const StyledHamburger = styled.div`
  @media only screen and (${minDevices.lg}) {
    display: none;
    color: red;
    background-color: yellow;
  }
`