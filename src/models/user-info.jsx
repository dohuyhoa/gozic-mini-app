import api from "zmp-sdk";

import Config from "../config";

import textEng from "../i18n/en";
import textVie from "../i18n/vi";

class UserInfo {
  navigateTo = null;

  accessToken = "";
  uId = "";
  name = "";
  birthday = "";
  gender = "";
  avatar = "";
  isRegistered = false;
  phoneNumber = "";
  email = "";

  language = "";
  dataText = {};

  max = 3;
  count = 0;
  isNextPage = false;

  async auth() {
    const postBody = {
      AccessToken: this.accessToken,
      ZaloId: this.uId
    };

    const data = await Config.fetchData(Config.API_USER_INFO, postBody);

    if (data.status > 0) {
      this.name = data.name;
      this.birthday = data.birthday;
      this.gender = data.gender;
      this.phoneNumber = data.phoneNumber;
      this.email = data.email;
      if (this.avatar == null || this.avatar == "") {
        this.avatar = "https://ziczacvn.com/uploads/stores/2/2022/10/user.png"
      }
      this.isRegistered = true;
      //console.log(this)
    }
    this.verifyPhone();
  }

  async register() {
    if(this.phoneNumber == null || this.phoneNumber == "") {
      this.phoneNumber = this.uId
    }

    if(this.name == null || this.name == "") {
      this.name = this.phoneNumber
    }

    if(this.email == null || this.email == "") {
      this.email = this.phoneNumber + "@gozic.vn"
    }

    const postBody = {
      AccessToken: this.accessToken,
      ZaloId: this.uId,
      Name: this.name,
      Birthday: this.birthday,
      Gender: this.gender,
      Avatar: this.avatar,
      Email: this.email,
      PhoneNumber: this.phoneNumber
    };
    const data = await Config.fetchData(Config.API_USER_REGISTER, postBody);

    //console.log("REGISTER USER")
    //console.log(postBody)
    //console.log(data)

    if (data.status > 0) {
      //Dang ky thanh cong
      this.isRegistered = true
      this.navigateTo("/home");
    }
  }

  login() {
    api.login({
      success: () => {
        // login thành công
        // xử lý khi gọi api thành công
        api.getAccessToken({
          success: (accessToken) => {
            // xử lý khi gọi api thành công
            this.accessToken = accessToken;
            //console.log(this);
            this.checkLogin();
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            //console.log(error);
          },
        });

        api.getUserInfo({
          success: (data) => {
            // xử lý khi gọi api thành công
            const { userInfo } = data;

            this.uId = userInfo.id;
            if (this.name == undefined || this.name == null)
              this.name = userInfo.name;
            if (this.birthday == undefined || this.birthday == null)
              this.birthday = userInfo.birthday;
            if (this.avatar == undefined || this.avatar == null)
              this.avatar = userInfo.avatar;
            if (this.gender == undefined || this.gender == null)
              this.gender = userInfo.gender;

            //console.log(this);
            this.checkLogin();
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            //console.log(error);
          },
        });

        // api.getStorage({
        //   keys: ['follow'],
        //   success: (data) => {
        //     const { follow } = data;
        //     if(follow === undefined || follow != 1) {
        //       api.followOA({
        //         id: '3718285525343489552',
        //         success: (res) => {
        //           api.setStorage({
        //             data: {
        //               follow: 1
        //             },
        //             success: (data) => {
        //               // xử lý khi gọi api thành công
        //               const { errorKeys } = data;
        //             },
        //             fail: (error) => {
        //               // xử lý khi gọi api thất bại
        //               //console.log(error);
        //             }
        //           });

        //         },
        //         fail: (err) => {}
        //       });
        //     }
        //   },
        //   fail: (error) => {
        //     // xử lý khi gọi api thất bại
        //     //console.log(error);
        //   }
        // });
      },
      fail: (error) => {
        // login thất bại
        //console.log(error);
      },
    });

    // hoặc
    const autoLogin = async () => {
      try {
        await api.login({});
        // login thành công
        const accessToken = await api.getAccessToken({});
        this.accessToken = accessToken;
        this.checkLogin();

        const { userInfo } = api.getUserInfo({});

        this.uId = userInfo.id;
        this.name = userInfo.name;
        this.birthday = userInfo.birthday;
        this.avatar = userInfo.avatar;
        this.gender = userInfo.gender;
        if (this.avatar == null || this.avatar == "") {
          this.avatar = "https://ziczacvn.com/uploads/stores/2/2022/10/user.png"
        }

        //console.log(this);
        this.checkLogin();

        verifyPhone();
      } catch (error) {
        // login thất bại
        //console.log(error);
      }
    };
  }

  verifyPhone() {
    if (!this.isRegistered) {
      console.log("2. Phone")
      api.getPhoneNumber({
        success: (data) => {
          // xử lý khi gọi api thành công
          console.log("2. Phone - success")
          const { number } = data;
          this.phoneNumber = number;
          console.log("2. Phone - success " + number)
          this.checkLogin();
        },
        fail: (error) => {
          // xử lý khi gọi api thất bại
          // console.log(error);
          console.log("2. Phone - error")
          this.phoneNumber = "";
          this.checkLogin();
        },
      });
    } else {
      console.log("2. Phone - next")
      this.checkLogin();
    }
  }

  checkLogin() {
    this.count++;
    console.log(this.count + ", " + this.max);
    if (this.count == this.max && !this.isNextPage) {
      //Get full info
      console.log("Next screen");
      this.isNextPage = true;
      if (this.isRegistered) {
        console.log("Next isRegistered");
        this.navigateTo("/home");
      } else {
        console.log("Next register");
        // this.navigateTo("/register");
        this.register()
      }
    } else if (this.count == this.max - 1 && this.uId != "") {
      console.log("Next auth");
      this.auth();
    }
  }

  verifyLogin() {
    if (this.count >= this.max && !this.isNextPage) {
      //Get full info
      //console.log("Next screen");
      this.isNextPage = true;
      if (this.isRegistered) {
        this.navigateTo("/home");
      } else {
        // this.navigateTo("/register");
        this.register()
      }
    } else {
      //console.log('Skip....... > ' + this.count + ', ' + this.max + ', nextPage > ' + this.isNextPage)
    }
  }

  async update() {
    const postBody = {
      AccessToken: this.accessToken,
      ZaloId: this.uId,
      Name: this.name,
      Birthday: this.birthday,
      Gender: this.gender,
      Avatar: this.avatar,
      Email: this.email,
      PhoneNumber: this.phoneNumber
    };

    const data = await Config.fetchData(Config.API_USER_UPDATE, postBody);

    //console.log("UPDATE USER INFO")
    //console.log(postBody)
    //console.log(data)
  }

  getLanguage() {
    const { version, apiVersion, zaloVersion, platform, language } = api.getSystemInfo();
    // this.language = language;

    switch (language) {
      case "vi-VN":
        this.language = 0;
        this.dataText = textVie;
        break;
      case "en-US":
        this.language = 1;
        this.dataText = textEng;
        break;
      default:
        this.language = 0;
        this.dataText = textVie;
        break;
    }
  }
}

const myUserInfo = new UserInfo();

export default myUserInfo;