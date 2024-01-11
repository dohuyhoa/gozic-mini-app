import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavigtion from "./side-navigation";

import "../css/page-heading.css";

const PageHeading = (props) => {
  return (
    <>
      <div className="heading">
        <div className="heading-nav">
          <FontAwesomeIcon icon={faBars} className="fs-1" />
        </div>
      </div>
      <div>
        <SideNavigtion />
      </div>
    </>
  );
};
export default PageHeading;
