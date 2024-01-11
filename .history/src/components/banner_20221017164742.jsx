import React, { useState } from "react";
import "../css/banner.css";
const Banner = () => {
  const slides = [
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    {
      image:
        "https://images.unsplash.com/photo-1665916712273-d5d74843683b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
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
            <div
              className={
                index === 1 ? "banner-slider slide-active" : "banner-slider"
              }
            >
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
