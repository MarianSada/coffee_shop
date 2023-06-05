import React, { useEffect, useState } from "react";
import { StyledStrenghtsTile } from '../StrenghtsTiles.styles'
import { StyledBgImg } from '../BgImg.styles'
import beans_bg from '../../assets/beans_right.jpeg'
import coffeeCup_bg from '../../assets/coffee_cup.jpeg'
import aeropress_bg from '../../assets/aeropress.jpeg'
import { styled } from "styled-components";
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import './styles.css'

const slides = [
  {
    index: 0,
    background: beans_bg,
    text: "Best coffee beans",
  },
  {
    index: 1,
    background: coffeeCup_bg,
    text: "Take a snack",
  },
  {
    index: 3,
    background: aeropress_bg,
    text: "Aeropress",
  },
  {
    index: 4,
    background: beans_bg,
    text: "Best coffee beans",
  },
  {
    index: 5,
    background: coffeeCup_bg,
    text: "Take a snack",
  },
  {
    index: 6,
    background: aeropress_bg,
    text: "Aeropress",
  },
]

const SliderWrapper = styled.div`
  width: 80vw;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 3vw;
  margin: 100px auto;
  padding: 1vw;
`

function Carousel() {

  const [slide, setSlide] = useState(0)

  useEffect(() => {

    const slideDuration = setTimeout(() => {
      if((slides.length - 3) * (-27) === slide){
        setSlide(0)
      } else {
        setSlide((prev) => prev - 27)
      }
   }, 4000)
   return () => clearTimeout(slideDuration);
  })


  function handleClick(direction) {
    if(direction === "next") {
      if((slides.length - 3) * (-27) === slide){
        setSlide(0)
      } else {
        setSlide((prev) => prev - 27)
      }
    } else {
      if(0 === slide){
        setSlide((slides.length - 3) * (-27))
      } else {
        setSlide((prev) => prev + 27)
      }
    }
  }


    return (
      <>
      <div className="carousel-wrapper">
        <SliderWrapper >


          {
            slides.map(item => {
              return (
              <StyledStrenghtsTile slide={slide} key={item.index}>
                <StyledBgImg src={item.background}/>
                <h2>
                  {item.text}
                </h2>
              </StyledStrenghtsTile>)
            })
          }



          {/* <StyledStrenghtsTile >
            <StyledBgImg src={slides[0].background}/>
            <h2>
              {slides[0].text}
            </h2>
          </StyledStrenghtsTile>  */}



        </SliderWrapper>
        <button 
          onClick={() => handleClick("next")}
          className="btn btn-next" 
        >
          <FaArrowCircleRight/>
        </button>
        <button 
          onClick={() => handleClick("prev")}
          className="btn btn-prev" 
        >
          <FaArrowCircleLeft/>
        </button>
      </div>
      </>
    );
}

export default Carousel