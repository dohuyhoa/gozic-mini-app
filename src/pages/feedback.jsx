import React, { useEffect, useState } from 'react'
import { Page } from 'zmp-ui';
import PageHeading from '../components/page-heading';
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
import LoadingModal from '../components/loading-popup';
import dataConfig from '../models/data-config';

export default function Feedback() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [plugin, setPlugin] = useState([])
    const [loading, setLoading] = useState(false)
    const navigateTo = useNavigate();

    useEffect(() => {
        //console.log('testing ...')
        async function fetchData() {
          setLoading(true);
          
          try {
            let data = await dataConfig.callApi();
            setPlugin(data)
          } catch (err) {
            //console.log(err)
          }
    
          setLoading(false);
        }
        fetchData();
      }, []);

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
            feedback.subject = "Liên hệ";

            feedback.callApi();
            setFullname("");
            setPhone("");
            setEmail("");
            setMessage("");
            alert("Gửi thông tin thành công");
            navigateTo("/home")
        }
    }

    return (
        <Page>
            <PageHeading />
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="m-3">
                            <div className="title-contact">
                                <div style={{textTransform: 'uppercase'}}>Gửi phản hồi cho chúng tôi</div>
                            </div>
                            {/* <div className="text-contact">
                                <p>
                                    Nhận ưu đãi quà tặng 50.000 đ tiền mặt khi đăng ký tư vấn sản phẩm Miễn Phí
                                </p>
                                <p>Đặc biệt nhận ngay thông tin gói triết khấu cao với đối tác đặt hàng số lượng lớn. Chi tiết xin vui lòng liên hệ với chúng tôi.</p>
                            </div> */}
                            <form className="needs-validation" noValidate>
                                <div className="input-contact">
                                    <input className="mb-0 mt-2 p-3" id="fullname" type="text" placeholder="Họ và tên" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                    <div className="invalid-feedback">Vui lòng nhập họ và tên của bạn</div>
                                </div>
                                <div className="input-contact">
                                    <input className="mb-0 mt-2 p-3" id="phone_number" type="text" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <div className="invalid-feedback">Vui lòng nhập số điện thoại của bạn</div>
                                </div>
                                <div className="input-contact">
                                    <input className="mb-0 mt-2 p-3" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="invalid-feedback">Vui lòng nhập email của bạn</div>
                                </div>
                                <div className="input-contact">
                                    <textarea className="mb-0 mt-2 p-3" id="message" name="message" placeholder="Thông tin phản hồi" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    <div className="invalid-feedback">Vui lòng nhập phản hồi của bạn</div>
                                </div>

                                <div className="btn-contact mt-3 w-100">
                                    <button type="button" className="btn btn-danger w-100" onClick={handleSubmitFeedback}>Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-4' style={{ marginBottom: "100px" }}>
                <div dangerouslySetInnerHTML={{ __html: plugin.feedback }}></div>
            </div>
            <LoadingModal show={loading} />
        </Page>
    )
}
