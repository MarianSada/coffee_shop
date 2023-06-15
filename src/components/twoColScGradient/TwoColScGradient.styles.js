import { StyledSection } from '../Section.styles'
import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledTwoColScGradient = styled(StyledSection)`
  background-image: linear-gradient(to right, black, black, rgb(19, 18, 18), #b97046, #b97046, #b97046);
  box-shadow: 0 0 10px #b97046;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  @media only screen and (${maxDevices.lg}) {
    background-image: linear-gradient(to bottom, black, rgb(19, 18, 18), #b97046, #b97046, #b97046);
    grid-template-columns: 1fr;
  }
`
export const StyledTextSc = styled.div`
  padding: 20px 50px;
`