import React from "react";
import "../css/footer.css";
const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-item">
          <div className="footer-title">Về Chúng Tôi</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className="address">
              950 Lạc Long Quân, Phường 8, Quận Tân Bình, TP Hồ Chí Minh
            </p>
            <p className="phone">
              Điện thoại: <span>0987023995</span>
            </p>
            <p className="email">
              Email: <span>Nguyenlien30121987@gmail.com</span>
            </p>
          </div>
          <div className="footer-certificate">
            <img
              src="https://cdn.gokisoft.com/uploads/stores/2/2022/05/logo-da-thong-bao-voi-bo-cong-thuong.png"
              alt=""
              className="certificate-image"
            />
            <img
              src="https://cdn.gokisoft.com/uploads/stores/2/2022/05/ssl-basic.png"
              alt=""
              className="certificate-image"
            />
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-title">Sản Phẩm Bán Chạy Nhất</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className="mt-3">Bếp từ Hafele HC-I772A</p>
            <p className="mt-3">Bếp từ Bosch PPI82560MS</p>
            <p className="mt-3">Bếp từ Canzy CZ T 01</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
