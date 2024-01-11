import React from "react";

class FormQuyenLoi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        <div className="form-row d-flex justify-content-between pb-3 border-bottom border-2 border-gray">
          <span className="form-title fs-14">Đơn vị tiền tệ</span>
          <span className="fw-600 color-primary ">VNĐ</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray">
          <span className="form-title fs-14">Quyền lợi chính</span>
          <span className="fw-600 color-primary">Nội chú</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray">
          <span className="form-title fs-14">Tổng hạn mức/ năm</span>
          <span className="fw-600 color-primary">3</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray mb-2">
          <span className="form-title fs-14">
            Số tiền bồi thường đã thanh toán
          </span>
          <span className="fw-600 color-primary">300.000.000</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray mb-2">
          <span className="form-title fs-14">
            Số tiền đã yêu cầu bồi thường
          </span>
          <span className="fw-600 color-primary">500.000.000</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray mb-2">
          <span className="form-title fs-14"> Số tiền còn lại</span>
          <span className="fw-600 color-primary">200.000.000.000</span>
        </div>
      </div>
    );
  }
}

export default FormQuyenLoi;
