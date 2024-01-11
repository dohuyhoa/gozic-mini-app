import React from "react";
import AceLogo from "../static/photos/home/brands/ace-logo.png";
import CardUserIcon from "../static/icons/card-user-icon.png";
import CardIcon from "../static/icons/card-logo.png";
import DoubArrowDownIcon from "../static/icons/doub-arrow-down.png";
import PaperIcon from "../static/icons/paper-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ContractModal from "./contract-modal";
import FormDetails from "./form-details";
import FormQuyenLoi from "./form-quyen-loi";
class ContractItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    this.state = {
      activeContract: null,
      showModal: false,
      activeFormDetails: null,
      checkDetail: false,
      activeFormQuyenLoi: null,
      toggleFormDetails: false,
      toggleFormQuyenLoi: false,
    };
  }

  //MouseDown
  handleMouseDown(event, key) {
    let id = "#" + key;
    let overlay = document.querySelector(".overlay");
    let card = document.querySelector(id);
    card.style.border = "1px solid #164997";
    card.style.zIndex = 10;
    overlay.classList.add("active");
    card.firstChild.classList.remove("hidden");
  }

  //Open Modal
  // handleOpenModal(event, { id, owner, brand, number }) {
  //   this.setState({
  //     activeContract: {
  //       id: this.props.id,
  //       owner: this.props.owner,
  //       brand: this.props.brand,
  //       number: this.props.number,
  //     },
  //     showModal: true,
  //   });
  // }

  //toggle details

  handleClickToggleDetails(event, { id, cccd, seri, phone }) {
    this.setState({
      activeFormDetails: {
        id: id,
        cccd: cccd,
        seri: seri,
        phone: phone,
      },
    });

    if (this.state.activeFormDetails !== null) {
      let form = document.querySelector(".form-details");
      form.classList.toggle("form-details-toggle");
      this.setState({
        activeFormDetails: null,
      });
    }
  }

  handleClickToggleQuyenLoi({ id }) {
    this.setState({
      activeFormQuyenLoi: {
        id: id,
      },
    });
    if (this.state.activeFormQuyenLoi !== null) {
      let form = document.querySelector(".form-quyen-loi");
      form.classList.toggle("form-quyen-loi-toggle");
      this.setState({
        activeFormQuyenLoi: {
          id: id,
        },
      });
    }
  }

  handleToggleFormDetails(event, { id, cccd, seri, phone }) {
    this.setState({
      toggleFormDetails: !this.state.toggleFormDetails,
      toggleFormQuyenLoi: false,
    });
    this.setState({
      activeFormDetails: {
        id: id,
        cccd: cccd,
        seri: seri,
        number: phone,
      },
    });
  }
  handleToggleFormQuyenLoi(event) {
    this.setState({
      toggleFormDetails: false,
      toggleFormQuyenLoi: !this.state.toggleFormQuyenLoi,
    });
    this.setState({
      activeFormQuyenLoi: null,
    });
  }

  render() {
    let contract = this.props;
    console.log(contract);
    return (
      <div className="contract-item col p-3 ps-4 pe-4" key={this.props.id}>
        {/* {this.state.showModal && this.state.activeContract !== null ? (
          <ContractModal contract={this.state.activeContract} />
        ) : null} */}
        <div className="card" id={this.props.id}>
          <div className="delete-icon hidden">
            <FontAwesomeIcon
              icon={faCircleXmark}
              type="button"
            ></FontAwesomeIcon>
          </div>
          <div
            className="p-3 d-flex align-items-center"
            onMouseDown={(event) => this.handleMouseDown(event, this.props.id)}
          >
            <div className="col-4">
              <div className="img-frame">
                <img
                  src={this.props.thumbnail}
                  alt=""
                  className="contract-item-thumbnail"
                />
              </div>
            </div>
            <div className="col-8 contract-item-details d-flex flex-column justify-content-between ms-2">
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
          <div
            className={`my-3 btn-toggle ${
              this.state.toggleFormDetails ? "is-active" : ""
            }`}
          >
            {this.state.activeFormDetails != null ? (
              <FormDetails
                form={this.state.activeFormDetails}
                toggle={this.state.toggleFormDetails}
              />
            ) : null}
            <div
              className="contract-btn-details color-primary d-flex align-items-center px-3"
              type="button"
              onClick={(event) =>
                this.handleToggleFormDetails(event, { contract })
              }
            >
              <div className="d-flex align-items-center justify-content-between">
                <img src={CardIcon} alt="" />
                <span className="text-uppercase fw-600 ms-2">
                  Chi Tiết Thông Tin Bảo Hiểm
                </span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon arrow-icon-rotate"
              />
            </div>
          </div>
          <div className="seperator border-bottom border-2 border-gray mx-3"></div>

          <div
            className={`p-3 btn-toggle ${
              this.state.toggleFormQuyenLoi ? "is-active" : ""
            }`}
          >
            {this.state.activeFormQuyenLoi !== null &&
            this.state.toggleFormQuyenLoi ? (
              <FormQuyenLoi />
            ) : null}
            <div
              className="contract-btn-details color-primary d-flex align-items-center "
              type="button"
              onClick={(event) => this.handleToggleFormQuyenLoi(event)}
            >
              <div className="d-flex align-items-center justify-content-between">
                <img src={PaperIcon} alt="" />
                <span className="text-uppercase fw-600 ms-2">Quyền lợi</span>
              </div>
              <img
                src={DoubArrowDownIcon}
                alt=""
                className="ms-auto arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
