import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "../css/page-heading.css";

const PageHeading = (props) => {
  return (
    <div className="heading">
      <div className="heading-nav"></div>
    </div>
  );
};
export default PageHeading;
