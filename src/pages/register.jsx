import React from 'react';
import { Link } from 'react-router-dom';

import { Page } from 'zmp-ui';

import myUserInfo from "../models/user-info";

import logoSlogan from '../static/photos/logo-slogan.png';

import "../css/register.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
  }

  registerUser(event) {
    event.preventDefault();

    myUserInfo.name = event.target.name.value
    myUserInfo.email = event.target.email.value

    myUserInfo.register();
  }

  render() {
    return (
      <Page>
        <section id="register">
          <div className="container">

            <div className="logo-slogan col-8 mx-auto justify-content-center">
              <div className="img-frame">
                <img src={logoSlogan} alt="" />
              </div>
            </div>

            <div className="row">
              <form method="post" onSubmit={this.registerUser}>
                <h5 className="fw-bold color-primary px-3 mb-3">Đăng ký user mới</h5>
                <div className="mb-5">
                  <input name="name" type="text" className="form-control mb-2" placeholder="Tên" required defaultValue={myUserInfo.name}/>
                  <input name="email" type="email" className="form-control mb-2" placeholder="Email" required defaultValue={myUserInfo.email}/>
                  <input type="text" className="form-control mb-2 bg-gray-1" placeholder="ID ZALO" readOnly defaultValue={myUserInfo.uId}/>
                </div>
                <div className="mb-3">
                  <button className="btn-gozic bg-primary text-white">
                    Đăng ký
                  </button>
                </div>

              </form>
            </div>

          </div>
        </section>
      </Page>
    );
  }
}

export default RegisterPage;
