import React from "react";
import { Page } from "zmp-ui";
import PageHeading from "../components/page-heading";
import "../css/contact.css";
import logoImg from "../static/photos/logo-bep.png";
import Footer from "../components/footer";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <PageHeading />
        <section id="contact">
          <div className="googlemap container-fluid py-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.6967829249315!2d106.64820847225867!3d10.784606208632818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eb6273171c3%3A0x4f0e1237bc8fba9!2zcGjGsOG7nW5nIDgsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1665993339584!5m2!1svi!2s"></iframe>

            <div className="row">
              <div id="content" className="col-sm-12">
                <div className="position-display">
                  <div className="content_info add_contact">
                    <div className="row content-column">
                      <div className="item-content col-md-3">
                        <div className="item-image">
                          <img src={logoImg} />
                        </div>
                      </div>
                      <div className="item-content col-md-3">
                        <div className="item-description">
                          Địa chỉ: 950 Lạc Long Quân, Phường 8, Quận Tân Bình,
                          TP Hồ Chí Minh.
                        </div>
                      </div>
                      <div className="item-content col-md-3">
                        <div className="item-description">
                          <div className="item-title">
                            Email: nguyenlien30121987@gmail.com
                          </div>
                          <div className="item-description">
                            Hotline: 0987.023.995
                          </div>
                        </div>
                      </div>
                      <div className="item-content col-md-3">
                        <div className="item-description">
                          <div className="item-title">Thứ 2-6: 7h-21h</div>
                          <div className="item-description">
                            Thứ 7-Chủ nhật: 8h-22h
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <fieldset>
                    <div className="row row-form">
                      <div className="title">
                        <h3>Gửi Phản Hồi:</h3>
                      </div>
                      <div className="col-md-7">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group pe-2">
                              <label className="control-label p-b-2 ">
                                Họ:
                              </label>
                              <input
                                type="text"
                                name="lastname"
                                className="form-control"
                                id="input-name"
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group ps-2">
                              <label className="control-label p-b-2 ">
                                Tên:
                              </label>
                              <input
                                type="text"
                                name="lastname"
                                className="form-control"
                                id="input-name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label p-b-2 ">
                            Địa Chỉ Email:
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            id="input-name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="control-label p-b-2 ">
                            Số Điện Thoại:
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            id="input-name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="control-label p-b-2 ">
                            Tiêu Đề:
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            id="input-name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="control-label p-b-2 ">
                            Nội Dung:
                          </label>
                          <textarea
                            className="form-control text-description"
                            name="message"
                            rows={10}
                            id="input-enquiry"
                          ></textarea>
                        </div>
                        <div className="buttons row">
                          <div className="pull-right me-auto text-end border border-0 border-white rounded-0">
                            <input
                              className="btn btn-danger"
                              type="submit"
                              value="Gửi"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="contact-down col-md-5">
                        <div className="heading">
                          <h2>
                            Bếp Hòa Phát - mang công nghệ châu âu vào không gian
                            bếp nhà bạn
                          </h2>
                        </div>
                        <p className="p-description">
                          Hãy liên hệ cho chúng tôi ngay,nếu như bạn gặp bất cứ
                          khó khăn gì trong quá trình sử dụng.
                        </p>
                        <p className="p-description">
                          Hãy gửi cho chúng tôi những thông tin góp ý của bạn về
                          sản phẩm và chất lượng phục vụ của chúng tôi.
                        </p>
                        <p className="p-description-last">
                          24/7-Luôn nỗ lực vì chất lượng sản phẩm.
                        </p>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />

      </Page>
    );
  }
}

export default Contact;
