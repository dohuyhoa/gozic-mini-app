import React from "react";

class FormQuyenLoi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-quyen-loi form-quyen-loi-toggle">
        <div className="form-row d-flex justify-content-between pb-3 align-items-center border-bottom border-2 border-gray">
          <span className="form-title fs-12 col-8">Đơn vị tiền tệ</span>
          <span className="fw-600 color-primary col-4">VNĐ</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray">
          <span className="form-title fs-12 col-8">Quyền lợi chính</span>
          <span className="fw-600 color-primary col-4">Nội chú</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray">
          <span className="form-title fs-12 col-8">Tổng hạn mức/ năm</span>
          <span className="fw-600 color-primary col-4">3</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray mb-2">
          <span className="form-title fs-12 col-8">
            Số tiền bồi thường đã thanh toán
          </span>
          <span className="fw-600 color-primary col-4">300.000.000</span>
        </div>
        <div className="form-row d-flex justify-content-between py-3 border-bottom border-2 border-gray mb-2">
          <span className="form-title fs-12 col-8">
            Số tiền đã yêu cầu bồi thường
          </span>
          <span className="fw-600 color-primary col-4">500.000.000</span>
        </div>
        <div className="form-row d-flex justify-content-between pt-3 mb-3">
          <span className="form-title fs-12 col-6"> Số tiền còn lại</span>
          <span className="fw-600 color-primary col-6 text-end">
            200.000.000.000
          </span>
        </div>
        <div className="border-5 border-bottom border-gray w-100 mb-3"></div>
      </div>
    );
  }
}

export default FormQuyenLoi;
