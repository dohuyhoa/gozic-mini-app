import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import addIcon from "../static/icons/add-icon.png";
class Contracts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="contract" className="bg-gray-1">
        <div className="container-fluid p-0 bg-white">
          <div className="heading p-3 d-flex border-bottom border-1 border-gray">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="fs-5 me-5"
              type="button"
            ></FontAwesomeIcon>
            <h6 className="fw-600">Thông tin các hợp đồng bảo hiểm</h6>
          </div>
        </div>
        <div className=" mt-2">
          <Link to="/them-hop-dong">
            <div className="add-contract-link color-primary me-2 text-end">
              <span className="d-inline-flex align-self-center me-2">
                Thêm đồng hợp hiểm mới
              </span>
              <div className="d-inline-flex align-self-center">
                <img src={addIcon} alt="" className="add-contract-icon" />
              </div>
            </div>
          </Link>
        </div>
        <div className="contract-list"></div>
      </section>
    );
  }
}

export default Contracts;
