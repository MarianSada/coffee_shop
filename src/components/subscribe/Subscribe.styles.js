import { styled } from 'styled-components'
import { maxDevices } from '../breakpoints/Breakpoints'

export const Input = styled.input`
  display: flex;
  min-width: 300px;
  padding: 10px;
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
    outline-color: ${props => props.validation ? "green" : "red"};
  }
`

export const StyledSubscriptionForm = styled.form`
display: flex;
gap: 20px;
align-items: center;
@media only screen and (${maxDevices.lg}) {
  flex-direction: column;
}
`