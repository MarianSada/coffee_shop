import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledMenuSection = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    padding: 0 0 0 40px;

    @media only screen and (${minDevices.lg}) {
    flex-direction: row;
    -webkit-flex-direction: row;
  }
`

