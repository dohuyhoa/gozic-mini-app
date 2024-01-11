import React from "react";
import myContractList from "../models/contracts";
class FormBenefit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractBenefits: [],
    };
  }
  componentDidMount() {
    myContractList.getContractBenefit(this, this.onSuccess);
  }
  onSuccess(thisObj, data) {
    console.log(data);
    this.setState({ contractBenefits: [...data] });
  }
  render() {
    let { contractBenefits } = this.state;
    return (
      <div className="form-toggle">
        {contractBenefits &&
          contractBenefits.length > 0 &&
          contractBenefits.map((benefit) => {
            return (
              <form className="form">
                <div className="form-row d-flex justify-content-between align-items-center border-bottom border-2 border-gray">
                  <span className="form-title fs-14 col-9">Đơn vị tiền tệ</span>
                  <span className="fw-600 color-primary col-3">
                    {benefit.CUR}
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between align-items-center border-bottom  border-gray">
                  <span className="form-title fs-14 col-9">
                    Quyền lợi chính
                  </span>
                  <span className="fw-600 color-primary col-3">
                    {this.Description}
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between align-items-center border-bottom  border-gray">
                  <span className="form-title fs-14 col-9">
                    Tổng hạn mức/ năm
                  </span>
                  <span className="fw-600 color-primary col-3">
                    {benefit.AnnualLimit}
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between align-items-center border-bottom  border-gray ">
                  <span className="form-title fs-14 col-9">
                    Số tiền bồi thường đã thanh toán
                  </span>
                  <span className="fw-600 color-primary col-3">
                    {benefit.Claimed}
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between align-items-center border-bottom  border-gray ">
                  <span className="form-title fs-14 col-9">
                    Số tiền đã yêu cầu bồi thường
                  </span>
                  <span className="fw-600 color-primary col-3">
                    {benefit.Claiming}
                  </span>
                </div>
                <div className="form-row d-flex justify-content-between align-items-center">
                  <span className="form-title fs-14 col-6">
                    {" "}
                    Số tiền còn lại
                  </span>
                  <span
                    className="fw-600 color-primary col-6 text-end
            "
                  >
                    {benefit.AnnualLimit}
                  </span>
                </div>
              </form>
            );
          })}
        <div className="border-5 border-bottom border-gray w-100 mb-3"></div>
      </div>
    );
  }
}

export default FormBenefit;
