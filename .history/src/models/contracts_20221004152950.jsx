import Config from "../config";
import myUserInfo from "./user-info";
class ContractList {
  accessToken = myUserInfo.accessToken;
  uId = myUserInfo.uId;
  zaloID = myUserInfo.uid;

  language = "";
  insurance = "";
  companyName = "";
  companyLogo = "";
  contractHolderName = "";
  contractCode = "";
  cccd = "";
  phoneNumber = "";
  cardNo = "";
  CUR = "";
  Description = "";
  AnnualLimit = "";
  Claimed = "";
  Claiming = "";
  Remain = "";

  //Contract List
  getContractList(thisObj, callback) {
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

    //Fetch Data
    fetch(Config.API_CONTRACT_LIST, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          this.companyName = data.CompanyName;
          this.companyLogo = data.CompanyLogo;
          this.contractHolderName = data.ContractHolderName;
          this.cccd = data.Cccd;
          this.contractCode = data.ContractCode;
          this.phoneNumber = data.PhoneNumber;
          this.cardNo = data.cardNo;
          callback(thisObj, data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  //Contract Benefit
  getContractBenefit(thisObj, callback) {
    const postBody = {
      AccessToken: this.accessToken,
      CardNo: this.cardNo,
      ZaloID: this.zaloID,
      Insurance: this.insurance,
      Language: this.language,
    };
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };

    //Fetch Data
    fetch(Config.API_CONTRACT_BENEFIT, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          this.CUR = data.CUR;
          this.Description = data.Description;
          this.AnnualLimit = data.AnnualLimit;
          this.Claimed = data.Claimed;
          this.Claiming = data.Claiming;
          this.Remain = data.Remain;

          callback(thisObj, data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

const myContractList = new ContractList();

export default myContractList;
