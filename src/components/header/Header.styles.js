import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  /* gap: 20px; */
  margin: 10px;
  padding: 0 20px;
  background-color: #050706;
  @media only screen and (${minDevices.lg}) {
    padding: 0 50px;
  }
`