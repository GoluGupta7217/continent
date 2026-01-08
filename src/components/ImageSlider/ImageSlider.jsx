import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

import slider from "../../assets/slider.jpg";
import slider1 from "../../assets/slider1.jpg";
import slider3 from "../../assets/slider3.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={slider} alt="hotel" />
        <div className="text-box">
          <h2>Welcome To Continent Hotel</h2>
          <p>The Perfect Base For You</p>
        </div>
      </div>

      <div className="slide">
        <img src={slider1} alt="room" />
        <div className="text-box">
          <h2>Best Room Facility</h2>
          <p>The Best Room For You</p>
        </div>
      </div>

      <div className="slide">
        <img src={slider3} alt="pool" />
        <div className="text-box">
          <h2>Enjoy Your Best Moment</h2>
          <p>Beautiful Swimming Pool There</p>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
