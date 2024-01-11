import React from "react";
import "../css/slide-news.css";

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
        "https://images.unsplash.com/photo-1665991947192-a63451f34c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      content:
        " Nội dung bài viết [Hiện nội dung]Có nên mua bếp từ Kaff KF-3850SL không ?1.Mặt kính Schott Ceran cao cấp2.Công suất lớn, tiết kiệm điện3.Bảng điều khiển hiện đại và nhiều tính năng thông minh4.Các tính năng an toànCó nên mua bếp từ Kaff KF-3850SL [...] ",
      title: `Có nên mua bếp từ Kaff KF-3850 SL không?`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1665991947192-a63451f34c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideNews;
