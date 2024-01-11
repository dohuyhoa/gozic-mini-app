import React from "react";

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container footer">
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
      </div>
    </section>
  );
};

export default Footer;
