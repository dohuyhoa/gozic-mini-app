import React from "react";

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
