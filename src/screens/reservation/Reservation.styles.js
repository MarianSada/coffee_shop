import { styled } from 'styled-components'
import { minDevices } from '../../components/breakpoints/Breakpoints'

export const FormWrapper = styled.div`
  display: flex;
  max-width: 2000px;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  margin: 100px auto;
  width: 80%;
  padding: 50px 0;
  border: 1px solid #b97046;
  box-shadow: 0 0 10px #b97046;
`

export const Form = styled.form`
  width: 100%;
  padding: 0 20px;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-justify-content: center;
  @media only screen and (${minDevices.lg}) {
    > input:nth-of-type(odd) {
      margin-right: 20px
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin: 10px 0 30px;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: rgba(256, 256, 256, 0.1);
  color: #fff;
  &:focus {
    outline: none;
    border: 1px solid ${props => props.validation === "true" ? "green" : "red"};
    border-radius: 5px;
  }
  @media only screen and (${minDevices.lg}) {
    width: 45%;
  }
`