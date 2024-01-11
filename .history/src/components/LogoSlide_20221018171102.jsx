import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/slide-logo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const LogoSlide = (props) => {
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const logos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  ];
  return (
    <>
      <div className="product-title">Thương Hiệu</div>
      <Slider {...settings}>
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => {
            return (
              <div key={index} className="slider-item ms-2">
                <Link className="slide-img">
                  <img src={logo} alt="" />
                </Link>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default LogoSlide;
