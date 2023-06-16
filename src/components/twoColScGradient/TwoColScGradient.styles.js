import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledTwoColScGradient = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  text-align: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  background-image: linear-gradient(to bottom, black, rgb(19, 18, 18), #b97046, #b97046, #b97046);
  box-shadow: 0 0 10px #b97046;
  padding: 0;

  @media only screen and (${minDevices.lg}) {
    flex-direction: row;
    -webkit-flex-direction: row;
    flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    background-image: linear-gradient(to right, black, black, rgb(19, 18, 18), #b97046, #b97046, #b97046);
  }
`
export const StyledTextSc = styled.div`
  padding: 20px 50px;
`