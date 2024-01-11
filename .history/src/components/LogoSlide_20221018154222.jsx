import React, { useEffect, useState } from "react";
import "../css/slide-logo.css";
const LogoSlide = (props) => {
  const logos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  ];
  const [current, setCurrent] = useState(0);
  const delay = 3000;
  useEffect(() => {
    setInterval(() => {
      nextSlide();
    }, delay);
  });
  const nextSlide = () => {
    setCurrent(current === logos.length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <div className="product-title">Thương Hiệu</div>
      <div className="slider-logo">
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => {
            const animate = {
              transform: `translateX(-50%)`,
            };
            const animateCurr = {
              transform: `translateX(0%)`,
            };
            return (
              <div
                className="slider-item"
                style={index === current ? animate : animateCurr}
              >
                <img src={logo} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LogoSlide;
