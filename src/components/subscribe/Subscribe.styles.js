import { styled } from 'styled-components'
import { minDevices } from '../breakpoints/Breakpoints'

export const Input = styled.input`
  display: flex;
  min-width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: rgba(256, 256, 256, 0.1);
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:focus {
    outline: none;
    border: 1px solid ${props => props.validation === "true" ? "green" : "red"};
    border-radius: 5px;
  }
  @media only screen and (${minDevices.lg}) {
  min-width: 300px;
  margin-right: 10px;
  margin-bottom: 0;
}
`

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