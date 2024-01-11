import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
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
            <div className="col-8 contract-item-details d-flex flex-column">
              <div className="contract-brand-name color-primary">
                Bảo hiểm Chubb Life
              </div>
              <div className="contract-owner fw-600">Nguyyễn Hoàng Hà Anh</div>
              <div className="contract-date">
                <img src={CardUserIcon} alt="" />
                <span>04/10/1995</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
