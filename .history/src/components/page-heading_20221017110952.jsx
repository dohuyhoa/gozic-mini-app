import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "../css/page-heading.css";

const PageHeading = (props) => {
    return (
        <div className="container-fluid page-heading">
            <div className="p-3 d-flex align-items-center border-bottom border-1 border-gray">
                <Link to={-1}>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" className="me-4" />
                    {/* <Icon icon="zi-chevron-left" className="fs-2 me-4"></Icon> */}
                </Link>
                <h6 className="fw-bold">{props.title}</h6>
            </div>
        </div>
    )
}
export default PageHeading;