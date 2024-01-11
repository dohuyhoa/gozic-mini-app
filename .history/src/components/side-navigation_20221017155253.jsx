import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../css/side-navigation.css";
const SideNavigtion = () => {
  return (
    <div className="side-nav">
      <FontAwesomeIcon icon={faXmark} className="side-nav-icon" />
      <ul className="side-nav-list">
        <li className="side-nav-item">Bếp Từ</li>
        <li className="side-nav-item">Bếp Điện Tử</li>
        <li className="side-nav-item">Bếp Gas Âm</li>
        <li className="side-nav-item">Hút Mùi</li>
        <li className="side-nav-item">Máy Rửa Bát</li>
      </ul>
    </div>
  );
};

export default SideNavigtion;
