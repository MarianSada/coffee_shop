import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const StyledSubscriptionForm = styled.form`
display: flex;
flex-direction: column;
-webkit-flex-direction: column;
align-items: center;
-webkit-align-items: center;
@media only screen and (${minDevices.lg}) {
  flex-direction: row;
  -webkit-flex-direction: row;
}
`