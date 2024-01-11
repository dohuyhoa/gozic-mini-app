import React from "react";
import "../css/banner.css";
const Banner = () => {
  const slides = [
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
  ];

  return (
    <div className="banner row-cols-1">
      {slides &&
        slides.length > 0 &&
        slides.map((slide, img) => {
          return (
            <div className="banner-item">
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
