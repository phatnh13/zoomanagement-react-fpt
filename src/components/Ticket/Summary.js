
import React, { useContext } from "react";
import HeaderCart from "./HeaderCart";
import { Row, Table, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketContext } from "./TicketContext/TicketContext";
import TicketItemsTable from "./TicketItemsTable";

const Summary = () => {
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
                        {' '}BACK
                    </Button>
                </Link>
                <Link to='/paymentmethod'>
                    <Button className="next-button" style={{ backgroundColor: 'green', fontSize: '30px' }} onClick={onNextClick}>
                        BUY {' '}
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
    const context = useContext(TicketContext);
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
            <div className="vh-100">
                <HeaderCart />
                <Container className="zoo-information">
                    <h4 className="ms-5">SUMMARY</h4>
                    <div className="ticket-table mx-auto">
                        <Row>
                            <Col>
                                <div className="ticket-table-information">Billing Address</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Name: {context.firstName}{' '}{context.lastName}</p>
                                        <p>Phone Number: {context.phoneNumber}</p>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <div className="ticket-table-information">Shipping Method</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Shipping type:</p>
                                        <p></p>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <div className="ticket-table-information">Payment Method</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Payment Method:</p>
                                        <p></p>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <div className="ticket-table-information">ITEMS</div>
                        <TicketItemsTable />
                        <NavigationButtons onBackClick={handleBackClick} onNextClick={handleNextClick} />
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Summary
