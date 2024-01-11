import React from "react";

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-control form ">
        <div className="input-group">
          <label className="form-label">Số hợp đồng bảo hiểm</label>
        </div>
      </form>
    );
  }
}

export default FormDetails;
