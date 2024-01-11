import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contract-item col p-3">
        <div className="card ">
          <div className="row p-3">
            <div className="col-4">
              <img src={AceLogo} alt="" className="contract-item-thumbnail" />
            </div>
            <div className="col-8 contract-item-details d-flex flex-column justify-content-between">
              <div className="contract-brand-name color-primary">
                Bảo hiểm Chubb Life
              </div>
              <div className="contract-owner fw-600">Nguyyễn Hoàng Hà Anh</div>
              <div className="contract-date d-flex align-items-center">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">04/10/1995</span>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div className="contract-btn-details d-flex">
              <div className="col-8">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-3">
                  Chi Tiết Thông Tin Bảo Hiểm
                </span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon col-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
