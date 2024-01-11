import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import circleCheck from "../static/photos/circle-check.png";

import { Icon } from 'zmp-ui';

import "../css/alert.css";

function BottomAlert(props) {
    const [icon, setIcon] = useState(props.type);

    switch (icon) {
        case "success":
            setIcon("zi-check-circle");
            break;

        case "error":
            setIcon("zi-close-circle");
            break;

        default:
            break;
    }

    return (
        <>
            <Offcanvas className={"alert " + props.type} show={props.show} onHide={props.onHide} placement="bottom">

                <Offcanvas.Body>
                    <Icon icon={icon} size={30}></Icon>
                    <p className="fw-bold text-uppercase">{props.msg}</p>
                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default BottomAlert;