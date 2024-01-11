import React from "react";

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
          <div className="product-name">Bếp từ đôi Arber AB-402</div>

          <div className="product-brand">
            <img
              src="https://res.cloudinary.com/bephoaphat/image/upload/v1555053410/acdwcyeam9yjr8p8wnvd.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
