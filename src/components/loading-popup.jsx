import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import "../css/loading-popup.css";

function LoadingModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   
            <Modal.Body>
                <Spinner animation="border" role="status" variant="light">
                </Spinner>
            </Modal.Body>
            
        </Modal>
    );
}

export default LoadingModal;