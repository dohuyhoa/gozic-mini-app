import api from "zmp-sdk";

import Config from "../config";

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

  max = 3;
  count = 0;
  isNextPage = false;

  auth() {
    const postBody = {
      AccessToken: this.accessToken,
      ZaloId: this.uId,
    };
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };

    fetch(Config.API_USER_INFO, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == 1) {
          this.name = data.name;
          this.birthday = data.birthday;
          this.gender = data.gender;
          this.phoneNumber = data.phoneNumber;
          this.email = data.email;
          this.isRegistered = true;
        }

        this.login();
      });
  }

  register() {
    const postBody = {
      AccessToken: this.accessToken,
      ZaloId: this.uId,
      Name: this.name,
      Birthday: this.birthday,
      Gender: this.gender,
      Avatar: this.avatar,
      Email: this.email,
      PhoneNumber: this.phoneNumber,
    };
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };

    fetch(Config.API_USER_REGISTER, requestMetadata)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == 1) {
          //Dang ky thanh cong
          this.navigateTo("/home");
        }
      });
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
            console.log(this);
            this.checkLogin();
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
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

            console.log(this);
            this.checkLogin();
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
          },
        });

        if (!this.isRegistered) {
          api.getPhoneNumber({
            success: (data) => {
              // xử lý khi gọi api thành công
              const { number } = data;
              this.phoneNumber = number;
              this.checkLogin();
            },
            fail: (error) => {
              // xử lý khi gọi api thất bại
              console.log(error);
            },
          });
        } else {
          this.checkLogin();
        }
      },
      fail: (error) => {
        // login thất bại
        console.log(error);
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

        console.log(this);
        this.checkLogin();

        if (!this.isRegistered) {
          const { number } = await api.getPhoneNumber({});
          this.phoneNumber = number;
        }

        this.checkLogin();
      } catch (error) {
        // login thất bại
        console.log(error);
      }
    };
  }

  checkLogin() {
    this.count++;
    console.log(this.count + ", " + this.max);
    if (this.count == this.max && !this.isNextPage) {
      //Get full info
      console.log("Next screen");
      this.isNextPage = true;
      if (this.isRegistered) {
        this.navigateTo("/home");
      } else {
        this.navigateTo("/register");
      }
    }
  }

  verifyLogin() {
    if (this.count == this.max && !this.isNextPage) {
      //Get full info
      console.log("Next screen");
      this.isNextPage = true;
      if (this.isRegistered) {
        this.navigateTo("/home");
      } else {
        this.navigateTo("/register");
      }
    }
  }
}

const myUserInfo = new UserInfo();

export default myUserInfo;
