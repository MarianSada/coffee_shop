import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StrenghtsTile from '../StrenghtsTile';
import BgImg from '../BgImg';
import beans_bg from '../../assets/beans_right.jpeg'
import coffeeCup_bg from '../../assets/coffee_cup.jpeg'
import aeropress_bg from '../../assets/aeropress.jpeg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slider() {
  return (
    <div>
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      // centerMode={true}
      renderButtonGroupOutside={true}
      renderDotsOutside={true}
      infinite={true}
      autoPlay={true}
      transitionDuration={500}
      partialVisbile={true}
      // itemClass="carousel-item-padding-40-px"
    >
      <StrenghtsTile>
          <BgImg background={beans_bg}/>
          <h2>
            Best coffee beans
          </h2>
        </StrenghtsTile>
        <StrenghtsTile >
          <BgImg background={coffeeCup_bg}/>
          <h2>
            Take a snack
          </h2>
        </StrenghtsTile>
        <StrenghtsTile>
          <BgImg background={aeropress_bg}/>
          <h2>
            Aeropress
          </h2>
        </StrenghtsTile>
        <StrenghtsTile>
          <BgImg background={beans_bg}/>
          <h2>
            Best coffee beans
          </h2>
        </StrenghtsTile>
        <StrenghtsTile >
          <BgImg background={coffeeCup_bg}/>
          <h2>
            Take a snack
          </h2>
        </StrenghtsTile>
        <StrenghtsTile>
          <BgImg background={aeropress_bg}/>
          <h2>
            Aeropress
          </h2>
        </StrenghtsTile>
    </Carousel>
    </div>
  )
}

export default Slider
