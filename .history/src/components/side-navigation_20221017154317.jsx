import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const SideNavigtion = () => {
  return (
    <div className="side-nav">
      <FontAwesomeIcon icon={faXmark} />
    </div>
  );
};

export default SideNavigtion;
