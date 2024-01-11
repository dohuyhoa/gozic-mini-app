import React from "react";

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <div className="input-group d-flex flex-column">
          <label className="form-label mb-3">Số hợp đồng bảo hiểm</label>
          <input
            type="text"
            className="form-control w-100 rounded-3 border fw-600 "
          />
        </div>
      </form>
    );
  }
}

export default FormDetails;
