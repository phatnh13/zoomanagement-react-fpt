
import React, { useContext, useState, useRef } from "react";
import { Row, Table, Col, Button, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketContext } from "./TicketContext/TicketContext";
import TicketItemsTable from "./TicketItemsTable";
import 'react-toastify/dist/ReactToastify.css';


function OffCanvasExample({ onClick, name, ...props }) {
    const [show, setShow] = useState(false);
    const showRef = useRef(show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const context = useContext(TicketContext);
    const submitted = context.submitted;
    const order = context.orderId

    return (
        <>
            <Button className="next-button" style={{ backgroundColor: 'green', fontSize: '30px' }} onClick={handleShow} onClickCapture={onClick}>
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
            <Offcanvas style={{ height: '40%', with: "100%" }} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container className="summary__inform">
                        {submitted ?
                            (
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
                                    <div style={{color: '#3C5724'}}>
                                    <p>You have bought successfully</p>
                                    <p>Your OrderId: {order.orderId}</p>
                                    <p>Please check your email</p>
                                    <p></p>
                                    </div>
                                </div>

                            ) : (
                                <div className="d-flex">
                                    <svg width="80" height="80" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36 52H44V60H36V52ZM36 20H44V44H36V20ZM39.96 0C17.88 0 0 17.92 0 40C0 62.08 17.88 80 39.96 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 39.96 0ZM40 72C22.32 72 8 57.68 8 40C8 22.32 22.32 8 40 8C57.68 8 72 22.32 72 40C72 57.68 57.68 72 40 72Z" fill="#EB3223" />
                                    </svg>
                                    <div style={{color: 'red'}}>
                                    <p>Oops you failed to buy ticket!</p>
                                    <p>Please check your information again</p>
                                    </div>
                                </div>
                            )}
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

const Summary = () => {

    const context = useContext(TicketContext);
    const decrease = context.decrease;
    const name = context.firstName + context.lastName;
    const email = context.email;
    const phoneNumber = context.phoneNumber;
    const orderId = context.orderId
    const orders = decrease.map(decrease => ({
        ...decrease.ticket.ticketId.toString(),
        quantity: decrease.quantity
    }));
    // Initialize an empty object
    const resultObject = {};

    // Loop through the dataArray and populate the resultObject
    orders.forEach(item => {
        const key = item['0'].toString(); // Get the key from the '0' property
        const value = item.quantity; // Get the value from the 'quantity' property
        resultObject[key] = value; // Assign the value to the key in the result object
    });
    console.log(resultObject)
    console.log(orderId, "orderId")
    let handleAddOrder = async () => {
        console.log("Add order");
        console.log("Customer name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNumber);
        console.log("Tickets: " + resultObject);
        await fetch("https://vietnamzoo.azurewebsites.net/api/Order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    tickets: resultObject
                }),
            })
            .then((res) => {
                if (res.ok) {
                    res.json()
                    .then((data) => {
                        // Use 'data' for further processing
                        context.setOrderId(data);
                        context.setSubmitted(true);
                    })
                } else {
                    context.setSubmitted(false);

                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }
    const NavigationButtons = () => {
        return (
            <div className="navigation-buttons button-direct">
                <Link to='/billingaddress'>
                    <Button className="back-button" style={{ backgroundColor: '#F07300', fontSize: '30px', marginRight: '80px' }}>
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
                {['top'].map((placement, idx) => (
                    <OffCanvasExample onClick={handleAddOrder} key={idx} placement={placement} name={placement} />
                ))}
            </div>
        );
    };
    return (
        <>
            <Container className="zoo-information">
                <h4>SUMMARY</h4>
                <div className="ticket-table mx-auto">
                    <Row>
                        <Col>
                            <div className="ticket-table-information">Billing Address</div>
                            <Table striped bordered hover size="sm">
                                <tbody style={{ textAlign: 'left' }}>

                                    <tr style={{ border: 'none', fontWeight: 'bold' }}>Name: {context.firstName}{' '}{context.lastName}</tr>
                                    <tr style={{ fontWeight: 'bold' }}>Phone Number: {context.phoneNumber}</tr>

                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <div className="ticket-table-information">Email</div>
                            <Table striped bordered hover size="sm">
                                <tbody style={{ textAlign: 'left' }}>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        Email: {context.email}
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <div className="ticket-table-information">ITEMS</div>
                    <TicketItemsTable />
                    <NavigationButtons onNextClick={handleAddOrder} />
                </div>

            </Container>
        </>
    )
}
export default Summary
