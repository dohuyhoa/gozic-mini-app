import React, { useEffect, useState } from "react";
import "../css/banner.css";
const Banner = () => {
  const slides = [
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    {
      image:
        "https://images.unsplash.com/photo-1665916712273-d5d74843683b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1664111629972-685387366637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1663464775968-d305e6465ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      slideRight();
    }, 2000);
  });

  const slideRight = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="banner row-cols-1">
      {slides &&
        slides.length > 0 &&
        slides.map((slide, index) => {
          const goToSlide = {
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          };
          const myStyle = {
            transform: `translateX(${100 * index}%)`,
          };
          return (
            <div
              key={index}
              style={index === currentSlide ? goToSlide : myStyle}
              className={"banner-slider"}
            >
              <img
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
