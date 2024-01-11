import React from "react";

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form className="form mb-3 px-3 form-details">
          <div className="input-group d-flex flex-column align-items-flex-start mb-3 color-black">
            <label className="form-label mb-3">Số hợp đồng bảo hiểm</label>
            <input
              type="text"
              className="form-control w-100 rounded-3 border fw-600"
              value="01823901283"
            />
          </div>
          <div className="input-group d-flex flex-column align-items-flex-start mb-3 color-black">
            <label className="form-label mb-3">CMND/CCCD</label>
            <input
              type="text"
              className="form-control w-100 rounded-3 border fw-600"
              value="01823901283"
            />
          </div>
          <div className="input-group d-flex flex-column align-items-flex-start mb-3 color-black">
            <label className="form-label mb-3">Số điện thoại</label>
            <input
              type="text"
              className="form-control w-100 rounded-3 border fw-600"
              value="01823901283"
            />
          </div>
        </form>
        <div className="border-5 border-bottom border-gray w-100 mb-3"></div>
      </>
    );
  }
}

export default FormDetails;
