import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import api from 'zmp-sdk';

import { useEffect, useState } from "react";
import PageHeading from "../components/page-heading";
import Banner from "../components/banner";
import Footer from "../components/footer";
import SlideNews from "../components/slide-news";

import LoadingModal from "../components/loading-popup";

import myUserInfo from "../models/user-info";
import tsValidate from "../models/timesheet-validate";

const HomePage = () => {
  const navigateTo = useNavigate();
  myUserInfo.navigateTo = navigateTo;

  const [loading, setLoading] = useState({ loading: false });
  const [total, setTotal] = useState('0');
  const [timesheets, setTimesheets] = useState([]);
  const [checkin, setCheckin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      console.log('step 0')

      if(tsValidate.latitude == '') {
        console.log('step 1')
        api.getLocation({
          success: async (data) => {
            // xử lý khi gọi api thành công
            const { latitude, longitude } = data;
            tsValidate.latitude = latitude
            tsValidate.longitude = longitude;

            console.log('step 2')
      
            await init()
          },
          fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
            setLoading(false)
          }
        });
      } else {
        await init()
      }
    }
    fetchData();
  }, []);

  const init = async () => {
    await tsValidate.callApi()
    if(tsValidate.status == '1' && !tsValidate.checkin) {
      setCheckin(true)
    } else {
      setCheckin(false)
    }
    console.log('step 3')

    let data = await tsValidate.callApiList()
    setTimesheets(data)

    //console.log(data)

    let total = 0
    let item;
    for(item of data) {
      total += item.duration
    }
    setTotal(total+"")

    setLoading(false)
  }

  const handleSubmit = async () => {
    tsValidate.checkin = true
    setCheckin(false)

    setLoading(true)

    await tsValidate.callApiCheckin()

    let data = await tsValidate.callApiList()
    setTimesheets(data)

    //console.log(data)
    let total = 0
    let item;
    for(item of data) {
      total += item.duration
    }
    setTotal(total+"")

    setLoading(false)
  }

  return (
    <Page>
      <section id="home" className="bg-light">
        <PageHeading />
        
        <div className="container row p-0 m-0 mb-3">
          <div className="col bg-white mx-3 p-2 rounded">
            <button style={{'display': checkin?'':'none'}} type="button" onClick={handleSubmit} className="btn btn-lg btn-warning btn-lg-block w-100 py-2 px-3">
              Chấm Công
            </button>
          </div>
        </div>

        <div className="container row p-0 m-0 mb-3" style={{'display': total > 0?'':'none'}}>
          <div className="col bg-white mx-3 p-2 rounded">
            <div className="mb-1 py-1 ps-2 fw-bold">
                <p style={{ fontSize:"large" }}>Tổng thời gian: {total} giờ</p>
            </div>
          </div>
        </div>

        <div className="container row p-0 m-0 mb-3" style={{'display': timesheets.length == 0?'':'none'}}>
          <div className="col bg-white mx-3 p-2 rounded">
            <div className="mb-1 py-1 ps-2 fw-bold">
                <p style={{ fontSize:"large" }}>Chức năng chỉ sử dụng cho nhân viên công ty Gozic .,JSC</p>
            </div>
          </div>
        </div>

        <div className="container row p-0 m-0 mb-3" style={{'display': timesheets.length == 0?'':'none'}}>
            <div className="col bg-white mx-3 p-2 rounded">
                <div className="mb-1 py-1 ps-2">
                    <p style={{ fontSize:"large" }}>Thời gian vào: 08:00 30/01/2023</p>
                </div>

                <div className="mb-1 py-1 ps-2">
                  <p style={{ fontSize:"large" }}>Thời gian ra: 17:00 30/01/2023</p>
                </div>
                <div className="mb-1 py-1 ps-2">
                  <p style={{ fontSize:"large" }}>Tổng thời gian: 8 giờ</p>
                </div>
            </div>
        </div>

        {timesheets && timesheets.length > 0 && timesheets.map((item, index) => {
          return (
            <div className="container row p-0 m-0 mb-3">
                <div className="col bg-white mx-3 p-2 rounded">
                    <div className="mb-1 py-1 ps-2">
                        <p style={{ fontSize:"large" }}>Thời gian vào: {item.checkin}</p>
                    </div>

                    <div className="mb-1 py-1 ps-2">
                      <p style={{ fontSize:"large" }}>Thời gian ra: {item.checkout}</p>
                    </div>
                    <div className="mb-1 py-1 ps-2">
                      <p style={{ fontSize:"large" }}>Tổng thời gian: {item.duration} giờ</p>
                    </div>
                </div>
            </div>
          )
        })}

        <Footer />

        <LoadingModal show={loading} />
      </section>
    </Page>
  );
};

export default HomePage;
