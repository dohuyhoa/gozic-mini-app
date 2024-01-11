import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, Input } from "zmp-ui";
import PageHeading from "../components/page-heading";
import myUserInfo from "../models/user-info";
import "../css/user-info.css";
import Footer from "../components/footer";
import LoadingModal from "../components/loading-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";

const UserInfo = () => {
    const [score, setScore] = useState(0);
    const [isModal, setShowModal] = useState(false);

    const changeUpdateInfo = (e) => {
        myUserInfo[e.target.name] = e.target.value
    }

    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false)

    const handleSubmitUserInfo = () => {
        myUserInfo.update();
        setShowModal(false)
    }

    return (
        <Page>
            <PageHeading title="Thông tin tài khoản"></PageHeading>
            <Modal
                show={isModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={true}
                centered
            >
                <Modal.Header closeButton style={{backgroundColor: 'white'}}>
                    <Modal.Title>CẬP NHẬT THÔNG TIN</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: 'white'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Input clearable="true" name="name" defaultValue={myUserInfo.name} placeholder="Nhập họ tên" onChange={changeUpdateInfo}></Input>
                        <br/>
                        <Input clearable="true" name="email" defaultValue={myUserInfo.email} placeholder="Nhập email" onChange={changeUpdateInfo}></Input>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: 'white'}}>
                    <Button variant="secondary" onClick={handleCloseModal}>Huỷ</Button>
                    <Button variant="primary" onClick={handleSubmitUserInfo}>Lưu Thay Đổi</Button>
                </Modal.Footer>
            </Modal>
            <section id="user-info" className="bg-gray-1">
                <div className="brief d-flex align-items-end mb-4" style={{ backgroundImage:"url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg')" }}>
                    <div className="w-100 p-4 text-light">
                        <div className="p-1 ms-4" onClick={() => handleShowModal()}>
                            <h1 className="fw-bold">{myUserInfo.name}</h1>
                        </div>
                        <div className="p-1 ms-4">
                            Hạng: <span className="p-1 rounded" style={{ backgroundColor:"gold", color:"darkgoldenrod" }}>Đồng</span>
                        </div>
                        <div className="p-1">
                            <div className="progress p-1 position-relative" style={{ height:"fit-content", borderRadius:"36px" }}>
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width:"25%", height:"24px", borderRadius:"36px", background:'linear-gradient(90deg, rgba(255,233,0,1) 0%, rgba(255,0,0,1) 100%)' }}></div>
                                <div className="position-absolute d-flex align-items-center ps-2" style={{ height:"24px" }}>
                                    <span className="col-3 px-2 fw-bolder" style={{ fontSize:"medium", color:"white" }}>{score.toLocaleString('vi-VN')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container row p-0 m-0">
                    <div className="col bg-white mx-3 p-2 rounded">
                        <div className="mb-1 py-1 ps-2 fw-bold" onClick={handleShowModal}>
                            <p style={{ fontSize:"large" }}>{myUserInfo.name}</p>
                        </div>

                        <div className="mb-1 py-1 ps-2" onClick={handleShowModal}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <small>&nbsp;{myUserInfo.email}</small>
                        </div>
                        <div className="mb-1 py-1 ps-2">
                            <FontAwesomeIcon icon={faContactCard} />
                            <small>&nbsp;{myUserInfo.phoneNumber}</small>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </Page>
    )
}

export default UserInfo;