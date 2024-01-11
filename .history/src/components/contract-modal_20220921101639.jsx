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
          <span>"Nguyễn Hoàng Hà Anh"</span>
          <div className="modal-date d-flex align-items-center">
            <img src={CardUserIcon} alt="" />
            <span className="ms-2">{this.props.date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractModal;
