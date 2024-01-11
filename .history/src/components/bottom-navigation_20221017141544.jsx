import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Tabs, Icon } from "zmp-ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faHistory,
  faHome,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import myUserInfo from "../models/user-info";

import "../css/bottom-navigation.css";

const BottomNavigation = () => {
  // const text = myUserInfo.dataText.bottom_navigation;

  let [checkHomeBtn, setCheckHomeBtn] = useState(true);
  let [checkAccountBtn, setCheckAccountBtn] = useState(false);
  let [checkNews, setCheckNews] = useState(false);
  let [checkHistory, setCheckHistroy] = useState(false);
  const handleClickAccountBtn = () => {
    setCheckAccountBtn(true);
    setCheckHomeBtn(false);
    setCheckNews(false);
    setCheckHistroy(false);
  };
  const handleClickHomeBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(true);
    setCheckNews(false);
    setCheckHistroy(false);
  };

  const handleClickNewsBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(false);
    setCheckNews(true);
    setCheckHistroy(false);
  };
  return (
    <footer className="bottom-navigation">
      <div className="container">
        <div className="row row-cols-4">
          <div
            className={`col text-center ${checkHomeBtn ? "color-primary" : ""}`}
          >
            <Link to="/home" onClick={() => handleClickHomeBtn()}>
              <FontAwesomeIcon icon={faHome} className="fs-3" />
              <p>Trang Chủ</p>
            </Link>
          </div>
          <div
            className={`col text-center ${checkNews ? "color-primary" : ""}`}
          >
            <Link to="/news" onClick={() => handleClickAccountBtn()}>
              <FontAwesomeIcon icon={faNewspaper} className="fs-3" />
              <p>Tin tức</p>
            </Link>
          </div>
          <div
            className={`col text-center ${checkHistory ? "color-primary" : ""}`}
          >
            <Link to="" onClick={() => handleClickAccountBtn()}>
              <FontAwesomeIcon icon={faHistory} className="fs-3" />
              <p>Lịch Sử</p>
            </Link>
          </div>

          <div
            className={`col text-center ${
              checkAccountBtn ? "color-primary" : ""
            }`}
          >
            <Link to="/user-info" onClick={() => handleClickAccountBtn()}>
              <FontAwesomeIcon icon={faCircleUser} className="fs-3" />
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
