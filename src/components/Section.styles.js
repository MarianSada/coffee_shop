import { styled } from 'styled-components'
import { maxDevices } from './breakpoints/Breakpoints'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  -webkit-display: flex;
  align-items: center;
  -webkit-align-items: center;
  text-align: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  gap: 20px;
  -webkit-gap: 20px;
  padding: 100px;
  @media only screen and (${maxDevices.lg}) {
    padding: 50px 20px;
  }
`