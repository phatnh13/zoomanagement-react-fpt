import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const PaymentMethod = () => {
    const NavigationButtons = ({ onBackClick, onNextClick }) => {
        return (
            <div className="navigation-buttons button-direct">
                <Link to='/billingaddress'>
                    <Button className="button-left" onClick={onBackClick}>
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        BACK
                    </Button>
                </Link>
                <Link to='/summary'>
                    <Button className="button-right" onClick={onNextClick}>
                        CONTINUE {' '}
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-right-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </Button>
                </Link>
            </div>
        );
    };
    const handleBackClick = () => {
        // Implement your logic for going back
        console.log('Back button clicked');
    };

    const handleNextClick = () => {
        // Implement your logic for going next
        console.log('Next button clicked');
    };

    return (
        <>
            <Container className="zoo-information">
                <h4 className="ms-5">METHOD OF PAYMENT</h4>
            </Container>
            <Container className="ticket-table  mx-auto">
                <div className="ticket-table-information">CHOOSE YOUR PAYMENT</div>
                <div class="form-check">
                    <Form>
                        <Row>
                            <Form.Group as={Col} md="1">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </Form.Group>
                            <Form.Group as={Col} md="1">
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
                <NavigationButtons onBackClick={handleBackClick} onNextClick={handleNextClick} />
            </Container>
        </>
    )

}
export default PaymentMethod