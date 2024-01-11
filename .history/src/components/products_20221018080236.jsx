import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../css/products.css";
import Utility from "../utility";
const Products = (props) => {
  return (
    <>
      <h3 className="product-title">Bếp Từ</h3>
      <div className="product-list">
        <div className="product-item">
          <div className="product-image">
            <img
              src="https://bephoaphat.com/uploads/stores/5/2022/10/772a.jpg?v=1665497149"
              alt=""
            />
          </div>
          <div className="product-content">
            <div className="product-name">Bếp từ đôi Arber AB-402</div>

            <div className="product-cate">
              <img
                src="https://res.cloudinary.com/bephoaphat/image/upload/v1555053410/acdwcyeam9yjr8p8wnvd.png"
                alt=""
              />
            </div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
            </div>
            <div className="product-price">
              <div className="product-price-new">
                {Utility.displayVND(10980000)} VNĐ
              </div>
              <div className="product-price-old">20990000 VNĐ</div>
            </div>
          </div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img
              src="https://bephoaphat.com/uploads/stores/5/2022/10/772a.jpg?v=1665497149"
              alt=""
            />
          </div>
          <div className="product-content">
            <div className="product-name">Bếp từ đôi Arber AB-402</div>

            <div className="product-cate">
              <img
                src="https://res.cloudinary.com/bephoaphat/image/upload/v1555053410/acdwcyeam9yjr8p8wnvd.png"
                alt=""
              />
            </div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
            </div>
            <div className="product-price">
              <div className="product-price-new">10980000 VNĐ</div>
              <div className="product-price-old">20990000 VNĐ</div>
            </div>
          </div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img
              src="https://bephoaphat.com/uploads/stores/5/2022/10/772a.jpg?v=1665497149"
              alt=""
            />
          </div>
          <div className="product-content">
            <div className="product-name">Bếp từ đôi Arber AB-402</div>

            <div className="product-cate">
              <img
                src="https://res.cloudinary.com/bephoaphat/image/upload/v1555053410/acdwcyeam9yjr8p8wnvd.png"
                alt=""
              />
            </div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
            </div>
            <div className="product-price">
              <div className="product-price-new">10980000 VNĐ</div>
              <div className="product-price-old">20990000 VNĐ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
