import React from "react";
import "../css/slide-news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const SlideNews = () => {
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
        " Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff KF-3850SL [...] ",
      title: `Có nên mua bếp từ Kaff KF-3850 SL không?`,
    },
  ];
  return (
    <>
      <div className="product-title">Tin Tức Sự Kiện</div>
      <div className="news slider">
        <div className="news-item">
          <div className="news-item-header">
            <div className="news-item-thumbnail">
              <img
                src="https://images.unsplash.com/photo-1665995723156-13eabab05f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <p className="news-item-time">
              <FontAwesomeIcon icon={faClock} />
              <span>23:24 09/10/2022</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideNews;
