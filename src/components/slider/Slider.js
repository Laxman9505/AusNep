import React from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const H5 = styled.h5``;

const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 200, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 300, itemsToShow: 3 },
    { width: 800, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1000, itemsToShow: 5 },
    { width: 1000, itemsToShow: 6 },
    { width: 1000, itemsToShow: 7 },
  ];

  return (
    <div className="slider">
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
        Popular Deals Categories
      </h2>
      <div className="sliderContainer">
        <Carousel
          infiniteLoop={true}
          enableAutoPlay={true}
          breakPoints={breakPoints}
          pagination={false}
        >
          {SliderData.map((slide, key) => (
            <div className="slide" key={key}>
              <img src={slide.image} alt="" />
              <h4>{slide.name}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
