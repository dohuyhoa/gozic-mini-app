const Config = {
  HomeColor: "#111111",
  UserColor: "black",
  API_USER_REGISTER: "https://ziczacvn.com/api/zalo/register",
  API_USER_INFO: "https://ziczacvn.com/api/zalo/info",
  API_USER_UPDATE: "https://ziczacvn.com/api/zalo/update",

  API_NEWS_LIST: "https://ziczacvn.com/api/news/list",
  API_NEWS_TYPE: "https://ziczacvn.com/api/js/news.1.js?ajax=true",
  API_FEEDBACK: "https://ziczacvn.com/feedback",
  API_NEWS_DETAIL: "https://ziczacvn.com/api/news/detail?id=",
  API_DATA_CONFIG: "https://ziczacvn.com/api/js/trans.1.js?ajax=true",
  API_TIMESHEET_VALIDATE: "https://ziczacvn.com/api/timesheet/validate",
  API_TIMESHEET_LIST: "https://ziczacvn.com/api/timesheet/timesheet",
  API_TIMESHEET_CHECKIN: "https://ziczacvn.com/api/timesheet/checkin",

  fetchData: async function(url, postBody) {
    // //console.log(postBody)
    var formBody = [];
    for (var property in postBody) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(postBody[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    // //console.log("formBody: " + formBody)

    var requestMetadata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody,
      json: true,
    };

    var response = await fetch(url, requestMetadata);
    // //console.log("res: " + JSON.stringify(response))
    var data = await response.json();

    return data;
  },
  getData: async function(url) {
    var requestMetadata = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: null,
      json: true,
    };

    var response = await fetch(url, requestMetadata);
    var data = await response.json();

    return data;
  },
  getContent: async function(url) {
    var requestMetadata = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: null,
      json: true,
    };

    var response = await fetch(url, requestMetadata);
    var data = await response.text();

    return data;
  },
  postContent: async function(url, postBody) {
    //console.log(postBody)
    var formBody = [];
    for (var property in postBody) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(postBody[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    //console.log("formBody: " + formBody)

    var requestMetadata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody,
      json: true,
    };

    var response = await fetch(url, requestMetadata);
    // //console.log("res: " + JSON.stringify(response))
    return;
  }
};

export default Config;