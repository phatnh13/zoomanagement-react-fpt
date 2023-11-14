import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const ShowOrderModal = ({ show, handleClose, orderId, success }) => {
    const navigate = useNavigate();

    const closeModal = () => {
        handleClose();

        // Check if the order was successful and navigate to the home page
        if (success) {
            navigate("/searchorder", { state: {orderId: orderId} });
        }
    };
    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Order Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success ? (
                    <>
                        <div className="d-flex">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="96" height="96" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_28_2" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_28_2" width="96" height="96" href="data:image/png;base64,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" />
                                </defs>
                            </svg>
                            <div style={{ color: '#3C5724' }}>
                                <p>You have bought successfully</p>
                                <p>Your OrderId: {orderId}</p>
                                <p>Please check your email</p>
                                <p></p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="d-flex">
                            <svg width="80" height="80" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 52H44V60H36V52ZM36 20H44V44H36V20ZM39.96 0C17.88 0 0 17.92 0 40C0 62.08 17.88 80 39.96 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 39.96 0ZM40 72C22.32 72 8 57.68 8 40C8 22.32 22.32 8 40 8C57.68 8 72 22.32 72 40C72 57.68 57.68 72 40 72Z" fill="#EB3223" />
                            </svg>
                            <div style={{ color: 'red' }}>
                                <p>Oops you failed to buy ticket!</p>
                                <p>Please check your information again</p>
                            </div>
                        </div>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowOrderModal;