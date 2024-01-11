import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
import PaperIcon from "../static/icons/paper-icon.png";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleMouseDown(event, key) {
    let id = "#" + key;
    let contractItem = document.querySelector(id);
    console.log(contractItem);
    let overlay = document.querySelector(".overlay");
    overlay.classList.toggle("hidden");
  }
  render() {
    return (
      <div
        className="contract-item col p-3 ps-4 pe-4"
        id={this.props.id}
        key={this.props.key}
      >
        <div className="overlay"></div>
        <div
          className="card"
          onMouseDown={(event, key) =>
            this.handleMouseDown(event, this.props.id)
          }
        >
          <div className="row p-3 d-flex align-items-center ">
            <div className="col-4">
              <div className="img-frame">
                <img
                  src={this.props.thumbnail}
                  alt=""
                  className="contract-item-thumbnail"
                />
              </div>
            </div>
            <div className="col-8 contract-item-details d-flex flex-column justify-content-between">
              <div className="contract-brand-name color-primary">
                {this.props.brand}
              </div>
              <div className="contract-owner fw-600">{this.props.owner}</div>
              <div className="contract-date d-flex align-items-center">
                <img src={CardUserIcon} alt="" />
                <span className="ms-2">{this.props.date}</span>
              </div>
            </div>
          </div>
          <div className="row p-3 ">
            <div className="contract-btn-details color-primary d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-3">
                  Chi Tiết Thông Tin Bảo Hiểm
                </span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon"
              />
            </div>
          </div>
          <div className="seperator border-bottom border-2 border-gray"></div>

          <div className="row p-3">
            <div className="contract-btn-details color-primary d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-3">Quyền lợi</span>
              </div>
              <img src={PaperIcon} alt="" className="ms-auto arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
