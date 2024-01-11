import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";
class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-container">
        <div className="modal-top">
          <h6>Xoá hợp đồng</h6>
          <span>"Nguyễn Hoàng Hà Anh"</span>
        </div>
      </div>
    );
  }
}

export default ContractModal;
