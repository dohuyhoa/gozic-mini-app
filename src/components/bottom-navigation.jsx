import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faShoppingBag,
  faHome,
  faUser,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import myUserInfo from "../models/user-info";
import "../css/bottom-navigation.css";
import zalo from "../static/icons/icons8-zalo.svg"

import dataConfig from "../models/data-config";

const BottomNavigation = () => {
  // const text = myUserInfo.dataText.bottom_navigation;

  let [checkHomeBtn, setCheckHomeBtn] = useState(true);
  let [checkAccountBtn, setCheckAccountBtn] = useState(false);
  let [checkShopBtn, setCheckShopBtn] = useState(false);
  let [checkNews, setCheckNews] = useState(false);
  let [checkHistory, setCheckHistroy] = useState(false);

  const handleClickAccountBtn = () => {
    setCheckAccountBtn(true);
    setCheckHomeBtn(false);
    setCheckNews(false);
    setCheckHistroy(false);
    setCheckShopBtn(false);
  };
  const handleClickHomeBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(true);
    setCheckNews(false);
    setCheckHistroy(false);
    setCheckShopBtn(false);
  };

  const handleClickNewsBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(false);
    setCheckNews(true);
    setCheckHistroy(false);
    setCheckShopBtn(false);
  };

  const handleClickHistoryBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(false);
    setCheckNews(false);
    setCheckHistroy(true);
    setCheckShopBtn(false);
  };
  const handleClickShopBtn = () => {
    setCheckAccountBtn(false);
    setCheckHomeBtn(false);
    setCheckNews(false);
    setCheckHistroy(false);
    setCheckShopBtn(true);
  };
  return (
    // style={{backgroundColor: `${dataConfig.plugin.appColor}`}}
    <footer className="bottom-navigation">
      <div className="container">
        <div className="row row-cols-3">
          <div
            className={`col p-0 text-center text-white ${checkHomeBtn ? "color-active" : ""}`}
          >
            <Link to="/home" onClick={() => handleClickHomeBtn()}>
              <FontAwesomeIcon icon={faHome} className="fs-3" />
              <p>Trang Chủ</p>
            </Link>
          </div>
          <div
            className={`col p-0 text-center ${checkNews ? "color-active" : ""}`}
          >
            <Link to="/news" onClick={() => handleClickNewsBtn()}>
              <FontAwesomeIcon icon={faNewspaper} className="fs-3" />
              <p>Tin tức</p>
            </Link>
          </div>
          {/*<div
            className={`col p-0 text-center ${checkHistory ? "color-active" : ""}`}
          >
            <Link to="orders" onClick={() => handleClickHistoryBtn()}>
              <FontAwesomeIcon icon={faShoppingBag} className="fs-3" />
              <p>Đơn Hàng</p>
            </Link>
          </div>*/}
          {/* <div
            className={`col p-0 text-center ${checkShopBtn ? "color-active" : ""}`}
          >
            <Link to="shop" onClick={() => handleClickShopBtn()}>
              <FontAwesomeIcon icon={faShop} className="fs-3" />
              <p>Cửa Hàng</p>
            </Link>
          </div> */}
          <div
            className={`col p-0 text-center ${checkAccountBtn ? "color-active" : ""}`}
          >
            <Link to="user-info" onClick={() => handleClickAccountBtn()}>
              <FontAwesomeIcon icon={faUser} className="fs-3" />
              <p>Tài khoản</p>
            </Link>
          </div>
          {/* <div
            className={`col p-0 text-center ${checkAccountBtn ? "color-active" : ""
              }`}
          >
            <a href={zalo}>
              <FontAwesomeIcon icon={faUser} className="fs-3" />
              <p>Tài khoản</p>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

BottomNavigation.displayName = "zmp-bottom-navigation";

export default BottomNavigation;
