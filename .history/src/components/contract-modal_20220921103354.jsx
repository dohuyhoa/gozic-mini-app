import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";
class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-container border w-75 my-0 mx-auto rounded-3 bg-white">
        <div className="modal-top d-flex align-items-center flex-column pt-4">
          <h6 className="fw-600 mb-2">Xoá hợp đồng</h6>
          <span>"{this.props.owner}"</span>
          <div className="modal-date mt- d-flex align-items-center">
            <img src={CardUserIcon} alt="" />
            <span className="ms-2">{this.props.number}</span>
          </div>
        </div>
        <div className="modal-bottom d-flex align-items-center flex-column">
          <button
            type="button"
            className="btn border-bottom border-top border-1 border-gray w-100 p-2"
          >
            Xoá hợp đồng
          </button>
          <button type="button" className="btn w-100 p-2">
            Huỷ
          </button>
        </div>
      </div>
    );
  }
}

export default ContractModal;
