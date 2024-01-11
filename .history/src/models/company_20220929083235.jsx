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
  }
}

const Company = new Company();

export default Company;
