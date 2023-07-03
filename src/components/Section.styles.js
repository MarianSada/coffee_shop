import { styled } from 'styled-components'
import { minDevices } from './breakpoints/Breakpoints'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  padding: 50px 20px;
  &:not(:first-of-type) {
      padding-top: 0px;
    }
  @media only screen and (${minDevices.lg}) {
    padding: 100px 100px;

  }
`