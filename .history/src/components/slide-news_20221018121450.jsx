import React, { useState, useEffect } from "react";
import "../css/slide-news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const SlideNews = () => {
  const [currentNew, setCurrentNew] = useState(0);
  const delay = 3000;
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1665991947192-a63451f34c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      content:
        " Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff KF-3850SL [...] ",
      title: `Có nên mua bếp từ Kaff KF-3850 SL không?`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1665996934804-fbb6be54e28f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      content:
        " Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff KF-3850SL [...] ",
      title: `Có nên mua bếp từ Kaff KF-3850 SL không?`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1665995723156-13eabab05f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      content:
        "Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff KF-3850SL [...]",
      title: `Có nên mua bếp từ Kaff KF-3850 SL không?`,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      nextNewSlide();
    }, delay);
  });
  const nextNewSlide = () => {
    const isLastSlide = currentSlide === news.length - 1;
    setCurrentSlide(isLastSlide ? 0 : currentSlide + 1);
  };
  return (
    <>
      <div className="product-title">Tin Tức Sự Kiện</div>
      <div className="news">
        {news &&
          news.length > 0 &&
          news.map((slide, index) => {
            const goToSlide = {
              transform: `translateX(${100 * (index - currentNew)}%)`,
            };
            const mySlide = {
              transform: `translateX(${100 * (currentNew - index)}%)`,
            };
            return (
              <div
                className="news-item"
                style={index === currentNew ? mySlide : goToSlide}
              >
                <div className="news-item-header">
                  <div className="news-item-thumbnail">
                    <img src={slide.image} alt="" />
                  </div>
                </div>
                <p className="news-item-time text-center">
                  <FontAwesomeIcon icon={faClock} />
                  <span>23:24 09/10/2022</span>
                </p>
                <div className="news-item-title text-center">
                  Có nên mua bếp từ Kaff KF-3850SL không ?
                </div>
                <div className="new-item-content text-center">
                  Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff
                  KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất
                  lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính
                  năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff
                  KF-3850SL [...]
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SlideNews;
