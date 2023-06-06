import { styled } from "styled-components"

export const SliderWrapper = styled.div`
width: 80vw;
overflow: hidden;
display: flex;
gap: var(--strenghtsTile-gap);
margin: 100px auto;
padding: 1vw;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const RoundArrowBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(185, 112, 70, 0.5);
  font-size: 20px;
  &:hover {
    transform: scale(1.1) translateY(-50%);
  }
`

