import { styled } from 'styled-components'
import { minDevices } from './breakpoints/Breakpoints'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 20px;
  /* gap: 20px; */
  margin: 20px;
  @media only screen and (${minDevices.lg}) {
    padding: 100px;
  }
`