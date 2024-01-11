import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
class ButtonClose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="delete-icon hidden">
        <FontAwesomeIcon icon={faCircleXmark} type="button"></FontAwesomeIcon>
      </div>
    );
  }
}
export default ButtonClose;
