import React from "react";

class FormQuyenLoi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        <div className="form-currency">
          <span>Đơn vị tiền tệ</span>
          <span className="fw-600 color-primary">VNĐ</span>
        </div>
      </div>
    );
  }
}

export default FormQuyenLoi;
