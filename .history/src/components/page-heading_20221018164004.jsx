import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import SideNavigtion from "./side-navigation";

import "../css/page-heading.css";

const PageHeading = (props) => {
  const [openSideNav, setOpenSideNav] = useState(false);

  const handleOpenSideNav = () => {
    setOpenSideNav(true);
  };

  const closeSideNav = (value) => {
    setOpenSideNav(value);
  };

  return (
    <>
      <div className="heading d-flex justify-content-between py-3 align-items-center">
        <div className="heading-nav">
          <FontAwesomeIcon
            icon={faBars}
            className="fs-1"
            onClick={() => handleOpenSideNav()}
          />
        </div>
        <div className="heading-cart">
          <FontAwesomeIcon icon={faCartShopping} className="fs-1" />
        </div>
      </div>
      <div className={`heading-side ${openSideNav ? "active" : ""}`}>
        <SideNavigtion closeSideNav={closeSideNav} />
      </div>
    </>
  );
};
export default PageHeading;
