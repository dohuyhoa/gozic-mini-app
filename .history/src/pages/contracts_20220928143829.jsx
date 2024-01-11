import React from "react";
import { Link } from "react-router-dom";
import addIcon from "../static/icons/add-icon.png";

import ContractItem from "../components/contract-item";
// import { ContractList } from "../models/data";
import "../css/contract.css";
import { Page } from "zmp-ui";

import PageHeading from "../components/page-heading";

import myContractList from "../models/contracts";

class Contracts extends React.Component {
  constructor(props) {
    super(props);
    this.deleteContract = this.deleteContract.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.state = {
      listContract: [],
    };
  }
  componentDidMount() {}
  onSuccess(thisObj, data) {
    console.log(data);
    this.setState({ listContract: [...data] });
  }
  deleteContract(contract) {
    if (!contract) return;
    let listContractCoppy = [...this.state.listContract];
    listContractCoppy = listContractCoppy.filter(
      (item) => item.cardNo !== contract.cardNo
    );
    this.setState({ listContract: listContractCoppy });
  }
  render() {
    return (
      <Page className="bg-gray-1">
        <section id="contract" className="bg-gray-1">
          <PageHeading title="Thông tin các hợp đồng bảo hiểm"></PageHeading>

          <div className="container">
            <Link to="/add-contract">
              <div className="add-contract-link color-primary me-2 text-end">
                <span className="me-2">Thêm đồng hợp hiểm mới</span>
                <img src={addIcon} alt="" className="add-contract-icon mb-1" />
              </div>
            </Link>

            <div className="contract-list row-cols-1 m-0 mt-2">
              {this.state.listContract &&
                this.state.listContract.length > 0 &&
                this.state.listContract.map((contract) => {
                  return (
                    <>
                      <ContractItem
                        contract={contract}
                        deleteContract={this.deleteContract}
                      />
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default Contracts;
