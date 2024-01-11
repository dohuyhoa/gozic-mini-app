import React, { useState, useEffect } from "react";
import "../css/slide-news.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselItem } from "react-bootstrap";

import newsType from "../models/news-type";

const SlideNews = () => {
  const [currentNew, setCurrentNew] = useState(0);
  const [news, setNews] = useState({news: []});

  const delay = 3000;

  useEffect(() => {
    setTimeout(() => {
      nextNewSlide();
    }, delay);

    async function fetchData() {
      let data = await newsType.callApi();
      setNews(data)
      //console.log(data)
    }
    fetchData();
  }, []);

  const nextNewSlide = () => {
    const isLastSlide = currentNew === news.length - 1;
    setCurrentNew(isLastSlide ? 0 : currentNew + 1);
  };

  const navigateTo = useNavigate();
  const handleOnclickDetailNew = (id) => {
    navigateTo(`/post/${id}`)
  }

  return (
    <>
      <Link to="/news">
        <div className="product-title py-4">Tin Tức Sự Kiện</div>
      </Link>

      <Carousel interval={3000} controls={false} indicators={false}>
        {news &&
          news.length > 0 &&
          news.map((slide, index) => {
            return (
              <CarouselItem key={index}>
                <div className="news-item">

                  <div className="news-item-header mb-3">
                    <div className="news-item-thumbnail" onClick={() => handleOnclickDetailNew(slide.id)}>
                      <img src={slide.thumbnail} alt="" />
                    </div>
                  </div>

                  <p className="news-item-time text-center mb-3">
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    <span>{slide.updated_at}</span>
                  </p>
                  <div className="news-item-title text-center" onClick={() => handleOnclickDetailNew(slide.id)}>
                    {slide.title}
                  </div>
                  <div className="new-item-content text-center p-4" dangerouslySetInnerHTML={{__html: slide.content}} onClick={() => handleOnclickDetailNew(slide.id)}/>
                </div>
              </CarouselItem>

            );
          })}
      </Carousel>
    </>
  );
};

export default SlideNews;
