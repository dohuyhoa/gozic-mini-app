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
          <div className="row">
            <div className="col-4">
              <img src={AceLogo} alt="" className="contract-item-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
