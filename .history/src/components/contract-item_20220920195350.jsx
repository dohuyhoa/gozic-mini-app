import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
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
            <div className="col-8 contract-item-details">
              <div className="contract-brand-name">Bảo hiểm Chubb Life</div>
              <div className="contract-owner">Bảo hiểm Chubb Life</div>
              <div className="contract-date">Bảo hiểm Chubb Life</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
