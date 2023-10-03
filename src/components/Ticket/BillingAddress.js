import React from "react";
import HeaderCart from "./HeaderCart";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

const BillingAddress = () => {
    const NavigationButtons = ({ onBackClick, onNextClick }) => {
        return (
            <div className="navigation-buttons button-direct">
                <Link to='/viewcart'>
                    <Button className="back-button" style={{ backgroundColor: '#F07300', fontSize: '30px', marginRight: '80px' }} onClick={onBackClick}>
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
                <Link to='/paymentmethod'>
                <Button className="next-button" style={{ backgroundColor: 'green', fontSize: '30px' }} onClick={onNextClick}>
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
            <HeaderCart />
            <div className="zoo-information">
                <h4>BILLING ADDRESS</h4>
            </div>
            <div className="ticket-table">
                <div className="ticket-table-information">Billing Address</div>
                <Form className="address-form">
                    <Row className="mb-3">
                        <Form.Group as={Col} lg="6">
                            <Form.Control className="forn-information" size="lg"
                                required
                                type="text"
                                placeholder="FIRST NAME"
                            />
                        </Form.Group>
                        <Form.Group as={Col} lg="6">
                            <Form.Control className="forn-information" size="lg"
                                type="text"
                                placeholder="LAST NAME"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Control className="forn-information" size="lg"
                                type="text"
                                placeholder="PHONE NUMBER"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your phonenumber!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} lg="6">
                            <Form.Control className="forn-information" size="lg"
                                required
                                type="text"
                                placeholder="EMAIL *"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your email!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="6">
                            <Form.Control className="forn-information" size="lg"
                                required
                                type="text"
                                placeholder="REPEAT EMAIL ADDRESS"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your email!
                            </Form.Control.Feedback>

                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} lg="6">
                            Notice: Please check your email address for typing errors. Otherwise your booking cannot be delivered.
                        </Form.Group>
                    </Row>
                    <NavigationButtons onBackClick={handleBackClick} onNextClick={handleNextClick} />
                </Form>

            </div>
        </>
    );
}
export default BillingAddress