import React from "react";
import { Link } from "react-router-dom";

import { Page } from "zmp-ui";

import PageHeading from "../components/page-heading";

import myUserInfo from "../models/user-info";

import "../css/user-info.css"
import "../css/user-update.css"

class UserUpdate extends React.Component {
    constructor(props) {
        super(props);
    }

    updateUser(event) {
        event.preventDefault();

        myUserInfo.name = event.target.name.value
        myUserInfo.birthday = event.target.birthday.value
        myUserInfo.gender = event.target.gender.value
        myUserInfo.email = event.target.email.value
        myUserInfo.phoneNumber = event.target.phoneNumber.value

        myUserInfo.update();
    }

    render() {
        return (
            <Page>
                <section id="user-update" className="bg-gray-1">
                    <PageHeading title="Cập nhật Thông tin Tài khoản"></PageHeading>

                    <div className="container">
                        <div className="col-6 mx-auto mb-5">
                            <div className="ratio-1x1">
                                <img src={myUserInfo.avatar} alt="" className="w-100 rounded rounded-circle" />
                            </div>
                        </div>

                        <form action="" onSubmit={this.updateUser}>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Họ và tên:</h6>
                                <input name="name" type="text" defaultValue={myUserInfo.name} required/>
                            </div>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Ngày sinh:</h6>
                                <input className="form-control" name="birthday" type="date" defaultValue={myUserInfo.birthday} required />
                            </div>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Giới tính:</h6>
                                <select className="form-control" name="gender" type="text" defaultValue={myUserInfo.gender} required>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Email:</h6>
                                <input name="email" type="email" defaultValue={myUserInfo.email} required />
                            </div>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Số điện thoại:</h6>
                                <input name="phoneNumber" type="tel" defaultValue={myUserInfo.phoneNumber} required />
                            </div>

                            <div className="gozic-info-card mb-3">
                                <h6 className="title">Zalo ID:</h6>
                                <input name="zaloId" type="text" defaultValue={myUserInfo.uId} disabled/>
                            </div>

                            <div className="form-group d-flex mb-4">
                                <button className="btn-gozic btn-blue me-3" type="submit">Lưu</button>

                                <Link to={-1} className="btn-gozic btn-white text-center">Hủy</Link>

                            </div>

                        </form>

                    </div>

                </section>

            </Page>
        )
    }
}



export default UserUpdate;