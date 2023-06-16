import { StyledSection } from '../Section.styles'
import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledMenuSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    padding: 0 0 0 40px;

    @media only screen and (${minDevices.lg}) {
    display: flex;
    flex-direction: row;
    -webkit-flex-direction: row;
  }
`

