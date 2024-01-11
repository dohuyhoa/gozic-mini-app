import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";
class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-container">
        <div className="modal-top d-flex align-items-center flex-column">
          <h6 className="fw-600">Xoá hợp đồng</h6>
          <span>"{this.props.owner}"</span>
          <div className="modal-date d-flex align-items-center">
            <img src={CardUserIcon} alt="" />
            <span className="ms-2">{this.props.number}</span>
          </div>
        </div>
        <div className="modal-bottom d-flex align-items-center flex-column">
          <button type="button" class="btn">
            Save changes
          </button>
          <button type="button" class="btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default ContractModal;
