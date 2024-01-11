import Config from "../config";

class Company {
  accessToken = "";
  uid = "";
  companyId = "";
  companyName = "";

  getCompanyList(thisObj, callback) {
    const postBody = {
      AccessToken: this.accessToken,
    };
    const requestMetadata = {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(postBody),
    };
  }
}

const Company = new Company();

export default Company;
