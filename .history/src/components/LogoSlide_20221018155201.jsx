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
  const delay = 10000;
  useEffect(() => {
    setTimeout(() => {
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
              marginLeft: `${50 * (index - current)}%`,
            };
            const animateCurr = {
              marginLeft: `${50 * (current - index)}%`,
            };
            return (
              <div
                className="slider-item"
                style={index === current ? animateCurr : animate}
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
