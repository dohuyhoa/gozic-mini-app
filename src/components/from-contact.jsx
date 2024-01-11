import React from "react";
import "../css/FromContact.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Config from "../config";
import feedback from "../models/feedback";

const FromContact = (props) => {
    const [product, setProduct] = useState({});
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const navigateTo = useNavigate();
    // const handleOnClickCart = () => {
    //     navigateTo(`/cart`)
    // }
    useEffect(() => {
        setProduct(props.product);
        // //console.log("data: " + JSON.stringify(props.product))
    }, [props.product, product]);

    const handleSubmitFeedback = () => {
        //console.log("submit")
        if (fullname == "" || email == "" || phone == "" || message == "") {
            if ($('#fullname').val() == "") {
                // alert('Vui lòng nhập tên khách hàng')
                $('#fullname').parent().find('.invalid-feedback').show()
                $('#fullname').focus()
                return;
            }
            $('#fullname').parent().find('.invalid-feedback').hide()

            if ($('#phone_number').val() == "") {
                // alert('Vui lòng nhập số điện thoại liên hệ')
                $('#phone_number').parent().find('.invalid-feedback').show()
                $('#phone_number').focus()
                return;
            }
            $('#phone_number').parent().find('.invalid-feedback').hide()
            
            if ($('#email').val() == "") {
                // alert('Vui lòng nhập email khách hàng')
                $('#email').parent().find('.invalid-feedback').show()
                $('#email').focus()
                return;
            }
            $('#email').parent().find('.invalid-feedback').hide()

            if ($('#message').val() == "") {
                // alert('Vui lòng nhập địa chỉ nhận hàng')
                $('#message').parent().find('.invalid-feedback').show()
                $('#message').focus()
                return;
            }
            $('#message').parent().find('.invalid-feedback').hide()

            $(that).prop('disabled', true)
        } else {
            //console.log("submited")
            feedback.firstname = "#";
            feedback.lastname = fullname;
            feedback.phone_number = phone;
            feedback.email = email;
            feedback.message = message;
            feedback.subject = product.title

            feedback.callApi();
            setFullname("");
            setPhone("");
            setEmail("");
            setMessage("");
            alert("Gửi thông tin thành công");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="from-contact">
                        {/* <img src="https://bephoaphat.com/uploads/stores/5/2022/10/8999.png" width="100%" /> */}
                        <img src={product.thumbnail} width="100%" />
                        <div className="title-contact">
                            <div>Nhập thông tin nhận tư vấn</div>
                        </div>
                        <div className="text-contact">
                            <p>
                                Nhận ưu đãi quà tặng 50.000 đ tiền mặt khi đăng ký tư vấn sản phẩm Miễn Phí
                            </p>
                            <p>Đặc biệt nhận ngay thông tin gói triết khấu cao với đối tác đặt hàng số lượng lớn. Chi tiết xin vui lòng liên hệ với chúng tôi.</p>
                        </div>
                        <form className="needs-validation" noValidate>
                            <div className="input-contact">
                                <input className="mb-0 mt-2" id="fullname" type="text" placeholder="Họ và tên" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                <div className="invalid-feedback">Vui lòng nhập họ và tên của bạn</div>
                            </div>
                            <div className="input-contact">
                                <input className="mb-0 mt-2" id="phone_number" type="text" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <div className="invalid-feedback">Vui lòng nhập số điện thoại của bạn</div>
                            </div>
                            <div className="input-contact">
                                <input className="mb-0 mt-2" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback">Vui lòng nhập email của bạn</div>
                            </div>
                            <div className="input-contact">
                                <textarea className="mb-0 mt-2" id="message" name="message" placeholder="Thông tin cần tư vấn" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div className="invalid-feedback">Vui lòng nhập phản hồi của bạn</div>
                            </div>

                            <div className="btn-contact mt-3">
                                <button type="button" className="btn btn-danger" onClick={handleSubmitFeedback}>Nhận quà ngay !</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FromContact;