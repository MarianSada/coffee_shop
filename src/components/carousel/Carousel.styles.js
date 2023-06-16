import { styled } from "styled-components"

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const SliderWrapper = styled.div`
  width: var(--carouselSliderWrapper-width);
  overflow: hidden;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  margin: 100px auto;
  padding: 20px;
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

