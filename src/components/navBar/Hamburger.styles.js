import { minDevices } from '../breakpoints/Breakpoints'
import { styled } from 'styled-components'

export const StyledHamburger = styled.div`
    display: flex;
    -webkit-display: flex;

  @media only screen and (${minDevices.lg}) {
    display: none;

  }
`