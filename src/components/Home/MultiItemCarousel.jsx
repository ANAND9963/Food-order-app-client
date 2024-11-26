import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from 'react'
import Slider from "react-slick";
import { topmeals } from "./topMeals";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
  return (
    <div>
        <Slider>
            {topmeals.map((item)=> <CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel