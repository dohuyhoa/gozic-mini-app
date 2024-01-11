import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../css/banner.css";

const Banner = (props) => {
  const { photoList, title } = props

  return (
      <Carousel controls={false}>

        {photoList && photoList.length > 0 && photoList.map((item, index) => {
          return (
            <Carousel.Item key={index} interval={3000}>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100"
                  src={item}
                  alt={title}
                />
              </div>
            </Carousel.Item>

          )
        })}
      </Carousel>
  );
};

export default Banner;
