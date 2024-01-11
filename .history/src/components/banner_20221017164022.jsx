import React, { useState } from "react";
import "../css/banner.css";
const Banner = () => {
  const slides = [
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(slides.length);

  return (
    <div className="banner row-cols-1">
      {slides &&
        slides.length > 0 &&
        slides.map((slide, index) => {
          return (
            <div className="banner-slide">
              <img
                key={index}
                className="banner-image"
                src={slide.image}
                alt="Bếp Hoà Phát"
              />
            </div>
          );
        })}
    </div>
  );
};

export default Banner;
