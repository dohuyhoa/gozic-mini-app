import React from "react";
import "../css/slide-logo.css";
const LogoSlide = (props) => {
  return (
    <div className="slider-logo">
      <div className="slider-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          alt=""
        />
      </div>
      <div className="slider-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          alt=""
        />
      </div>
      <div className="slider-item">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LogoSlide;
