import React, { useEffect, useState } from "react";
import styled from "styled-components";
import requests from "../requests";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <MyCarousel {...settings}>
        <Wrap>
          <img
            src="https://webneel.com/daily/sites/default/files/images/daily/04-2014/5-disney-cartoon.jpg"
            alt="movie img"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png"
            alt="movie img"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://jonnegroni.com/wp-content/uploads/2013/07/pixarpix.jpg"
            alt="movie img"
          />
        </Wrap>
      </MyCarousel>
    </div>
  );
}

export default Carousel;

const MyCarousel = styled(Slider)`
  margin: 80px 30px 10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }
`;

const Wrap = styled.div`
  height: 350px;
  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.89) 0px 16px 30px -10px, rgba(0, 0, 0, 0.89) 0px 16px 10px -10px;
  }
`;
