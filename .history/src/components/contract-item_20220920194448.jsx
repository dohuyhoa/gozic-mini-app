import React from "react";

class ContractItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contract-item col">
        <div className="card">
          <div className="row">
            <div className="col-4">
              <img src="" alt="" className="contract-item-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
