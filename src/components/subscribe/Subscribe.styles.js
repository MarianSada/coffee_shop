import { styled } from 'styled-components'

export const Input = styled.input`
  display: flex;
  min-width: 300px;
  padding: 10px;
  margin-left: auto;
  border:none;
  border-bottom: 1px solid #fff;
  background-color: rgba(256, 256, 256, 0.1);
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:focus {
    outline-color: #B97046;
  }
`