import { StyledSection } from '../Section.styles'
import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledMenuSection = styled(StyledSection)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 100px;
  padding: 0 0 0 40px;
  @media only screen and (${maxDevices.lg}) {
    grid-template-columns: 1fr;
  }
`
