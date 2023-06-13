import { styled } from 'styled-components'
import { maxDevices } from './breakpoints/Breakpoints'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 100px;
  @media only screen and (${maxDevices.lg}) {
    padding: 5vh 5vw;
  }
`