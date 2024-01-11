import React from "react";
import CardUserIcon from "../static/icons/card-user-icon.png";

class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-details d-flex flex-column justify-content-between align-items-center">
              <h6 className="modal-title fs-16 fw-600">Xoá hợp đồng</h6>
              <span className="modal-owner">{this.props.owner}</span>
              <span className="modal-brand-name color-primary">
                {this.props.brand}
              </span>

              <div className="contract-date d-flex align-items-center">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">{this.props.phone}</span>
              </div>
            </div>
            <div className="d-flex flex-column mt-3 border-top border-1 border-gray align-items-center">
              <button
                type="button"
                class="btn border-0 red border-bottom border-1 border-gray w-100"
              >
                Xoá hợp đồng
              </button>
              <button
                type="button"
                class="btn border-0 w-100"
                data-bs-dismiss="modal"
              >
                Huỷ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractModal;
