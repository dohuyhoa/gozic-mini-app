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

    fetch(Config.API_COMPANY_LIST, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 1) {
          console.log(data);
          this.companyId = data.companyId;
          this.companyName = data.companyName;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

const Company = new Company();

export default Company;
