import { styled } from 'styled-components'
import { minDevices } from '../../components/breakpoints/Breakpoints'

export const ContactContainer = styled.div`
  display: flex;
  max-width: 2000px;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  margin: 100px auto;
  width: 80%;
  padding: 50px 20px;
  border: 1px solid #b97046;
  box-shadow: 0 0 10px #b97046;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-justify-content: center;
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
    &.fullWidth {
      width: calc(90% + 20px);
    }
    &:first-child {
      margin-right: 20px;
    }
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  margin: 10px 0 30px;
  padding: 20px;
  height: 200px;
  background-color: rgba(256, 256, 256, 0.1);
  border: none;
  border-bottom: 1px solid #fff;
  resize: vertical;
  color: #fff;
  &:focus {
    outline: none;
    border: 1px solid ${props => props.validation === "true" ? "green" : "red"};
    border-radius: 5px;
  }
  @media only screen and (${minDevices.lg}) {
    width: calc(90% + 20px);
  }
`

export const ContactWrapper = styled.div`
    display: none;
  @media only screen and (${minDevices.lg}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(90% + 20px);
    margin-bottom: 50px;
  }
`

export const ContactTile = styled.div`
  display: flex;

`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  font-size: 0.75rem;
  margin-left: 10px;
  h3, p {
    padding: 0;
  }
`