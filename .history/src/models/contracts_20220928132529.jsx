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

    fetch(Config.API_CONTRACT_LIST);
  }
}
