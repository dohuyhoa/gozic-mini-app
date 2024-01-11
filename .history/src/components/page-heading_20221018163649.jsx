import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
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
      <div className="heading">
        <div className="heading-nav">
          <FontAwesomeIcon
            icon={faBars}
            className="fs-1"
            onClick={() => handleOpenSideNav()}
          />
        </div>
      </div>
      <div className={`heading-side ${openSideNav ? "active" : ""}`}>
        <SideNavigtion closeSideNav={closeSideNav} />
      </div>
    </>
  );
};
export default PageHeading;
