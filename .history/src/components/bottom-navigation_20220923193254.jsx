import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Tabs, Icon } from "zmp-ui";

import "./bottom-navigation.css";

const BottomNavigation = () => {
  let [checkHomeBtn, setChecHomeBtn] = useState(true);
  let [checkAccountBtn, setCheckAccountBtn] = useState(false);

  const handleClickAccountBtn = () => {
    setCheckAccountBtn(true);
    setChecHomeBtn(!checkHomeBtn);
  };
  return (
    <footer className="bottom-navigation">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col text-center">
            <Link to="/home">
              <Icon icon="zi-home" size={24} />
              <p>Trang chủ</p>
            </Link>
          </div>

          <div
            className={`col text-center ${
              checkAccountBtn ? "color-primary" : ""
            }`}
          >
            <Link to="/register" onClick={() => handleClickAccountBtn()}>
              <Icon icon="zi-user-circle" size={24} />
              <p>Tài khoản</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

BottomNavigation.displayName = "zmp-bottom-navigation";

export default BottomNavigation;
