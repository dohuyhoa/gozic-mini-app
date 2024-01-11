import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Input } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import "../css/page-heading.css";

import dataConfig from "../models/data-config";

import { Offcanvas } from "react-bootstrap";
import { useEffect } from "react";
import GLOBAL_VARIABLE from "../models/global-variable";

const PageHeading = (props) => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const NavigateTo = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0)

  const handleOpenSideNav = () => {
    setOpenSideNav(true);
  };
  const closeSideNav = (value) => {
    setOpenSideNav(value);
  };
  const handleOnClickCart = () => {
    NavigateTo('/cart')
  }

  const handleInputChange = (e) => {
      productModel.s = e.target.value;
  }

  const handleSearch = async () => {
    let s = productModel.s
    productModel.reset();
    productModel.s = s;

    if(location.pathname == '/category') {
        await productModel.callApi()
        productModel.updateState()
    } else {
        NavigateTo('/category')
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //console.log("off side-nav")
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    let list = localStorage.getItem("cacheProductList")
    if (list != null) {
      let count = 0;
      JSON.parse(list).forEach(element => {
        count += element.amount;
      });
      setTotalAmount(count);
    }
  }, [])

  useEffect(() => {
    let list = localStorage.getItem("cacheProductList")
    if (list != null) {
      let count = 0;
      JSON.parse(list).forEach(element => {
        count += element.amount;
      });
      setTotalAmount(count);
    }
  }, [GLOBAL_VARIABLE.totalAmount])

  return (
    <>
      <div className="page-heading d-flex justify-content-between px-3 pe-4 py-2 align-items-center">
        {/*<div className="heading-nav">
          <FontAwesomeIcon
            icon={faBars}
            className="fs-1"
            onClick={handleShow}
          />
        </div>*/}
        {/*<div className="heading-search" style={{'text-align': 'center'}}>
          <Input.Search onChange={handleInputChange} onSearch={handleSearch} className="flex-row-reverse bg-white" placeholder="Tìm kiếm sản phẩm" />
        </div>*/}
        GOZIC: TIMESHEET
        {/*<div className="heading-cart w-auto" onClick={handleOnClickCart}>
          <FontAwesomeIcon icon={faCartShopping} className="fs-1" />
          <span>{totalAmount}</span>
        </div>*/}

      </div>

      {/*<SideNavigtion show={show} handleClose={handleClose} />*/}


    </>
  );
};
export default PageHeading;