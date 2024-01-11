import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";
class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCancelDelete(event, value) {
    event.preventDefault();
    this.props.cancelDelete(value);
  }

  handleDeleteContract(event, value) {
    this.props.deleteContract(value);
  }
  render() {
    let { contract } = this.props;
    return (
      <div className="modal-container">
        <div className="modal-container-item border w-75 my-0 mx-auto rounded-3 bg-white">
          <div className="modal-top d-flex align-items-center flex-column pt-4">
            <h6 className="fw-600 mb-2">Xoá hợp đồng</h6>
            <span className="modal-owner mb-2">"{contract.owner}"</span>
            <span className="modal-brand color-primary mb-2">
              {contract.brand}
            </span>
            <div className="modal-date mt- d-flex align-items-center mb-2">
              <img src={CardUserIcon} alt="" />
              <span className="ms-2">{contract.cccd}</span>
            </div>
          </div>
          <div className="modal-bottom d-flex align-items-center flex-column">
            <button
              type="button"
              className="btn border-bottom border-top border-1 border-gray w-100 p-2 color-red"
            >
              Xoá hợp đồng
            </button>
            <button
              type="button"
              className="btn w-100 p-2 color-primary"
              onClick={(event) => this.handleCancelDelete(event, false)}
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractModal;
