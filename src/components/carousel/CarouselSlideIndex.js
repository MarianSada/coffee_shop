import React, { useEffect, useState } from "react";
import { StyledStrenghtsTile } from '../StrenghtsTiles.styles'
import { StyledBgImg } from '../BgImg.styles'
import beans_bg from '../../assets/beans_right.jpeg'
import coffeeCup_bg from '../../assets/coffee_cup.jpeg'
import aeropress_bg from '../../assets/aeropress.jpeg'
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import { SliderWrapper, CarouselWrapper, RoundArrowBtn } from "./Carousel.styles";
import './CarouselVariables.css'

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
    index: 2,
    background: aeropress_bg,
    text: "Aeropress",
  },
  {
    index: 3,
    background: beans_bg,
    text: "Best coffee beans",
  },
  {
    index: 4,
    background: aeropress_bg,
    text: "Aeropress",
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
  {
    index: 7,
    background: beans_bg,
    text: "Best coffee beans",
  }
]

function CarouselSlideIndex({slidesshown}) {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

    const slideDuration = setTimeout(() => {
      if(currentSlide === slides.length){
        setCurrentSlide(1)
      } else {
        setCurrentSlide((prev) => prev + 1)
      }
   }, 4000)
   return () => clearTimeout(slideDuration);
  })

  function handleClick(direction) {
    const slideDirection = direction === "next" ? 1 : -1;

    setCurrentSlide(prev => {
      let newPosition = prev + slideDirection;

      return newPosition
    })
  }

  const filteredSlide = slides.filter((_, index) => index + 1 >= currentSlide && index + 1 < currentSlide + slidesshown) 

  return (
      <>
      <CarouselWrapper>
        <SliderWrapper >
          {
            filteredSlide.map(item => {
              return (
              <StyledStrenghtsTile slidesshown={slidesshown} slide={currentSlide} key={item.index} >
                <StyledBgImg src={item.background} />
                <h2>
                  {item.text}
                </h2>
              </StyledStrenghtsTile>)
            })
          }
        </SliderWrapper>
        <RoundArrowBtn 
          onClick={() => handleClick("next")}
          style={{right: "2%"}}
          disabled={currentSlide === slides.length}
        >
          <FaArrowCircleRight/>
        </RoundArrowBtn>
        <RoundArrowBtn 
          onClick={() => handleClick("prev")}
          style={{left: "2%"}}
          disabled={currentSlide === 1}
        >
          <FaArrowCircleLeft/>
        </RoundArrowBtn>
      </CarouselWrapper>
      </>
    );
}

export default CarouselSlideIndex