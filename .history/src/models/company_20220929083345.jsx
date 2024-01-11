import Config from "../config";

class Company {
  accessToken = "";
  uid = "";
  companyId = "";
  companyName = "";

  getCompanyList(thisObj, callback) {
    const PostBody = {
      AccessToken: this.accessToken,
    };
    const RequestMetadata = {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(PostBody),
    };
  }
}

const Company = new Company();

export default Company;
