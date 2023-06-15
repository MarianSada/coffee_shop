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
    background: beans_bg,
    text: "Best coffee beans",
  },
  {
    index: 6,
    background: coffeeCup_bg,
    text: "Take a snack",
  },
  {
    index: 7,
    background: aeropress_bg,
    text: "Aeropress",
  },
  {
    index: 8,
    background: beans_bg,
    text: "Best coffee beans",
  }
]

const slideSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--strenghtsTile-size'));
const slideGap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--strenghtsTile-gap'));
const slidesShown = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--slides-shown'));
const initialOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--initial-offset'));
const slideTranslation = slideSize + slideGap;
const sliderLength = slides.length;

function Carousel() {

  const [slide, setSlide] = useState(initialOffset)

  useEffect(() => {
    const handleResize = () => {setSlide(initialOffset)};

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };  
  },[slide])

  useEffect(() => {

    const slideDuration = setTimeout(() => {
      if(((sliderLength - slidesShown) * (-slideTranslation) + initialOffset) === slide){
        setSlide(initialOffset)
      } else {
        setSlide((prev) => prev - slideTranslation)
      }
   }, 4000)
   return () => clearTimeout(slideDuration);
  })

  function handleClick(direction) {
    const slideDirection = direction === "next" ? -slideTranslation : slideTranslation;

    setSlide(prev => {
      let newPosition = (prev + slideDirection)  % (sliderLength * -slideTranslation);

      return newPosition > 0 
        ? ((sliderLength - slidesShown) * -slideTranslation) 
        : (newPosition < ((sliderLength - slidesShown) * -slideTranslation) 
        ? initialOffset 
        : newPosition)
    })
  }

    return (
      <>
      <CarouselWrapper>
        <SliderWrapper >
          {
            slides.map(item => {
              return (
              <StyledStrenghtsTile slide={slide}  key={item.index} >
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
        >
          <FaArrowCircleRight/>
        </RoundArrowBtn>
        <RoundArrowBtn 
          onClick={() => handleClick("prev")}
          style={{left: "2%"}}
        >
          <FaArrowCircleLeft stroke="#fff"/>
        </RoundArrowBtn>
      </CarouselWrapper>
      </>
    );
}

export default Carousel