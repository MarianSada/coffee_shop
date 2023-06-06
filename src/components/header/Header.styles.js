import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5vw;
  background-color: #050706;
  @media only screen and (${maxDevices.lg}) {
    padding: 0 2vw;
  }
`