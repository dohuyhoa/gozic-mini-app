import React from "react";
import "../css/slide-news.css";

const SlideNews = () => {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1665991947192-a63451f34c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <div className="product-title">Tin Tức Sự Kiện</div>
      <div className="news slider">
        <div className="news-item">
          <div className="news-item-header">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideNews;
