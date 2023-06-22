import { styled } from "styled-components";
import { minDevices } from '../../components/breakpoints/Breakpoints'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  @media only screen and (${minDevices.lg}) {
    flex-direction: row;
  }
`

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  width: 100%;
  padding: 100px 50px;
  align-items: center;
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  @media only screen and (${minDevices.lg}) {
    width: 50%;
  }
`

export const Form = styled.form`
  margin-bottom: 30px;
  width: 100%;
  button {
    display: block;
    margin: 0 auto;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin: 10px auto 30px;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: rgba(256, 256, 256, 0.1);
  color: #fff;
  &:focus {
    outline: none;
    border: 1px solid ${props => props.validation === "true" ? "green" : "red"};
    border-radius: 5px;
  }
`

export const StyledRegisterSpan = styled.span`
  margin-top: 20px;
  a {
    color: #B97046;
  }
`

export const StyledSectionWelcome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  position: relative;
  padding: 5%;
  &::before {
    content: "";
    position: absolute;
    min-height: 100%;
    width: 100%;
    top: 0; 
    right: 0;
    background-color: #B97046;
    z-index: -1;
  }
  @media only screen and (${minDevices.lg}) {
    width: 50%;
    &::before {
      width: 70%;
    }
  }
`

export const WelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100%;
  width: 100%;
  padding: 50px;
  background: 
    radial-gradient(ellipse at left, rgba(0,0,0, 0.8), transparent),
    radial-gradient(ellipse at right, rgba(0,0,0, 0.5), transparent),
    radial-gradient(ellipse at bottom, rgba(0,0,0, 0.5), transparent),
    url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  div {
    margin-top: 50px;
  }
`