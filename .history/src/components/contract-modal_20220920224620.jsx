import React from "react";

class ContractModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div className="modal-details d-flex flex-column justify-content-between align-items-center">
              <h6 className="modal-title fs-16 fw-600">Xoá hợp đồng</h6>
              <span className="modal-owner">Nguyễn Hoàng Hà Anh</span>
              <span className="modal-brand-name">Bảo hiểm Chubb Life</span>

              <div className="contract-date d-flex align-items-center">
                <img src="" alt="" />
                <span className="ms-2">{this.props.date}</span>
              </div>
            </div>
            <div className="d-flex flex-column mt-1">
              <button
                type="button"
                class="btn border-0 red border-bottom border-1 border-gray"
              >
                Xoá hợp đồng
              </button>
              <button
                type="button"
                class="btn border-0"
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
