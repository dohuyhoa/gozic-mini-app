import Config from "../config";

class ContractList {
  accessToken = "";
  uId = "";
  companyName = "";
  companyLogo = "";
  contractHolderName = "";
  contractCode = "";
  cccd = "";
  phoneNumber = "";
  cardNo = "";

  static getContractList(thisObj, callback) {
    const postBody = {
      AccessToken: this.accessToken,
    };
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postBody),
    };
    fetch(Config.API_CONTRACT_LIST, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
}

const ContractList = new ContractList();

export default ContractList;
