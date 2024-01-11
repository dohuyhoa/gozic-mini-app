import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Tabs, Icon } from "zmp-ui";

import myUserInfo from "../models/user-info";

import "../css/bottom-navigation.css";

const BottomNavigation = () => {
  // const text = myUserInfo.dataText.bottom_navigation;

  let [checkHomeBtn, setCheckHomeBtn] = useState(true);
  let [checkAccountBtn, setCheckAccountBtn] = useState(false);

  const handleClickAccountBtn = () => {
    setCheckAccountBtn(true);
    setCheckHomeBtn(false);
  };
  const handleClickHomeBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(true);
  };
  return (
    <footer className="bottom-navigation">
      <div className="container">
        <div className="row row-cols-2">
          <div
            className={`col text-center ${checkHomeBtn ? "color-primary" : ""}`}
          >
            <Link to="/home" onClick={() => handleClickHomeBtn()}>
              <Icon icon="zi-home" size={24} />
              <p>Trang Chủ</p>
            </Link>
          </div>

          <div
            className={`col text-center ${
              checkAccountBtn ? "color-primary" : ""
            }`}
          >
            <Link to="/user-info" onClick={() => handleClickAccountBtn()}>
              <Icon icon="zi-user-circle" size={24} />
              <p>Tài Khoản</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

BottomNavigation.displayName = "zmp-bottom-navigation";

export default BottomNavigation;
