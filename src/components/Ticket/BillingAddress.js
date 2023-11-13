import React, { useContext, useMemo } from "react";
import { Button, Col, Row, Form, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { TicketContext } from "./TicketContext/TicketContext";

const BillingAddress = () => {
    useMemo(() => {
        window.scrollTo({top: 0})
      },[])
    const NavigationButtons = ({ onBackClick, onNextClick }) => {
        return (
            <div className="navigation-buttons button-direct pb-5">
                <Link to='/viewcart'>
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
                    <Button type="submit" className="button-right" onclick={handleNextClick}>
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
        console.log(context);
    };
    const context = useContext(TicketContext);
    return (
        <>
                <Container className="pb-2">
                    <div className="zoo-information">
                        <h4>BILLING ADDRESS</h4>
                    </div>
                    <div className="ticket-table  mx-auto">
                        <div className="ticket-table-information">Billing Address</div>
                        <Form className="address-form">
                            <Row className="mb-3">
                                <Form.Group as={Col} lg="6">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control className="form-information" size="lg"
                                        required
                                        type="text"
                                        value={context.firstName}
                                        onChange={e => context.setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} lg="6">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control className="form-information" size="lg"
                                        type="text"
                                        value={context.lastName}
                                        onChange={e => context.setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} lg="6">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className="form-information needs-validation" size="lg"
                                        required
                                        type="email"
                                        value={context.email}
                                        onChange={e => context.setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your email!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control className="form-information" size="lg"
                                        type="text"
                                        value={context.phoneNumber}
                                        onChange={e => context.setPhoneNumber(e.target.value)}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your phonenumber!
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
                </Container>
        </>

    );
}
export default BillingAddress