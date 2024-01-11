import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      <div className="product-title">Thương Hiệu</div>
      <div className="slider-logo">
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => {
            return (
              <div key={index} className="slider-item">
                <Link>
                  <img src={logo} alt="" className="slider-img" />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LogoSlide;
