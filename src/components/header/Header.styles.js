import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 50px;
  background-color: #050706;
  @media only screen and (${maxDevices.lg}) {
    padding: 0 20px;
  }
`