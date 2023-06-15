import { maxDevices } from '../breakpoints/Breakpoints'
import { styled } from 'styled-components'

export const StyledHamburger = styled.div`
  display: none;
  @media only screen and (${maxDevices.lg}) {
    display: flex;
  }
`