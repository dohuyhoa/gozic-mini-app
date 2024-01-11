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
            <div className="modal-details">
              <h5 className="modal-title">Xoá hợp đồng</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractModal;
